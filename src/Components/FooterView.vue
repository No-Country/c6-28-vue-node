<template>
  <footer class="back">
    <div>
      <img
        src="https://res.cloudinary.com/dytpump6i/image/upload/v1660593048/Logo_ugs7jt.svg"
        alt="logo"
      />
    </div>

    <div class="container">
      <div class="row text-center">
        <div class="col-4 col-md-4 col-lg-4 col-xl-4">
          <p>Comunidad</p>
          <fa class="redes twiter" :icon="['fab', 'twitter']" />
          <fa class="redes instagram" :icon="['fab', 'instagram']" />
          <fa class="redes facebook" :icon="['fab', 'facebook']" />
        </div>

        <div class="col-4 col-md-4 col-lg-4 col-xl-4"><p>Empresa</p></div>

        <div class="col-4 col-md-4 col-lg-4 col-xl-4"><p>Beneficios</p></div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy;Mundo mascota, inc.2019</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterView',
};
</script>

<style scoped>
footer {
  /*background-color: #a0937d;*/
  background-color: #898aa6;
}
.back {
  background: 898aa6;
  /* width: 40%;*/
  padding: 20px;
  position: relative;
}
.back::after {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 0;
  height: 20px;
  width: 100%;
  background: url(~@/assets/footer.svg) bottom center;
  transform: rotate(180deg);
  background-size: 150%;
}
img {
  display: flex;
  align-items: center;
  padding: 0.6em;
  color: white;
  position: relative;
  width: 100%;
  height: 84px;
  justify-content: center;
}

.footer-bottom p {
  text-align: center;
  font-size: 14px;
  word-spacing: 2px;
  text-transform: capitalize;
  text-transform: uppercase;
  opacity: 0.4;
  font-weight: 200;
  margin: 0;
}

.redes :hover {
  color: #d6efed;
}
.twiter {
  margin: 5px;
}
.instagram {
  margin: 5px;
}
.facebook {
  margin: 5px;
  margin-left: 4px;
}

</style>
