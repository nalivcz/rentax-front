<template>
<v-app>
  <div style="display: flex; flex-direction : column;" class="hidden-sm-and-down">
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
                <iframe width="560" height="315" src="https://www.youtube.com/embed/P8rmjEmpZ2M" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
                <v-container>
                    <v-row style="">
                        <v-col
                        v-for="item in itemsIconos"
                        :key="item"
                        class="d-flex child-flex"
                        cols="2"
                        >
                            <div style="display:flex; flex-direction:column; align-items:center;">
                                
                                <img :src="require(`@/assets/iconos/${item.src}`)" width="40%" style="margin-top:15px;">
                                
                            </div>
                        </v-col>
                    </v-row>
                </v-container>
            </div>
        </div>
        <Opiniones></Opiniones>
        <div class="text-center" style="padding-top:40px; display:flex; flex-direction:column; justify-content: center; align-items:center ;">
            <div style="background-color: #3ab14d; color:white; padding-left:20px; padding-right:20px; padding-top:5px;  padding-bottom:5px; align-text:center;">
                <span style="font-size: 24px; letter-spacing:4px;" class="CircularStd-Book">OBRAS EN PROCESO</span>
            </div> 
            <v-carousel hide-delimiters>
                <v-carousel-item
                v-for="(item,i) in itemsObrasEnProceso"
                :key="i"
                reverse-transition="fade-transition"
                transition="fade-transition"
                >
                <div style="display: flex; align-items: center; justify-content: center;">
                    <div style="margin-top:70px;display:flex;  flex-direction : column; justify-content: center; ">
                        <div style="display: flex; flex-direction:column; column; justify-content: center;">
                            <center>
                            <v-avatar size="230" color="white" >
                            <img
                            :src="require(`@/assets/obrasenproceso/${item.src}`)"
                            >
                            </v-avatar>
                            </center>
                        </div>
                        <center>
                        <div style="display: flex; flex-direction:row; justify-content: center; width: 70%; margin-top:10px;">
                            <span  style=" font-size:16px; color: #4d4d4f;" class="CircularStd-Bold">{{item.nombre}}</span>    
                            <span  style=" font-size:16px; color: #3cb14d; margin-left:5px;" class="CircularStd-Bold">#{{item.numero}}</span>
                        </div>
                        </center>
                    </div>  
                </div>
                </v-carousel-item>
            </v-carousel>
        </div>
        <div class="text-center" :style="{ backgroundImage: `url(${require('@/assets/desarrollos/tucasamedida2.jpg')})`, backgroundSize: '100% 100%',height : '200px', display:'flex', flexDirection : 'column' , alignItems : 'center', justifyContent : 'center', paddingTop: '40px' }" >
            <hr style="background-color:#3ab14d; border: 3px solid #3ab14d; width:60px">
            <div style="margin-bottom: 20px;display:flex;  flex-direction : row; padding:30px">
                <span  style=" font-size:36px; color: white; letter-spacing:10px">TU CASA A </span>
                <span  style=" font-size:36px; color: white; letter-spacing:10px; margin-left:10px;" class="CircularStd-Bold">LA MEDIDA</span>
            </div>  
        </div>
  </div>
  <div style="display: flex; flex-direction : column;" class="hidden-md-and-up">
    <div style="background-color : #3ab14d;  padding-left:5%; padding-right:5%;padding-top:30px; display:flex; flex-direction:column; justify-content: center;">
        <div style="display: flex; flex-direction : column; padding-left:10%;padding-right:10%;" >
            <div style=" display:flex; flex-direction:row; align-items:center;">
                <span class="CircularStd-Black" style="color:white ; font-size: 24px; width:70%; letter-spacing:10px;">CONSTRUYE LA CASA DE TUS SUEÑOS</span>
            </div>
            <hr style="background-color:#3ae155; width:13%; border: 2px solid #3ae155;">
            <img style="margin-top:20px;" src="../../assets/rentaxYourHome.png" width="150">
        </div>
        <div style="display: flex; flex-direction : column;" >
                <div style="padding-left:10%;padding-right:10%; padding-top:15px; padding-bottom:15px; color:white; background-color: #3ad754; text-align:justify;">
                    <div style="font-size:16px;" class="CircularStd-Book">Con nuestro sistema de construcción a la medida, nos encargamos de tu proyecto de inicio a fin. En el mejor tiempo y con la mejor calidad.</div>
                    <div style="font-size:16px; margin-top:10px;" class="CircularStd-Book">Más de 10 años de experiencia y mas de 120 familias disfrutando de la casas de sus sueños.</div>
                </div>
                <div style="margin-top:16px; ">
                    <center class="CircularStd-Bold" style="color:white ; font-size: 24px;">Contacto</center>
                    <FormContacto></FormContacto>
                </div>              
        </div>
        
    </div>
    <div style="background-color:white; display: flex; flex-direction : column; align-items:center; padding-top:20px;">
        <div>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/P8rmjEmpZ2M" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
    <div style="background-color:#f2f2f2; display: flex; flex-direction : column; align-items:center; padding-top:30px;" class="text-center">
        <div style="background-color: #3ab14d; color:white; padding-left:10px; padding-right:10px; padding-top:5px;  padding-bottom:5px;">
            <span style="font-size: 14px; letter-spacing:4px;" class="CircularStd-Book">PROYECTOS ENTREGADOS</span>
        </div> 
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
    <div style="background-color: #3ab14d; color:white; display: flex; flex-direction : column; align-items:center; padding-top:30px;" class="text-center">
        <div style="background-color: #3ab14d; color:white; padding-left:20px; padding-right:20px; padding-top:5px;  padding-bottom:5px;">
            <span style="font-size: 24px; letter-spacing:4px;" class="CircularStd-Black">CONSTRUYE TU CASA A LA MEDIDA CON</span>
        </div> 
        <img src="../../assets/rentaxYourHome.png" width="150">
        <div style="padding:10px;">
            <v-container>
                <v-row style="">
                    <v-col
                    v-for="item in itemsIconos"
                    :key="item"
                    class="d-flex child-flex"
                    cols="4"
                    >
                        <div style="display:flex; flex-direction:column; align-items:center;">
                            
                            <img :src="require(`@/assets/iconos/${item.src}`)" width="40%" style="margin-top:15px;">
                            
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>
    <Opiniones></Opiniones>
    <div class="text-center" style="padding-top:40px; display:flex; flex-direction:column; justify-content: center; align-items:center ;">
        <div style="background-color: #3ab14d; color:white; padding-left:20px; padding-right:20px; padding-top:5px;  padding-bottom:5px; align-text:center;">
            <span style="font-size: 18px; letter-spacing:4px;" class="CircularStd-Book">OBRAS EN PROCESO</span>
        </div> 
        <v-carousel hide-delimiters>
            <v-carousel-item
            v-for="(item,i) in itemsObrasEnProceso"
            :key="i"
            reverse-transition="fade-transition"
            transition="fade-transition"
            >
            <v-container class="hidden-md-and-up" style="display: flex; flex-direction: row; justify-content: center; height:100%;">
                <div style="display: flex; flex-direction: column; justify-content: center;">
                    <div style="display: flex; flex-direction:column; column; justify-content: center;">
                        <center>
                        <v-avatar size="230" color="white" >
                        <img
                        :src="require(`@/assets/obrasenproceso/${item.src}`)"
                        >
                        </v-avatar>
                        </center>
                    </div>
                    <center>
                    <div style="display: flex; flex-direction:row; justify-content: center; margin-top:10px;">
                        <span  style=" font-size:16px; color: #4d4d4f;" class="CircularStd-Bold">{{item.nombre}}</span>    
                        <span  style=" font-size:16px; color: #3cb14d; margin-left:5px;" class="CircularStd-Bold">#{{item.numero}}</span>
                    </div>
                    </center>
                </div>
            </v-container>
            
            </v-carousel-item>
        </v-carousel>
    </div>
    <div class="text-center" :style="{ backgroundImage: `url(${require('@/assets/desarrollos/tucasamedida2.jpg')})`, backgroundSize: '100% 100%',height : '200px', display:'flex', flexDirection : 'column' , alignItems : 'center', justifyContent : 'center', paddingTop: '40px' }" >
        <hr style="border: 2px solid #3ab14d; background-color: #3ab14d ; width:120px">
        <div style="margin-bottom: 20px;display:flex;  flex-direction : column; padding:30px">
            <span  style=" font-size:36px; color: white; letter-spacing:10px" class="CircularStd-Book">TU CASA A </span>
            <span  style=" font-size:36px; color: white; letter-spacing:10px; margin-left:10px;" class="CircularStd-Bold">LA MEDIDA</span>
        </div>  
    </div>
  </div>
