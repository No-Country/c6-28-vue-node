import { createStore } from 'vuex';

const store = createStore({

  state: {
    user: {},
    token: null,
    products: [],
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

  },

  mutations: {
    updateUser(state, user) {
      state.user = user;
    },
    setToken(state, token) {
      state.token = token;
      localStorage.setItem('token', token);
    },
    setProducts(state, products) {
      state.products = products;
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
      state.products = [];
      state.token = null;
      state.products = [];
      state.categories = [];
      state.pets = [];
      state.newProduct = {
        name: null,
        brand: null,
        category: null,
        price: null,
        description: null,
      };
      state.checkoutTotal = null;
    },

  },

  actions: {
    logout(ctx) {
      ctx.commit('setLogout');
      // authService.deleteAccessToken()
    },
  },
});

export default store;
