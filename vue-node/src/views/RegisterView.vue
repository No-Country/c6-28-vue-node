<script setup>
import ButtonGoogle from "@/Components/ui/Button/ButtonGoogle.vue";
</script>
<template>
  <!-- <form action="" class="register">
    <input type="text" class="reg__name" placeholder="Nombre" />
    <input type="text" class="reg__lastname" placeholder="Apellido" />
    <input type="email" class="reg__email" placeholder="Email" />
    <input type="password" class="reg__password" placeholder="Contraseña" />
    <input type="checkbox" name="" id="" class="reg__checkbox" />
    <input type="checkbox" name="" id="" class="reg__terms" />
    <button></button>
    <button></button>
  </form> -->
  <div class="row">
    <div class="col">
      <input
        type="text"
        class="form-control"
        placeholder="Nombre"
        aria-label="First name"
      />
    </div>
    <div class="col">
      <input
        type="text"
        class="form-control"
        placeholder="Apellido"
        aria-label="Last name"
      />
    </div>
  </div>
  <div class="row">
    <div class="col">
      <input
        type="email"
        class="form-control"
        placeholder="Email"
        aria-label="First name"
      />
    </div>
  </div>
  <div class="row">
    <div class="col">
      <input
        type="password"
        class="form-control"
        placeholder="password"
        aria-label="First name"
      />
    </div>
  </div>
  <div class="form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="flexCheckDefault"
    />
    <label class="form-check-label" for="flexCheckDefault"> Recordarme </label>
  </div>
  <div class="form-check">
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
  <ButtonGoogle>
    <template #icon>
      <img src="../assets/icons/iconGoogle.svg" alt="icon google svg" />
    </template>
    <template #content>Registrarse con google </template>
  </ButtonGoogle>
</template>
<style scoped></style>
