<template>
    <div style="background-color : green;">
        <center><h1 style="color:white">Contáctanos</h1></center>
        <v-container>
            <v-row no-gutters >
            <v-col
                cols="12"
                sm="6"
                md="8"
                style="display:flex; flex-direction: column;"
            >
                <span style="color:white ; font-weight : bold; font-size: 18px">Rentax</span>
                <span style="color:white ; font-size: 18px">La Primavera San Agustín 248, C.P. 80199</span>
                <span style="color:white ; font-size: 18px">Culiacàn Rosales, Sinaloa, Mèxico </span>
                <span style="color:white ; font-size: 18px">Oficina (667) 713-3154</span>
                <span style="color:white ; font-size: 18px">Oficina (667) 210-0494</span>
                <v-divider></v-divider>
                <v-col>
                    <v-btn
                    tile
                    color="#4d4d4f"
                    >
                    <v-icon left color="success">
                        mdi-whatsapp
                    </v-icon>
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
               <span style="color:white ; font-size: 18px">Lunes a Viernes</span>
               <span style="color:white ; font-size: 18px">9:00 - 18:00</span>
               <v-divider></v-divider>
               <span style="color:white ; font-size: 18px">Sabados</span>
               <span style="color:white ; font-size: 18px">9:00 - 14:00</span>
               <span style="color:white ; font-size: 18px">Domingo </span>
               <span style="color:white ; font-size: 18px">Cerrado </span>
            </v-col>
            </v-row>
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation
        >
            <v-text-field
                outlined
                dense
                label="NOMBRE"
                background-color="white"
                color="black"
            ></v-text-field>
             <v-text-field
                outlined
                dense
                label="E-MAIL"
                background-color="white"
                color="black"
            ></v-text-field>
             <v-text-field
                outlined
                dense
                label="TELÉFONO"
                background-color="white"
                color="black"
            ></v-text-field>
             <v-textarea
                outlined
                background-color="white"
                color="black"
                name="input-7-4"
                label="Comentarios"
                ></v-textarea>
                <center>
                <v-btn
                color="#4d4d4f"
                >
                Enviar
                </v-btn>
                </center>
        </v-form>
        </v-container>       
    </div>
   
</template>
<script>
export default {
    name : 'Contactanos'
}
</script>