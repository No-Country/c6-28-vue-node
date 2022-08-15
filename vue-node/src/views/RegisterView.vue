<script setup>
import ButtonGoogle from "@/Components/ui/Button/ButtonGoogle.vue";
import ButtonBase from "@/Components/ui/Button/ButtonBase.vue";

function submit(){

}
</script>
<template>
  <form action="" class="register__form">
    <h1 class="mb-5">Registro</h1>
    <div class="row mb-3">
      <div class="col">
        <input
          type="text"
          class="form-control"
          name="reg__nombre"
          placeholder="Nombre"
          aria-label="First name"
        />
      </div>
      <div class="col">
        <input
          type="text"
          class="form-control"
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
          name="reg__email"
          placeholder="Email"
          aria-label="First name"
        />
      </div>
    </div>
    <div class="row mb-3">
      <div class="col">
        <input
          type="password"
          class="form-control"
          name="reg__password"
          placeholder="password"
          aria-label="First name"
        />
      </div>
    </div>
    <div class="row mb-5">
      <div class="col">
        <input
          type="password"
          class="form-control"
          name="reg__confirmar"
          placeholder="Confirmar password"
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
        />
      </template>
      <template #content>Registrarse con Google </template>
    </ButtonGoogle>
  </form>
</template>
<style scoped>
.register__form {
  width: 80%;
  margin: 0 auto;
  transform: translateY(20%);
  transition: all 300ms;
  padding: 2em;
  border-radius: 5px;
  backdrop-filter: blur(50%);
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%),
    0 1px 5px 0 rgb(0 0 0 / 20%);
}

.icon__google {
  display: block;
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
