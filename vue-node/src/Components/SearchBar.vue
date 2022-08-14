<template>
  <div>
    <div class="barrabusqueda">
      <form action="/search?input=value" method="GET">
        <input type="text" class="busq" name="value" placeholder="Buscar" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
};
</script>

<style scoped>
input {
  border-radius: 10px;
}
</style>