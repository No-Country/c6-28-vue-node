<template>
  <div id="container">
    <span
      v-for="n in start"
      :key="n"
      class="material-icons md-48 align-middle"
      style="color: #b7d3df"
    >
      grade
    </span>
    <span
      v-for="m in noStart"
      :key="m"
      class="material-icons-outlined md-48 align-middle"
      style="color: #b7d3df"
    >
      grade
    </span>
  </div>
</template>
<script>
export default {
  name: "RangeStarts",
  props: {
    start: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {};
  },
  computed: {
    noStart() {
      return 5 - this.start;
    },
  },
};
</script>
