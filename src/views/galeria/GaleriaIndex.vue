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
        <ImagenVM :srcImagen="item.srcImage" :key="item.key"  :nombrePropiedad="item.nombrePropiedad" :arrayImages="item.arrayImages"></ImagenVM>
      </v-col>
    </v-row>
    <v-row v-if="origen == 1" style="margin-top:20px" class="hidden-md-and-up">
      <v-col
        v-for="item in items"
        :key="item"
        class="d-flex child-flex"
        cols="12"
      >
        <ImagenVM :srcImagen="item.srcImage" :key="item.key" :arrayImages="item.arrayImages"></ImagenVM>
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
import ImagenVM from '../../components/GalleryDialogComponents/ImagenVM';
export default {
  name: "GaleriaIndex",
  components : { ImagenVM },
  props: {
    origen: Number
  },
  data: () => ({
    items: [
      { 
        key: 1, 
        srcImage: "01.jpg",
        nombrePropiedad : 'Propiedad 1', 
        arrayImages : [
          { src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg', index : 0  }, 
          { src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg', index : 1 }, 
          { src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg', index : 2 }, 
          { src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg', index : 3},
        ]
      },
      { 
        key: 2, 
        srcImage: "02.jpg",
        nombrePropiedad : 'Propiedad 2', 
        arrayImages : [
          { src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg', index : 0  }, 
          { src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg', index : 1 }, 
          { src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg', index : 2 }, 
          { src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg', index : 3},
        ]
      },
      { 
        key: 3, 
        srcImage: "03.jpg",
        nombrePropiedad : 'Propiedad 3', 
        arrayImages : [
          { src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg', index : 0  }, 
          { src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg', index : 1 }, 
          { src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg', index : 2 }, 
          { src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg', index : 3},
        ]
      },
      { 
        key: 4, 
        srcImage: "04.jpg",
        nombrePropiedad : 'Propiedad 4', 
        arrayImages : [
          { src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg', index : 0  }, 
          { src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg', index : 1 }, 
          { src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg', index : 2 }, 
          { src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg', index : 3},
        ]
      },
      { 
        key: 5, 
        srcImage: "05.jpg",
        nombrePropiedad : 'Propiedad 5', 
        arrayImages : [
          { src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg', index : 0  }, 
          { src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg', index : 1 }, 
          { src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg', index : 2 }, 
          { src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg', index : 3},
        ]
      },
      { 
        key: 6, 
        srcImage: "06.jpg",
        nombrePropiedad : 'Propiedad 6', 
        arrayImages : [
          { src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg', index : 0  }, 
          { src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg', index : 1 }, 
          { src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg', index : 2 }, 
          { src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg', index : 3},
        ]
      },
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
