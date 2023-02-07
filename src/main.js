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
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const options = {
  confirmButtonColor: '#E11419',
  cancelButtonColor: '#ff7674',
};

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use (BootstrapVueIcons);
Vue.use(VueCookies);
Vue.use(VueSweetalert2, options);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  vuetify,
  template: '<App/>'
}
)


