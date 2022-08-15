<template>
  <button class="button__base mb-3">
    <slot></slot>
  </button>
</template>
<style>
  .button__base{
    background-color: var(--bg-button-register);
    padding: 0.4em;
    width: 100%;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 1.5rem;
  }
</style>