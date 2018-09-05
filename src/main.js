import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import i18n from './i18n'

import './styles/quasar.styl'
import iconSet from 'quasar-framework/icons/fontawesome'
import lang from 'quasar-framework/i18n/en-us'
import 'quasar-extras/animate'
import 'quasar-extras/roboto-font'
import 'quasar-extras/fontawesome'
import Quasar, * as All from 'quasar'
import VCharts from 'v-charts'
Vue.use(Quasar, {
  iconSet: iconSet,
  i18n: lang,
  components: All,
  directives: All,
  plugins: All
})
Vue.use(VCharts)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')



