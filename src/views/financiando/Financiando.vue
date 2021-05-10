<template>
  <v-app>
      <div class="hidden-sm-and-down">
        <div :style="{ backgroundImage: `url(${require('@/assets/financiando/financiando.jpg')})` , backgroundSize : '100% 100%', height : '600px'  , display : 'flex', flexDirection : 'column' }">
                <div style="display: flex; flex-direction: column; justify-content: center; height:100%;">
                    <div style="display: flex; flex-direction: row; justify-content: center;">
                        <div style="display:flex; flex-direction : column">
                            <span  style=" font-size:36px; color: #4d4d4f; letter-spacing:16px">FINANCIANDO </span>
                            <span style=" font-size:36px; color: #4d4d4f; letter-spacing:16px" class="CircularStd-Bold">TU PROYECTO</span> 
                        </div>
                    </div>
                </div>
        </div>
        <div style="display: flex; flex-direction: column; justify-content: center; padding-left :20%; padding-right :20%; padding-top: 2%; padding-bottom:5%">
            
            <div style="text-align:justify;">De la mano de <span style="color:green" class="CircularStd-Bold">Rentax</span>, las familias que han buscado financiamiento para construir su hogar han sido casos de éxito y se les ha ayudado a resolver cualquier detalle con el <span class="CircularStd-BookItalic">Buro de Crédito</span>. Con el Crédito de Construcción que se utiliza para <span class="CircularStd-Bold">Your Home</span>(construir tu casa a la medida), el banco te puede prestar hasta el 50% para comprar el terreno o hasta el 70% para la construcción, tasas de interes del 7.75% y plazos de hasta 20 años.   </div>
            <div style="display: flex; flex-direction: row; justify-content: center; margin-top : 5%">
                <img :src="require(`@/assets/financiando/logos/contactanos.png`)"
                width="100%"
                height="10%">  
            </div>
            <div style="display: flex; flex-direction: row; justify-content: center; margin-top : 5%">
                <img :src="require(`@/assets/financiando/logos/asesores.png`)"
                width="50%"
                height="10%">  
            </div>
            <div class="CircularStd-Bold" style="display: flex; flex-direction: row; justify-content: center; margin-top:20px; background-color: #3ab14d; color:white; font-size : 22px; letter-spacing:2px; padding-top:2%;  padding-bottom:2%;">
                CONOCE NUESTROS PROYECTOS ENTREGADOS
            </div>
            <div style="margin-top:10px;">
                <img
                    :src="require(`@/assets/financiando/logos/logos.png`)"
                    :lazy-src="require(`@/assets/financiando/logos/logos.png`)"
                    aspect-ratio="1"
                    width="100%"
                    class="grey lighten-2"
                >
            </div>
        </div>
      </div>
      <div class="hidden-md-and-up">
          <div :style="{ backgroundImage: `url(${require('@/assets/financiando/financiando.jpg')})` , backgroundSize : '100% 45%', height : '100%'  , display : 'flex', flexDirection : 'column' }">
                <div style="display: flex; flex-direction: column; justify-content: center; height:100%px;">
                    <div style="display: flex; flex-direction: row; justify-content: center; margin-top:20%;">
                        <div style="display:flex; flex-direction : column">
                            <center>
                            <hr style="background-color:#3ab14d; width:40%; border: 2px solid #3ab14d; margin-top:60px; margin-bottom:10%;">
                            </center>
                            <span  style=" font-size:24px; color: #4d4d4f;" class="CircularStd-Bold">FINANCIANDO </span>
                            <span style=" font-size:24px; color: #4d4d4f; letter-spacing:1px" class="CircularStd-Bold">TU PROYECTO</span> 
                        </div>
                    </div> 
                    <div style="display: flex; flex-direction: column; justify-content: center; padding-left :10%; padding-right :10%; padding-top: 2%; margin-top:5%;">
                        <div style="text-align:justify; line-height:18px;">De la mano de <span style="color:green" class="CircularStd-Bold">Rentax</span>, las familias que han buscado financiamiento para construir su hogar han sido casos de éxito y se les ha ayudado a resolver cualquier detalle con el <span class="CircularStd-BookItalic">Buro de Crédito</span>. Con el Crédito de Construcción que se utiliza para <span class="CircularStd-Bold">Your Home</span>(construir tu casa a la medida), el banco te puede prestar hasta el 50% para comprar el terreno o hasta el 70% para la construcción, tasas de interes del 7.75% y plazos de hasta 20 años.   </div>
                        <div style="display: flex; flex-direction: row; justify-content: center; margin-top : 5%">
                            <img :src="require(`@/assets/financiando/logos/contactanos.png`)"
                            width="100%"
                            height="100%">  
                        </div>
                        <div style="display: flex; flex-direction: row; justify-content: center; margin-top : 5%">
                            <img :src="require(`@/assets/financiando/logos/asesores.png`)"
                            width="70%"
                            height="100%">  
                        </div>
                        <div class="CircularStd-Bold" style="display: flex; flex-direction: row; justify-content: center; margin-top:20px; background-color: #3ab14d; color:white; font-size : 10px; letter-spacing:1px; padding-top:2%;  padding-bottom:2%;">
                            CONOCE NUESTROS PROYECTOS ENTREGADOS
                        </div>
                        <div style="margin-top:10px;">
                            <img
                                :src="require(`@/assets/financiando/logos/logos.png`)"
                                :lazy-src="require(`@/assets/financiando/logos/logos.png`)"
                                aspect-ratio="1"
                                width="100%"
                                class="grey lighten-2"
                            >
                        </div>
                    </div>
                </div>
                
            </div>
      </div>
  </v-app>
</template>

<script>
export default {
    name : 'Financiando',
    data : ()=>({
        items : [
            {srcImage : 'banorte.jpg'},
            {srcImage : 'santander.png'},
            {srcImage : 'bequismas.png'},
            {srcImage : 'afirme.png'},
            {srcImage : 'banregio.png'},
           
            {srcImage : 'citibanamex.png'},
            {srcImage : 'mifel.png'},
            
            {srcImage : 'soc.jpg'},
            {srcImage : 'socasesoreshipotecarios.png'}
        ],
    })
}
</script>

<styl>

</styl>