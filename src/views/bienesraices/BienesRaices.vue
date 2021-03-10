<template>
    <div style="background-color : green;" class="text-center CircularStd-Book">
        <div style="">
        <span class="text-center" style=" font-size:36px; font-weight: bold; color: white; letter-spacing: 5px;">BIENES RAÍCES</span>
        </div>
        <center><hr style="background-color:#4d4d4f; width:60px; border: 2px solid #4d4d4f;"></center>
        <div style="margin-top:20px; display:flex; justify-content: space-evenly;" class="CircularStd-Bold">
           <template v-for="item in items" v-bind:id="item.titulo">
                <AvatarDownButton :key="item.titulo" :titulo = item.titulo :srcImagen = item.src ></AvatarDownButton>
            </template> 
        </div>
        <div style="position:relative;"  class="text-center CircularStd-Book divFinanciando">
            <img :src="require('@/assets/inicio/financiandoproyecto.jpg')" width="100%" style="background: rgba(76, 175, 80, 0.3)">
            <div style="position:absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
                <div><span  style=" font-size:36px; color: white; letter-spacing:16px">FINANCIANDO </span><span style=" font-size:36px; color: white; letter-spacing:16px" class="CircularStd-Bold">TU PROYECTO</span> </div>
                <div style="margin-top:10px"><span style=" font-size:18px; color: white; letter-spacing:2px">Las mejores condiciones de financiamiento</span></div>
                <div style="margin-top:50px">                
                    <v-btn
                    tile
                    color = "#4d4d4f"
                    style="margin-top:30px;"
                    class="white--text "
                    >
                    VER MÁS
                    <v-icon right color="green">
                        mdi-play
                    </v-icon>
                    </v-btn>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import AvatarDownButton from '../../components/BienesRaicesComponents/AvatarDownButton';
export default {
    name : 'BienesRaices',
    components : {
        AvatarDownButton
    },
     data : () => ({
         items :[
             {
                 titulo : "Casas y Departamentos",
                 src : "casasdepartamentos.png",
             },
             {
                 titulo : "Áreas Comerciales",
                 src : "areascomerciales.jpeg",
             },
             {
                 titulo : "Áreas Industriales",
                 src : "areasindustriales.png",
             },
         ]
     })
}
</script>
<style>
.divFinanciando{
    margin-top:50px; 
    display: flex; 
    flex-direction : column; 
    justify-context : center;
} 

</style>