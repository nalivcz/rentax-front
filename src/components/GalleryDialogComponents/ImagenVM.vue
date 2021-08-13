<template>
  <v-dialog
    v-model="dialog"
    width="80%"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-img
        :src="require(`@/assets/Galeria/${srcImagen}`)"
        :lazy-src="require(`@/assets/Galeria/${srcImagen}`)"
        aspect-ratio="1"
        max-height="100"
        v-on:click="saludar()"
        v-bind="attrs" v-on="on"
        class="grey lighten-2"
      >
            <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                indeterminate
                color="grey lighten-5"
                ></v-progress-circular>
            </v-row>
            </template>
      </v-img>
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

name:'ImagenVM',
props : { 
  srcImagen : String, 
  nombrePropiedad : String ,
  arrayImages : Array
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