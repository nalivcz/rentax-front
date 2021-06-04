<template>
    <div style="" class="CircularStd-Book">
        <Carrusel></Carrusel>
        <Beneficios></Beneficios>
        <Opiniones></Opiniones>
        <Comerciosoficinas></Comerciosoficinas>
        <BienesRaices></BienesRaices>
        <Galeria :origen=2></Galeria>
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
import Beneficios from '../../components/InicioComponents/Beneficios'; 
export default {
    name : 'Inicio',
    components:{
        Contactanos,
        BienesRaices,
        Comerciosoficinas,
        Galeria,
        Carrusel,
        Opiniones,
        Beneficios
    },
    
}
</script>