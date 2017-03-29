<template>
  <div class="chose-city">
    <div class="container">
      <span class="pr-10">Выбранный город:</span>
      <span class="text-red">
        <i class="fa fa-map-marker pr-10"></i>
        <span class="js-chose-city">{{title}}</span>
      </span>
    </div>
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
