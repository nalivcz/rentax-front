<template>
  <div>
      <div class="hidden-sm-and-down" style="padding-bottom:40px;  padding-top:20px; background-color:green; display:flex; justify-content: center; align-items:baseline ;">
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
                        <div style="display: flex; flex-direction:column; column; justify-content: center; width: 50%;">
                            <span  style=" font-size:16px; color: white;">{{item.comentario}}</span>    
                            <span  style=" font-size:16px; color: white;">{{item.nombre}}</span>
                        </div>
                        </center>
                    </div>  
                </div>
            </div>
        </div>
        <div class="hidden-md-and-up" style="padding-bottom:40px;  padding-top:40px; background-color:green; display:flex; justify-content: center; align-items:baseline ;">
            <v-carousel>
                <v-carousel-item
                v-for="(item,i) in opiniones"
                :key="i"
                reverse-transition="fade-transition"
                transition="fade-transition"
                >
                <div style="display: flex; align-items: center; justify-content: center;">
                    <div style="margin-top:60px;display:flex;  flex-direction : column; justify-content: center; ">
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
                        <div style="display: flex; flex-direction:column; column; justify-content: center; width: 50%;">
                            <span  style=" font-size:16px; color: white;">{{item.comentario}}</span>    
                            <span  style=" font-size:16px; color: white;">{{item.nombre}}</span>
                        </div>
                        </center>
                    </div>  
                </div>
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
            src: 'ingenieronombrebien.png',
            nombre :'Juan Garcia, San Anselmo',
            comentario : '"Lo mejor de trabajar con Rentax, fue su sistema Construye Tu Hogar. Rapido, efectivo y se adapto a nuestras necesidades"',
          },
          {
            src: 'ingenieronombrebien.png',
            nombre :'Juan Garcia, San Anselmo',
            comentario : '"Lo mejor de trabajar con Rentax, fue su sistema Construye Tu Hogar. Rapido, efectivo y se adapto a nuestras necesidades"',
         
          }
        ]
    })
}
</script>

<style>

</style>