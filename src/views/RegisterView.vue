<script setup>
import ButtonGoogle from '@/Components/ui/Button/ButtonGoogle.vue';
import ButtonBase from '@/Components/ui/Button/ButtonBase.vue';
import HeaderItem from '@/Components/HeaderItem.vue';
import FooterView from '../Components/FooterView.vue';
import {ref} from 'vue';

const name = ref('');
const lastname = ref('');
const password = ref('');
const confirmPass = ref('');
const email = ref('');
</script>
<template>
  <body>
    <HeaderItem></HeaderItem>
    <form action="" class="register__form" @submit.prevent="handleSubmit">
      <h1 class="mb-5">Registro</h1>
      <div class="row mb-3">
        <div class="col">
          <input
            type="text"
            class="form-control"
            v-model="name"
            name="reg__nombre"
            placeholder="Nombre"
            aria-label="First name"
          />
        </div>
        <div class="col">
          <input
            type="text"
            class="form-control"
            v-model="lastname"
            name="reg__apellido"
            placeholder="Apellido"
            aria-label="Last name"
          />
        </div>
      </div>
      <div class="row mb-3">
        <div class="col">
          <input
            type="email"
            class="form-control"
            v-model="email"
            name="reg__email"
            placeholder="Correo"
            aria-label="First name"
          />
        </div>
      </div>
      <div class="row mb-3">
        <div class="col">
          <input
            type="password"
            class="form-control"
            v-model="password"
            name="reg__password"
            placeholder="Contraseña"
            aria-label="First name"
          />
        </div>
      </div>
      <div class="row mb-5">
        <div class="col">
          <input
            type="password"
            class="form-control"
            v-model="confirmPass"
            name="reg__confirmar"
            placeholder="Confirmar contraseña"
            aria-label="First name"
          />
        </div>
      </div>
      <div class="form-check mb-5">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckChecked"
          checked
        />
        <label class="form-check-label" for="flexCheckChecked">
          Acepto los terminos y condiciones
        </label>
      </div>
      <ButtonBase @submit.prevent="submit">Registrarse</ButtonBase>
      <ButtonGoogle>
        <template #icon>
          <img
            src="../assets/icons/iconGoogle.svg"
            alt="icon google svg"
            class="icon__google"
            style="margin-top: 5px; margin-left: 15px"
          />
        </template>
        <template #content>Registrarse con Google </template>
      </ButtonGoogle>
    </form>
    <FooterView />
  </body>
</template>

<script>
import AuthService from '../service/auth.service';
export default {
  data() {
    return {
      name: '',
      lastname: '',
      email: '',
      password: '',
      confirmPass: '',
    };
  },
  methods: {
    handleSubmit() {
      AuthService.register(
          this.name,
          this.lastname,
          this.email,
          this.password,
          this.confirmPass,
      )
          .then((response) => {
            console.log(response);
            AuthService.setAccessToken(response.token);
            this.$store.commit('updateUser', response.user);
            this.$router.push('/login');
          })
          .catch((error) => {
            console.log(error);
          });
    },
  },
};
</script>
<style scoped>
.register__form {
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
.icon__google {
  display: block;
}
body {
  background-color:#F2EDD7;
  padding-bottom: 100%;
}
@media screen and (min-width: 480px) {
  .register__form {
    width: 92%;
  }
}
@media screen and (min-width: 800px) {
  .register__form {
    width: 50%;
  }
}
@media screen and (min-width: 1200px) {
  .register__form {
    width: 35%;
  }
}
</style>
