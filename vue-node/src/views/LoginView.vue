<template>
  <div class="container">
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
</template>

<script>
import AuthService from "@/service/auth.service";
export default {
  name: "LoginView",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    handleSubmit() {
      AuthService.login(this.email, this.password)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.sesion {
  margin-top: 30px;
  margin-left: 15px;
  width: 300px;

  text-align: center;
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
}
</style>