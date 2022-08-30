<template>
  <div class="mb-4">
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
        <div class="row justify-content-center align-items-center">
          <div
            class="col-md-6 col-lg-4 col-xl-3"
            v-for="(contact, i) in contacts"
            :key="i"
          >
            <Card :contacts="contact" />
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
  data() {
    return {
      contacts: [
        {
          photo:
            "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp",
          name: "Yenifer Ramírez",
          user: "@yeniferrosana",
          position: "FrontEnd Developer",
          linkedin: "https://www.linkedin.com/in/yeniferrosana/",
          twitter: "https://twitter.com/yeniferrosana",
          github: "https://github.com/yeniferrosana",
        },
        {
          photo:
            "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp",
          name: "Leandro Martini",
          user: "@manrique1986",
          position: "FrontEnd Developer",
          linkedin: "https://www.linkedin.com/in/leandro-martini-developer",
          twitter: "/#",
          github: "https://github.com/manrique1986",
        },
        {
          photo:
            "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp",
          name: "Carolina Quintoman",
          user: "@carolinaquintoman",
          position: "BackEnd Developer",
          linkedin: "/#",
          twitter: "/#",
          github: "https://github.com/CarolinaQuintoman",
        },
        {
          photo:
            "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp",
          name: "Ariel Cuello",
          user: "@cuelloariel",
          position: "BackEnd Developer",
          linkedin: "/#",
          twitter: "/#",
          github: "https://github.com/cuelloariel",
        },
        {
          photo:
            "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp",
          name: "James Noria",
          user: "@jamesnoria",
          position: "BackEnd Developer",
          linkedin: "/#",
          twitter: "/#",
          github: "https://github.com/jamesnoria",
        },
        {
          photo:
            "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp",
          name: "Daniel Aguilar",
          user: "@Onnichan",
          position: "FrontEnd Developer",
          linkedin: "/#",
          twitter: "/#",
          github: "https://github.com/Onnichan",
        },
        {
          photo:
            "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp",
          name: "Mikel Diaz",
          user: "@SBolivarLoL",
          position: "BackEnd Developer",
          linkedin: "/#",
          twitter: "/#",
          github: "https://github.com/SBolivarLoL",
        },
        {
          photo:
            "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp",
          name: "Agustin Prado",
          user: "@subjekt-iv",
          position: "FrontEnd Developer",
          linkedin: "/#",
          twitter: "/#",
          github: "https://github.com/subjekt-iv",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
