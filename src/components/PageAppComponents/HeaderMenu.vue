<template>
    <div class="CircularStd-Black">
        <div class="text-center hidden-sm-and-down">
            <v-app-bar
            prominent
            color="white"
            scroll-target="#scrolling-techniques-7"
            fixed 
            elevation="0"
            
            >
            <div style="width:100%">
            <div class="CircularStd-Black text-center" style="display:flex; flex-direction:column; justify-content:center; margin-top:-30px">
                <div  style="margin-top:30px;">
                <div style="dislplay:flex; flex-direction:row; justify-content:center;" class="text-center">
                    <img
                    width="220px"
                    src="../../assets/logorentax.jpg"
                    @click="irInicio()"
                    >  
                </div>   
                <div style="display:flex; flex-direction:row; justify-content:center">
                    <template v-for="opcion in opciones" v-bind:id="opcion.id">
                                <MenuItemDropDown :key="opcion.id" :descripcion="opcion.descripcion"  :items2="opcion.subMenus" :ruta="opcion.ruta"></MenuItemDropDown>
                    </template>
                </div>
                </div>
            </div>
            </div>
            </v-app-bar>
        </div>
        <div class="text-center hidden-md-and-up"> 
            <v-app-bar
            color="white"
            scroll-target="#scrolling-techniques-7"
            fixed 
            elevation="0"
            >
            
            <v-menu
                
                :close-on-content-click="false"
                :nudge-width="200"
                offset-y
            >
                <template v-slot:activator="{ on, attrs }">
                    <v-app-bar-nav-icon v-bind="attrs" v-on="on"></v-app-bar-nav-icon>
                </template>

                <v-card >
                    <div class="CircularStd-Black" style="display:flex; flex-direction:column; padding:10px; ">
                        <span style="margin-bottom:10px;">MENÚ</span>
                        <template v-for="opcion in opciones" v-bind:id="opcion.id">
                            <span :key="opcion.id" @click="navegar(opcion.ruta)">{{opcion.descripcion}}</span>
                            <div :key="opcion.id" style="padding-left:10px; display:flex; flex-direction:column; padding:10px;">
                                <template v-for="sub in opcion.subMenus" v-bind:id="opcion.id">
                                    <span :key="sub.titulo" @click="navegarSub(sub.ruta, opcion.ruta)" style="color:green; font-size:12px;">{{sub.titulo}}</span>
                                </template>
                            </div>
                            <v-divider :key="opcion.id"></v-divider>
                        </template>
                    </div>
                </v-card>
            </v-menu>
            <img
            width="220px"
            src="../../assets/logorentax.jpg"
            @click="irInicio()"
            >   
            
            </v-app-bar>
        </div>
    </div>
</template>
<script>
import MenuItemDropDown from './MenuItemDropDown'
import {mapMutations} from 'vuex';
export default {
    name : 'HeaderMenu',
    components : {MenuItemDropDown } ,
    data: () => ({
     
      opciones : [
          {
              id: 1,
              descripcion : 'NOSOTROS',
              ruta : 'nosotros',
              subMenus : [
              ]
          },
          {
              id: 2,
              descripcion : 'DESARROLLOS',
              ruta : 'desarrollos',
              subMenus : [
                  {
                      titulo : 'Tu casa a la medida con Your Home',
                      ruta : 'tuCasaLaMedida'
                  },
                  {
                      titulo : 'San Agustin 425 Departamentos',
                      ruta : ''
                  },
                  {
                      titulo : 'Veranda Los Cabos',
                      ruta : ''
                  }
              ]
          },
          {
              id: 3,
              descripcion : 'COMERCIAL / OFICINAS',
              ruta : 'comercialOficinas',
              subMenus : [
                  {
                      titulo : 'Centro Andrade',
                      ruta : 'centroAndrade'
                  },
                  {
                      titulo : 'Centro Balcones',
                      ruta : 'centroBalcones'
                  },
                  {
                      titulo : 'Centro Alfa',
                      ruta : 'centroAlfa'
                  },
                  {
                      titulo : 'Centro Delta',
                      ruta : 'centroDelta'
                  },
                  {
                      titulo : 'Centro 87',
                      ruta : 'centro87'
                  }
              ]
          },
          {
              id: 4,
              descripcion : 'BIENES RAÍCES',
              ruta : 'bienesRaices',
              subMenus : [
                  {
                      titulo : 'Casas y Departamentos',
                      ruta : 'casasDepartamentos'
                  },
                  {
                      titulo : 'Áreas Comerciales',
                      ruta : 'areasComerciales'
                  },
                  {
                      titulo : 'Áreas Industriales',
                      ruta : 'areasIndustriales'
                  }
              ]
          },
          {
              id: 5,
              descripcion : 'GALERÍA',
              ruta : 'galeria',
              subMenus : [
                 
              ]
          },
          {
              id: 6,
              descripcion : 'CONTÁCTANOS',
              ruta : 'contactanos',
              subMenus : [    
              ]
          },
      ]
    }),
    methods:{
        ...mapMutations(['setCentro']),
        irInicio:function(){
            this.$router.push('/');
        },
        navegar:function(route){
            //this.navegar(this.ruta);
            
            if(route != "desarrollos"){
                if (this.$route.path !== this.ruta) this.$router.push('/'+route);
            }
            
        },
        navegarSub:function(route,mainRoute){
            var rutaIr = mainRoute + '/' + route ; 
            //console.log('mainRoute' + mainRoute + ' ' + 'route '+ route);
            if(route !== ""){
                //var subRuta = this.ruta + '/' + route ; 

                if (this.$route.path !== rutaIr) {
                    if(route.includes('centro')){
                        //console.log('estas llendo a un centro');
                        //console.log('slicing' + route.slice(5,route.length));
                        this.setCentro(route.slice(6,route.length));
                    }
                    this.$router.push('/'+rutaIr);
                }
            }
         
        }
    }
}
</script>
<style scoped>

</style>