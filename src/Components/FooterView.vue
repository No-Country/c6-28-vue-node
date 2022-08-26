<template>
  <footer>
    <div>
      <img
        src="https://res.cloudinary.com/dytpump6i/image/upload/v1660593048/Logo_ugs7jt.svg"
        alt="logo"
      />
    </div>

    <ul class="footer01">
      <li>Comunidad</li>
      <li>Empresa</li>
      <li>Beneficios</li>
    </ul>

    <div class="redes">
      <fa class="twiter" :icon="['fab', 'twitter']" />
      <fa class="instagram" :icon="['fab', 'instagram']" />
      <fa class="facebook" :icon="['fab', 'facebook']" />
    </div>

    <font-awesome-icon icon="fa-brands fa-instagram" />

    <div class="footer-bottom">
      <p class="m-0">&copy;Mundo mascota, inc.2019</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterView",
};
</script>

<style scoped>
footer {
  background-color: #a0937d;
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

ul {
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  font-family: monserrat;
  font-style: normal;
  font-size: 15px;
  float: left;
  padding: 1.5em;
  /*padding-bottom: 1.5em;*/
}

.footer-bottom p {
  text-align: center;
  font-size: 14px;
  word-spacing: 2px;
  text-transform: capitalize;
  text-transform: uppercase;
  opacity: 0.4;
  font-weight: 200;
}

.redes {
  margin-left: 50px;
}
.redes :hover {
  color: #3a6351;
}
.twiter {
  margin-left: 4px;
}
.instagram {
  margin-left: 4px;
}
.facebook {
  margin-left: 4px;
}

@media screen and (min-width: 760px) {
  li {
    /* padding-inline: 6em;*/
  }
  /* .redes {
    margin-left: 240px;
  } */
}
@media screen and (min-width: 1100px) {
  li {
    /*padding-inline: 10em;*/
  }

  .redes {
    margin-left: 200px;
  }
}

@media screen and (min-width: 1350px) {
  li {
    /*padding-inline: 13em;  */
  }

  .redes {
    margin-left: 230px;
  }
}
</style>
