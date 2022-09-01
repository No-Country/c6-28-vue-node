<template>
  <div class="back">
    <div class="row g-3 d-flex align-items-center">
      <div class="col-md-12 col-lg-12 col-xl-12 text-center">
        <h2 class="title1 text-dark">Ordena los mejores</h2>
        <h2 class="title2 text-dark mt-n8">productos para tu mascota</h2>
      </div>
    </div>
    <div class="row g-3 d-flex align-items-center">
      <div class="col-md-12 col-lg-12 col-xl-12 text-center">
        <img class="img-fluid" src="../assets/animals.png" alt="Perro y Gato" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderBanner",
  components: {},
  data() {},
};
</script>
<style scoped>
.back {
  background: #c9bbcf;
  background-image: url("~@/assets/cos.svg");
  /* width: 40%;*/
  padding: 20px;
  position: relative;
}
.back::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 0;
  height: 20px;
  width: 100%;
  background: url(~@/assets/rip.svg) bottom center;
  background-size: 150%;
}
.btn {
  background-color: #898aa6;
  color: white;
  font-weight: bold;
  padding: 5px;
  font-size: 18px;
}

.btn:hover {
  background-color: transparent;
  border: 3px solid #898aa6;
  color: #898aa6;
}
@media only screen and (max-width: 600px) {
  h2.title1 {
    font-size: 15px;
  }
  h2.title2 {
    font-size: 15px;
  }
}
</style>
