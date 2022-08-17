<script setup>
import {RouterLink} from 'vue-router';

</script>
<template>
  <header class="header">
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
    /* max-height: 50px; */
  }
  /* .header__menu, .header__login, .header__logo{
    height: 100%;
  } */

  .header__login,.header__login:link, .header__login:active{
    text-decoration: none;
    color: black;
  }
</style>