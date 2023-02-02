import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login/Login'
import Home from '@/components/Home/Home'
import ActualizarPrecios from '@/components/ActualizarPrecios/ActualizarPrecios'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/control-interno',
      name: 'Control interno',
      component: ActualizarPrecios
    },
  ],
  mode: 'history'
})
