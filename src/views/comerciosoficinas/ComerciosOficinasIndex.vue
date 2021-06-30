<template>
  <v-app>
    <div
      style="display: flex; flex-direction : column;"
      class="text-center hidden-sm-and-down"
    >
      <div class="CircularStd-Bold" style="padding : 2% ;">
        <span style=" font-size:36px; color: #3eb14d; letter-spacing:8px"
        >COMERCIAL</span
        >
      </div>
      <div style="padding-left:10%; padding-right:10%; background-color:#4d4d4f;">
        <div
        :style="{
          backgroundImage: `url(${require('@/assets/comercialoficinas/plazabalcones.jpg')})`,
          backgroundSize: '100% 100%',
          display: 'flex',
          flexDirection: 'column',
          paddingTop: '10%',
          height: '100%',
          paddingBottom: '10%'
        }"
      >
        
        <div
          style="display: flex; flex-direction: column; justify-content: center; height:100%;"
        >
            <div
                style="display: flex; flex-direction: row; justify-content: center; height:100%;"
            >
                <div
                    style="display:flex; padding:2%;  flex-direction : row; background-color: transparent; border: 2px solid #3ab14d;"
                >
                    <span class="CircularStd-Book"  style=" font-size:36px; color: #3ab14d; letter-spacing:8px"
                    >PRÓXIMAMENTE</span
                    >
                    <span class="CircularStd-Bold" style="margin-left:10px; font-size:36px; color: white; letter-spacing:8px"
                    >CENTRO BALCONES</span
                    >
                </div>
            </div>
            <v-container>
                <v-btn
                tile
                color="white"
                outlined
                style="margin-top:30px;"
                class="white--text "
                @click="navegar()"
                >
                VER MÁS
                <v-icon right small color="green">
                    mdi-play
                </v-icon>
                </v-btn>
            </v-container>

        </div>
        </div>
      </div>
      <div
        style="background-color : #e2e2e4; display:flex; flex-direction : column; padding-top:10px; padding-bottom:40px"
      >
        <div style="margin-top : 20px ; padding : 30px;">
          <span
            style=" font-size:30px; color: #38b04c; letter-spacing:8px"
            class="CircularStd-Bold"
            >PLAZAS Y OFICINAS</span
          >
          <center>
            <hr
              style="background-color:#4d4d4f; width:60px; border: 2px solid #4d4d4f;"
            />
          </center>
        </div>

        <div
          style="display:flex; flex-direction: row ; justify-content: space-evenly; padding-left:20%;padding-right:20%;
"
        >
          <template v-for="item in items2" v-bind:id="item.titulo">
            <PlasasyOficinas
              :key="item.titulo"
              :tamañoIcono="230"
              :ruta="item.ruta"
              :titulo="item.titulo"
              :srcImagen="item.src"
            ></PlasasyOficinas>
          </template>
        </div>
      </div>
    </div>
    <div
      style="display: flex; flex-direction : column;"
      class="text-center hidden-md-and-up"
    >
      <div
        :style="{
          backgroundImage: `url(${require('@/assets/comercialoficinas/plazabalcones.jpg')})`,
          backgroundSize: '100% 100%',
          display: 'flex',
          flexDirection: 'column',
          justifContent: 'spaceEvenly',
          paddingTop: '20px',
          height: '50vh'
        }"
      >
        <div style="margin-top : 20px ;">
          <span
            class="CircularStd-Book"
            style=" font-size:22px; color: white; letter-spacing:1px; background-color:#4b4b4d; padding-left:25px; padding-right:25px; padding-top:10px; padding-bottom:10px;  border-color:white; border-width:1px; border-style:solid;"
            >COMERCIAL</span
          >
        </div>
        <div style="margin-top : 30%;  display:flex;  justify-content: center;">
          <div
            style="display:flex;  flex-direction : column; background-color:#3ab14d; padding:10px"
          >
            <span
              class="CircularStd-Book"
              style=" font-size:24px; color: white; letter-spacing:4px"
              >PRÓXIMAMENTE</span
            >
          </div>
        </div>
      </div>
      <div
        style="background-color : #e2e2e4; display:flex; flex-direction : column; padding-top:10px; padding-bottom:40px"
      >
        <div style="margin-top : 20px ; ">
          <span
            style=" font-size:18px; color: #3ab14d; letter-spacing:2px"
            class="CircularStd-Medium"
            >PLAZAS Y OFICINAS</span
          >
          <center>
            <hr
              style="background-color:#4d4d4f; width:60px; border: 2px solid #4d4d4f;"
            />
          </center>
        </div>

        <div style="display:flex; flex-direction: row ;">
          <v-row style="margin-top:10px">
            <v-col
              v-for="item in items"
              :key="item"
              class="d-flex child-flex"
              cols="6"
            >
              <PlasasyOficinas
                :key="item.titulo"
                :tamañoIcono="160"
                :ruta="item.ruta"
                :titulo="item.titulo"
                :srcImagen="item.src"
              ></PlasasyOficinas>
            </v-col>
          </v-row>
        </div>
      </div>
    </div>
  </v-app>
</template>
<script>
import PlasasyOficinas from "../../components/ComerciosOficinasComponents/PlazasyOficinas";
export default {
  name: "ComerciosOficinasIndex",
  components: {
    PlasasyOficinas
  },
  data: () => ({
    items: [
      {
        titulo: "Centro Balcones",
        src: "comercialoficinas/plazabalcones.jpg",
        ruta: "centroBalcones"
      },
      {
        titulo: "Centro Andrade",
        src: "CentroAndrade.jpg",
        ruta: "centroAndrade"
      },
      {
        titulo: "Centro Alfa",
        src: "CentroAlfa.jpg",
        ruta: "centroAlfa"
      },
      {
        titulo: "Centro Delta",
        src: "CentroDelta.jpg",
        ruta: "centroDelta"
      }
    ],
    items2: [
      {
        titulo: "Centro Andrade",
        src: "CentroAndrade.jpg",
        ruta: "centroAndrade"
      },
      { titulo: "Centro Alfa", src: "CentroAlfa.jpg", ruta: "centroAlfa" },
      { titulo: "Centro Delta", src: "CentroDelta.jpg", ruta: "centroDelta" }
    ]
  }),
  methods : { navegar:function(){ this.$router.push('/comercialOficinas/centroBalcones'); } },

};
</script>
