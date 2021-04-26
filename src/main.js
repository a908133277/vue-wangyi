import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant'
import 'vant/lib/index.css'
import VueRouter from 'vue-router'
import router from './router/index'
import { Lazyload } from 'vant';
import store from './store/index'
Vue.use(Lazyload, {});
Vue.use(VueRouter)
Vue.use(Vant)
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
