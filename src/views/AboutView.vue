<template>
  <div>
    <section id="header">
      <Header />
    </section>
    <section id="company">
      <TitleCat title="Nuestro Proyecto" />
      <p class="text-muted text-center">
        Ecommerce para la venta de productos para Mascotas
      </p>
      <p class="p-5">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <div class="container">
        <div class="row d-flex justify-content-center align-items-center">
          <div class="col-md-6 col-lg-4 col-xl-3">
            <Card />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Header from "../Components/about/Header.vue";
import Card from "../Components/about/Card.vue";
import TitleCat from "../Components/TitleCat.vue";

export default {
  name: "AboutView",
  components: {
    Header,
    TitleCat,
    Card,
  },
  data() {},
};
</script>

<style scoped></style>
