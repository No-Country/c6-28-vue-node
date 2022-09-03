<template>
  <div
    class="
      container
      d-flex
      justify-content-center
      align-items-center
      vh-100
      my-5
    "
  >
    <div class="back-div text-center p-5 mt-3 center bg-white">
      <h3>Información Personal</h3>
      <img
        src="https://res.cloudinary.com/dytpump6i/image/upload/v1662176168/49c8e403cd1929e9e7b02126824ff831_ployh5.jpg"
        class="rounded-circle shadow-4"
        style="width: 150px"
        alt="Avatar"
      />
      <h5 class="mb-2">
        <strong>{{ user.nombre }}</strong>
      </h5>
      <p class="text-muted">
        <strong>Contacto: </strong>
        {{ user.email }}
      </p>
      <p class="text-muted">
        <strong>Cliente Desde: </strong>
        {{ user.createdAt }}
      </p>
      <p class="title-change"></p>
    </div>
  </div>
</template>

<script>
import AuthService from "../service/auth.service";

export default {
  name: "ProfileView",
  components: {},
  data() {
    return {
      oldPassword: "",
      password: "",
      confirmPassword: "",
      userConfir: null,
    };
  },
  computed: {
    userLogged() {
      return AuthService.getAccessToken();
    },
    user() {
      return this.$store.state.user;
    },
  },
  mounted() {
    if (!this.userLogged) {
      this.$router.push("login");
    }
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
