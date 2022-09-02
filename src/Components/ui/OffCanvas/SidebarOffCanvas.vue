<script setup></script>
<template>
  <nav class="w-100 sidebar-products">
    <ul
      class="d-flex justify-content-center flex-column gap-5 m-0 sidebar-list-products"
    >
      <li class="sidebar-product-item">
        <div class="d-flex justify-content-between">
          <router-link to="/productos" class="text-dark">Productos</router-link>
          <div>
            <label for="sidebarCheckbox">
              <input
                id="sidebarCheckbox"
                type="checkbox"
                name="sidebarCheckbox"
                class="d-none"
              />
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                class="transition duration-200 ease-in-out transform text-heading rotate-0"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"
                ></path>
              </svg>
            </label>
          </div>
        </div>
        <div class="d-none sidebar-innerlist-wrapper">
          <ul class="sidebar-innerlist">
            <li class="header__inner-item">
              <router-link to="/productos" class="text-dark header__inner-link"
                >Ropa</router-link
              >
            </li>
            <li class="header__inner-item">
              <router-link to="/productos" class="text-dark header__inner-link"
                >Alimentos</router-link
              >
            </li>
            <li class="header__inner-item">
              <router-link to="/productos" class="text-dark header__inner-link"
                >Bebidas</router-link
              >
            </li>
            <li class="header__inner-item">
              <router-link to="/productos" class="text-dark header__inner-link"
                >Accesorios</router-link
              >
            </li>
            <li class="header__inner-item">
              <router-link to="/productos" class="text-dark header__inner-link"
                >Utensilios</router-link
              >
            </li>
          </ul>
        </div>
      </li>
      <li class="sidebar-product-item">
        <router-link to="/" class="text-dark">Marcas</router-link>
      </li>
      <li class="sidebar-product-item">
        <router-link to="/" class="text-dark">ofertas</router-link>
      </li>
      <li class="sidebar-product-item">
        <router-link to="/" class="text-dark">Servicios</router-link>
      </li>
      <li class="sidebar-product-item">
        <router-link to="/" class="text-dark">Acerca de</router-link>
      </li>
    </ul>
  </nav>
</template>
<style scoped></style>
