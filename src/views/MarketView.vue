<template>
  <div class="container">
    <HeaderBanner />
    <!--Aqui inicia el filtro-->
    <div class="row g-3 my-2">
      <div class="col-md-6 col-lg-4 col-xl-3">
        <SearchBar class="SearchBar" />
      </div>
      <div class="col-md-6 col-lg-4 col-xl-3">
        <form action="">
          <div class="form-group">
            <label for="category">Categorías</label>
            <select id="category" class="form-control">
              <option>Producto 1</option>
              <option>Producto 2</option>
              <option>Producto 3</option>
              <option>Producto 4</option>
              <option>Producto 5</option>
            </select>
          </div>
        </form>
      </div>
      <div class="col-md-6 col-lg-4 col-xl-3">
        <form action="">
          <div class="form-group">
            <label for="price" class="form-label">Filtrar por precio</label>
            <input
              id="price"
              type="range"
              class="form-range"
              min="0"
              max="51800"
            />
          </div>
        </form>
      </div>
      <div class="col-md-6 col-lg-4 col-xl-3">
        <form action="">
          <div class="form-group">
            <label for="mark">Marcas</label>
            <select id="mark" class="form-control">
              <option>Marca 1</option>
              <option>Marca 2</option>
              <option>Marca 3</option>
              <option>Marca 4</option>
              <option>Marca 5</option>
            </select>
          </div>
        </form>
      </div>
    </div>
    <!--Aqui inicia los productos-->
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-4 col-lg-4 col-xl-3">
          <div
            v-for="product in products"
            :key="product.id"
            class="card mt-5 mb-5"
            :product="product"
          >
            <router-link :to="{ name: 'product', params: { id: product.id } }">
              <img
                class="card-img-top"
                src="https://picsum.photos/id/132/200/200"
                alt="Card image cap"
              />
            </router-link>
            <div class="card-body">
              <h2>
                {{ product.precio }}$
                <span
                  style="
                    color: green;
                    font-size: 20px;
                    display: block;
                    float: right;
                  "
                >
                  10% OFF
                </span>
              </h2>

              <h3>{{ product.nombre }}</h3>
              <h4>{{ product.nombre_marca }}</h4>

              <p class="text-center">
                <button type="button" class="btn btn-success btn-block mt-5">
                  Comprar Producto
                </button>
              </p>
              <p class="text-center"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from "../Components/SearchBar.vue";

/* Componentes para MarketView*/
import HeaderBanner from "../Components/HeaderBanner";


export default {
  name: "MarketView",
  components: {
    SearchBar,
    HeaderBanner,
   
  },

  data() {
    return {};
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },

  mounted() {
    this.$store.dispatch("getProducts");
  },

  methods: {
    cardClick() {
      console.log("click");
    },
  },
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

img {
  cursor: pointer;
}

 .market {
  background-color: #f2edd7;
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
