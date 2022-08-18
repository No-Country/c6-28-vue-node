<script setup>
// import { RouterLink } from "vue-router";
</script>
<template>
  <!-- <header class="header">
    <div class="header__menu">
      <img src="../assets/icons/IconMenu.svg" alt="menu icon">
    </div>
    <div class="header__logo">
      <router-link to="/home">
        <img src="../assets/Logo.svg" alt="logo icon svg">
      </router-link>
    </div>
    <div class="header__signin">
      <router-link to="/login" class="header__login">Sign in</router-link>
    </div>
  </header> -->
  <header class="header">
    <div class="secondary-wrapper-nav">
      <nav class="secondary-nav">
        <ul class="secondary-nav__list">
          <li class="secondary-nav__item">
            <a href="#" class="secondary-nav__link">Cotizaciones</a>
          </li>
          <li class="secondary-nav__item">
            <a href="#" class="secondary-nav__link">Contacto</a>
          </li>
          <li class="secondary-nav__item">
            <a href="#" class="secondary-nav__link">Login</a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="primary-wrapper-nav">
      <a href="#" class="primary-wrapper-nav__wrapper-logo"
        >Title
        <!-- <img src="" alt="" class="primary-wrapper-nav__logo" /> -->
      </a>
      <input
        id="primary-wrapper-nav__checkbox"
        type="checkbox"
        class="primary-wrapper-nav__checkbox"
      />
      <label
        for="primary-wrapper-nav__checkbox"
        class="primary-wrapper-nav__label"
      >
        <svg
          class="primary-wrapper-nav__label--menu-icon"
          viewBox="0 0 448 512"
          title="bars"
        >
          <path
            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
          />
        </svg>
        <svg
          class="primary-wrapper-nav__label--close-icon"
          viewBox="0 0 384 512"
          width="100"
          title="times"
        >
          <path
            d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
          />
        </svg>
      </label>
      <nav class="primary-nav">
        <ul class="primary-nav__list">
          <li class="primary-nav__item primary-nav__item--active">
            <a href="#" class="primary-nav__link">Inicio</a>
          </li>
          <li class="primary-nav__item">
            <a href="#" class="primary-nav__link">Quién soy</a>
          </li>
          <li class="primary-nav__item">
            <a href="#" class="primary-nav__link">Cómo puedo ayudarte</a>
          </li>
          <li class="primary-nav__item">
            <a href="#" class="primary-nav__link">Eventos</a>
          </li>
          <li class="primary-nav__item">
            <a href="#" class="primary-nav__link">Blog</a>
          </li>
          <li class="primary-nav__item">
            <a href="#" class="primary-nav__link">Goodies</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<style>
/* img {
  width: 100%;
  height: 100%;
  display: block;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #3a6351;
}

.header__login,
.header__login:link,
.header__login:active {
  text-decoration: none;
  color: black;
} */

.header {
  padding: 0 var(--container);
  position: fixed;
  right: 0;
  left: 0;
  z-index: 20;
  margin-top: calc(var(--margin-negative-top) * -1);
}

.secondary-wrapper-nav {
}

.secondary-nav__list {
  display: flex;
  justify-content: flex-end;
  gap: 2em;
}

.primary-wrapper-nav {
  position: relative;
}

.primary-wrapper-nav__wrapper-logo {
  position: absolute;
  top: 0;
  left: 0;
}

.primary-wrapper-nav__label {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  z-index: 10;
}

.primary-wrapper-nav__label--menu-icon,
.primary-wrapper-nav__label--close-icon {
  width: 1.2em;
  height: 1.2em;
  padding: 0.3em;
  border-radius: 4px;
  outline: 1px solid black;
}

/* .primary-wrapper-nav__label--menu-icon:focus{
  outline: 1px dotted;
} */

.primary-wrapper-nav__label--menu-icon:hover,
.primary-wrapper-nav__label--close-icon:hover {
  cursor: pointer;
}

.primary-wrapper-nav__label--close-icon,
.primary-wrapper-nav__checkbox {
  display: none;
}

#primary-wrapper-nav__checkbox:checked
  ~ .primary-wrapper-nav__label
  .primary-wrapper-nav__label--close-icon {
  display: block;
}

#primary-wrapper-nav__checkbox:checked
  ~ .primary-wrapper-nav__label
  .primary-wrapper-nav__label--menu-icon {
  display: none;
}

#primary-wrapper-nav__checkbox:checked ~ .primary-nav {
  /* max-height: 600px; */
  height: auto;
  transition: max-height 200ms cubic-bezier(1, 0, 1, 0);
  overflow: hidden;
}

.primary-nav {
  /* max-height: 0; */
  height: 0;
  overflow: hidden;
  transition: max-height 200ms cubic-bezier(0, 1, 0, 1);
}

.primary-nav__list {
  margin-top: 2.5em;
  padding: 1.8em;
  border-radius: 5px;
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  /* color: black; */
  /* backdrop-filter: saturate(10%) blur(15px); */
}

.primary-nav__link {
  display: block;
  /* color: black; */
  /* text-align: center; */
}

@media screen and (min-width: 700px) {
  :root {
    --container: 4rem;
  }

  .header {
    background-color: transparent;
  }
}

@media screen and (min-width: 1200px) {
  :root {
    --container: 8rem;
    --margin-negative-top: -14rem;
  }
}
</style>
