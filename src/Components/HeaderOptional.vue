<script setup>
import { RouterLink } from "vue-router";
import Logo from "../assets/Logo.svg";
import IconBurger from "../assets/icons/IconBurger.svg";
import OffCanvas from "./ui/OffCanvas/OffCanvas.vue";
import SidebarOffCanvas from "./ui/OffCanvas/SidebarOffCanvas.vue";
import CartOffCanvas from "./ui/OffCanvas/CartOffCanvas.vue";
import { ref, onMounted, onUnmounted } from "vue";
import * as bootstrap from "bootstrap";

const header = ref();
const child = ref();
const sidebar = ref(null);
const cart = ref(null);
/**
 * this a callback function to add y remove the header_scrolling class
 */
function headerScroll() {
  if (header.value.offsetTop !== 0) {
    if (!header.value.classList.contains("header__scrolling")) {
      header.value.classList.add("header__scrolling");
    }
  } else {
    header.value.classList.remove("header__scrolling");
  }
}

onMounted(() => {
  window.addEventListener("scroll", headerScroll);
  sidebar.value = bootstrap.Offcanvas.getOrCreateInstance(child.value.sidebar);
  cart.value = bootstrap.Offcanvas.getOrCreateInstance(child.value.sidebar);
});

// eslint-disable-next-line require-jsdoc
function handleShowOffCanvas() {
  sidebar.value.show();
}
// eslint-disable-next-line require-jsdoc
function handleShowOffCanvasCart() {
  cart.value.show();
}

onUnmounted(() => {
  window.addEventListener("scroll", headerScroll);
});
</script>
<template>
  <header
    ref="header"
    class="d-flex px-3 py-2 sticky-top align-items-center z-index header"
  >
    <div class="header-logo__content d-flex align-items-center">
      <img
        :src="IconBurger"
        class="d-none d-md-block d-lg-none"
        alt="burger icon"
        @click="handleShowOffCanvas()"
      />
      <router-link to="/" class="header-link__logo d-block">
        <img :src="Logo" class="header__logo d-block" alt="page logo" />
      </router-link>
    </div>
    <nav class="d-none align-items-center d-lg-flex w-75">
      <ul class="d-flex align-items-center gap-5 m-0">
        <div class="header__link-wrapper position-relative">
          <div class="position-absolute header__inner-list-wrapper">
            <ul class="header__inner-list">
              <li class="header__inner-item">
                <router-link
                  to="/productos"
                  class="text-dark header__inner-link"
                  >Ropa</router-link
                >
              </li>
              <li class="header__inner-item">
                <router-link
                  to="/productos"
                  class="text-dark header__inner-link"
                  >Alimentos</router-link
                >
              </li>
              <li class="header__inner-item">
                <router-link
                  to="/productos"
                  class="text-dark header__inner-link"
                  >Bebidas</router-link
                >
              </li>
              <li class="header__inner-item">
                <router-link
                  to="/productos"
                  class="text-dark header__inner-link"
                  >Accesorios</router-link
                >
              </li>
              <li class="header__inner-item">
                <router-link
                  to="/productos"
                  class="text-dark header__inner-link"
                  >Utensilios</router-link
                >
              </li>
            </ul>
          </div>
          <router-link to="/productos" class="text-dark header_link"
            >Productos</router-link
          >
        </div>
        <div class="header__link-wrapper">
          <router-link to="/" class="text-dark">Marcas</router-link>
        </div>
        <div class="header__link-wrapper">
          <router-link to="/" class="text-dark">ofertas</router-link>
        </div>
        <div class="header__link-wrapper">
          <router-link to="/" class="text-dark">Servicios</router-link>
        </div>
        <div class="header__link-wrapper">
          <router-link to="/about" class="text-dark">Acerca de</router-link>
        </div>
      </ul>
    </nav>
    <div
      class="d-flex gap-4 header__actions align-items-center justify-content-end w-lg-50"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        class="bi bi-search header__searchIcon d-none d-md-flex"
        viewBox="0 0 16 16"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <path
          d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        height="20"
        width="20"
        class="bi bi-cart4 header__cart d-none d-md-flex"
        viewBox="0 0 16 16"
        @click="handleShowOffCanvasCart()"
      >
        <path
          d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
        />
      </svg>
      <router-link to="/login" class="text-dark">Login</router-link>
      <router-link to="/register" class="text-dark">Registro</router-link>
    </div>
    <Teleport to="body">
      <OffCanvas ref="child">
        <SidebarOffCanvas></SidebarOffCanvas>
      </OffCanvas>
    </Teleport>
    <Teleport to="body">
      <OffCanvas ref="child" position="right">
        <CartOffCanvas></CartOffCanvas>
      </OffCanvas>
    </Teleport>
  </header>
  <div
    id="exampleModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header"></div>
        <div class="modal-body d-flex align-items-center gap-2">
          <input
            type="text"
            class="form-control header__search border border-0"
            placeholder="Ingrese su búsqueda"
          />
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-footer"></div>
      </div>
    </div>
  </div>
</template>
<style>
.header {
  background-color: #c9bbcf;
  background-image: url("~@/assets/cos.svg");
  height: 4em;
  /* min-height: 100px; */
}

.header-logo__content {
  height: 100%;
}

.header-link__logo {
  height: 100%;
}

.header__logo {
  height: 100%;
}

.header__search:focus {
  box-shadow: none;
  border-color: transparent;
}

.header__actions {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 600;
  color: black;
  width: 100%;
}

.header__searchIcon {
  cursor: pointer;
  height: 100%;
  width: 4%;
  font-weight: 700;
  font-size: 2rem;
}

.header__scrolling {
  --tw-shadow: 0 2px 3px rgba(0, 0, 0, 0.08);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.header__inner-list-wrapper {
  top: 22px;
  display: none;
  padding: 1.4em 0;
  background-color: #c9bbcf;
  transition: all 800ms;
}

.header__inner-list {
  list-style: none;
  padding: 0;
}

.header__link-wrapper:hover > .header__inner-list-wrapper {
  display: block;
  transition: all 800ms;
}

.header__inner-item {
  padding: 0.5em 6em 0.5em 1.4em;
  display: flex;
  align-items: center;
}

.header__inner-item:hover {
  background-color: rgba(0, 0, 0, 0.08);
  cursor: pointer;
}

@media (min-width: 992px) {
  .w-lg-50 {
    width: 25%;
  }
}
</style>
