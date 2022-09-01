<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <div id="app" class="app">
    <HeaderOptionalView />
    <!-- <HeaderView /> -->
    <router-view />
    <FooterView />
    <HeaderBottomView />
  </div>
</template>

<script>
// import HeaderView from "./Components/HeaderItem.vue";
import FooterView from "./Components/FooterView.vue";
import HeaderBottomView from "./Components/HeaderBottom.vue";
import HeaderOptionalView from "./Components/HeaderOptional.vue";

export default {
  components: {
    // HeaderView,
    FooterView,
    HeaderBottomView,
    HeaderOptionalView,
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
.app {
  background: #d6efed;
  background-image: url("~@/assets/blob.svg");
}
</style>
