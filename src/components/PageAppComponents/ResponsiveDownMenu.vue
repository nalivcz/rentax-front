<template>
    <div class="CircularStd-Black">
        <div class="CircularStd-Black" style="display:flex; flex-direction:column; padding:10px; ">
            <center>
            <span style="margin-bottom:10px;">MENÚ</span>    
            </center>
            <center>
            <template v-for="opcion in opcionesLower" v-bind:id="opcion.id">
                
                <div :key="opcion.id" >
                <span :key="opcion.id" @click="navegar(opcion.ruta)" style="text-decoration: underline;">{{opcion.descripcion}}</span>    
                </div>
                
            </template>
            </center>
        </div>
    </div>
</template>
<script>
export default {
    name : 'ResponsiveDownMenu',
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
      ],
       opcionesLower : [
          {
              id: 1,
              descripcion : 'Nosotros',
              ruta : 'nosotros',
              subMenus : [
              ]
          },
          {
              id: 2,
              descripcion : 'Desarrollos',
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
              descripcion : 'Comercial / Oficinas',
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
              descripcion : 'Bienes Raíces',
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
              descripcion : 'Galería',
              ruta : 'galeria',
              subMenus : [
                 
              ]
          },
          {
              id: 6,
              descripcion : 'Contáctanos',
              ruta : 'contactanos',
              subMenus : [    
              ]
          },
      ]
    }),
    methods:{
        irInicio:function(){
            this.$router.push('/');
        },
        navegar:function(route){
            //this.navegar(this.ruta);
            
            if (this.$route.path !== this.ruta) this.$router.push('/'+route);
        },
    }
}
</script>
<style scoped>

</style>