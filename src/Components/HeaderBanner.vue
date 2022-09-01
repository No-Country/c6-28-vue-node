<template>
  <div class="p-2 mb-4 bg-light rounded-3 back-image text-center">
    <h2 class="title1 top">Ordena los productos</h2>
    <h2 class="title2 mt-n8">Para tu mascota.</h2>
    <p class="text-success lead">Delivery Gratis</p>
    <div
      class="form-group mb-3 d-none d-sm-none d-md-flex justify-content-center align-items-center"
    >
      <input
        type="text"
        class="input-busq"
        placeholder="Busca los mejores productos"
      />
      <div class="input-group-append">
        <button class="butBuscar" type="button">Buscar</button>
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
  outline: solid #898aa6 2px;
  border-radius: 10px;
  padding: 8px;
}

.butBuscar {
  min-width: 130px;
  height: 40px;
  color: #fff;
  padding: 5px 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  outline: none;
  border-radius: 5px;
  z-index: 0;
  background: #d6efed;
  overflow: hidden;
  border: 2px solid #898aa6;
  color: #495057;
}
.butBuscar:hover {
  color: #fff;
}
.butBuscar:hover:after {
  height: 100%;
}
.butBuscar:after {
  content: "";
  position: absolute;
  z-index: -1;
  transition: all 0.3s ease;
  left: 0;
  top: 0;
  height: 0;
  width: 100%;
  background: #898aa6;
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
