<template>
  <div>
    <div v-for="item in cart" :key="item.product.id">
      <div class="px-2 d-flex justify-content-between">
        <div>
          <strong>{{ item.product.nombre }}</strong>
          <div style="display: flex; justify-content: space-between">
            <span>
              <p>{{ item.product.nombre_marca }}</p></span
            ><span> {{ item.quantity }}</span> x
            <span> ${{ item.product.precio }} </span>
          </div>
        </div>
        <br />
        <button
          class="btn"
          type="button"
          @click.prevent="removeProduct(item.product)"
        >
          Remove Item
        </button>
      </div>
    </div>
    <hr />
  </div>

  <div class="d-flex justify-content-between">
    <span
      ><strong>Total: ${{ cartTotal }}</strong></span
    >
    <div class="d-grid gap-2 col-6 mx-auto mt-5">
      <button class="btn btn-danger btn-lg" @click="removeAllItems">
        Clear Cart
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    cartTotal() {
      let total = 0;
      this.cart.forEach((element) => {
        total += element.product.precio * element.quantity;
      });
      return total;
    },
  },
  methods: {
    removeProduct(product) {
      this.$store.dispatch("removeProductAction", product);
    },
    removeAllItems() {
      this.$store.dispatch("removeAllItems");
    },
  },
};
</script>

<style></style>
