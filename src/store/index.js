import { createStore } from "vuex";

const store = createStore({
  state: {
    user: {},
    products: [
      {
        id: 1,
        name: "Drum Machine",
        price: "$18.000",
      },
    ],
  },

  mutations: {
    updateUser(state, user) {
      state.user = user;
    },
    setToken(state, token) {
      state.token = token;
      localStorage.setItem("token", token);
    },
    setProducts(state, transactions) {
      state.transactions = transactions;
    },
    setLogout(state) {
      state.user = {};
      state.products = [];
    },
  },

  actions: {
    logout(ctx) {
      ctx.commit("setLogout");
      // authService.deleteAccessToken()
      // Company().deleteCompanyToken()
    },
  },
});

export default store;
