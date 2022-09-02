<script setup>
import { RouterLink, useRouter } from "vue-router";
import Logo from "../assets/logo.png";
import IconBurger from "../assets/icons/IconBurger.svg";
import OffCanvas from "./ui/OffCanvas/OffCanvas.vue";
import SidebarOffCanvas from "./ui/OffCanvas/SidebarOffCanvas.vue";
import CartOffCanvas from "./ui/OffCanvas/CartOffCanvas.vue";
import { ref, onMounted, onUnmounted } from "vue";
import * as bootstrap from "bootstrap";

const header = ref();
const child = ref();
const childOther = ref();
const sidebar = ref(null);
const cart = ref(null);
const search = ref();
const searchModal = ref();
const router = useRouter();
const searchModalInstance = ref();
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
  cart.value = bootstrap.Offcanvas.getOrCreateInstance(
    childOther.value.sidebar
  );
  // searchModalInstance.value = bootstrap.Modal.getOrCreateInstance(searchModal.value)
  searchModalInstance.value = new bootstrap.Modal(searchModal.value);
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

/**
 * search function to products
 */
function sendSearch() {
  // searchModalInstance.value.hide();
  router.push({ name: "productos", query: { s: search.value.value } });
}
</script>
<script>
export default {
  computed: {
    cartItems() {
      return this.$store.getters.cartCount;
    },
    userLogged() {
      return this.$store.state.user.id ? true : false;
    },
  },
};
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
          <router-link to="/" class="text-dark">Ofertas</router-link>
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
      class="
        d-flex
        gap-4
        header__actions
        align-items-center
        justify-content-end
        w-lg-50
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        class="bi bi-search header__searchIcon d-none d-md-flex"
        viewBox="0 0 16 16"
        data-bs-toggle="modal"
        data-bs-target="#searchModal"
      >
        <path
          d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
        />
      </svg>
      <div v-if="cartItems === 0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          style="fill: rgba(0, 0, 0, 1); transform: ; msfilter: "
          @click="handleShowOffCanvasCart()"
        >
          <path
            d="M21 4H2v2h2.3l3.28 9a3 3 0 0 0 2.82 2H19v-2h-8.6a1 1 0 0 1-.94-.66L9 13h9.28a2 2 0 0 0 1.92-1.45L22 5.27A1 1 0 0 0 21.27 4 .84.84 0 0 0 21 4zm-2.75 7h-10L6.43 6h13.24z"
          ></path>
          <circle cx="10.5" cy="19.5" r="1.5"></circle>
          <circle cx="16.5" cy="19.5" r="1.5"></circle>
        </svg>
      </div>
      <div v-if="cartItems !== 0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          style="fill: rgb(0, 200, 0); transform: ; msfilter: "
          @click="handleShowOffCanvasCart()"
        >
          <path
            d="M21 4H2v2h2.3l3.521 9.683A2.004 2.004 0 0 0 9.7 17H18v-2H9.7l-.728-2H18c.4 0 .762-.238.919-.606l3-7A.998.998 0 0 0 21 4z"
          ></path>
          <circle cx="10.5" cy="19.5" r="1.5"></circle>
          <circle cx="16.5" cy="19.5" r="1.5"></circle>
        </svg>
      </div>

      <router-link v-if="userLogged === false" to="/login" class="text-dark"
        >Login</router-link
      >
      <router-link v-if="userLogged === false" to="/register" class="text-dark"
        >Registro</router-link
      >
      <router-link v-if="userLogged === true" to="/profile" class="text-dark"
        >Perfil</router-link
      >
    </div>
    <Teleport to="body">
      <OffCanvas id="sidebarOffCanvas" ref="child">
        <SidebarOffCanvas></SidebarOffCanvas>
      </OffCanvas>
    </Teleport>
    <Teleport to="body">
      <OffCanvas id="cartOffCanvas" ref="childOther" position="right">
        <CartOffCanvas></CartOffCanvas>
      </OffCanvas>
    </Teleport>
  </header>
  <Teleport to="body">
    <div
      id="searchModal"
      ref="searchModal"
      class="modal fade"
      tabindex="-1"
      aria-labelledby="searchModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <!-- <div class="modal-header"></div> -->
          <div class="modal-body d-flex align-items-center gap-2">
            <input
              ref="search"
              type="text"
              class="form-control header__search border border-0"
              placeholder="Ingrese su búsqueda"
              @keyup.enter="sendSearch()"
            />
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <!-- <div class="modal-footer"></div> -->
        </div>
      </div>
    </div>
  </Teleport>
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
