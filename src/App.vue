<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <div id="app" style="background: #e8e1d9;">
    <HeaderView />
    <router-view />
    <FooterView />
  </div>
</template>

<script>
import HeaderView from './Components/HeaderItem.vue';
import FooterView from './Components/FooterView.vue';

export default {
  components: {
    HeaderView,
    FooterView,
  },
};
</script>
<style>
#app {
  /* font-family:'Poppins', sans-serif; */
  box-sizing: border-box;
  margin: 0%;
  padding: 0%;
}
</style>
