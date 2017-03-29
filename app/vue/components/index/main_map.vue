<template>
  <footer class="container-map">
    <div id="map"></div>
  </footer>
</template>

<script>

  export default {
    mounted() {
      ymaps.ready(() => {
        this.init()
      })
    },

    methods: {
      init() {
        this.$store.dispatch('set_yandex_ready');
      }

    }
  }
</script>
