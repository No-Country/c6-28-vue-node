<template>
  <div>
    <HeaderBanner />
    <!--Aqui inicia el filtro-->
    <!--Aqui inicia los productos-->
    <div v-if="products.length !== 0" class="container mt-5">
      <!-- Filtro-->
      <div class="row">
        <div class="col-md-6 col-lg-6 col-xl-6">
          <p style="color: #898aa6">Animales y Mascotas</p>
        </div>
      </div>
      <div class="row">
        <div
          class="
            col-md-4 col-lg-4 col-xl-4
            text-right
            d-flex
            align-items-center
            my-2
          "
        >
          <label style="color: #898aa6">Ordenar por &nbsp;</label>
          <select v-model="sortBy" @change="sortProducts()">
            <option value="0">Más relevantes</option>
            <option value="1">Mayor Precio</option>
            <option value="2">Menor Precio</option>
          </select>
        </div>
        <div 
          class="
            col-md-4 col-lg-4 col-xl-4
            d-flex
            align-items-center
            my-2
          "
        >
          <label style="color: #898aa6">Categorías: &nbsp</label>
          <select
            v-model="category"
          >
            <option value="">Ninguna</option>
            <option value="juguetes">Juguetes</option>
            <option value="comida">Comida</option>
          </select>
        </div>
        <div
          class="
            col-md-4 col-lg-4 col-xl-4
            d-flex
            align-items-center
            my-2
          "
        >
          <label style="color: #898aa6">Marcas: &nbsp</label>
          <select
            v-model="mark"
          >
            <option value="">Ninguna</option>
            <option value="Purina">Purina</option>
            <option value="Al Hueso">Al Hueso</option>
          </select>
        </div>
      </div>
      <!-- Card de Productos-->
      <!-- VIstas Card de Productos-->
      <div class="row">
        <div
          v-if="category == '' && mark ==''"
          v-for="product in products"
          :key="product.id"
          class="col-md-4 col-lg-4 col-xl-3 card-group"
          :product="product"
        >
          <div class="card my-5 py-3 px-2">
            <router-link :to="{ name: 'product', params: { id: product.id } }">
              <img
                v-if="product.fotos[0] === 'url'"
                class="card-img-top"
                src="../assets/not-photo.jpg"
                alt="Producto"
              />
              <img
                v-else
                class="card-img-top"
                :src="product.fotos[0]"
                alt="Producto"
              />
            </router-link>
            <div class="card-body text-dark">
              <h3>
                {{ product.precio }}$
                <span
                  v-if="product.oferta"
                  style="
                    color: #b7d3df;
                    font-size: 20px;
                    display: block;
                    float: right;
                  "
                >
                  {{ product.porcentaje_oferta }}% OFF
                </span>
              </h3>

              <h4 class="text-capitalize">{{ product.nombre }}</h4>
              <h6 class="text-muted">{{ product.nombre_marca }}</h6>
              <div class="text-center">
                <button
                  type="button"
                  class="btn btn-grey mt-3 d-block mx-auto"
                  style="display: block"
                  @click="addToCart(product)"
                >
                  Agregar al Carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!---Vista card Categoria--->
      <div class="row">
        <div
          v-for="product in filteredCategory"
          :key="product.id"
          class="col-md-4 col-lg-4 col-xl-3 card-group"
          :product="product"
        >
          <div class="card my-5 py-3 px-2">
            <router-link :to="{ name: 'product', params: { id: product.id } }">
              <img
                v-if="product.fotos[0] === 'url'"
                class="card-img-top"
                src="../assets/not-photo.jpg"
                alt="Producto"
              />
              <img
                v-else
                class="card-img-top"
                :src="product.fotos[0]"
                alt="Producto"
              />
            </router-link>
            <div class="card-body text-dark">
              <h3>
                {{ product.precio }}$
                <span
                  v-if="product.oferta"
                  style="
                    color: #b7d3df;
                    font-size: 20px;
                    display: block;
                    float: right;
                  "
                >
                  {{ product.porcentaje_oferta }}% OFF
                </span>
              </h3>

              <h4 class="text-capitalize">{{ product.nombre }}</h4>
              <h6 class="text-muted">{{ product.nombre_marca }}</h6>
              <div class="text-center">
                <button
                  type="button"
                  class="btn btn-grey mt-3 d-block mx-auto"
                  style="display: block"
                  @click="addToCart(product)"
                >
                  Agregar al Carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!---Vista card Marca--->
      <div class="row">
        <div
          v-for="product in filteredMark"
          :key="product.id"
          class="col-md-4 col-lg-4 col-xl-3 card-group"
          :product="product"
        >
          <div class="card my-5 py-3 px-2">
            <router-link :to="{ name: 'product', params: { id: product.id } }">
              <img
                v-if="product.fotos[0] === 'url'"
                class="card-img-top"
                src="../assets/not-photo.jpg"
                alt="Producto"
              />
              <img
                v-else
                class="card-img-top"
                :src="product.fotos[0]"
                alt="Producto"
              />
            </router-link>
            <div class="card-body text-dark">
              <h3>
                {{ product.precio }}$
                <span
                  v-if="product.oferta"
                  style="
                    color: #b7d3df;
                    font-size: 20px;
                    display: block;
                    float: right;
                  "
                >
                  {{ product.porcentaje_oferta }}% OFF
                </span>
              </h3>

              <h4 class="text-capitalize">{{ product.nombre }}</h4>
              <h6 class="text-muted">{{ product.nombre_marca }}</h6>
              <div class="text-center">
                <button
                  type="button"
                  class="btn btn-grey mt-3 d-block mx-auto"
                  style="display: block"
                  @click="addToCart(product)"
                >
                  Agregar al Carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import SearchBar from "../Components/SearchBar.vue";

