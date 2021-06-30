<template>
    <div style="display: flex; flex-direction : column;">
        <v-avatar size="230" color="black">
        <img
            :src="require(`@/assets/bienesraices/${srcImagen}`)"
            alt="John"
            style="opacity : .2"
        >
        <span class="white--text CircularStd-Black " style="position:absolute; font-size: 24px;">{{titulo}}</span>
        </v-avatar>
        <v-container>
            <v-btn
            tile
            color="#4d4d4f"
            style="margin-top:30px;"
            outlined
            class="white--text CircularStd-Bold"
            @click="navegar()"
            >
            VER MÁS
            <v-icon right color="grey">
                mdi-play
            </v-icon>
            </v-btn>
        </v-container>
    </div>
</template>

<script>
export default {
    name : "AvatarDownButton",
    props : {
        srcImagen : String, 
        titulo : String , 
        ruta : String
    },
    methods:{
        navegar:function(){
            var subRuta = '/bienesRaices/' + this.ruta ;
            
            this.$router.push(subRuta);
          }
         
        }
    }

</script>

<style>

</style>