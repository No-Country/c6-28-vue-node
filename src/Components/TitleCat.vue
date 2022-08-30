<template>
  <div class="text-center mt-5">
    <h1>
      <img src="~@/assets/pata.png" alt="Pata" width="48" height="48" />
      {{ title }}
      <img src="~@/assets/hueso.png" alt="Hueso" width="48" height="48" />
    </h1>
  </div>
</template>
<script>
export default {
  name: 'TitleCat',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  data() {
    return {};
  },
};
</script>
