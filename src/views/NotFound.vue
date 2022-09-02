<template>
  <div>
    <div class="back">
      <div class="row g-3 d-flex align-items-center text-center">
        <div class="col-md-6 col-lg-6 col-xl-6">
          <h2 class="title1 text-dark">¡Error 404!</h2>
          <h2 class="title2 text-dark mt-n8">NOT FOUND</h2>
          <p class="text-dark">
            ¡Ups!, parece que un pequeño rompió esta página
            <br />
            <span class="text-muted"
              >Por favor regresa y sigue comprando nuestros productos</span
            >
          </p>
          <a type="button" class="btn rounded" href="/productos"> Productos </a>
        </div>
        <div class="col-md-6 col-lg-6 col-xl-6">
          <img class="img-fluid" src="../assets/404.png" alt="Perro y Gato" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped>
.max {
  max-width: 1200px;
  margin: auto;
}
</style>

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
</style>
