<template>
  <div>
      <div class="hidden-sm-and-down" style="padding-bottom:4%;  padding-top:2%; padding-right:10%; padding-left:10%; background-color:#36a748; display:flex; justify-content: center; align-items:baseline ;">
            <div v-for="(item,i) in opiniones" :key="i" style="display: flex; flex-direction : column; justify-content: center;">
                <div style="display: flex; align-items: center; justify-content: center;">
                    <div style="margin-top:20px;display:flex;  flex-direction : column; justify-content: center; ">
                        <div style="display: flex; flex-direction:column; column; justify-content: center;">
                            <center>
                            <v-avatar size="230" color="white" >
                            <img
                            :src="require(`@/assets/${item.src}`)"
                                alt="John"
                            >
                            </v-avatar>
                            </center>
                        </div>
                        <center>
                        <div style="display: flex; flex-direction:column; column; justify-content: center; width: 70%; padding-top:5%;">
                            <span  style=" font-size:18px; color: white; letter-spacing:2px; line-height:100%;" class="CircularStd-Book">{{item.comentario}}</span>    
                            <div style="margin-top:3%">
                                <span class="CircularStd-Book"  style="padding-left:2%; padding-right:2%; font-size:16px; color: white;  border-left: 2px solid #505052; border-right:  2px solid #505052;">{{item.nombre}}</span>
                            </div>
                        </div>
                        </center>
                    </div>  
                </div>
            </div>
      </div>
      <div class="hidden-md-and-up" style="  padding-top:40px; background-color:green; display:flex; justify-content: center; align-items:baseline ;">
            <v-carousel>
                <v-carousel-item
                v-for="(item,i) in opiniones"
                :key="i"
                reverse-transition="fade-transition"
                transition="fade-transition"
                >
                <v-container style="display: flex; flex-direction: column; justify-content: center; height:100%;">
                    <div style="display: flex; flex-direction:column; column; justify-content: center;">
                        <center>
                        <v-avatar size="160" color="white" >
                        <img
                        :src="require(`@/assets/${item.src}`)"
                            alt="John"
                        >
                        </v-avatar>
                        </center>
                    </div>
                    <center>
                    <div style="display: flex; flex-direction:column; column; justify-content: center; width: 60%;">
                        <span  style=" font-size:16px; color: white;" class="CircularStd-Book">{{item.comentario}}</span>    
                        <span  style=" font-size:16px; color: white; margin-top:10px; border-left: 2px solid #505052; border-right:  2px solid #505052;">{{item.nombre}}</span>
                    </div>
                    </center>
                </v-container>
                </v-carousel-item>
            </v-carousel>
      </div>
  </div>
</template>

<script>
export default {
    name : 'Opiniones',
    data : () => ({
        opiniones: [
          {
            src: 'mujer.png',
            nombre :'Andrea López, San Agustín',
            comentario : '"Lo mejor de trabajar con Rentax, fue su sistema Construye Tu Hogar. Rapido, efectivo y se adapto a nuestras necesidades"',
          },
          {
            src: 'hombre.png',
            nombre :'Juan Garcia, San Anselmo',
            comentario : '"Lo mejor de trabajar con Rentax, fue su sistema Construye Tu Hogar. Rapido, efectivo y se adapto a nuestras necesidades"',
          }
        ]
    })
}
</script>

<style>

</style>