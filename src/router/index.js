import Vue from 'vue'
import VueRouter from 'vue-router'
import PageApp from '../views/PageApp.vue'
import Index from '../views/Index.vue'
import Login from '../views/Login.vue'

import Nosotros from '../views/nosotros/Nosotros.vue';
import Comerciosoficinas from '../views/comerciosoficinas/Comerciosoficinas.vue';
import BienesRaices from '../views/bienesraices/BienesRaices.vue';
import Contactanos from '../views/contactanos/Contactanos.vue' ;
import Desarrollos from '../views/desarrollos/Desarrollos.vue'; 
import Galeria from '../views/galeria/Galeria.vue';
Vue.use(VueRouter)

const routes = [
  {
    path : '/',
    name : 'index',
    component : Index,
  },
  {
    path: '/menu',
    name: 'App',
    component : PageApp,
    children : [
    {
      path: '/nosotros',
      component: Nosotros
    },
    {
      path: '/comercialoficinas',
      component: Comerciosoficinas
    } ,
    {
      path: '/contactanos',
      component: Contactanos
    } ,
    {
      path: '/desarrollos',
      component: Desarrollos
    }  ,
    {
      path: '/bienesraices',
      component: BienesRaices
    } ,
    {
      path: '/galeria',
      component: Galeria
    } 
  ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
