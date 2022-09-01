<template>
  <div>
    <SearchBar class="SearchBar" />
    <br />
    <CarouselTrending class="CarrouselTrending" />
    <br />

    <div class="categories">
      <h5>Ofertas</h5>
      <div class="categoryImages">
        <div>
          <img
            class="imgMascota"
            src="https://static.miscota.com/media/1/banners/banner_1661853038_ciEUOh9m-mobile.jpg"
            alt="..."
          />
        </div>
        <div>
          <img
            class="imgMascota"
            src="https://static.miscota.com/media/1/banners/banner_1661853038_ciy3nAJo-mobile.jpg"
            alt="..."
          />
        </div>
        <div>
          <img
            class="imgMascota"
            src="https://static.miscota.com/media/1/banners/banner_1661853037_cimyCCpJ-mobile.jpg"
            alt="..."
          />
        </div>
      </div>
      <h5>Mascotas</h5>

      <div class="categoryImages">
        <div>
          <img
            class="imgMascota"
            src="https://res.cloudinary.com/dytpump6i/image/upload/v1661902143/pexels-sharath-g-12895170_wfuqbb.jpg"
            alt="..."
          />
        </div>
        <div>
          <img
            class="imgMascota"
            src="https://res.cloudinary.com/dytpump6i/image/upload/c_scale,h_3248,w_4608/v1661633424/pexels-mustafa-ezz-979503_tsj2mb.jpg"
            alt="..."
          />
        </div>
        <div>
          <img
            class="imgMascota"
            src="https://res.cloudinary.com/dytpump6i/image/upload/c_scale,h_3248,w_4608/v1661901952/pexels-gili-pup-11545918_g60gej.jpg"
            alt="..."
          />
        </div>
      </div>

      <h5>Categorías Populares</h5>

      <div class="categoryImages">
        <div>
          <img
            class="imgMascota"
            src="https://static.miscota.com/media/1/banners/banner_1661847325_ciqzs13A.jpg"
            alt="..."
          />
        </div>
        <div>
          <img
            class="imgMascota"
            src="https://static.miscota.com/media/1/banners/banner_1661847326_ci8V2B3b.jpg"
            alt="..."
          />
        </div>
        <div>
          <img
            class="imgMascota"
            src="https://static.miscota.com/media/1/banners/banner_1661847327_ci6wJvnQ.jpg"
            alt="..."
          />
        </div>
      </div>
    </div>
    <div class="container">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

      <div class="d-grid gap-2 d-md-block">
        <button type="button " class=" butRegister">Registrarse</button>

        <button type="button" class="butContact">Contactarnos</button>
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
  data() {
    return {
      modalShow: false,
    };
  },
};
</script>

<style scoped>
.imgMascota {
  width: 270px;
}
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

@media screen and (max-width: 700px) {
  .imgMascota{

    height: 80px;
    width: 200px;
  }

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
    transform: scale(1.026);
    transition: all 0.9s;
  }
}

.butRegister {
  min-width: 130px;
  height: 40px;
  color: black;
  padding: 5px 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  outline: none;
  border-radius: 5px;
  z-index: 0;
  background: #898aa6;
  overflow: hidden;
  border: 2px solid #adb5bd;
  color: #adb5bd;
}
.butRegister:hover {
  color: black;
}
.butRegister:hover:after {
  width: 100%;
}
.butRegister:after {
  content: "";
  position: absolute;
  z-index: -1;
  transition: all 0.3s ease;
  left: 0;
  top: 0;
  width: 0;
  height: 100%;
  background: #c9bbcf;
}

.butContact {
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
  overflow: hidden;
  border-radius: 5px;
  border: none;
  background-color: #c9bbcf;
}
.butContact:hover {
  border-radius: 5px;
  padding-right: 24px;
  padding-left: 8px;
  color: black;
}
.butContact:hover:after {
  opacity: 1;
  right: 10px;
}
.butContact:after {
  content: "\00BB";
  position: absolute;
  opacity: 0;
  font-size: 20px;
  line-height: 40px;
  top: 0;
  right: -20px;
  transition: 0.4s;
}
</style>
