<template>
    <div>
        <v-carousel dark = true>
            <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="require(`@/assets/${item.src}`)"
            reverse-transition="fade-transition"
            transition="fade-transition"
            >
            <div style="display: flex; align-items: center; justify-content: center; padding-top:20px; filter: alpha(opacity=100);" >
                <div style="margin-top: 120px;display:flex;  flex-direction : column; padding:30px">
                    <span  style=" font-size:36px; color: white; letter-spacing:10px">TU HOGAR</span>
                    <span  style=" font-size:36px; color: GREEN; letter-spacing:10px">JUSTO COMO LO IMAGINAS</span>
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
            titulo : '',
            subtitulo: '',
            src: 'rentax-8.jpg',
          },
          {
            titulo : '',
            subtitulo: '',
            src: 'rentax-8.jpg',
          }
        ],
    }),
    computed : {
        estiloBackGroundImage(){
            return {
                'display': 'flex',
                'align-items': 'center',
                'justify-content': 'center',
                'padding-top': '20px'
            }
        }
    }
}
</script>

<style>

</style>