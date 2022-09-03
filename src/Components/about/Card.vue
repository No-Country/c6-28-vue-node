<template>
  <div class="card rounded m-2">
    <div class="card-body text-center">
      <div class="mt-3 mb-4">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
          class="rounded-circle img-fluid"
          style="width: 100px"
        />
      </div>
      <h4 class="mb-2">{{ developers.nombre }}</h4>
      <p class="text-muted mb-4">
        {{ developers.apellidos }}
        <br />
        <!-- {{ contacts.position }} -->
      </p>
      <div class="mb-4 pb-2">
        <a
          :href="developers.linkedin"
          type="button"
          class="btn btn-grey px-2 mx-1"
          target="_blank"
        >
          <i class="bi bi-linkedin"></i>
        </a>
        <a
          :href="developers.twitter"
          type="button"
          class="btn btn-grey px-2 mx-1"
          target="_blank"
        >
          <i class="bi bi-twitter fa-lg"></i>
        </a>
        <a
          :href="developers.github"
          type="button"
          class="btn btn-grey px-2 mx-1"
          target="_blank"
        >
          <i class="bi bi-github fa-lg"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardProgrammer",
  props: {
    developers: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.btn-grey {
  background-color: #898aa6;
  color: white;
  padding: 5px;
  font-size: 18px;
}

.btn-grey:hover {
  background-color: transparent;
  border: 3px solid #898aa6;
  color: #898aa6;
}
</style>
