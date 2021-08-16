<template>
  <v-dialog
    v-model="dialog"
    width="80%"
  >
    <template v-slot:activator="{ on, attrs }">
       <div style="display: flex; flex-direction : column; ">
            <img
            :src="require(`@/assets/bienesraices/submodules/casasdepartamentos/${srcImagen}`)"
            :lazy-src="require(`@/assets/bienesraices/submodules/casasdepartamentos/${srcImagen}`)"
            >
            <div style="display:flex; flex-direction : row;">
              <div v-if="totalCuartos != ''" style="display : flex; flex-direction : row ; width : 25%;">
                <v-icon large color="black">mdi-bed</v-icon>
                <span style="font-size:24px; margin-bottom:2px;" class="CircularStd-Bold">{{totalCuartos}}</span>
              </div>
              <div v-if="totalBanos != ''" style="display : flex; flex-direction : row ; width : 25%;">
                <v-icon large color="black" >mdi-shower</v-icon>
                <span style="font-size:24px; margin-bottom:2px;" class="CircularStd-Bold">{{totalBanos}}</span>
              </div>
              <div v-if="totalCocheras != ''" style="display : flex; flex-direction : row ; width : 25%;">
                <v-icon large color="black">mdi-car</v-icon>
                <span style="font-size:24px; margin-bottom:2px;" class="CircularStd-Bold">{{totalCocheras}}</span>
              </div>
              <div v-if="totalMetros != ''" style="display : flex; flex-direction : row; width : 25%;">
                <v-icon large color="black">mdi-ruler-square</v-icon>
                <span style="font-size:24px; margin-bottom:2px;" class="CircularStd-Bold">{{totalMetros}}</span>
              </div>
            </div>
            <span style="font-size:24px;">EN VENTA</span>
            <span style="font-size:30px;" class="CircularStd-Bold">{{precio}}</span>
            <div style="display: flex; flex-direction : row; justify-content:flex-start; align-items:baseline; color:#515153">
                <span>{{direccion}}</span>
                <v-btn
                tile
                color="success"
                v-bind="attrs" v-on="on"
                >
                VER MÁS
                <v-icon small style="margin-left:3px;" >
                    mdi-play
                </v-icon>
                </v-btn>
            </div>
        </div>           
    </template>
    <template v-slot:default="dialog">
      <v-card color="white">
        <v-toolbar dark color="#3aae4d">
          <v-btn
            icon
            dark
            @click="dialog.value = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>{{nombrePropiedad}}</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <div style="padding-left:5%; padding-right:5%;">
          <v-carousel hide-delimiters :show-arrows="false">
            <v-carousel-item
              :src="arrayImages[indiceImagen].src"
              reverse-transition="fade-transition"
              transition="fade-transition"
            ></v-carousel-item>
          </v-carousel>
          <v-row>
            <v-col
              v-for="n in arrayImages"
              :key="n"
              class="d-flex child-flex"
              cols="1"
            >
              <v-img v-if="indiceImagen==n.index"
                :src="n.src"
                :lazy-src="n.src"
                aspect-ratio="1"
                class="grey lighten-2"
                style="opacity:1;"
                @click="cambioImagen(n.index)"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
              <v-img v-else
                :src="n.src"
                :lazy-src="n.src"
                aspect-ratio="1"
                class="grey lighten-2"
                style="opacity:0.5;"
                @click="cambioImagen(n.index)"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-col>
          </v-row>
        </div>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
export default {

name:'ImagenCVM',
props : { 
  srcImagen : String, 
  nombrePropiedad : String ,
  arrayImages : Array,
  venta : String , 
  direccion : String ,
  precio : String ,
  totalCuartos : String , 
  totalMetros : String, 
  totalBanos : String , 
  totalCocheras : String
},
data : () =>({
  indiceImagen : 0,
}),
methods:{
    cambioImagen:function(index){
      this.indiceImagen = index ; 
    }
}

}
</script>

<style>

</style>