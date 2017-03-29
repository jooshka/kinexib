<template>
  <div class="row">
    <div class="col-sm-7 col-lg-5">
      <div class="double-caption__item-dark">
        Выберите город:
      </div>
    </div>
    <div class="col-sm-9 col-lg-11">
      <div class="double-caption__item-light">
        <div class="dropdown">

          <a class="dropdown-toggle double-caption__light-title" href="#!" data-toggle="dropdown">
          {{title}}<i class="fa fa-angle-down"></i>
          </a>

          <div class="dropdown-menu">

            <button v-for="city in cities"
                class="dropdown-item"
                type="button"
                :key=city.id
                :id="'c_' + city.id"
                @click="set_active_city"
             >{{city.title}}</button>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

    computed: {
      title() {
        return this.$store.getters.getActiveCityTitle
      },

      cities() {
        return this.$store.getters.getCities
      }

    },

    methods: {
      set_active_city(event) {
        let city_id = Number(event.target.id.split('_')[1]);
        this.$store.dispatch('set_active_city', [city_id, 'id']);
      }

    }

  }
</script>
