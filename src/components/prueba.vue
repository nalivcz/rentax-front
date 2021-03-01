<template>
  <div class="CircularStd-Black" style="display:flex; flex-direction:column; justify-content:center">
    <div class="hidden-sm-and-down" style="margin-top:30px;">
      <div style="dislplay:flex; flex-direction:row; justify-content:center;" class="text-center">
        <img
          width="220px"
          src="../assets/logorentax.jpg"
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
</template>


<script>
import MenuItemDropDown from './PageAppComponents/MenuItemDropDown'
export default {
    name : 'prueba',
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
