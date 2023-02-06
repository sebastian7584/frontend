import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login/Login'
import Home from '@/components/Home/Home'
import ActualizarPrecios from '@/components/ActualizarPrecios/ActualizarPrecios'
import ActualizarPreciosPostpago from '@/components/ActualizarPrecios/ActualizarPreciosPostpago'

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
      path: '/actualizar-equipos-prepagos',
      name: 'Actualizar equipos prepago',
      component: ActualizarPrecios
    },
    {
      path: '/actualizar-equipos-postpago',
      name: 'Actualizar equipos postpago',
      component: ActualizarPreciosPostpago
    },
  ],
  mode: 'history'
})
