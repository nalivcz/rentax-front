<template>
    <div style="" class="CircularStd-Book">
        <Carrusel></Carrusel>
        <div class="hidden-sm-and-down" style="margin-top:20px; display:flex; justify-content: space-evenly; align-items:baseline ;">
            <div style="display: flex; flex-direction : column; justify-content: center;">
                <div>
                <v-avatar size="230" color="black">
                <img
                    src="../../assets/Financiamiento.jpg"
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
                    src="../../assets/arquifami.jpg"
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
                    src="../../assets/construccion.jpg"
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
        <div class="hidden-md-and-up">
            <v-carousel>
                <v-carousel-item
                v-for="(item,i) in oferts"
                :key="i"
                :src="require(`@/assets/${item.src}`)"
                reverse-transition="fade-transition"
                transition="fade-transition"
                >
                <div style="display: flex; flex-direction:row; align-items:flex-end;">
                    <div style="display:flex;  flex-direction : column; align-items:flex-start; padding-left:30px; margin-top:300px;">
                        <span  style=" font-size:24px; color: white; letter-spacing:8px; background-color:green; padding-left:10px; padding-right:5px;">{{item.titulo}}</span>
                        <span  style=" font-size:16px; color: white; width:50%; text-align:left; ">{{item.subtitulo}}</span>
                    </div>  
                </div>
                </v-carousel-item>
            </v-carousel>
        </div>
        <Opiniones></Opiniones>
        <Comerciosoficinas></Comerciosoficinas>
        <BienesRaices></BienesRaices>
        <Galeria></Galeria>
        <div>
        <Contactanos></Contactanos>    
        </div>
    </div>
</template>
<script>
import Contactanos from '../contactanos/Contactanos';
import BienesRaices from '../bienesraices/BienesRaices';
import Comerciosoficinas from '../comerciosoficinas/Comerciosoficinas';
import Galeria from '../galeria/Galeria';
import Carrusel from '../../components/InicioComponents/Carrusel';
import Opiniones from '../../components/InicioComponents/Opiniones'; 
export default {
    name : 'Inicio',
    components:{
        Contactanos,
        BienesRaices,
        Comerciosoficinas,
        Galeria,
        Carrusel,
        Opiniones
    },
    data : () => ({
        oferts: [
          {
            src: 'Financiamiento.jpg',
            titulo: 'FINANCIAMIENTO',
            subtitulo : 'Rentax te ofrece varias alternativas para financiar la construccion de tu casa. Hay una adecuada a necesidades'
          },
          {
            src: 'arquifami.jpg',
            titulo: 'NECESIDAD DE LA FAMILIA',
            subtitulo : 'Conoce las necesidades de tu familia, los gustos personales, los deseos y los sueños, asi como tus posibilidades financieras.'
          },
          {
            src: 'construccion.jpg',
            titulo: 'CONSTRUCCION Y COORDINACION',
            subtitulo : 'Los contratistas de Rentax son supervisados por un equipo de inspectores. En esta etapa recibirás reportes de avance semanal.'
          },
          
        ],
        opiniones: [
          {
            src: 'ingenieronombrebien.png',
            nombre :'Juan Garcia, San Anselmo',
            comentario : '"Lo mejor de trabajar con Rentax, fue su sistema Construye Tu Hogar. Rapido, efectivo y se adapto a nuestras necesidades"',
          },
          {
            src: 'ingenieronombrebien.png',
            nombre :'Juan Garcia, San Anselmo',
            comentario : '"Lo mejor de trabajar con Rentax, fue su sistema Construye Tu Hogar. Rapido, efectivo y se adapto a nuestras necesidades"',
         
          }
        ],
    })
}
</script>