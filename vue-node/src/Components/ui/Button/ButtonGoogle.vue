<script setup>
</script>
<template>
  <button class="button__google">
    <div class="button__icon">
      <slot name="icon"></slot>
    </div>
    <div class="button__content">
      <slot name="content"></slot>
    </div>
  </button>
</template>
<style>

.button__google{
  background-color: var(--bg-button-google);
  display: flex;
  align-items: center;
  padding: 2em;
  color: white;
}

.button__content{
  width: 100%;
  height: 100%;
}

.button__icon{
  position: absolute;
  left: 10px;
  top: 25%;
  bottom: 25%;
  height: 50%;
}
</style>