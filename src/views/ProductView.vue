<template>
  <div class="container bg-white rounded my-5">
    <div class="row g-3">
      <div class="col-md-7 col-lg-7 col-xl-7">
        <div class="d-none d-sm-flex card border-light align-items-center">
          <img
            class="card-img"
            style="width: 28rem"
            src="../assets/perrarina.webp"
            alt="Producto"
          />
        </div>
      </div>
      <div class="col-md-5 col-lg-5 col-xl-5">
        <div class="card">
          <div class="card-body">
            <p class="fw-lighter">
              Código: 15001
              <span
                class="material-icons md-48 align-middle orange442"
                style="display: block; float: right"
              >
                favorite
              </span>
            </p>
            <img
              class="card-img d-flex d-sm-none"
              src="../assets/perrarina.webp"
              alt="Producto"
            />
            <h3 class="card-title">
              Perrarina Purina 8 Kg Adulto Carne y hueso
            </h3>
            <h6 class="card-subtitle mb-2 text-muted">Perro</h6>
            <Starts :start="start" />
            <p class="card-text display-5 mt-3">$2759</p>
            <p style="color: #f4a442">
              <span class="material-icons md-12 orange442 align-middle">
                credit_card
              </span>
              Pago a acordar con el vendedor.
            </p>
            <div
              class="
                input-group
                my-2
                w-auto
                justify-content-center
                align-items-center
              "
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
        <p class="text-muted">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div class="col-md-5 col-lg-5 col-xl-5 p-3">
        <dl class="row">
          <dt class="col-sm-3">Description lists</dt>
          <dd class="col-sm-9">
            A description list is perfect for defining terms.
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

// import Product from "@/service/product";

export default {
  name: "ProductView",
  components: {
    Product,
    Starts,
  },
  data() {
    return {
      counter: 0,
      start: 3,
      addProduct: [],
      products: [],
    };
  },
  create() {
    //api request
    // commit al store
    //
  },
  methods: {
    buyProduct() {},
  },
  computed: {
    showProducts() {
      this.products = this.$store.state.products;
    },
  },
};
</script>

<style scoped>
body {
  background-color: #e8e1d9;
}
.material-icons.orange442 {
  color: #f4a442;
}
.btn {
  background-color: transparent;
  border: 3px solid #3e7c17;
  font-weight: bold;
  width: 80%;
  color: #3e7c17;
  padding: 10px;
  font-size: 18px;
}

.btn:hover {
  background-color: #3e7c17;
  color: white;
}

.icon-shape {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  vertical-align: middle;
  background-color: #3e7c17;
  color: white;
  border: 0;
}

.icon-sm {
  width: 2rem;
  height: 2rem;
}
</style>
