<template>
    <div :style="{backgroundImage: `url(${require('@/assets/nosotros/fondopolitica.jpg')})`}" class="CircularStd-Book" >
        <center><h1 style="color:white; letter-spacing:6px;">CONTÁCTANOS</h1></center>
        <v-container class="hidden-sm-and-down" style="text-align:left;">
            <v-row no-gutters >
            <v-col
                cols="12"
                sm="6"
                md="8"
                style="display:flex; flex-direction: column;"
            >
                <span class="CircularStd-Bold" style="color:white ; font-size: 18px">Rentax</span>
                <span style="color:white ; font-size: 18px">La Primavera San Agustín 248, C.P. 80199</span>
                <span style="color:white ; font-size: 18px">Culiacán Rosales, Sinaloa, México </span>
                <span style="color:white ; font-size: 18px">Oficina (667) 713-3154</span>
                <span style="color:white ; font-size: 18px">Oficina (667) 210-0494</span>
                <hr style="background-color:#3ab14d; width:120px">
                <v-col>
                    <v-btn
                    tile
                    color="#4d4d4f"
                    class="white--text"
                    >
                    <v-icon left color="success">
                        mdi-whatsapp
                    </v-icon >
                    ENVÍANOS UN MENSAJE
                    </v-btn>
                </v-col>
            </v-col>
            <v-col
                cols="6"
                md="4"
                style="display:flex; flex-direction: column;"
            >
               <span style="color:white ; font-weight : bold; font-size: 18px">Horario</span>
               <span style="color:white ; font-size: 18px;">Lunes a Viernes</span>
               <span style="color:white ; font-size: 18px">9:00 - 18:00</span>
               <hr style="background-color:#3ab14d; width:130px">
               <span style="color:white ; font-size: 18px">Sabados</span>
               <span style="color:white ; font-size: 18px">9:00 - 14:00</span>
               <span style="color:white ; font-size: 18px">Domingo </span>
               <span style="color:white ; font-size: 18px">Cerrado </span>
            </v-col>
            </v-row>
        </v-container>
        <div style="display:flex; flex-direction: column;" class="hidden-md-and-up text-center">
            <span class="CircularStd-Bold" style="color:white ; font-size: 18px">Rentax</span>
            <span style="color:white ; font-size: 18px">La Primavera San Agustín 248, C.P. 80199</span>
            <span style="color:white ; font-size: 18px">Culiacán Rosales, Sinaloa, México </span>
            <span style="color:white ; font-size: 18px">Oficina (667) 713-3154</span>
            <span style="color:white ; font-size: 18px">Oficina (667) 210-0494</span>
            <v-col>
                <v-btn
                tile
                color="#4d4d4f"
                class="white--text"
                >
                <v-icon left color="success">
                    mdi-whatsapp
                </v-icon >
                ENVÍANOS UN MENSAJE
                </v-btn>
            </v-col>
            <span class="CircularStd-Bold" style="color:white ; font-size: 18px">Horario</span>
            <span style="color:white ; font-size: 18px">Lunes a Viernes</span>
            <span style="color:white ; font-size: 18px">9:00 - 18:00</span>
            <span style="color:white ; font-size: 18px">Sabados</span>
            <span style="color:white ; font-size: 18px">9:00 - 14:00</span>
            <span style="color:white ; font-size: 18px">Domingo </span>
            <span style="color:white ; font-size: 18px">Cerrado </span>
        </div>
        <FormContactanos></FormContactanos>          
    </div>
    
</template>
<script>
import FormContactanos from '../../components/FormContacto';
export default {
    name : 'Contactanos',
    components : {
        FormContactanos
    }
}
</script>