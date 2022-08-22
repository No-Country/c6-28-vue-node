<template>
<HeaderItem />
<div class="container">
    <HeaderBanner />
    <!--Aqui inicia el filtro-->
    <div class="row g-3 my-2">
      <div class="col-md-6 col-lg-4 col-xl-3">
        <SearchBar class="SearchBar" />
      </div>
      <div class="col-md-6 col-lg-4 col-xl-3">
        <form action="">
          <div class="form-group">
            <label for="category">Categorías</label>
            <select class="form-control" id="category">
              <option>Producto 1</option>
              <option>Producto 2</option>
              <option>Producto 3</option>
              <option>Producto 4</option>
              <option>Producto 5</option>
            </select>
          </div>
        </form>
      </div>
      <div class="col-md-6 col-lg-4 col-xl-3">
        <form action="">
          <div class="form-group">
            <label for="price" class="form-label">Filtrar por precio</label>
            <input
              type="range"
              class="form-range"
              min="0"
              max="51800"
              id="price"
            >
          </div>
        </form>
      </div>
      <div class="col-md-6 col-lg-4 col-xl-3">
        <form action="">
          <div class="form-group">
            <label for="mark">Marcas</label>
            <select class="form-control" id="mark">
              <option>Marca 1</option>
              <option>Marca 2</option>
              <option>Marca 3</option>
              <option>Marca 4</option>
              <option>Marca 5</option>
            </select>
          </div>
        </form>
      </div>
    </div>
    <!--Aqui inicia los productos-->
    <div class="row g-3 my-2">
        <div class="col-md-6 col-lg-4 col-xl-3">
          <div class="card">
            <img class="card-img-top" src="https://picsum.photos/id/132/200/200" alt="Card image cap">
            <div class="card-body">
              <h2>
                1000$
                <span
                  style="color: green;
                  font-size: 20px;
                  display: block;
                  float: right"
                >
                  10% OFF
                </span>
              </h2>
              <p>Lorem ipsum dolor sit atme t, cosectur adipiscing elit.</p>
              <p class="text-center">
                <a
                  href="#"
                  target="_blank"
                  class="btn btn-success"
                >
                  Comprar
                </a>
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-4 col-xl-3">
          <div class="card">
            <img class="card-img-top" src="https://picsum.photos/id/134/200/200" alt="Card image cap">
            <div class="card-body">
              <h2>
                1000$
                <span
                  style="color: green;
                  font-size: 20px;
                  display: block;
                  float: right"
                >
                  10% OFF
                </span>
              </h2>
              <p>Lorem ipsum dolor sit atme t, cosectur adipiscing elit.</p>
              <p class="text-center">
                <a
                  href="#"
                  target="_blank"
                  class="btn btn-success"
                >
                  Comprar
                </a>
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-4 col-xl-3">
          <div class="card">
            <img class="card-img-top" src="https://picsum.photos/id/136/200/200" alt="Card image cap">
            <div class="card-body">
              <h2>
                1000$
                <span
                  style="color: green;
                  font-size: 20px;
                  display: block;
                  float: right"
                >
                  10% OFF
                </span>
              </h2>
              <p>Lorem ipsum dolor sit atme t, cosectur adipiscing elit.</p>
              <p class="text-center">
                <a
                  href="#"
                  target="_blank"
                  class="btn btn-success"
                >
                  Comprar
                </a>
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-4 col-xl-3">
          <div class="card">
            <img class="card-img-top" src="https://picsum.photos/id/137/200/200" alt="Card image cap">
            <div class="card-body">
              <h2>
                1000$
                <span
                  style="color: green;
                  font-size: 20px;
                  display: block;
                  float: right"
                >
                  10% OFF
                </span>
              </h2>
              <p>Lorem ipsum dolor sit atme t, cosectur adipiscing elit.</p>
              <p class="text-center">
                <a
                  href="#"
                  target="_blank"
                  class="btn btn-success"
                >
                  Comprar
                </a>
              </p>
            </div>
          </div>
        </div>
    </div>
</div>
<FooterView />
</template>

<script>
import HeaderItem from '@/Components/HeaderItem.vue';
import FooterView from '../Components/FooterView.vue';
import SearchBar from '../Components/SearchBar.vue';

/* Componentes para MarketView*/
import HeaderBanner from '../Components/HeaderBanner';

export default {
  name: 'MarketView',
  components: {
    HeaderItem,
    SearchBar,
    FooterView,
    HeaderBanner,
  },
  data() {},
};
</script>
