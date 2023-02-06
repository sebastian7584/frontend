// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vuetify from './plugins/vuetify'
import VueCookies from 'vue-cookies'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import  BootstrapVueIcons  from 'bootstrap-vue'

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use (BootstrapVueIcons);
Vue.use(VueCookies);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  vuetify,
  template: '<App/>'
}
)


