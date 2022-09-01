<template>
  <div class="container bg-white rounded my-5">
    <div class="row g-3">
      <div class="col-md-7 col-lg-7 col-xl-7">
        <div class="d-none d-sm-flex card border-light align-items-center">
          <img
            v-if="productPhoto[0] === 'url'"
            class="card-img"
            style="width: 28rem"
            src="../assets/not-photo.jpg"
            alt="Producto"
          />
          <img
            v-else
            class="card-img"
            style="width: 28rem"
            :src="productPhoto[0]"
            alt="Producto"
          />
        </div>
      </div>
      <div class="col-md-5 col-lg-5 col-xl-5">
        <div class="card">
          <div class="card-body">
            <p class="fw-lighter">
              Código: 1500{{ product.id }}
              <span
                class="material-icons md-48 align-middle bluedf"
                style="display: block; float: right"
              >
                favorite
              </span>
            </p>
            <img
                v-if="productPhoto[0] === 'url'"
                src="../assets/not-photo.jpg"
                alt="Producto"
                class="card-img d-flex d-sm-none"
            />
            <img
              v-else
              class="card-img d-flex d-sm-none"
              :src="productPhoto[0]"
              alt="Producto"
            />
            <h4 class="card-title text-capitalize">
              {{ product.nombre }}
            </h4>
            <h5 class="card-title">
              {{ product.nombre_marca }}
            </h5>

            <h6 
              v-if="product.oferta"
              class="card-subtitle mb-2 text-success">
              {{ product.porcentaje_oferta }}% OFF
            </h6>
            <Starts :start="start" />
            <p class="card-text display-5 mt-3">${{ product.precio }} </p>
            <p style="color: #b7d3df" class="font-weight-bold">
              <span class="material-icons md-12 bluedf align-middle">
                credit_card
              </span>
              Pago a acordar con el vendedor.
            </p>
            <div
              class="input-group my-2 w-auto justify-content-center align-items-center"
            >
              <input
                type="button"
                value="-"
                class="rounded icon-shape icon-sm"
                @click="counter -= 1"
              />
              <input
                type="number"
                step="1"
                max="10"
                :value="counter"
                class="quantity-field border-0 text-center w-25"
              />
              <input
                type="button"
                value="+"
                class="rounded icon-shape icon-sm"
                @click="counter += 1"
              />

              <button type="button" class="btn rounded mt-4">
                Agregar al Carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--Descripción y caracteristicas -->
    <div class="row g-3 px-1">
      <div class="col-md-7 col-lg-7 col-xl-7 p-3">
        <h3 class="text-muted">Descripción</h3>
        <p class="text-muted text-uppercase">
          {{ product.descripcion }}
        </p>
      </div>
      <div class="col-md-5 col-lg-5 col-xl-5 p-3 text-capitalize">
        <dl class="row">
          <dt class="col-sm-3">Marca</dt>
          <dd class="col-sm-9">
            {{ product.nombre_marca }}
          </dd>

          <dt class="col-sm-3">Euismod</dt>
          <dd class="col-sm-9">
            Vestibulum felis euismod semper eget lacinia odio sem nec elit.
          </dd>
          <dd class="col-sm-9 offset-sm-3">
            Donec id elit non mi porta gravida at eget metus.
          </dd>

          <dt class="col-sm-3">Malesuada porta</dt>
          <dd class="col-sm-9">
            Etiam porta sem malesuada magna mollis euismod.
          </dd>
        </dl>
      </div>
    </div>
    <h4 class="p-3" style="color: #f4a442">
      Quienes vieron este producto también compraron
    </h4>
    <div class="row g-3 p-3 justify-content-center">
      <div v-for="n in 4" :key="n" class="col-md-6 col-lg-4 col-xl-3">
        <Product />
      </div>
    </div>
  </div>
</template>

<script>
import Product from "../Components/Product.vue";
import Starts from "../Components/Starts.vue";

export default {
  name: "ProductView",
  components: {
    Product,
    Starts,
  },
  props: ["id"],

  data() {
    return {
      counter: 0,
      start: 3,
    };
  },
  computed: {
    product() {
      return this.$store.state.product;
    },
    productCategory() {
      return this.$store.state.product.categoria
        ? this.$store.state.product.categoria
        : "";
    },
    productPhoto() {
      return this.$store.state.product.fotos
        ? this.$store.state.product.fotos
        : "";
    },
  },
  mounted() {
    this.$store.dispatch("getProduct", this.$route.params.id);
  },
};
</script>

<style scoped>
.material-icons.bluedf {
  color: #b7d3df;
}
.btn {
  background-color: transparent;
  border: 3px solid #898aa6;
  font-weight: bold;
  width: 80%;
  color: #898aa6;
  padding: 10px;
  font-size: 18px;
}

.btn:hover {
  background-color: #898aa6;
  color: white;
}

.icon-shape {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  vertical-align: middle;
  background-color: #898aa6;
  color: white;
  border: 0;
}

.icon-sm {
  width: 2rem;
  height: 2rem;
}
</style>
