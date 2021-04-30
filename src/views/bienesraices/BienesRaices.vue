<template>
<v-app>
    <div style="background-color : #3ab14d;" class="text-center CircularStd-Book hidden-sm-and-down">
        <div style="">
            <span class="text-center" style=" font-size:36px; font-weight: bold; color: white; letter-spacing: 5px;">BIENES RAÍCES</span>
        </div>
        <center><hr style="background-color:#4d4d4f; width:60px; border: 2px solid #4d4d4f;"></center>
        <div style="margin-top:20px; display:flex; justify-content: space-evenly;" class="CircularStd-Bold">
           <template v-for="item in items" v-bind:id="item.titulo">
                <AvatarDownButton :key="item.titulo" :titulo = item.titulo :srcImagen = item.src :ruta=item.ruta ></AvatarDownButton>
            </template> 
        </div>
        <div class="text-center CircularStd-Book divFinanciando" :style="{backgroundImage: `url(${require('@/assets/inicio/financiandoproyecto.jpg')})`, backgroundSize: '100% 100%', height : '350px'}">
            <div>
                <div>
                    <span  style=" font-size:36px; color: white; letter-spacing:16px">FINANCIANDO </span>
                    <span style=" font-size:36px; color: white; letter-spacing:16px" class="CircularStd-Bold">TU PROYECTO</span> 
                </div>
                <div style="margin-top:10px"><span style=" font-size:18px; color: white; letter-spacing:2px">Las mejores condiciones de financiamiento</span></div>
                <div style="margin-top:50px">                
                    <v-btn
                    tile
                    color = "#4d4d4f"
                    style="margin-top:30px;"
                    class="white--text "
                    @click="navegar()"
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
    <div style="background-color : #e2e2e4;" class="text-center CircularStd-Book hidden-md-and-up">
        <div style=" margin-top:10px;">
            <span class="text-center" style=" font-size:24px; font-weight: bold; color: #4d4d4f; letter-spacing: 5px;">BIENES RAÍCES</span>
        </div>
        <center><hr style="background-color:#3ab14d; width:50px; border: 2px solid #3ab14d; margin-top:20px;"></center>
        <div style="margin-top:20px; display:flex; flex-direction:column;" class="CircularStd-Bold">
           <template v-for="item in items" v-bind:id="item.titulo">
                <BienesResponsive :key="item.titulo" :ruta= item.ruta :titulo = item.titulo :srcImagen = item.src ></BienesResponsive>
            </template> 
        </div>
        <div class="text-center CircularStd-Book divFinanciando" :style="{backgroundImage: `url(${require('@/assets/inicio/financiandoproyecto.jpg')})`, backgroundSize: '100% 100%', height : '280px', marginTop:'10px'}">
            <div>
                <div style="display:flex; flex-direction:column">
                    <span  style=" font-size:24px; color: white; letter-spacing:1px" class="CircularStd-Bold">FINANCIANDO </span>
                    <span style=" font-size:24px; color: white; letter-spacing:1px" class="CircularStd-Bold">TU PROYECTO</span> 
                </div>
                <div style="margin-top:10px"><span style=" font-size:18px; color: white; letter-spacing:2px">Las mejores condiciones de financiamiento</span></div>
                <div style="margin-top:10px">                
                    <v-btn
                    tile
                    color = "#4d4d4f"
                    style="margin-top:30px;"
                    class="white--text "
                    @click="navegar()"
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
</v-app>
</template>
<script>
import AvatarDownButton from '../../components/BienesRaicesComponents/AvatarDownButton';
import BienesResponsive from '../../components/BienesRaicesComponents/BienesResponsive';
export default {
    name : 'BienesRaices',
    components : {
        AvatarDownButton,
        BienesResponsive
    },
     data : () => ({
         items :[
             {
                 titulo : "Casas y Departamentos",
                 src : "casasdepartamentos.png",
                 ruta : "casasDepartamentos"
             },
             {
                 titulo : "Áreas Comerciales",
                 src : "areascomerciales.jpeg",
                 ruta : "areasComerciales"
             },
             {
                 titulo : "Áreas Industriales",
                 src : "areasindustriales.png",
                 ruta : "areasIndustriales"
             },
         ]
     }),
     methods : {
         navegar:function(){
            this.$router.push('/financiandoTuProyecto');
        },
     }
}
</script>
<style>
.divFinanciando{

    display: flex; 
    flex-direction : column; 
    justify-content: center;
} 

</style>