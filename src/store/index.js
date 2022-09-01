import { createStore } from "vuex";
import Product from "@/service/product";
import AuthService from "@/service/auth.service";

const store = createStore({
  state: {
    user: {},
    token: null,
    products: [],
    product: {},
    cart: [],
    newProduct: {
      name: null,
      brand: null,
      category: null,
      price: null,
      description: null,
    },
    categories: [],
    pets: [],
    brands: [],
    offers: [],
    checkoutTotal: null,

    offCanvas: {
      show: false,
      widthAll: false,
      overflowHidden: false,
    },
  },

  mutations: {
    updateUser(state, user) {
      state.user = user;
    },
    setToken(state, token) {
      state.token = token;
      localStorage.setItem("token", token);
    },
    setProducts(state, products) {
      state.products = products;
    },
    setProduct(state, product) {
      state.product = product;
    },
    setProductToCart(state, { product, quantity }) {
      const productExists = state.cart.find(elem => {
        return elem.product === product
      })
      if (productExists) {
        productExists.quantity += 1
        return;
      }
      state.cart.push({ product, quantity })
    },
    removeProductFromCart(state, product) {
      state.cart = state.cart.filter(elem => {
        return elem.product.id !== product.id
      })
    },
    removeAllCartItems(state) {
      state.cart = state.cart.filter(elem => {
        return elem === "xxx"
      })
    },
    setNameNewProduct(state, name) {
      state.newProduct.name = name;
    },
    setBrandNewProduct(state, brand) {
      state.newProduct.brand = brand;
    },
    setCategoryNewProduct(state, category) {
      state.newProduct.category = category;
    },
    setPriceNewProduct(state, price) {
      state.newProduct.price = price;
    },
    setDescriptionNewProduct(state, description) {
      state.newProduct.description = description;
    },
    setCategories(state, categories) {
      state.categories = categories;
    },
    setPets(state, pets) {
      state.pets = pets;
    },
    setOffers(state, offers) {
      state.offers = offers;
    },
    setBrands(state, brands) {
      state.brands = brands;
    },

    setLogout(state) {
      state.user = {};
      state.token = null;
    },
    setOffCanvasShow(state, payload) {
      state.offCanvas.show = payload;
    },

    setOffCanvasWidthAll(state, payload) {
      state.offCanvas.widthAll = payload;
    },
  },
  getters: {
    cartCount(state) {
      return state.cart.length

    },



  },

  actions: {
    getProducts({ commit }) {
      Product.get()
        .then((response) => {
          commit("setProducts", response.data.products);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getProduct({ commit }, id) {
      Product.getProduct(id).then((response) => {
        commit("setProduct", response);
      });
    },
    addProductToCart({ commit }, { product, quantity }) {
      commit("setProductToCart", { product, quantity })
    },
    removeProductAction({ commit }, product) {
      commit("removeProductFromCart", product)
    },
    removeAllItems({ commit }) {
      commit("removeAllCartItems")
    },

    logout({ commit }) {
      commit("setLogout");
      AuthService.deleteAccessToken()

    },
  },
});

export default store;
