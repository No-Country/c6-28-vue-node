<template>
  <div class="mb-4">
    <section id="header">
      <Header />
    </section>
    <section id="company">
    <div class="container">
      <TitleCat title="Nuestro Proyecto" />
      <p class="text-muted text-center">
        Ecommerce para la venta de productos para Mascotas
      </p>
      <p class="py-5 text-justify">
        Mundo Mascotas Ecommerce es un proyecto del Cohorte 6 de No-Country.
        Nosotros, el grupo identificado con el Nº 28 hemos creado, en un periodo
        de cinco semanas, un Ecommerce con las tecnologías Node.js y Vue.js.
        Cumpliendo con los requerimientos presentados al inicio del proyecto este
        Ecommerce permite visualizar productos para nuestras mascotas
        (aves, gatos y perros), los cuales se podrán visualizar con detalle y
        además realizar una compra tras agregar el producto al carrito.
      </p>
      </div>
      <div class="container">
        <div class="row justify-content-center align-items-center">
          <div
            v-for="(contact, i) in contacts"
            :key="i"
            class="col-md-6 col-lg-4 col-xl-3"
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
            "https://res.cloudinary.com/yeniferramirez11/image/upload/v1661896266/cloudinary-demo/yenifer_ramirez-cropped_ovqabr.png",
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
