<template>
    <div>
        <v-carousel dark = true>
            <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="require(`@/assets/${item.src}`)"
            reverse-transition="fade-transition"
            transition="fade-transition"
            style=""
            >
            <div class="hidden-sm-and-down" style="display: flex; flex-direction: row; justify-content: center; height:100%;" >
                <div style="display:flex;  flex-direction : column; padding:30px; align-items: center; justify-content:center;">
                    <div style="display: flex; flex-direction: row; justify-content: center;">
                        <hr style="background-color:#3ab14d; width:60px; border: 2px solid #3ab14d;">
                    </div>
                    <div style="display:flex; flex-direction: column; margin-top: 5%;">
                        <span  style=" font-size:36px; color: white; letter-spacing:10px">{{item.titulo}}</span>
                        <span  style=" font-size:36px; color: GREEN; letter-spacing:10px">{{item.subtitulo}}</span>
                        <v-container v-if="item.route !=''">
                            <v-btn
                            tile
                            color="green"
                            style="margin-top:30px;"
                            class="white--text "
                            @click="navegar(item.route)"
                            >
                            VER MÁS
                            <v-icon right small>
                                mdi-play
                            </v-icon>
                            </v-btn>
                        </v-container>
                    </div>
                </div> 
            </div>
            <v-container class="hidden-md-and-up" style="display: flex; flex-direction: column; justify-content: center; height:100%;">
                <div style="display: flex; flex-direction: row; justify-content: center;">
                    <hr style="background-color:#3ab14d; width:60px; border: 2px solid #3ab14d;">
                </div>
                <div style="display:flex; flex-direction:column; text-align:justify; width:90%; padding-left:10%; margin-top:5%;">
                    <span style=" font-size:24px; color: white; letter-spacing:5px" class="CircularStd-Book">{{item.titulo}}</span>
                    <span style=" font-size:24px; color: white; letter-spacing:5px" class="CircularStd-Bold" >{{item.subtitulo}}</span>  
                    
                    <v-container v-if="item.route !=''">
                        <center>
                            <v-btn
                            tile
                            color="green"
                            style="margin-top:30px;"
                            class="white--text "
                            @click="navegar(item.route)"
                            >
                            VER MÁS
                            <v-icon right small>
                                mdi-play
                            </v-icon>
                            </v-btn>
                        </center>
                    </v-container>
                </div>   
            </v-container> 
            </v-carousel-item>
        </v-carousel>
    </div>
</template>

<script>
import { API_URL,API_IMAGES } from '../../serviceManager/ServiceManagerConsts.js';
import Axios from 'axios';
export default {
    name : 'Carrusel',
    data : ()=>({
        items: [
          {
            titulo : 'TU HOGAR',
            subtitulo: 'JUSTO COMO LO IMAGINAS',
            src: 'carrusel1.jpg',
            route : 'desarrollos/tuCasaLaMedida'
          },
          {
            titulo : 'MÁS DE 100',
            subtitulo: 'PROYECTOS CONSTRUIDOS',
            src: 'carrusel2.jpg',
            route : 'galeria'
          },
          {
            titulo : 'BIENVENIDO',
            subtitulo: 'A CASA,TU CASA',
            src: 'carrusel3.jpg',
            route : ''
          }
        ],
        carruselDesktop : [],
        carruselMovil : []
    }),
     methods : {
         navegar:function(ruta){
            this.$router.push('/' + ruta);
        },
     },
    async mounted(){
        
        let objetosData = (await Axios.get(API_URL + 'banner')).data;
        //console.log("se leyeron los objetos", objetosData);
        let jsonArray = objetosData.data ;
        //console.log(jsonArray);
        this.carruselDesktop = this.items.map(function(iterator){
            var objetoSalida = {
                "titulo" : iterator.titulo,
                "subtitulo"  : iterator.subtitulo,
                "src" : API_IMAGES + jsonArray[0].desktopImage
            }
            return objetoSalida ; 
        });
        this.carruselMovil = this.items.map(function(iterator){
            var objetoSalida = {
                "titulo" : iterator.titulo,
                "subtitulo"  : iterator.subtitulo,
                "src" : API_IMAGES + jsonArray[0].mobileImage
            }
            return objetoSalida ; 
        });
        //console.log(this.carruselDesktop);
    }
}
</script>

<style>

</style>