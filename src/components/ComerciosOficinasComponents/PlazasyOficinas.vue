<template>
    <div style="display: flex; flex-direction : column;">
        <center>
        <v-avatar :size="tamañoIcono" color="#0d6a11">
        <img
            :src="require(`@/assets/${srcImagen}`)"
            alt="John"
            style="opacity : .5"
        >
        <span class="white--text CircularStd-Bold" style="position:absolute; font-size: 18px; width:50%;">{{titulo}}</span>
        </v-avatar>
        </center>
        <v-container >
            <center>
            <v-btn
            tile
            color="#4d4d4f"
            style="margin-top:30px;"
            
            class="white--text"
            @click="navegar()"
            >
            VER MÁS
            <v-icon right color="green">
                mdi-play
            </v-icon>
            </v-btn>
            </center>
        </v-container>
    </div>
</template>

<script>
import {mapMutations} from 'vuex';
export default {
    name : "AvatarDownButton",
    props : {
        srcImagen : String, 
        titulo : String , 
        tamañoIcono : Number,
        ruta: String 
    },
    methods:{
        ...mapMutations(['setCentro']),
        navegar:function(){
            var subRuta = '/comercialOficinas/' + this.ruta ;
            console.log(this.titulo.slice(6,this.titulo.length))
            this.setCentro(this.titulo.slice(6,this.titulo.length));
            this.$router.push(subRuta);
          }
         
        }
    }

</script>

<style>

</style>