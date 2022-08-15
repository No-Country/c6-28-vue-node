<template>

  <div class="container">
    <form @submit.prevent="handleSubmit">
      <h2 class="titulo mb-5">Iniciar sesion</h2>

      <div class="row">
        <div class="col-md-12 form-group">
          <input type="text" class="email form-control" placeholder="email" v-model="email" />
        </div>
      </div>

      <div class="row">
        <div class="col-md-12 form-group">
          <input type="password" placeholder="contraseña" class="form-control" v-model="password" />
        </div>
      </div>
      
      <input type="checkbox" class="checkbox" value="" /> recordarme
      

      <div v-if="message" style="color: red; margin-top 5%">
        Credenciales Invalidas
      </div>
      <div class="row">
        <button class=" iniciar sesion btn btn-primary">Iniciar sesion</button>
      </div>

      <div class="hr">
        <hr class="hrLinea" />
        o inicia sesion con
        <hr class="hrLinea" />
      </div>

      <div class="row">
        <button class="but1 sesion btn">Registrarse con Google</button>
      </div>
    </form>

    <FooterView/>

  </div>
</template>

<script>





import AuthService from "@/service/auth.service";
import FooterView from '../Components/FooterView.vue';


export default {

  name: "LoginView",
   components: {
      FooterView
    
  },
  data() {
    return {
      email: "",
      password: "",
    }
      ;
  }
  ,
  methods: {
    handleSubmit() {
      AuthService.login(this.email, this.password).then((response) => {
        console.log(response.data.token)
        AuthService.setAccessToken(response.data.token);
        this.$router.push("/");

      }).catch((error) => {
        console.log(error);
      });
    }
  }
}
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

.iniciar{



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
  width: 33%;
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
p{
  float: right;
  margin-top: 10px;
  color: #18A0FB;

}
</style>