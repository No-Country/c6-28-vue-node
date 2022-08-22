<script setup>
import {RouterLink} from 'vue-router';

</script>
<template>
  <header class="header">
    <!-- <div class="header__menu">
      <img src="../assets/icons/IconMenu.svg" alt="menu icon">
    </div>
    <div class="header__logo">
      <router-link to="/" class="header__logo--wrapper">
        <img src="../assets/Logo.svg" alt="logo icon svg">
      </router-link>
    </div>
    <div class="header__signin">
      <router-link to="/login" class="header__login">Sign in</router-link>
    </div> -->
    
    <ul>
      <li>
        <div>
          <button>Registrar</button>
          <button>Iniciar sesión</button>
        </div>
      </li>
      <li>Contactos</li>
    </ul>
  </header>
</template>
<style scoped>
  img{
    width: 100%;
    height: 100%;
    display: block;
  }

  .header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color:#3A6351;
    height: 4em;
  }
  /* .header__menu, .header__login, .header__logo{
    height: 100%;
  } */
  .header__logo, .header__menu{
    height: 100%;
  }

  .header__logo--wrapper{
    height: 20px;
  }

  .header__login,.header__login:link, .header__login:active{
    text-decoration: none;
    color: black;
  }
</style>
