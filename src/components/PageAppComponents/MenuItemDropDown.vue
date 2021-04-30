<template>
<div >
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
            <v-list-item-title><span style="color:green" @click="navegarSub(item.ruta)">{{ item.titulo }}</span></v-list-item-title>
          </v-list-item>
        </v-list>
      </div>
    </v-menu>
</div>   
</template>

<script>
import {mapMutations} from 'vuex';
  export default {
    name : 'MenuItemDropDown',
    props : { items2 : Array, descripcion :{type : String, required : true } , ruta : String},
    
    
    methods : {
      ...mapMutations(['setCentro']),
        navegar:function(){
            //this.navegar(this.ruta);
            if(this.ruta !== "desarrollos"){
              if (this.$route.path !== this.ruta) this.$router.push('/'+this.ruta);
            }
            
        },
        navegarSub:function(route){
          if(route !== ""){
             var subRuta = this.ruta + '/' + route ; 
           
            if (this.$route.path !== subRuta){
               if(route.includes('centro')){
                        //console.log('estas llendo a un centro');
                        //console.log('slicing' + route.slice(5,route.length));
                        this.setCentro(route.slice(6,route.length));
                    }
               this.$router.push('/'+subRuta);
            }
          }
         
        }
    }

  }
</script>