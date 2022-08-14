<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

      <div class="form-floating">
        <input
          type="email"
          class="form-control"
          name="email"
          placeholder="name@example.com"
          v-model="email"
        />
        <label>Email</label>
      </div>

      <div class="form-floating">
        <input
          type="password"
          class="form-control"
          name="password"
          placeholder="Password"
          v-model="password"
        />
        <label>Password</label>
      </div>

      <button class="w-100 btn btn-lg btn-primary">Submit</button>
    </form>
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
</style>