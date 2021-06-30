<template>
    <div style="" class="CircularStd-Book">
        <Carrusel></Carrusel>
        <Beneficios></Beneficios>
        <Opiniones></Opiniones>
        <ComerciosOficinasIndex></ComerciosOficinasIndex>
        <BienesRaices></BienesRaices>
        <GaleriaIndex :origen=2></GaleriaIndex>
        <div>
        <Contactanos></Contactanos>    
        </div>
    </div>
</template>
<script>
import Contactanos from '../contactanos/Contactanos';
import BienesRaices from '../bienesraices/BienesRaices';
import GaleriaIndex from '../galeria/GaleriaIndex';
import Carrusel from '../../components/InicioComponents/Carrusel';
import Opiniones from '../../components/InicioComponents/Opiniones';
import Beneficios from '../../components/InicioComponents/Beneficios'; 
import ComerciosOficinasIndex from '../../views/comerciosoficinas/ComerciosOficinasIndex';

export default {
    name : 'Inicio',
    components:{
        Contactanos,
        BienesRaices,
        GaleriaIndex,
        Carrusel,
        Opiniones,
        Beneficios,
        ComerciosOficinasIndex
    },
    
}
</script>