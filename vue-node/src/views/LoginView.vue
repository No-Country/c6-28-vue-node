<template>


  <div class="contenedorForm">
    <HeaderItem></HeaderItem>
    <form @submit.prevent="handleSubmit">
      <div class="formulario">
        <h2 class="titulo">Iniciar sesion</h2>
        <div class="row">
          <div class="col-md-12 form-group">
            <input type="text" class="email form-control" placeholder="email" />
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 form-group">
            <input type="password" placeholder="contraseña" class="form-control" />
          </div>
        </div>
        <input type="checkbox" class="checkbox" value="" /> recordarme
        <div class="row">
          <button class="sesion btn btn-primary">Iniciar sesion</button>
        </div>

        <div class="hr">
          <hr class="hrLinea" />
          o inicia sesion con
          <hr class="hrLinea" />
        </div>

        <div class="row">
          <button class="but1 sesion btn">Registrarse con Google</button>
        </div>
      </div>

    </form>

    <FooterView />

  </div>
</template>

<script>
import AuthService from "@/service/auth.service";
import FooterView from '../Components/FooterView.vue';
import ButtonGoogle from "@/Components/ui/Button/ButtonGoogle.vue";
import ButtonBase from "@/Components/ui/Button/ButtonBase.vue";
import HeaderItem from "@/Components/HeaderItem.vue";


export default {
  name: "LoginView",
  components: {
    FooterView,
    ButtonGoogle,
    ButtonBase,
    HeaderItem
  },
  data() {
    return {
      email: "",
      password: "",
      message: "",
    };
  },
  methods: {
    handleSubmit() {
      AuthService.login(this.email, this.password)
        .then((response) => {
          console.log(response);
          AuthService.setAccessToken(response.token);
          this.$store.commit("updateUser", response.user);
          this.$router.push("/login");
        })
        .catch((error) => {
          if (error) {
            this.message = "Credenciales Inválidas";
          }
        });
    },
  },
};
</script>


<style scoped>
/* .container{
  background-color: #F2EDD7;
} */

.sesion {
  margin-top: 50px;
  margin-left: 15px;
  width: 450px;

  text-align: center;


  Line-height: 22px;
}

.formulario {
  background-color: #F2EDD7;
  width: 80%;
  margin: 4em auto;
  /* transform: translateY(10%); */
  transition: all 300ms;
  padding: 2em;
  border-radius: 5px;
  /* backdrop-filter: blur(50%); */
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%),
    0 1px 5px 0 rgb(0 0 0 / 20%);
}

.contenedorForm {
  background-color: #F2EDD7;
  line-height: 22px;

}

.titulo {
  margin-bottom: 20px;
}

.email {
  margin-bottom: 15px;
}

.checkbox {
  margin-top: 15px;
}

.hrLinea {
  vertical-align: middle;
  width: 27%;
  display: inline-block;
  border: 1px solid black;
}

.hr {
  margin-top: 15px;
}

.but1 {
  background-color: #2d3748;
  font-family: Gothic A1;
  font-size: 17px;
  font-weight: 700;
  color: white;

  margin-top: 15px;
}

p {
  float: right;
  margin-top: 10px;
  color: #18a0fb;
}
</style>