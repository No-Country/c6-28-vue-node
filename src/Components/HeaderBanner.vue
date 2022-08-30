<template>
  <div class="p-2 mb-4 bg-light rounded-3 back-image text-center">
    <h2 class="title1 top">Ordena los productos</h2>
    <h2 class="title2 mt-n8">Para tu mascota.</h2>
    <p class="text-success lead">Delivery Gratis</p>
    <div
      class="
        form-group
        mb-3 d-none
        d-sm-none
        d-md-flex
        justify-content-center
        align-items-center"
    >
      <input
        type="text"
        class="input-busq"
        placeholder="Busca los mejores productos"
      />
      <div class="input-group-append">
        <button class="btn btn-success btn-lg py-7" type="button">
          Buscar
        </button>
      </div>
    </div>
    <br /><br /><br /><br /><br /><br /><br /><br /><br />
  </div>
</template>

<script>
export default {
  name: 'HeaderBanner',
  components: {},
  data() {},
};
</script>
<style scoped>
.back-image {
  background-image: url("~@/assets/animals-grey.jpg");
  /* Full height */
  height: 100%;
  width: 100%;
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.input-busq {
  outline: solid green 2px;
  border-radius: 10px;
  padding: 8px;
}

@media only screen and (max-width: 600px) {
  h2.title1 {
    font-size: 15px;
  }
  h2.title2 {
    font-size: 15px;
  }
  .top {
    margin-top: 5px;
  }
}
@media only screen and (min-width: 600px) {
  .top {
    margin-top: 20px;
  }
}
@media only screen and (min-width: 768px) {
  .top {
    margin-top: 35px;
  }
}
</style>
