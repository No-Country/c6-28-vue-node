<template>
    <div
      class="container d-flex  justify-content-center align-items-center vh-100 my-5"
    >
      <div class="back-div text-center p-5 mt-3 center bg-white">
        <h3>Información Personal</h3>
        <img
          src="https://mdbcdn.b-cdn.net/img/new/avatars/6.webp"
          class="rounded-circle shadow-4"
          style="width: 150px"
          alt="Avatar"
        />
        <h5 class="mb-2">
          <strong>John Doe</strong>
        </h5>
        <p class="text-muted">
          <strong>Contacto: </strong>
          info@mundomascotas.com
        </p>
        <p class="title-change">
          <span class="material-icons md-12 orange442 align-middle">
            password
          </span>
          Cambiar Contraseña
        </p>
        <form class="pb-3" action="#" @submit.prevent="">
          <div class="form-group">
            <input
              v-model="oldPassword"
              type="password"
              class="form-control my-2"
              name="reg__oldPassword"
              placeholder="Contraseña Actual"
              aria-label="Contraseña Actual"
              required
            />
          </div>
          <div class="form-group">
            <input
              v-model="password"
              type="password"
              class="form-control my-2"
              name="reg__password"
              placeholder="Nueva Contraseña"
              aria-label="Nueva Contraseña"
              required
            />
          </div>
          <div class="form-group">
            <input
              v-model="confirmPassword"
              type="password"
              class="form-control my-2"
              name="reg__confirmPassword"
              placeholder="Confirmar Contraseña"
              aria-label="Confirmar Contraseña"
              required
            />
          </div>
        </form>
        <button type="button" class="btn">Cambiar Contraseña</button>
      </div>
    </div>
</template>

<script>
import AuthService from "../service/auth.service";

export default {
  name: "ProfileView",
  components: { },
  data() {
    return {
      oldPassword: "",
      password: "",
      confirmPassword: "",
    };
  },
  computed: {
    userLogged() {
      return AuthService.getAccessToken();
    },
    /* user() {
      if (this.userLogged) {
        return AuthService.get();
      }
    }, */
  },
  methods: {
    changePassword() {
      /* Llamar servicio para cambiar contraseña */
    },
  },
};
</script>

<style scoped>
.btn {
  background-color: #3e7c17;
  width: 100%;
  color: #fff;
  padding: 10px;
  font-size: 18px;
}
.form-control:focus {
  border-color: #f4a442;
  box-shadow: none;
}
.back-div {
  background-color: #e8e1d9;
  padding: 2em;
  border-radius: 5px;
  margin: 4em auto;
}
.material-icons.orange442 {
  color: #f4a442;
}
.title-change {
  color: #f4a442;
  text-align: right;
  font-size: 14px;
}
</style>
