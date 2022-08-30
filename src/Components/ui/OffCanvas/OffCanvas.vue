<!-- eslint-disable vue/no-parsing-error -->
<script setup>
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
    id="offCanvas"
    ref="sidebar"
    class="offcanvas w-100"
    :class="[validation(props.position)]"
    tabindex="-1"
    aria-labelledby="offCanvasLabel"
  >
    <div class="offcanvas-header">
      <h5 id="offCanvasLabel" class="offcanvas-title">Offcanvas</h5>
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
