<template>
    <div style="" class="text-center">
        <div>
            <v-carousel>
                <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
                :src="item.src"
                reverse-transition="fade-transition"
                transition="fade-transition"
                >
                <div style="display: flex; align-items: center; justify-content: center; padding-top:20px">
                    <div style="margin-top: 120px;display:flex;  flex-direction : column; padding:30px">
                        <span  style=" font-size:36px; color: white; letter-spacing:10px">TU HOGAR</span>
                        <span  style=" font-size:36px; color: GREEN; letter-spacing:10px">JUSTO COMO LO IMAGINAS</span>
                    </div>  
                </div>
                </v-carousel-item>
            </v-carousel>
        </div>
        <div style="margin-top:20px; display:flex; justify-content: space-evenly; align-items:baseline ;">
            <div style="display: flex; flex-direction : column; justify-content: center;">
                <div>
                <v-avatar size="230" color="black">
                <img
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                    alt="John"
                    style="opacity : .5"
                >
                </v-avatar>
                </div>
                <div style="text-align:center;  display: flex; flex-direction : column; padding-left:20px; padding-right:20px;">
                    <span style="color:green; font-size: 24px; font-weigth: bold">FINANCIAMIENTO</span>
                    <div style="text-align:justify">Rentax te ofrece varias alternativas para financiar la construccion de tu casa. Hay una adecuada a necesidades</div>
                </div>
            </div>
            <div style="display: flex; flex-direction : column; justify-content: center;">
                <div>
                <v-avatar size="230" color="black">
                <img
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                    alt="John"
                    style="opacity : .5"
                >
                </v-avatar>
                </div>
                <div style="text-align:center;  display: flex; flex-direction : column; padding-left:20px; padding-right:20px;">
                    <span style="color:green; font-size: 24px; font-weigth: bold">NECESIDAD DE LA FAMILIA</span>
                    <div style="text-align:justify">Conoce las necesidades de tu familia, los gustos personales, los deseos y los sueños, asi como tus posibilidades financieras.</div>
                </div>
            </div>
            <div style="display: flex; flex-direction : column; justify-content: center;">
                <div>
                <v-avatar size="230" color="black">
                <img
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                    alt="John"
                    style="opacity : .5"
                >
                </v-avatar>
                </div>
                <div style="text-align:center; display: flex; flex-direction : column; padding-left:20px; padding-right:20px;">
                    <span style="color:green; font-size: 24px; font-weigth: bold">CONSTRUCCION Y COORDINACION</span>
                    <div style="text-align:justify">Los contratistas de Rentax son supervisados por un equipo de inspectores. En esta etapa recibirás reportes de avance semanal.</div>
                </div>
            </div> 
        </div>
        <div style="margin-top:20px; padding-bottom:40px;  padding-top:40px; background-color:green; display:flex; justify-content: center; align-items:baseline ;">>
            <div style="display: flex; flex-direction : column; justify-content: center;">
                <div>
                <v-avatar size="230" color="black">
                <img
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                    alt="John"
                    style="opacity : .5"
                >
                </v-avatar>
                </div>
                <div style="text-align:center; display: flex; flex-direction : column; padding-left:20px; padding-right:20px; margin-top:30px">
                    <div style="text-align:center; color:white;">"Lo mejor de trabajar con Rentax, fue su sistema Construye Tu Hogar. Rapido, efectivo y se adapto a nuestras necesidades"</div>
                    <span style="color:white; font-size: 24px; font-weigth: bold">Juan Garcia, San Anselmo</span>
                </div>
            </div>
            <div style="display: flex; flex-direction : column; justify-content: center;">
                <div>
                <v-avatar size="230" color="black">
                <img
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                    alt="John"
                    style="opacity : .5"
                >
                </v-avatar>
                </div>
                <div style="text-align:center;  display: flex; flex-direction : column; padding-left:20px; padding-right:20px; margin-top:30px">
                    <div style="text-align:center; color:white;">"Lo mejor de trabajar con Rentax, fue su sistema Construye Tu Hogar. Rapido, efectivo y se adapto a nuestras necesidades"</div>
                    <span style="color:white; font-size: 24px; font-weigth: bold">Juan Garcia, San Anselmo</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name : 'Inicio',
    data : () => ({
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
    })
}
</script>