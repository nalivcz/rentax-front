<template>
    <div style="padding-top:5%; padding-left:10%; padding-right:10%;">
        <div :style="{backgroundImage: `url(` + require(`@/assets/bienesraices/${srcImagen}`) + `)`  , backgroundSize: '100% 100%', height : '170px',display: 'flex', flexDirection : 'column', justifyContent:'center'}">
            <span class="white--text " style="font-size: 24px; font-weigth: bold">{{titulo}}</span>
            <v-container>
                <v-btn
                tile
                color="#4d4d4f"
                style="margin-top:30px;"
                outlined
                class="white--text "
                @click="navegar()"
                >
                VER MÁS
                <v-icon right color="grey">
                    mdi-play
                </v-icon>
                </v-btn>
            </v-container>
        </div>
    </div>
</template>

<script>
export default {
    name : "BienesResponsive",
    props : {
        srcImagen : String, 
        titulo : String , 
        ruta : String
    },
    methods:{
        navegar:function(){
            console.log(this.ruta);
            var subRuta = '/bienesRaices/' + this.ruta ;
            this.$router.push(subRuta);
          }
         
        }
    }
</script>

<style>

</style>