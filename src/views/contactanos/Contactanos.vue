<template>
    <div :style="{backgroundImage: `url(${require('@/assets/nosotros/fondopolitica.jpg')})` , paddingTop:'5%' , backgroundSize: '100% 100%'}" class="CircularStd-Book" >
        <center><h1 style="color:white; letter-spacing:6px;" class="CircularStd-Bold">CONTÁCTANOS</h1></center>
        <v-container class="hidden-sm-and-down" style="text-align:left; padding-left:20%; padding-right:20%;">
            <v-row style="padding-left:2%; padding-right:2%">
            <v-col
                cols="12"
                sm="6"
                md="8"
                style="display:flex; flex-direction: column;"
            >
                <span class="CircularStd-Bold" style="color:white ; font-size: 24px" >Rentax</span>
                <span class="CircularStd-Book" style="color:white ; font-size: 18px">La Primavera San Agustín 248, C.P. 80199</span>
                <span class="CircularStd-Book" style="color:white ; font-size: 18px">Culiacán Rosales, Sinaloa, México </span>
                <div style="color:white ; font-size: 18px">Oficina <span class="CircularStd-Bold">(667) 713-3154</span></div>
                <div style="color:white ; font-size: 18px">Celular <span class="CircularStd-Bold">(667) 210-0494</span></div>
                <div style="width:100%; margin-top:3%">
                    <hr style="background-color:#36a849; border: 2px solid #36a849; width:125px">
                </div>
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
                <div style="display:flex; flex-direction:row; justify-content:flex-end;">
                    <div style="display:flex; flex-direction:row; justify-content:flex-start; width:80%;">
                        <span style="color:white ; font-size: 24px" class="CircularStd-Bold">Horario</span>
                    </div>
                </div>
                <div style="display:flex; flex-direction:row; justify-content:flex-end;">
                    <div style="display:flex; flex-direction:row; justify-content:flex-start; width:80%;">
                        <span style="color:white ; font-size: 18px;">Lunes a Viernes</span>
                    </div>
                </div>
                <div style="display:flex; flex-direction:row; justify-content:flex-end;">
                    <div style="display:flex; flex-direction:row; justify-content:flex-start; width:80%;">
                        <span style="color:white ; font-size: 18px" class="CircularStd-Bold" >9:00 - 18:00</span>
                    </div>
                </div>
                <div style="display:flex; flex-direction:row; justify-content:flex-end; margin-top:2%; margin-bottom:2%;">
                    <div style="display:flex; flex-direction:row; justify-content:flex-start; width:80%;">
                        <hr style="background-color:#36a849; border: 2px solid #36a849; width:130px">
                    </div>
                </div>
                <div style="display:flex; flex-direction:row; justify-content:flex-end;">
                    <div style="display:flex; flex-direction:row; justify-content:flex-start; width:80%;">
                        <span style="color:white ; font-size: 18px">Sábado</span>
                    </div>
                </div>
                <div style="display:flex; flex-direction:row; justify-content:flex-end;">
                    <div style="display:flex; flex-direction:row; justify-content:flex-start; width:80%;">
                        <span style="color:white ; font-size: 18px" class="CircularStd-Bold">9:00 - 14:00</span>
                    </div>
                </div>
                <div style="display:flex; flex-direction:row; justify-content:flex-end;">
                    <div style="display:flex; flex-direction:row; justify-content:flex-start; width:80%;">
                        <span style="color:white ; font-size: 18px">Domingo </span>
                    </div>
                </div>
                <div style="display:flex; flex-direction:row; justify-content:flex-end;">
                    <div style="display:flex; flex-direction:row; justify-content:flex-start; width:80%;">
                        <span style="color:white ; font-size: 18px" class="CircularStd-Bold">Cerrado </span>
                    </div>
                </div>
            </v-col>
            </v-row>
            <FormContactanos></FormContactanos>
        </v-container>
        <div style="display:flex; flex-direction: column;" class="hidden-md-and-up text-center">
            <span class="CircularStd-Bold" style="color:white ; font-size: 18px">Rentax</span>
            <span style="color:white ; font-size: 18px">La Primavera San Agustín 248, C.P. 80199</span>
            <span style="color:white ; font-size: 18px">Culiacán Rosales, Sinaloa, México </span>
            <div style="color:white ; font-size: 18px">Oficina <span class="CircularStd-Bold">(667) 713-3154</span></div>
            <div style="color:white ; font-size: 18px">Celular <span class="CircularStd-Bold">(667) 210-0494</span></div>
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
            <span style="color:white ; font-size: 18px" class="CircularStd-Bold">9:00 - 18:00</span>
            <span style="color:white ; font-size: 18px">Sabados</span>
            <span style="color:white ; font-size: 18px" class="CircularStd-Bold">9:00 - 14:00</span>
            <span style="color:white ; font-size: 18px">Domingo </span>
            <span style="color:white ; font-size: 18px">Cerrado </span>
            <FormContactanos></FormContactanos>

        </div>
                  
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