import Vue from 'vue'
import VueRouter from 'vue-router'
import PageApp from '../views/PageApp.vue'
import Index from '../views/Index.vue'
import Login from '../views/Login.vue'
import Prueba from '../components/prueba.vue'
import Nosotros from '../views/nosotros/Nosotros.vue';
import Comerciosoficinas from '../views/comerciosoficinas/Comerciosoficinas.vue';
import BienesRaicesIndex from '../views/bienesraices/BienesRaicesIndex.vue';
import BienesRaices from '../views/bienesraices/BienesRaices.vue';
import ContactanosIndex from '../views/contactanos/ContactanosIndex.vue' ;
import Desarrollos from '../views/desarrollos/Desarrollos.vue'; 
import Galeria from '../views/galeria/Galeria.vue';
import CentroBalcones from '../views/desarrollos/CentroBalcones.vue';
import TuCasaMedida from '../views/desarrollos/TuCasaMedida.vue';
import Financiando from '../views/financiando/Financiando.vue'
import DescripcionBienesRaices from '../views/bienesraices/DescripcionBienesRaices.vue';
import consumos from '../views/pruebas/consumos.vue';
Vue.use(VueRouter)


const pathNosotros = '/nosotros';
const pathComercialOficinas = '/comercialoficinas';
const pathContactanos = '/contactanos';
const pathDesarrollos = '/desarrollos';
const pathBienesRaices = '/bienesraices';
const pathGaleria = '/galeria';
const pathFinanciando = '/financiandoTuProyecto';

const routes = [
  {
    path : '/consumos',
    name : 'consumos',
    component : consumos,
  },
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
      component: ContactanosIndex
    } ,
    {
      path: pathDesarrollos,
      component: Desarrollos
    },
    {
      path: pathFinanciando,
      component: Financiando
    }  ,
    {
      path: pathDesarrollos + '/tuCasaLaMedida',
      component: TuCasaMedida
    },
    {
      path: pathBienesRaices ,
      component: BienesRaices
    } ,
    {
      path: pathBienesRaices + '/:seccion',
      component: BienesRaicesIndex,
      props(route){
        return {rutaRouter :  route.params.seccion}
      }
    } ,
    {
      path: pathBienesRaices + '/:seccion' + '/:idBien',
      component: DescripcionBienesRaices,
      props(route){
        return {rutaRouter :  route.params.seccion, idBien : route.params.idBien}
      }
    } ,
    {
      path: pathGaleria,
      component: Galeria,
      props(){
        return {origen :  1}
      }
    },
    {
      path: pathComercialOficinas+'/:nombreCentro',
      component: CentroBalcones,
      props(route){
        return {rutaRouter :  route.params.nombreCentro}
      }
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
