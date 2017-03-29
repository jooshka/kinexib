import Vue   from 'vue'
import Vuex  from 'vuex'
import _     from 'lodash'

Vue.use(Vuex)

// удалить, когда через апи будет сделано
import {_cities, _shops_3, _shops_24, _shops_5} from '../temp_data'

export const store = new Vuex.Store({
  debug: true,
  state: {
    cities: [],
    active_city_idx: 0,
    shops:  [],
    yandex_ready: false,
    city_map: null,
    shop_markers: null
  },

  getters: {
    isYandexReady: state => state.yandex_ready,

    getCities: state => state.cities,
    getShops:  state => state.shops,
    getShopMarkers: (state) => (idx) => state.shop_markers.get(idx),

    getActiveCityTitle: state => {
      let title = "";
      if (state.cities[ state.active_city_idx ])
        title = state.cities[ state.active_city_idx ].title;
      return title;
    }
  },

  mutations: {
    SET_CITIES(state, cities) {
      state.cities = _.sortBy(cities, ['title']);
    },

    SET_ACTIVE_CITY(state, idx) {
      state.active_city_idx = idx;
    },

    SET_SHOPS(state, shops) {
      state.shops = shops;
    },

    SET_YANDEX_READY(state) {
      state.yandex_ready = true;
    },

    SET_CITY_MAP(state, city_map) {
      state.city_map = city_map;
    },

    SET_SHOP_MARKERS(state, shop_markers) {
      state.shop_markers = shop_markers;
    },

    DESTROY_SHOP_MARKERS(state) {
      state.shop_markers.removeAll();
    }

  },

  actions: {
    fetch_cities ({dispatch, commit}) {
      return new Promise((resolve, reject) => {
        let cities = [];

        /* раскомментировать

        Vue.http.get('/api/cities').then(
          (response) => {
            cities = response.data;
            if(cities.length >= 1) {
              commit('SET_CITIES', cities);
              dispatch('set_active_city', [0, 'idx']);
              resolve();
            }
          },
          (response) => { redject() });
        */

        /** заглушка **/
        setTimeout(() => {
          cities = _cities;
          commit('SET_CITIES', cities);
          dispatch('set_active_city', [0, 'idx']);
          resolve()
        }, 500)
        /** заглушка **/

      })

    },

    set_active_city({dispatch, commit, state}, [index, by]) {
      let idx = 0;
      if (by==='idx')
        idx = index;
      else {
        idx = state.cities.findIndex(i => i.id === index);
      }

      if (idx >= 0 ) {
        commit('SET_ACTIVE_CITY', idx );
        dispatch('fetch_shops');
      }
    },

    fetch_shops ({commit, state, dispatch}) {
      return new Promise((resolve, reject) => {

        if (!state.cities[state.active_city_idx]) resolve();

        let shops = [];
        let id = state.cities[state.active_city_idx].id;

        /* раскомментировать

        Vue.http.get('/api/cities/'+id+'/shops').then(
          (response) => {
            shops = response.data;
            if(shops.length >= 1) {
              commit('SET_SHOPS', shops);

              if (state.city_map)
                dispatch('set_shop_markers');
              else
                dispatch('init_city_map');

              resolve()
            }
          },
          (response) => { reject() });
        */

        /** заглушка **/
        setTimeout(() => {
               if (id==3)  shops = _shops_3;
          else if (id==24) shops = _shops_24;
          else if (id==5)  shops = _shops_5;
          commit('SET_SHOPS', shops);

          if (state.city_map)
            dispatch('set_shop_markers');
          else
            dispatch('init_city_map');

          resolve()
        }, 500)
        /** заглушка **/

      })

    },

    set_yandex_ready({commit, dispatch}) {
      commit('SET_YANDEX_READY');
    },

    init_city_map({getters, commit, dispatch}) {
      let timerId = setInterval(function() {
        if (getters.isYandexReady) {
          clearInterval(timerId);
          let city_map = new ymaps.Map("map",
            {
              center: [55.76, 37.64],
              zoom: 14,
              controls: []
            },
            {
              suppressMapOpenBlock: true
            }
          );
          commit('SET_CITY_MAP', city_map);
          dispatch('set_shop_markers');
        };
      }, 500);

      setTimeout(() => { clearInterval(timerId); }, 10000)

    },

    set_shop_markers({dispatch, state}) {
      let shop_markers = state.shop_markers;
      if (state.shop_markers)
         dispatch('destroy_shop_markers');
      else
         shop_markers = new ymaps.GeoObjectCollection({});

      let MyBalloonContentLayoutClass = ymaps.templateLayoutFactory.createClass(
       '<div class="building-title">{{properties.title}}</div><hr style="border: 1px solid #ccc; margin: 6.5px 0;">'
      +  '<div class="building-item"><span class="building-icon"><i class="icon icon-marker"></i></span><span>{{properties.address}}</span></div>'
      +  '<div class="building-item"><span class="building-icon"><i class="icon icon-phone"></i></span><span>{{properties.phone}}</span></div>'
      +  '<div class="building-item"><span class="building-icon"><i class="icon icon-mail"></i></span><span>{{properties.email}}</span></div>'
      +  '<div class="building-item"><span class="building-icon"><i class="icon icon-site"></i></span><span>{{properties.site}}</span></div>'
      );

      if (state.shops.length > 0) {
        for (let i = 0; i < state.shops.length; i++) {
          shop_markers.add(new ymaps.Placemark(
            state.shops[i].coordinates,
            {
              title:   state.shops[i].title,
              address: state.shops[i].address,
              phone:   state.shops[i].phone,
              email:   state.shops[i].email,
              site:    state.shops[i].site
            },
            {
              iconLayout: 'default#image',
              iconImageClipRect: [[0,0], [128, 128]],
              iconImageHref: 'images/marker.png',
              iconImageSize: [40, 40],
              iconImageOffset: [-19, -30],
              balloonContentLayout: MyBalloonContentLayoutClass
            }
          ));
        }
        state.city_map.geoObjects.add(shop_markers);
        state.city_map.setBounds(shop_markers.getBounds(), {checkZoomRange:true});
        dispatch('save_shop_markers', shop_markers);
      }
    },

    save_shop_markers({commit}, shop_markers) {
      commit('SET_SHOP_MARKERS', shop_markers);
    },

    destroy_shop_markers({commit}) {
      commit('DESTROY_SHOP_MARKERS');
    },
  }

});
