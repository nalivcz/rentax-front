<template>
    <div style="display: flex; flex-direction : column;" class="text-center">
        <div :style="{backgroundImage: `url(${require('@/assets/comercialoficinas/plazabalcones.jpg')})`, backgroundSize: '100% 100%', display:'flex', flexDirection:'column', justifContent: 'spaceEvenly', paddingTop:'20px', height:'800px', paddingBottom:'200px'}">
            <div style="margin-top : 60px ;">
                <span  style=" font-size:36px; color: white; letter-spacing:16px">COMERCIAL</span>
            </div>    
            <div style="margin-top : 190px; padding-bottom:100px ; display:flex;  justify-content: center;">
                <div style="display:flex;  flex-direction : column; background-color: green; padding:30px">
                    <span  style=" font-size:36px; color: white; letter-spacing:16px">PRÓXIMAMENTE</span>
                    <span  style=" font-size:36px; color: white; letter-spacing:16px">CENTRO BALCONES</span>
                </div>
            </div>  
        </div>
        <div style="background-color : #e2e2e4; display:flex; flex-direction : column; padding-top:10px; padding-bottom:40px">
            <div style="margin-top : 20px ; padding : 30px;">
                <span  style=" font-size:36px; color: GREEN; letter-spacing:8px" class="CircularStd-Medium">PLAZAS Y OFICINAS</span>
                <center><hr style="background-color:#4d4d4f; width:60px; border: 2px solid #4d4d4f;"></center>
            </div> 
    
            <div style="display:flex; flex-direction: row ; justify-content: space-evenly">
                <template v-for="item in items" v-bind:id="item.titulo">
                    <PlasasyOficinas :key="item.titulo" :titulo = item.titulo :srcImagen = item.src></PlasasyOficinas>
                </template> 
            </div>  
             
        </div>
    </div>
</template>
<script>
import PlasasyOficinas from '../../components/ComerciosOficinasComponents/PlazasyOficinas';
export default {
    name : 'ComerciosOficinas',
    components : {
        PlasasyOficinas
    },
    data : () => ({
          items :[
             {
                 titulo : "Centro Andrade",
                 src : "CentroAndrade.jpg",
             },
             {
                 titulo : "Centro Alfa",
                 src : "CentroAlfa.jpg",
             },
             {
                 titulo : "Centro Delta",
                 src : "CentroDelta.jpg",
             },
         ]
     })
}
</script>