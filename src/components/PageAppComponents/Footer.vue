<template>
<div>
    <v-footer class="hidden-sm-and-down" color="#211f20" prominent >
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
        <span style="color:white">La Primavera San Agustín 248 </span>
        <span style="color:white">Oficina (667) 713 31 45 / WhatsApp (667) 996 0934</span>
        <span style="color:white">Copright 2020 Rentax - Todos los derechos reservados</span>
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
       
        <span style="color:white">rentax.com.mx</span>
      </v-col>
    </v-row>
    </v-footer>
    <v-footer class="hidden-md-and-up" color="#211f20" prominent >
       <div style="display:flex; flex-direction: column; width:100%" class="hidden-md-and-up text-center">
            <div style="dislplay:flex; flex-direction:row; justify-content:center;" class="text-center">
              <img
              width="220px"
              src="../../assets/logorentaxnegro.jpg"
              @click="irInicio()"
              >  
              <div style="display:flex; flex-direction: column;">
              <span style="color:white">La Primavera San Agustín 248 </span>
              <span style="color:white">Oficina (667) 713 31 45 / WhatsApp (667) 996 0934</span>
              <span style="color:white">Copright 2020 Rentax - Todos los derechos reservados</span>
              </div>
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
              <span style="color:white">rentax.com.mx</span>
            </div>  
        </div>
    </v-footer>
</div>
</template>
<script>
export default {
    name : 'Footer'
}
</script>