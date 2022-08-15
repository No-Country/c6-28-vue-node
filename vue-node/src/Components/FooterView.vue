<template>
  <div>
    <div>
      <img src="https://res.cloudinary.com/dytpump6i/image/upload/v1660593048/Logo_ugs7jt.svg" alt="logo">
    </div>

    <ul class="footer01">
      <li>Comunidad</li>
      <li>Empresa</li>
      <li>Beneficios</li>
    </ul>

     <div class="footer-bottom">
      <p> &copy;Mundo mascota, inc.2019</p>

    </div>
  </div>
</template>

<script>
export default {
  name: "FooterView",
};
</script>

<style scoped>
img {
  display: flex;
  align-items: center;
  padding: 0.6em;
  color: white;
  position: relative;
  width: 100%;
  height: 84px;
  justify-content: center;

}

ul{
   display:flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
  
}

li{
  font-family: monserrat;
  font-style: normal;
  font-size: 15px;
  float: left;
  display: block;
  padding: 1.5em;
  
}

.footer-bottom p{
   text-align: center;
      font-size: 14px;
      word-spacing: 2px;
      text-transform: capitalize;
       text-transform: uppercase;
      opacity: .4;
      font-weight: 200
      ;
}
</style>