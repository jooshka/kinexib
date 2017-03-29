<template>
  <div class="play fz24">
    <span class="pr-10">Полный список магазинов в:</span>
    <span class="text-red">
      <i class="fa fa-map-marker pr-10"></i>
      <span class="js-chose-city">{{title}}</span>
    </span>
  </div>
</template>

<script>
  export default {

    computed: {
      title() {
        return this.$store.getters.getActiveCityTitle
      }
    }

  }
</script>
