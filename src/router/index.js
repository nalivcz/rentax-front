import Vue from 'vue'
import VueRouter from 'vue-router'
import PageApp from '../views/PageApp.vue'
import Index from '../views/Index.vue'
import Login from '../views/Login.vue'
import Prueba from '../components/prueba.vue'
import Nosotros from '../views/nosotros/Nosotros.vue';
import Comerciosoficinas from '../views/comerciosoficinas/Comerciosoficinas.vue';
import BienesRaices from '../views/bienesraices/BienesRaices.vue';
import Contactanos from '../views/contactanos/Contactanos.vue' ;
import Desarrollos from '../views/desarrollos/Desarrollos.vue'; 
import Galeria from '../views/galeria/Galeria.vue';
import CentroBalcones from '../views/desarrollos/CentroBalcones.vue';
Vue.use(VueRouter)


const pathNosotros = '/nosotros';
const pathComercialOficinas = '/comercialoficinas';
const pathContactanos = '/contactanos';
const pathDesarrollos = '/desarrollos';
const pathBienesRaices = '/bienesraices';
const pathGaleria = '/galeria';

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
      path: pathNosotros,
      component: Nosotros
    },
    {
      path: pathComercialOficinas,
      component: Comerciosoficinas
    } ,
    {
      path: pathContactanos,
      component: Contactanos
    } ,
    {
      path: pathDesarrollos,
      component: Desarrollos
    }  ,
    {
      path: pathBienesRaices,
      component: BienesRaices
    } ,
    {
      path: pathGaleria,
      component: Galeria
    },
    {
      path: pathComercialOficinas+'/centrobalcones',
      component: CentroBalcones
    }     
  ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/pruebas',
    name: 'Prueba',
    component: Prueba
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