</v-app>
</template>

<script>
import FormContacto from '../../components/FormContacto';
import Opiniones from '../../components/InicioComponents/Opiniones';
export default {
  name : 'TuCasaMedida',
  components : {
      FormContacto,
      Opiniones
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
        flag : false,
        itemsIconos : [
            {
                id : 1 , 
                src : '01.png',
                titulo : 'Conocemos las necesidades de la familia'
            },
            {
                id : 2 , 
                src : '02.png',
                titulo : 'Buscamos el terreno ideal'
            },
            {
                id : 3 , 
                src : '03.png',
                titulo : 'Proponemos diseños y planos'
            },
            {
                id : 4 , 
                src : '04.png',
                titulo : 'Revisamos todos los detalles'
            },
            {
                id : 5 , 
                src : '05.png',
                titulo : 'Te entregamos una cotización completa'
            },
            {
                id : 6 , 
                src : '06.png',
                titulo : 'Te ofrecemos alternativas de financiamiento'
            },
            {
                id : 7 , 
                src : '07.png',
                titulo : 'Nos encargamos de gestiones y permisos'
            },
            {
                id : 8 , 
                src : '08.png',
                titulo : 'Construimos con información semanal de avances'
            },
            {
                id : 9 , 
                src : '09.png',
                titulo : 'Cuidamos todos los acabados'
            },
            {
                id : 10 , 
                src : '10.png',
                titulo : 'Inspección final de tu nuevo hogar'
            },
            {
                id : 11 , 
                src : '11.png',
                titulo : 'Te ofrecemos alternativas de financiamiento'
            },
            {
                id : 12 , 
                src : '12.png',
                titulo : 'Cada detalle como lo has imaginado'
            }
        ],
        itemsObrasEnProceso : [
            {
                src : 'sananselmolaprimavera.jpg' ,
                nombre : 'San Anselmo',
                numero : '87'
            },
            {
                src : 'sanjavierlaprimavera.jpg' ,
                nombre : 'San Javier',
                numero : '80'
            },
            {
                src : 'sanmiguellaprimavera.jpg' ,
                nombre : 'San Miguel',
                numero : '42'
            }
        ]  
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