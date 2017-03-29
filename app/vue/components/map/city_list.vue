<template>
  <form>

    <div class="search-block search-block_sity">

      <input type="text"
             class="form-control"
             placeholder="Поиск по названиям"
             v-model="query" />

      <div class="search-block__btn">
        <button class="fild" type="button"></button>
        <i class="icon icon-search"></i>
      </div>

    </div>

    <div class="search-block__scroll scrollbar">
      <ul v-for="(cities, first_letter) in filtered_cities"
          :data-letter=first_letter
          class="search-block__list">

          <li v-for="city in cities"
              :key=city.id
              :id="'c_' + city.id"
              @click="set_active_city"
           >{{city.title}}</li>

      </ul>
    </div>

  </form>
</template>

<script>
  import _ from 'lodash'

  export default {

    data() {
      return {

        query: '',

        cities_all() {
          return this.$store.getters.getCities
        }
      }
    },

    computed: {

      filtered_cities() {
        return _.groupBy(this.findBy(this.cities_all(), this.query, 'title'), 
          function(city) {
            return city.title.substr(0,1).toUpperCase()
          }
        );
      }

    },

    methods: {

      findBy (list, value, column) {
        return list.filter(function (item) {
          return item[column].toLowerCase().includes(value.toLowerCase())
        })
      },

      set_active_city(event) {
        let city_id = Number(event.target.id.split('_')[1]);
        this.$store.dispatch('set_active_city', [city_id, 'id']);
      }

    }

  }

</script>
