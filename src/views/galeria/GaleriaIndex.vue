<template>
  <v-container style="padding-left:10%; padding-right:10%">
    <center>
      <h1 style="color:#3ab14d; letter-spacing:5px;" class="CircularStd-Book">
        GALERÍA
      </h1>
    </center>
    <div style="margin-top:10px; display:flex; flex-direction:row; justify-content:center;" class="text-center">
      <div
        class="hidden-sm-and-down" style=" width:60%; padding-top:.5%; padding-bottom:.5%; background-color:#3ab14d;">
        <span
        style=" font-size:24px;  color: white; letter-spacing:8px;"
        class="CircularStd-Book"
        >PROYECTOS </span>
      <span
        style=" font-size:24px; background-color:#3ab14d; color: white; letter-spacing:8px;" class="CircularStd-Bold">ENTREGADOS</span>

      </div>
      <span
        class="hidden-md-and-up"
        style=" font-size:16px; background-color:#3ab14d; color: white; letter-spacing:4px; padding:2px;"
        >PROYECTOS ENTREGADOS</span
      >
    </div>
    <v-row style="margin-top:20px" class="hidden-sm-and-down">
      <v-col
        v-for="item in items"
        :key="item"
        class="d-flex child-flex"
        cols="4"
        
      >
        <v-img
          :src="require(`@/assets/Galeria/${item.srcImage}`)"
          :lazy-src="require(`@/assets/Galeria/${item.srcImage}`)"
          aspect-ratio="1"
          max-height="100"
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
      </v-col>
    </v-row>
    <v-row v-if="origen == 1" style="margin-top:20px" class="hidden-md-and-up">
      <v-col
        v-for="item in items"
        :key="item"
        class="d-flex child-flex"
        cols="12"
      >
        <v-img
          :src="require(`@/assets/Galeria/${item.srcImage}`)"
          :lazy-src="require(`@/assets/Galeria/${item.srcImage}`)"
          aspect-ratio="1"
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
      </v-col>
    </v-row>
    <v-row v-if="origen == 2" style="margin-top:20px" class="hidden-md-and-up">
      <v-col
        v-for="item in items"
        :key="item"
        class="d-flex child-flex"
        cols="4"
      >
        <v-img
          :src="require(`@/assets/Galeria/${item.srcImage}`)"
          :lazy-src="require(`@/assets/Galeria/${item.srcImage}`)"
          aspect-ratio="1"
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
      </v-col>
    </v-row>
    <center>
      <v-btn
        tile
        color="#4d4d4f"
        style="margin-top:30px;"
        class="white--text "
        @click="verMas"
      >
        {{ btnMsg }}
        <v-icon right color="success">
          mdi-play
        </v-icon>
      </v-btn>
    </center>
  </v-container>
</template>
<script>
export default {
  name: "GaleriaIndex",
  props: {
    origen: Number
  },
  data: () => ({
    items: [
      { srcImage: "01.jpg" },
      { srcImage: "02.jpg" },
      { srcImage: "03.jpg" },
      { srcImage: "04.jpg" },
      { srcImage: "05.jpg" },
      { srcImage: "06.jpg" }
    ],
    btnMsg: "VER MÁS",
    flag: false
  }),
  methods: {
    verMas() {
     var subRuta = '/galeria' ; this.$router.push(subRuta); 
    }
  }
};
</script>
