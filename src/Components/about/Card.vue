<template>
  <div class="card rounded m-2">
    <div class="card-body text-center">
      <div class="mt-3 mb-4">
        <img
          :src="contacts.photo"
          class="rounded-circle img-fluid"
          style="width: 100px"
        />
      </div>
      <h4 class="mb-2">{{ contacts.name }}</h4>
      <p class="text-muted mb-4">
        {{ contacts.user }}
        <br />
        {{ contacts.position }}
      </p>
      <div class="mb-4 pb-2">
        <a
          :href="contacts.linkedin"
          type="button"
          class="btn btn-grey px-2 mx-1"
          target="_blank"
        >
          <i class="bi bi-linkedin"></i>
        </a>
        <a
          :href="contacts.twitter"
          type="button"
          class="btn btn-grey px-2 mx-1"
          target="_blank"
        >
          <i class="bi bi-twitter fa-lg"></i>
        </a>
        <a
          :href="contacts.github"
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
  name: 'CardProgrammer',
  props: {
    contacts: {
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
