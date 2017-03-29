import Vue       from 'vue'
import { store } from './store/index/store.es6'
import Index     from './views/index.vue'

new Vue({
  store,
  render: h => h(Index)
}).$mount('#index-app')
