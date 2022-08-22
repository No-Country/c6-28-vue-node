<template>

  <div>

    <body>
      <HeaderItem></HeaderItem>
      <SearchBar class="SearchBar" />
      <br />
      <CarouselTrending class="CarrouselTrending" />
      <br />
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
          <button type="button" class="btn btn-primary btn-md">
            Registrarse
          </button>
          <button type="button" class="btn btn-outline-primary btn-md">
            Contactarnos
          </button>

        </div>
        <div class="reptiles">
          <img src="https://picsum.photos/id/135/200/200" alt="..." />
        </div>
      </div>

      <div class="container">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <p>{{ this.$store.state.count }}</p>

        <div class="d-grid gap-2 d-md-block">
          <button type="button" class="btn btn-primary btn-md">
            Registrarse
          </button>
          <button type="button" class="btn btn-outline-primary btn-md">
            Contactarnos
          </button>
        </div>

        <button type="button" id="backToTop" class="btn btn-success">
          Volver Arriba
        </button>
      </div>

    </body>


    <FooterView />

  </div>

</template>

<script>
import SearchBar from '../Components/SearchBar.vue';
import CarouselTrending from '../Components/CarouselTrending.vue';
import HeaderItem from '@/Components/HeaderItem.vue';
import FooterView from '../Components/FooterView.vue';

export default {
  name: 'HomeView',
  components: {
    SearchBar,
    CarouselTrending,
    HeaderItem,
    FooterView,
  },
  data() { },
};
</script>

<style scoped>

img {
  border-radius: 10px;
}

.SearchBar {
  display: flex;
  justify-content: center;
  margin-top: 2%;
}

.CarrouselTrending {
  display: flex;
  justify-content: center;
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
  margin-top: 15%;
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

@media (max-width: 481px) {
  #carouselExampleControls {
    width: 70vw;
  }

  img {
    max-width: 50%;
  }
}

@media screen and (min-width: 760px) {
  .categoryImages {
     display: flex;
  margin-top: 10%;
  
  }

  img {
  margin-left: 40px;

}
}
</style>
