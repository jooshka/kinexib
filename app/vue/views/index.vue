<template>
  <section class="main-map">
    <header class="double-caption">
      <div class="container">
        <choose-city></choose-city>
      </div>
    </header>
    <main-map></main-map>
  </section>
</template>

<script>

  import mainMap     from '../components/index/main_map.vue'
  import chooseCity  from '../components/index/choose_city.vue'

  export default {

    created() {
      this.fetch_cities();
    },

    methods: {
      fetch_cities() {
        this.$store.dispatch('fetch_cities');
      }
    },

    components: {
      mainMap,
      chooseCity
    }
  }
</script>
