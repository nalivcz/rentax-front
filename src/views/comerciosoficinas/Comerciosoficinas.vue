<template>
    <div style="display: flex; flex-direction : column;" class="text-center">
        <div style="background-color : #080808; padding-top:20px; display:flex; flex-direction:column; justify-content: space-evenly; padding-top:20px">
            <div style="margin-top : 20px ;">
                <span  style=" font-size:36px; color: white; letter-spacing:16px">COMERCIAL</span>
            </div>    
            <div style="margin-top : 50px; padding-bottom:100px ; display:flex;  justify-content: center">
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
                 src : "https://cdn.vuetifyjs.com/images/john.jpg",
             },
             {
                 titulo : "Centro Alfa",
                 src : "https://cdn.vuetifyjs.com/images/john.jpg",
             },
             {
                 titulo : "Centro Delta",
                 src : "https://cdn.vuetifyjs.com/images/john.jpg",
             },
         ]
     })
}
</script>