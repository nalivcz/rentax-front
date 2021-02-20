<template>
<div class="text-center">
    <v-menu
      open-on-hover
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
          outlined
          @click="navegar()"
        >
          {{descripcion}}
        </v-btn>
      </template>

      <div v-if="items2.length > 0">
        <v-list>
          <v-list-item
            v-for="(item, index) in items2"
            :key="index"
            link
          >
            <v-list-item-title><span style="color:green"> {{ item.titulo }}</span></v-list-item-title>
          </v-list-item>
        </v-list>
      </div>
    </v-menu>
</div>   
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
            
            if (this.$route.path !== this.ruta) this.$router.push('/'+this.ruta);
        },
        verMasFunction:function(){

        }
    }
  }
</script>