<!-- eslint-disable vue/no-parsing-error -->
<script setup>
import Logo from "../../../assets/Logo.svg";
import { useStore } from "vuex";
import { ref } from "vue";
// import * as bootstrap from "bootstrap";

const store = useStore();
const sidebar = ref();

const props = defineProps({
  position: {
    type: String,
    required: false,
    default: "left",
  },
  id: {
    type: String,
    required: true,
    default: "offCanvas",
  },
});

defineExpose({
  sidebar,
});

/**
 * @return {*} a string
 * @param {*} value it's a string
 */
function validation(value) {
  let base = "offcanvas-";
  if (value == "left") {
    base += "start";
  }
  if (value == "right") {
    base += "end";
  }
  return base;
}

// onMounted(() => {
//   sidebar.value = bootstrap.Offcanvas.getOrCreateInstance(sidebar.value.sidebar);
// })
</script>
<template>
  <div
    :id="id"
    ref="sidebar"
    class="offcanvas w-100"
    :class="[validation(props.position)]"
    tabindex="-1"
    aria-labelledby="offCanvasLabel"
  >
    <div class="offcanvas-header">
      <img id="offCanvasLabel" class="offcanvas-title" :src="Logo" />
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
        @click="store.commit('setOffCanvasShow', false)"
      ></button>
    </div>
    <div class="offcanvas-body">
      <slot></slot>
    </div>
  </div>
</template>
<style scoped>
.offcanvas-header {
  height: 4em;
  padding: 0.5em;
  background-color: #898aa6;
}
.offcanvas-body {
  background-color: #c9bbcf;
}

.offcanvas-title {
  display: block;
  height: 100%;
}

@media (min-width: 600px) {
  .offcanvas {
    width: 460px !important;
  }
}
</style>
