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
                                <v-chip color="#3ae154" text-color="white" >
                                    <span class="CircularStd-Bold">{{item.id}}</span>
                                </v-chip>
                                <img :src="require(`@/assets/iconos/${item.src}`)" width="40%" style="margin-top:15px;">
                                <span>{{item.titulo}}</span>
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
        <div class="text-center" style="display: flex; flex-direction:column; align-items: center; justify-content: center; padding-top:40px; background-color:#19191a" >
            <hr style="background-color:#3ab14d; width:120px">
            <div style="margin-bottom: 20px;display:flex;  flex-direction : row; padding:30px">
                <span  style=" font-size:36px; color: white; letter-spacing:10px">TU CASA A </span>
                <span  style=" font-size:36px; color: white; letter-spacing:10px; margin-left:10px;" class="CircularStd-Bold">LA MEDIDA</span>
            </div>  
        </div>
    </div>
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
                src : 'familia.svg',
                titulo : 'Conocemos las necesidades de la familia'
            },
            {
                id : 2 , 
                src : 'terreno.svg',
                titulo : 'Buscamos el terreno ideal'
            },
            {
                id : 3 , 
                src : 'diseñosplanos.svg',
                titulo : 'Proponemos diseños y planos'
            },
            {
                id : 4 , 
                src : 'revisiondetalles.svg',
                titulo : 'Revisamos todos los detalles'
            },
            {
                id : 5 , 
                src : 'cotizacion.svg',
                titulo : 'Te entregamos una cotización completa'
            },
            {
                id : 6 , 
                src : 'financiamiento.svg',
                titulo : 'Te ofrecemos alternativas de financiamiento'
            },
            {
                id : 7 , 
                src : 'gestionespermisos.svg',
                titulo : 'Nos encargamos de gestiones y permisos'
            },
            {
                id : 8 , 
                src : 'informacionsemanal.svg',
                titulo : 'Construimos con información semanal de avances'
            },
            {
                id : 9 , 
                src : 'cuidadoacabados.svg',
                titulo : 'Cuidamos todos los acabados'
            },
            {
                id : 10 , 
                src : 'inspeccion.svg',
                titulo : 'Inspección final de tu nuevo hogar'
            },
            {
                id : 11 , 
                src : 'garantia.svg',
                titulo : 'Te ofrecemos alternativas de financiamiento'
            },
            {
                id : 12 , 
                src : 'arquiplano.svg',
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