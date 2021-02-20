<template>
     <v-app-bar
      prominent
      color="white"
      scroll-target="#scrolling-techniques-7"
      fixed 
      elevation="0"
    >
        <v-container class="text-center">
            <v-row justify="center">
                <img
                width="220px"
                src="../../assets/logorentax.jpg"
                @click="irInicio()"
                >   
            </v-row>

            <v-row
            justify="center"
            
            >
            <template v-for="opcion in opciones" v-bind:id="opcion.id">
                <MenuItemDropDown :key="opcion.id" :descripcion="opcion.descripcion"  :items2="opcion.subMenus" :ruta="opcion.ruta"></MenuItemDropDown>
            </template>
            
            </v-row>
        </v-container>
    </v-app-bar>
</template>
<script>
import MenuItemDropDown from './MenuItemDropDown'
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
                      titulo : 'Tu casa a la medida '
                  },
                  {
                      titulo : 'San Agustin 425 Departamentos'
                  },
                  {
                      titulo : 'Veranda Los Cabos'
                  }
              ]
          },
          {
              id: 3,
              descripcion : 'COMERCIAL / OFICINAS',
              ruta : 'comercialOficinas',
              subMenus : [
                  {
                      titulo : 'Centro Andrade'
                  },
                  {
                      titulo : 'Centro Balcones'
                  },
                  {
                      titulo : 'Centro Alfa'
                  },
                  {
                      titulo : 'Centro Delta'
                  },
                  {
                      titulo : 'Centro 87'
                  }
              ]
          },
          {
              id: 4,
              descripcion : 'BIENES RAÍCES',
              ruta : 'bienesRaices',
              subMenus : [
                  {
                      titulo : 'Casas y Departamentos'
                  },
                  {
                      titulo : 'Áreas Comerciales'
                  },
                  {
                      titulo : 'Áreas Industriales'
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
        irInicio:function(){
            this.$router.push('/');
        }
    }
}
</script>