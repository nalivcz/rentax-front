<template>
  <div style="display: flex; flex-direction : column;" class="">
        <div style="background-color : #3ab14d;  padding-left:10%; padding-right:10%;padding-top:30px; display:flex; flex-direction:row; justify-content: center;">
            <div style="display: flex; flex-direction : column;   width:50%;  " >
                <div style=" display:flex; flex-direction:row; ">
                    <span class="CircularStd-Black" style="color:white ; font-size: 54px; width:60%; letter-spacing:10px;">CONSTRUYE LA CASA DE TUS SUEÑOS</span>
                </div>
                <hr style="background-color:#3ae155; width:10%; border: 2px solid #3ae155;">
                <img style="margin-top:20px;" src="../../assets/rentaxYourHome.png" width="150">
            </div>
            <div style="display: flex; flex-direction : column;  width:30%;" >
                 <div style="padding-left:30px;padding-right:30px; width:110%; padding-top:15px; padding-bottom:15px; color:white; background-color: #3ad754">
                     <div style="font-size:16px;" class="CircularStd-Book">Con nuestro sistema de construcción a la medida, nos encargamos de tu proyecto de inicio a fin. En el mejor tiempo y con la mejor calidad.</div>
                     <div style="font-size:16px; margin-top:10px;" class="CircularStd-Book">Más de 10 años de experiencia y mas de 120 familias disfrutando de la casas de sus sueños.</div>
                 </div>
                 <div style="margin-top:16px;  width:110%;">
                     <center class="CircularStd-Bold" style="color:white ; font-size: 24px;">Contacto</center>
                     <FormContacto></FormContacto>
                 </div>
                            
            </div>
            
        </div>
        <div style="background-color:white; display: flex; flex-direction : column; align-items:center; padding-top:20px;">
            <div>
                <video width="320" height="240" controls>
                <source src="https://www.youtube.com/watch?v=P8rmjEmpZ2M" type="video/mp4">
                Your browser does not support the video tag.
                </video>
            </div>
        </div>
        <div style="background-color:#f2f2f2; display: flex; flex-direction : column; align-items:center; padding-top:30px;" class="text-center">
            <div style="background-color: #3ab14d; color:white; padding-left:20px; padding-right:20px; padding-top:5px;  padding-bottom:5px;">
                <span style="font-size: 24px; letter-spacing:4px;" class="CircularStd-Book">PROYECTOS ENTREGADOS</span>
            </div> 
            <div style="padding:20px;">
                <v-container>
                    <v-row style="margin-top:20px">
                        <v-col
                        v-for="item in items"
                        :key="item"
                        class="d-flex child-flex"
                        cols="2"
                        >
                        <v-img
                            :src="require(`@/assets/Galeria/${item.srcImage}`)"
                            :lazy-src="require(`@/assets/Galeria/${item.srcImage}`)"
                            aspect-ratio="1"
                            class="grey lighten-2"
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
                    <center>
                        <v-btn
                        tile
                        color="#4d4d4f"
                        style="margin-top:30px;"
                        class="white--text "
                        @click="verMas"
                        >
                        {{btnMsg}}
                        <v-icon right color="success">
                            mdi-play
                        </v-icon>
                        </v-btn>
                    </center>
                </v-container>
            </div>
        </div>
        <div style="background-color: #3ab14d; color:white; display: flex; flex-direction : column; align-items:center; padding-top:30px;" class="text-center">
            <div style="background-color: #3ab14d; color:white; width:30%; padding-left:20px; padding-right:20px; padding-top:5px;  padding-bottom:5px;">
                <span style="font-size: 24px; letter-spacing:4px;" class="CircularStd-Black">CONSTRUYE TU CASA A LA MEDIDA CON</span>
            </div> 
            <img src="../../assets/rentaxYourHome.png" width="150">
            <div style="padding:20px;">
                
            </div>
        </div>
    </div>
</template>

<script>
import FormContacto from '../../components/FormContacto';
export default {
  name : 'TuCasaMedida',
  components : {
      FormContacto
  },
  data : ()=>({
        items : [
            {srcImage : '01.jpg'},
            {srcImage : '02.jpg'},
            {srcImage : '03.jpg'},
            {srcImage : '04.jpg'},
            {srcImage : '05.jpg'},
            {srcImage : '06.jpg'}
        ],
        btnMsg : 'VER MÁS',
        flag : false  
    }),
  methods: {
      verMas(){
          if(!this.flag){
               this.items.push(
                    {srcImage : '07.jpg'},
                    {srcImage : '08.jpg'},
                    {srcImage : '09.jpg'},
                    {srcImage : '10.jpg'},
                    {srcImage : '11.jpg'},
                    {srcImage : '12.jpg'},
                    {srcImage : '13.jpg'},
                    {srcImage : '14.jpg'},
                    {srcImage : '15.jpg'},
                    {srcImage : '16.jpg'},
                    {srcImage : '17.jpg'}
                );
            this.btnMsg = 'VER MENOS';
            this.flag = true ; 
          }else{
              this.items = [
            {srcImage : '01.jpg'},
            {srcImage : '02.jpg'},
            {srcImage : '03.jpg'},
            {srcImage : '04.jpg'},
            {srcImage : '05.jpg'},
            {srcImage : '06.jpg'}
            ];
              this.btnMsg = 'VER MÁS';
              this.flag = false ; 
          }
         
      }
  }

}
</script>

<style>

</style>