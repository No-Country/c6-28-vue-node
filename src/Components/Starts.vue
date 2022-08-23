<template>
  <div id="container">
    <span
      v-for="n in start"
      :key="n"
      class="material-icons md-48 align-middle"
      style="color: #F4a442"
    >
      grade
    </span>
    <span
      v-for="n in noStart"
      :key="n"
      class="material-icons-outlined md-48 align-middle"
      style="color: #F4a442"
    >
      grade
    </span>
  </div>
</template>
<script>
export default {
  name: 'RangeStarts',
  data() {
    return {
      n: 1,
    };
  },
  props: {
    start: Number,
  },
  computed: {
    noStart() {
      return 5 - this.start;
    },
  },
};
</script>
