<template>
  <header class="header">
    <div v-if="mobileView">
      <div class="dropdown">
        <button
          id="dropdownMenuButton1"
          class="btn"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <div id="navMenu" @click="toggleMenu()">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <ul
          class="dropdown-menu"
          style="background-color: grey"
          aria-labelledby="dropdownMenuButton1"
        >
          <li>
            <router-link
              style="margin-left: 10px"
              to="/productos"
              class="header__login"
              >Productos</router-link
            >
          </li>
          <li>
            <router-link style="margin-left: 10px" to="/" class="header__login"
              >Marcas</router-link
            >
          </li>
          <li>
            <router-link style="margin-left: 10px" to="/" class="header__login"
              >Ofertas</router-link
            >
          </li>
          <li>
            <router-link style="margin-left: 10px" to="/" class="header__login"
              >Servicios</router-link
            >
          </li>
          <li>
            <router-link style="margin-left: 10px" to="/" class="header__login"
              >Sucursales</router-link
            >
          </li>
        </ul>
      </div>
    </div>
    <nav v-if="!mobileView" class="nav1">
      <ol>
        <router-link to="/productos" class="header__login"
          >Productos</router-link
        >
      </ol>
      <ol>
        <router-link to="/" class="header__login">Marcas</router-link>
      </ol>
      <ol>
        <router-link to="/" class="header__login">Ofertas</router-link>
      </ol>
    </nav>
    <nav v-if="!mobileView" class="nav2">
      <ol>
        <router-link to="/" class="header__login">Servicios</router-link>
      </ol>
      <ol>
        <router-link to="/" class="header__login">Sucursales</router-link>
      </ol>
      <ol>
        <router-link to="/" class="header__login">Perfil</router-link>
      </ol>
    </nav>
    <div class="headerLogo">
      <router-link to="/">
        <img class="img" src="../assets/Logo.svg" alt="logo icon svg" />
      </router-link>
    </div>
    <div v-if="mobileView">
      <div>
        <button
          id="dropdownMenuButton1"
          class="btn"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="bi bi-person-fill fa-2x"></i>
        </button>
        <ul
          style="background-color: grey"
          class="dropdown-menu"
          aria-labelledby="dropdownMenuButton1"
        >
          <router-link to="/login" class="header__login">
            <li style="margin-left: 10px">Iniciar Sesión</li></router-link
          >
          <li style="margin-left: 10px">o</li>
          <li style="margin-left: 10px" class="logOut" @click="logOut()">
            Cerrar Sesión
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderItem",
  data() {
    return {
      mobileView: false,
    };
  },
  created() {
    this.handleView();
  },
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 763;
    },
    toggleMenu() {
      navMenu.classList.toggle("active");
    },
    logOut() {
      this.$store.dispatch("logout");
      this.$router.push("login");
    },
  },
};
</script>

<style scoped>
.img {
  display: flex;
  align-items: center;
  margin: 0;
  padding: 5%;
  position: absolute;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1%;
  height: auto;
  /* background-color: #3a6351; */
  background-color: #c9bbcf;
  background-image: url("~@/assets/cos.svg");
  /* max-height: 50px; */
}

.headerLogo {
  display: flex;
  justify-content: center;
}
.dropdown {
  margin: 2%;
}
i {
  margin: 1%;
}
.logOut {
  cursor: pointer;
}

#navMenu > span {
  display: block;
  width: 28px;
  height: 2px;
  border-radius: 9999px;
  background-color: black;
}

#navMenu > span:not(:last-child) {
  margin-bottom: 7px;
}

#navMenu,
#navMenu > span {
  transition: all 0.4s ease-in-out;
}

/* #navMenu.active {
  transition-delay: 0.8s;
  transform: rotate(90deg);
} */
#navMenu.active > span:nth-child(2) {
  width: 0;
}
#navMenu.active > span:nth-child(1) #navMenu.active > span:nth-child(3) {
  transition-delay: 0.4s;
}
/* #navMenu.active > span:nth-child(1) {
  transform: translateY(9px);
} */
#navMenu.active > span:nth-child(1) {
  transform: translateY(9px) rotate(180deg);
}

.header__login,
.header__login:link,
.header__login:active {
  text-decoration: none;
  color: black;
}

@media (max-width: 1000px) {
  .header {
    padding: 2%;
  }
}

@media (min-width: 763px) {
  .nav1 {
    display: flex;
    margin: 2% 0 0 0%;
  }
  .nav2 {
    display: flex;
    margin-top: 2%;
    margin-left: auto;
    margin-right: 3%;
  }
}
</style>
