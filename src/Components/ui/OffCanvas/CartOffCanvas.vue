<template>
  <div>
    <div v-for="item in cart" :key="item.product.id">
      <div class="px-2 d-flex justify-content-between">
        <div>
          <strong>{{ item.product.nombre }}</strong>
          <div style="display: flex; justify-content: space-between">
            <span>
              <p class="cartMarca">{{ item.product.nombre_marca }}</p></span
            ><span class="cartQuantity"> {{ item.quantity }}</span> x
            <span class="cartPrecio"> ${{ item.product.precio }} </span>
          </div>
        </div>
        <br />
        <button
          class="buttRemove"
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
    <div>
      <button class="buttClear" @click="removeAllItems">Clear Cart</button>
      <button class="buttFin">Finalizar compra</button>
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

<style>
.cartMarca {
  margin-right: 4px;
}

.cartQuantity {
  margin-right: 4px;
}
.cartPrecio {
  margin-left: 8px;
}

.buttFin {
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
  border-radius: 5px;
  border: 2px solid #898aa6;
  background: #898aa6;
  margin-top: 70px;
}

.buttFin:hover {
  background: #d6efed;
  color: #adb5bd;
}

.buttClear {
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
  border-radius: 5px;
  border: 2px solid #898aa6;
  background: #898aa6;
  margin-top: 70px;
  margin-right: 20px;
}

.buttClear:hover {
  background: #d6efed;
  color: #adb5bd;
}

.buttRemove {
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
  border-radius: 5px;
  border: none;
  background: #6c757d;
  box-shadow: 0 5px #495057;
}
.buttRemove:hover {
  box-shadow: 0 3px #495057;
  top: 1px;
}
.buttRemove:active {
  box-shadow: 0 0 #495057;
  top: 5px;
}
</style>
