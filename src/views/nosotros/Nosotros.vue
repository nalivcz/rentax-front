<template>
    <div style="display: flex; flex-direction : column;" class="CircularStd-Book" >
        <div :style="{backgroundImage: `url(${require('@/assets/nosotros/fondofilosofia.jpg')})`,  paddingTop:'20px', display:'flex', justifyContent: 'flex-start', paddingTop:'20px'}">
            <div style="margin-top : 50px; padding-bottom:100px ; display:flex;  justify-content: flex-start">
                <div style="display:flex; flex-direction: column; justify-content : flex-start;padding-left:130px">
                    <span  style=" font-size:48px; color: white; letter-spacing:14px">FILOSOFÍA DE</span>
                    <span class="CircularStd-Bold" style=" font-size:48px; font-weight: bold; color: white; letter-spacing:14px">LA EPRESA</span>
                </div>
            </div>  
        </div>
        <div style="background-color : white; display:flex; flex-direction : column; padding-top:10px;">
            <div style="display:flex; flex-direction: row ; ">
                <div style="display: flex; flex-direction:column;  padding-top:50px; padding-left:30px; padding-right:30px;">
                <p style="text-align: justify; font-weight:bold">Somos una empresa de construcción con mas de 10 años de experiencia que nos respaldan en calidad y confianza. Nuestro sistema de construcción garantiza resultados de excelencia, tomando en cuenta las necesidades y preferencias de cada cliente.</p>
                <p style="text-align: justify; font-weight:bold">Con nuestro sistema Your Home te garantizamos que la construcción de tu hogar cumplirá con todas tus expectativas, con flexibilidad y a tu medida. De igual forma nuestras construcciones comerciales ofrecen siempre buena ubicacion y calidad.</p>
                <p style="text-align: justify; font-weight:bold">En Rentax apreciamos la honestidad y creatividad, siempre buscamos darte atención personalizada, con gran claridad en tu proyecto desde el desarrollo de la construcción hasta  trega, Puedes estar seguro que con nosotros crearás tu inmueble a la medida</p>
                </div>
                <div style="display: flex; flex-direction : row; justify-content: flex-end; flex-grow:2">
                <img
                    src="../../assets/nosotros/ingeniero.png"
                    alt="John"
                   
                >
                </div>
            </div>    
        </div>
        <div :style="{backgroundImage: `url(${require('@/assets/nosotros/fondomision.jpg')})`,   display:'flex', flexDirection : 'column', paddingTop:'10px',paddingBottom:'10px'}">
            <div style="display:flex; flex-direction: row ; ">
                 <div style="display:flex; flex-direction: column; justify-content : flex-start; margin-left:200px">
                    <div style="display:flex; flex-direction: column; justify-content : flex-start; width: 300px;">
                        <span style=" font-size:26px; font-weight: bold; color: white; ">MISIÓN</span>
                        <span style=" font-size:16px; color: white;  line-height: normal;">Hacer la ÚNICA experiencia de construir los inmuebles de nuestros clientes, a tiempo, con la mejor calidad y con la flexibilidad de que se requiere.</span>
                    </div>
                    <div style="display:flex; flex-direction: column; justify-content : flex-start; width: 200px; margin-top:30px;">
                        <span style=" font-size:26px; font-weight: bold; color: white; ">VISIÓN</span>
                        <span style=" font-size:16px; color: white;  line-height: normal; ">Ser líderes a nivel nacional en calidad, confianza y flexibilidad en proyectos a la medida.</span>
                    </div>
                    <div style="display:flex; flex-direction: column; justify-content : flex-start; width: 200px; margin-top:30px;">
                        <span style=" font-size:26px; font-weight: bold; color: white; ">VALORES</span>
                        <span style=" font-size:16px; color: white;  line-height: normal;">En Rentax nos enfocamos fomentar los valores de:</span>
                    </div>
                </div>
            </div>
            <div style="display: flex; flex-direction : column; justify-content: center; " class="text-center">
                <div style="display: flex; flex-direction : row; justify-content: center; ">
                    <img
                    src="../../assets/valores.png"
                    alt="John"
                    width="400"
                    >
                </div>   
                <div style="display: flex; flex-direction : row; justify-content: center; margin-top:30px">
                    <img
                    src="../../assets/estandaresservicio.png"
                    alt="John"
                    width="600"
                >
                </div>
            </div>    
        </div>
        <div :style="{backgroundImage: `url(${require('@/assets/nosotros/fondogaleria.jpg')})`, paddingTop:'20px', display:'flex', flexDirection:'column', justifyContent: 'space-evenly', paddingTop:'20px'}" class="text-center">
            <div style="margin-top : 20px ;">
                <span  style=" font-size:36px; color: #58585a; letter-spacing:6px">¿QUIÉNES SOMOS?</span>
            </div>   
           <v-carousel>
                <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
                reverse-transition="fade-transition"
                transition="fade-transition"
                >
                <div style="display: flex; align-items: center; justify-content: center;">
                    <div style="margin-top:60px;display:flex;  flex-direction : column; justify-content: center; ">
                        <div style="display: flex; flex-direction:column; column; justify-content: center;">
                            <v-avatar size="230" color="white" style="margin-left:15px">
                            <img
                            :src="require(`@/assets/${item.src}`)"
                                alt="John"
                            >
                            </v-avatar>
                        </div>
                    <span  style=" font-size:36px; color: gray; font-weight:bold">{{item.nombre}}</span>
                    <span  style=" font-size:24px; color: gray;">{{item.puesto}}</span>
                    </div>  
                </div>
                </v-carousel-item>
            </v-carousel>
        </div>
        <div :style="{backgroundImage: `url(${require('@/assets/nosotros/fondopolitica.png')})`, paddingTop:'40px', display:'flex', flexDirection:'column', justifyContent: 'space-evenly'}" class="text-center">
            <div style="margin-top : 20px ;">
                <span  style=" font-size:36px; color: white; letter-spacing:8px">POLITÍCA DE PRIVACIDAD</span>
            </div>    
            <div style="margin-bottom:50px; margin-Top:60px;">
                <v-chip
                class="ma-2"
                color="white"
                text-color="green"
                style="padding-left:20px; padding-right:20px; padding-top:20px; padding-bottom:20px"
                >
                <span style="font-size:24px;">Obtén más información</span>
                </v-chip>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name : 'Nosotros',
    data : () => ({
        items: [
          {
            src: 'ingenieronombrebien.png',
            nombre :'Ing. Daniel Blanco',
            puesto : 'DIRECTOR',
          },
          {
            src: 'ingenieronombrebien.png',
            nombre :'Ing. Daniel Blanco',
            puesto : 'DIRECTOR',
          }
        ],
    })
}
</script>
<style>

</style>