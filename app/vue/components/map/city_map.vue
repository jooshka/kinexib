<template>
  <div class="container-map">
    <div style="height: 500px;" id="cityMap"></div>
  </div>
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
