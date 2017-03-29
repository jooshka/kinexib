import Vue   from 'vue'
import { store } from './store.es6'
import Map   from './views/map.vue'

new Vue({
  store,
  render: h => h(Map)
}).$mount('#map-app')
