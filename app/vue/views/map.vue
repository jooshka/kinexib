<template>
  <div>

    <header class="page-header page-header_map">
      <a-header></a-header>
      <div class="header-panel">
        <div class="container">
          <h1 class="header-panel__title mb-15">Адреса магазинов. Выберите нужный город.</h1>
          <hr class="line line_dark mb-20" />
          <div class="row">
            <div class="col-md-4"><city-list></city-list></div>
            <div class="col-lg-12 hidden-sm-down map-markers"><country-map></country-map></div>
          </div>
        </div>
      </div>
    </header>

    <main id="main">
      <chosen-city1></chosen-city1>
      <city-map></city-map>
      <div class="map-bottom"></div>
      <div class="mb-100">
        <img class="woman-back" src="images/woman-back.jpg" alt="" />
        <div class="container">
          <chosen-city2></chosen-city2>
          <hr class="line mt-10 mb-20" />
          <div class="row flex-items-between">

            <shop-card
              v-for="(shop, index) in shops"
              :key=shop.id
              :index=index
              :title=shop.title
              :address=shop.address
              :phone=shop.phone
              :email=shop.email
              :site=shop.site
            >
            </shop-card>

          </div>
        </div>
      </div>
    </main>

  </div>
</template>

<script>

  import aHeader     from '../components/common/header.vue'
  import cityList    from '../components/map/city_list.vue'
  import countryMap  from '../components/map/country_map.vue'
  import cityMap     from '../components/map/city_map.vue'
  import shopCard    from '../components/map/shop_card.vue'
  import chosenCity1 from '../components/map/chosen_city_1.vue'
  import chosenCity2 from '../components/map/chosen_city_2.vue'

  export default {

    computed: {
      shops() {
        return this.$store.getters.getShops
      }
    },

    created() {
      this.fetch_cities();
    },

    methods: {
      fetch_cities() {
        this.$store.dispatch('fetch_cities');
      }
    },

    components: {
      aHeader,
      cityList,
      countryMap,
      cityMap,
      shopCard,
      chosenCity1,
      chosenCity2
    }
  }
</script>
