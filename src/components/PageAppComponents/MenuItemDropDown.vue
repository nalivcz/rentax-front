<template>
    <v-menu
      open-on-hover
      top
      offset-y
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="black"
          dark
          text
          rounded
          class="my-2"
          v-bind="attrs"
          v-on="on"
          @click="navegar()"
        >
          {{descripcion}}
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-title>{{ item.titulo }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
</template>

<script>
import {mapMutations,mapState} from 'vuex';
  export default {
    name : 'MenuItemDropDown',
    props : { items2 : Array, descripcion :{type : String, required : true } , ruta : String},
    
    computed:{
        ...mapState['rutaOpcion']
    },
    methods : {
        ...mapMutations['navegar'],
        navegar:function(){
            //this.navegar(this.ruta);
            console.log('la ruta es?' + this.ruta);
            if (this.$route.path !== this.ruta) this.$router.push('/'+this.ruta);
        }
    }
  }
</script>