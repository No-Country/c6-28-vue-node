<template>
  <div class="container">
    <LoginView/>
    <router-view />
  </div>
</template>


<script>
import LoginView from './views/LoginView.vue'

export default {
  name: "App",
  components: {LoginView},


};
</script>

<style>

</style>
