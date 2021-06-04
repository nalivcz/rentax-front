<template>
  <div>
    <div class="hidden-sm-and-down" style="padding-top:3%; padding-bottom:3%; padding-left:10%; padding-right:10%; display:flex; justify-content: space-evenly; align-items:baseline ;">
        <div  v-for="(item,i) in oferts" :key="i" style="display: flex; flex-direction : column; justify-content: center; padding-left:5%; padding-right:5%;">
            <div>
                <v-avatar size="230" color="black">
                <img
                        :src="require(`@/assets/${item.src}`)"
                        alt="John"
                        style="opacity : .5"
                >
                </v-avatar>
            </div>
            <div style="text-align:center;  display: flex; flex-direction : column; margin-top:5%; padding-left:2%; padding-right:2%; ">
                <span style="color:#4eb95f; letter-spacing:1px; font-size: 24px;" class="CircularStd-Bold" >{{item.titulo}}</span>
                <div style="text-align:justify; padding-left:5%; padding-right:5%;" class="CircularStd-Book">
                    {{item.subtitulo}}
                <div>
            </div>    
        </div>
    </div>
        </div> 
    </div>
    <div class="hidden-md-and-up">
        <v-carousel>
            <v-carousel-item
            v-for="(item,i) in oferts"
            :key="i"
            :src="require(`@/assets/${item.src}`)"
            reverse-transition="fade-transition"
            transition="fade-transition"
            >
                <v-container class="hidden-md-and-up" style="display: flex; flex-direction: column; justify-content: flex-end; height:100%; padding-bottom:15%;">
                    <div style="display:flex; flex-direction:column; text-align:justify; width:90%; padding-left:10%;">
                        <div style="display:flex; flex-direction:row;">
                            <span style=" font-size:14px; color: white; letter-spacing:1px; background-color:#3ab14d; padding:5px;" class="CircularStd-Bold">{{item.titulo}}</span>
                        </div>
                        <span style=" font-size:14px; color: white; letter-spacing:5px; margin-top:10px;" class="CircularStd-Book" >{{item.subtitulo}}</span>  
                    </div>   
                </v-container>   
            </v-carousel-item>
        </v-carousel>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Beneficios' ,
    data : () => ({
        oferts: [
          {
            src: 'Financiamiento.jpg',
            titulo: 'FINANCIAMIENTO',
            subtitulo : 'Rentax te ofrece varias alternativas para financiar la construccion de tu casa. Hay una adecuada a necesidades'
          },
          {
            src: 'arquifami.jpg',
            titulo: 'NECESIDAD DE LA FAMILIA',
            subtitulo : 'Conoce las necesidades de tu familia, los gustos personales, los deseos y los sueños, asi como tus posibilidades financieras.'
          },
          {
            src: 'construccion.jpg',
            titulo: 'CONSTRUCCION Y COORDINACION',
            subtitulo : 'Los contratistas de Rentax son supervisados por un equipo de inspectores. En esta etapa recibirás reportes de avance semanal.'
          },
          
        ]
    })
}
</script>

<style>

</style>