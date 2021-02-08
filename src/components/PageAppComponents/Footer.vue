<template>
    <v-footer color="#211f20" prominent >
      <v-row no-gutters style="paddingTop:40px; paddingBottom:40px">
      <v-col
        cols="12"
        sm="2"
        class="text-center"
      >
        <v-img
        max-height="67"
        max-width="232"
        src="../../assets/logorentaxnegro.jpg"
        ></v-img>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        style="display:flex; flex-direction: column; margin-left : 30px;"
      >
        <spam style="color:white">La Primavera San Agustín 248 </spam>
        <spam style="color:white">Oficina (667) 713 31 45</spam>
        <spam style="color:white">Copright 2020 Rentax - Todos los derechos reservados</spam>
      </v-col>
      <v-col
        cols="12"
        sm="2"
        class="text-center"
        style="display:flex; flex-direction: column;"
      >
      <div>
        <v-btn
        class="mx-2"
        fab
        dark
        small
        color="green"
        >
            <v-icon dark>
                mdi-facebook
            </v-icon>
        </v-btn>
         <v-btn
        class="mx-2"
        fab
        dark
        small
        color="green"
        >
            <v-icon dark>
                mdi-twitter
            </v-icon>
        </v-btn>
         <v-btn
        class="mx-2"
        fab
        dark
        small
        color="green"
        >
            <v-icon dark>
                mdi-instagram
            </v-icon>
        </v-btn>

      </div>
       
        <spam style="color:white">rentax.com.mx</spam>
      </v-col>
    </v-row>
    </v-footer>
</template>
<script>
export default {
    name : 'Footer'
}
</script>