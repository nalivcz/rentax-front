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
                <v-img
                max-height="67"
                max-width="232"
                src="../../assets/logorentax.jpg"
                ></v-img>   
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
                  {
                      titulo : 'Opcion 1'
                  },
                  {
                      titulo : 'Opcion 2'
                  }
              ]
          },
          {
              id: 2,
              descripcion : 'DESARROLLOS',
              ruta : 'desarrollos',
              subMenus : [
                  {
                      titulo : 'Opcion 1'
                  },
                  {
                      titulo : 'Opcion 2'
                  }
              ]
          },
          {
              id: 3,
              descripcion : 'COMERCIAL / OFICINAS',
              ruta : 'comercialOficinas',
              subMenus : [
                  {
                      titulo : 'Opcion 1'
                  },
                  {
                      titulo : 'Opcion 2'
                  }
              ]
          },
          {
              id: 4,
              descripcion : 'BIENES RAÍCES',
              ruta : 'bienesRaices',
              subMenus : [
                  {
                      titulo : 'Opcion 1'
                  },
                  {
                      titulo : 'Opcion 2'
                  }
              ]
          },
          {
              id: 5,
              descripcion : 'GALERÍA',
              ruta : 'galeria',
              subMenus : [
                  {
                      titulo : 'Opcion 1'
                  },
                  {
                      titulo : 'Opcion 2'
                  }
              ]
          },
          {
              id: 6,
              descripcion : 'CONTÁCTANOS',
              ruta : 'contactanos',
              subMenus : [
                  {
                      titulo : 'Opcion 1'
                  },
                  {
                      titulo : 'Opcion 2'
                  }
              ]
          },
      ]
    }),
}
</script>