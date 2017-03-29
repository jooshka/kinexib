<template>
  <div class="col-auto col building">
    <div class="building-title">{{title}}</div>
    <div class="building-contact">
      <div class="building-item">
        <span class="building-icon text-blue"><i class="icon icon-marker"></i></span>
        <a href="#!" @click.prevent="open_baloon" :id="'s_'+index">{{address}}</a>
      </div>
      <!-- building-item -->
      <div class="building-item">
        <span class="building-icon"><i class="icon icon-phone"></i></span>
        <span>{{phone}}</span>
      </div>
      <!-- building-item -->
      <div class="building-item">
        <span class="building-icon text-blue"><i class="icon icon-mail"></i></span>
        <a :href="'mailto:' + email">{{email}}</a>
      </div>
      <!-- building-item -->
      <div class="building-item">
        <span class="building-icon"><i class="icon icon-site"></i></span>
        <a :href="site">{{site}}</a>
      </div>
      <!-- building-item -->
    </div>
    <!-- building-contacts -->
  </div>
</template>

<script>
  export default {
    props: [
      'title',
      'address',
      'phone',
      'email',
      'site',
      'index'
    ],

    methods: {
      open_baloon(event) {
        let idx = Number(event.target.id.split('_')[1])
        this.$store.getters.getShopMarkers(idx).balloon.open();
      }
    }
  }
</script>