/* Componentes para MarketView*/
import HeaderBanner from "../Components/HeaderBanner";
export default {
  name: "MarketView",
  components: {
    // SearchBar,
    HeaderBanner,
  },
  data() {
    return {
      // query: null,
      productos: null,
      sortBy: 0,
      quantity: 1,
      category: '',
      mark: '',
      brand: 0,
    };
  },
  computed: {
    products() {
      let result;
      if (this.$route.query.s) {
        if (this.$store.getters.searchProductsByQuery(this.$route.query.s)) {
          result = this.$store.getters.searchProductsByQuery(
            this.$route.query.s
          );
        } else {
          if (this.$store.getters.searchCategory(this.category)) {
            result = this.$store.getters.searchCategory(this.category)
          } else {
            result = [];
          }
        }
      } else {
        result = this.$store.state.products;
      }
      return result;
    },
    filteredCategory() {
      const category = this.category;
      console.log(category)
      let result;
      if (this.$store.getters.searchCategory(category)) {
        result = this.$store.getters.searchCategory(category)
      } else {
        result = [];
      }
      return result;
    },
    filteredMark() {
      const mark = this.mark;
      console.log(mark)
      let result;
      if (this.$store.getters.searchMarca(mark)) {
        result = this.$store.getters.searchMarca(mark)
      } else {
        result = [];
      }
      return result;
    },
    // products() {
    //   const sortBy = this.sortBy;
    //   if (sortBy === "0") {
    //     return this.$store.state.products;
    //   } else {
    //     // eslint-disable-next-line vue/no-side-effects-in-computed-properties
    //     return this.$store.state.products.sort((a, b) => {
    //       if (sortBy === "1") {
    //         return b.precio - a.precio;
    //       } else if (sortBy === "2") {
    //         return a.precio - b.precio;
    //       }
    //     });
    //   }
    // },
  },
  mounted() {
    this.$store.dispatch("getProducts");
    // if (this.$route.query.s) {
    //   this.query = this.$route.query.s;
    // }
  },
  methods: {
    addToCart(product) {
      if (this.$store.state.cart.find((elem) => elem.product === product)) {
        this.quantity += 1;
      }
      this.$store.dispatch("addProductToCart", {
        product: product,
        quantity: this.quantity,
      });
    },

    sortProducts() {
      const sortBy = this.sortBy;
      if (sortBy === "0") {
        return this.$store.state.products;
      } else {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        return this.$store.state.products.sort((a, b) => {
          if (sortBy === "1") {
            return b.precio - a.precio;
          } else if (sortBy === "2") {
            return a.precio - b.precio;
          }
        });
      }
    },
    // searchProducts() {
    //   let result;
    //   console.log(this.query);
    //   if (this.$store.getters.searchProductsByQuery(this.query)) {
    //     result = this.$store.getters.searchProductsByQuery(this.query);
    //   } else {
    //     result = [];
    //   }

    //   console.log("pasando:", result);
    //   return result;
    // },
  },
};
</script>

<style scoped>
img {
  cursor: pointer;
  margin: auto;
}
select {
  background-color: #898aa6;
  color: white;
  border: none;
  border-radius: 5px 5px 5px 5px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
  -webkit-appearance: button;
  appearance: button;
}

.btn-grey {
  background-color: #898aa6;
  color: white;
  padding: 5px;
  font-size: 18px;
}

.btn-grey:hover {
  background-color: transparent;
  border: 3px solid #898aa6;
  color: #898aa6;
}

@media screen and (min-width: 1000px) {
  .card:hover {
    transform: scale(1.05);
    transition: all 0.3s;
  }
}

.butComprar {
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
  border-radius: 20px;
  border: 2px solid #898aa6;
  background: #898aa6;
}
.butComprar:hover {
  background: #d6efed;
  color: #898aa6;
}
</style>
