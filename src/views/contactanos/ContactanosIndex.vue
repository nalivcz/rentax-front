<template>
    <div style="padding-left:10%; padding-right:10%;" class="CircularStd-Book" >
       <div style="background-color:#edeef0; display: flex; flex-direction : column; padding-left:10%; padding-right:10%;">
          <div style="color: #505052;display: flex; flex-direction : column; padding-left:10%; padding-right:10%; margin-left:10px;">
              <span style="font-size:32px " class="CircularStd-Bold">Me interesa</span> 
          </div>
          <div style="background-color:#4d4d4f; color:white; display: flex; flex-direction : row; justify-content:space-around; padding-left:10%; padding-right:10%; padding-top:10px;padding-bottom:10px;">
              <div style="display: flex; flex-direction : row; justify-content:center; ">
                   <span style="font-size:32px" class="">Rentar</span> 
              </div>
              <div style="display: flex; flex-direction : row; justify-content:center; border-left: 2px solid #3e984d; border-right:  2px solid #3e984d; padding-left: 5%;  padding-right: 5%; " >
                   <span style="font-size:32px" class="">Comprar</span> 
              </div>
              <div style="display: flex; flex-direction : row; justify-content:center; ">
                   <span style="font-size:32px" class="">Contrucción</span> 
              </div>
          </div> 
          <div style="color:#505052;display: flex; flex-direction : column; padding-left:10%; padding-right:10%;">
              <div style=" margin-left:10px;">
              <span style="font-size:32px " class="CircularStd-Bold">Ubicación</span>
              </div> 
              <v-combobox
                v-model="select"
                :items="opcionesinteres"
                solo
                label="Buscar ubicación"
                dense
                ></v-combobox>
                <div style=" margin-left:10px;">
                <span style="font-size:32px " class="CircularStd-Bold">Tipo de inmueble</span>
                </div> 
                <v-combobox
                    v-model="select"
                    :items="opcionesinteres"
                    solo
                    label="Seleccionar tipo de inmueble"
                    dense
                ></v-combobox>
                <div style=" margin-left:10px;">
                <span style="font-size:32px " class="CircularStd-Bold">Recámaras</span>
                </div> 
                <v-row>
                    <v-col cols="6">
                        <v-combobox
                        v-model="select"
                        :items="opcionesinteres"
                        solo
                        label="Sin mínimo"
                        dense
                        ></v-combobox>
                    </v-col>
                    <v-col cols="6">
                        <v-combobox
                        v-model="select2"
                        :items="opcionesUbicacioo"
                        solo
                        dense
                        label="Sin máximo"
                        ></v-combobox>
                    </v-col>
                </v-row>
                <div style=" margin-left:10px;">
                <span style="font-size:32px " class="CircularStd-Bold">Precio</span>
                </div> 
                <v-combobox
                    v-model="select"
                    :items="opcionesinteres"
                    solo
                    label="Seleccionar precio"
                    dense
                ></v-combobox>
                <div class="text-center">
                    <v-btn
                    rounded
                    color="success"
                    dark
                    >
                    <v-icon left>
                        mdi-magnify
                    </v-icon>
                    <span class="CircularStd-Bold">BUSCAR</span>
                    </v-btn>
                </div>
                <div style=" margin-left:10px; margin-top:30px;">
                <span style="font-size:32px " class="CircularStd-Bold">Datos del contacto</span>
                </div>
                <v-text-field
                v-model="nombre"
                background-color="white"
                color="black"
                label="* Nombre Completo"
                required
                ></v-text-field>
                <v-text-field
                v-model="nombre"
                background-color="white"
                color="black"
                label="* Teléfono"
                required
                ></v-text-field>
                <v-text-field
                v-model="nombre"
                background-color="white"
                color="black"
                label="* Presupuesto"
                required
                ></v-text-field>
                <v-textarea
                    background-color="white"
                    color="black"
                    name="input-7-4"
                    label="Comentarios"
                ></v-textarea>
                <div style=" margin-left:10px;">
                <span style="font-size:16px " class="CircularStd-Std">*Información obligatoria</span>
                </div>
                <div class="text-center">
                    <v-btn
                    rounded
                    color="success"
                    dark
                    >
                    <span class="CircularStd-Bold">Enviar</span>
                    </v-btn>
                </div>
          </div>    
        </div> 
    </div>
    
</template>
<script>

export default {
    name : 'ContactanosIndex',
    components : {
        
    }
}
</script>