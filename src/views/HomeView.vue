<template>
  <br />
  <CarouselTrending class="CarrouselTrending" />
  <br />
  <div>
    <div class="categories">
      <h5>Ofertas</h5>
      <div class="categoryImages">
        <div>
          <img src="https://picsum.photos/id/132/200/200" alt="..." />
        </div>
        <div>
          <img src="https://picsum.photos/id/137/200/200" alt="..." />
        </div>
        <div>
          <img src="https://picsum.photos/id/135/200/200" alt="..." />
        </div>
      </div>
      <h5>Mascotas</h5>

      <div class="categoryImages">
        <div>
          <img src="https://picsum.photos/id/232/200/200" alt="..." />
        </div>
        <div>
          <img src="https://picsum.photos/id/237/200/200" alt="..." />
        </div>
        <div>
          <img src="https://picsum.photos/id/235/200/200" alt="..." />
        </div>
      </div>

      <h5>Categorías Populares</h5>

      <div class="categoryImages">
        <div>
          <img src="https://picsum.photos/id/132/200/200" alt="..." />
        </div>
        <div>
          <img src="https://picsum.photos/id/137/200/200" alt="..." />
        </div>
        <div>
          <img src="https://picsum.photos/id/135/200/200" alt="..." />
        </div>
      </div>
    </div>
    <div class="container">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

      <div class="d-grid gap-2 d-md-block">
        <button type="button" class="btn btn-success btn-md">
          Registrarse
        </button>
        <button type="button" class="btn btn-outline-success btn-md">
          Contactarnos
        </button>
      </div>
    </div>

    <!-- <div class="container">
        <button type="button" id="backToTop" class="btn btn-secondary">
          Volver Arriba
        </button>
      </div> -->
  </div>
</template>

<script>
import CarouselTrending from "../Components/CarouselTrending.vue";

export default {
  name: "HomeView",
  components: {
    CarouselTrending,
  },
};
</script>

<style scoped>
.titulo {
  display: flex;
  justify-content: center;
}
body {
  background: #b7d3df;
}
.home {
  background: #b7d3df;
}
img {
  border-radius: 10px;
}

.SearchBar {
  display: flex;
  justify-content: center;
  margin-top: 2%;
}

.categoryImages {
  display: flex;
  margin-top: 5%;
}

img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.container {
  font-family: arial;
  font-size: 1rem;
  padding: 20% 5% 20% 5%;
}

p {
  /* Center horizontally*/
  text-align: center;
}

h5 {
  margin-left: 2.5%;
  margin-top: 5%;
}

.buttons {
  display: flex;
  justify-content: space-around;
}

#backToTop {
  display: block;
  margin-top: 30%;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 750px) {
  #carouselExampleControls {
    width: 70vw;
  }

  img {
    max-width: 50%;
  }
}

@media screen and (min-width: 760px) {
  .categoryImages {
    margin-top: 10%;
    display: flex;
    justify-content: center;
  }

  h5 {
    text-align: center;
  }

  .btn {
    display: flex;
    justify-content: center;
  }

  img {
    margin-left: 40px;
  }
}

@media screen and (min-width: 1000px) {
  .categoryImages {
    margin-top: 6%;
    display: flex;
    justify-content: center;
  }

  button {
    width: 400px;
    margin-top: 20px;
    margin-left: 215px;
  }

  img {
    margin-inline: 70px;
  }

  .container {
    padding: 100px;
  }
  .d-grid {
    margin-left: 135px;
  }

  .categoryImages :hover {
    transform: scale(1.1);
    transition: all 0.9s;
  }
}
</style>
