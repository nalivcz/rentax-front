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
            <div class="hidden-sm-and-down" style="display: flex-direction; align-items: center; justify-content: center; padding-top:20px;" >
                <div style="margin-top: 120px;display:flex;  flex-direction : column; padding:30px">
                    <span  style=" font-size:36px; color: white; letter-spacing:10px">{{item.titulo}}</span>
                    <span  style=" font-size:36px; color: GREEN; letter-spacing:10px">{{item.subtitulo}}</span>
                    <v-container>
                        <v-btn
                        tile
                        color="green"
                        style="margin-top:30px;"
                        class="white--text "
                        >
                        VER MÁS
                        <v-icon right small>
                            mdi-play
                        </v-icon>
                        </v-btn>
                    </v-container>
                </div> 
            </div>
            <v-container class="hidden-md-and-up" style="display: flex; flex-direction: column; justify-content: center; height:100%;">
                <div style="display: flex; flex-direction: row; justify-content: center;">
                    <hr style="background-color:#3ab14d; width:60px; border: 2px solid #3ab14d;">
                </div>
                <div style="display:flex; flex-direction:column; text-align:justify; width:90%; padding-left:10%;">
                    <span style=" font-size:24px; color: white; letter-spacing:5px" class="CircularStd-Book">{{item.titulo}}</span>
                    <span style=" font-size:24px; color: white; letter-spacing:5px" class="CircularStd-Bold" >{{item.subtitulo}}</span>  
                </div>
                   
            </v-container> 
            </v-carousel-item>
        </v-carousel>
    </div>
</template>

<script>
export default {
    name : 'Carrusel',
    data : ()=>({
        items: [
          {
            titulo : 'TU HOGAR',
            subtitulo: 'JUSTO COMO LO IMAGINAS',
            src: 'carrusel1.jpg',
          },
          {
            titulo : 'MÁS DE 100',
            subtitulo: 'PROYECTOS CONSTRUIDOS',
            src: 'carrusel2.jpg',
          },
          {
            titulo : 'BIENVENIDO',
            subtitulo: 'A CASA,TU CASA',
            src: 'carrusel3.jpg',
          }
        ],
    })
}
</script>

<style>

</style>