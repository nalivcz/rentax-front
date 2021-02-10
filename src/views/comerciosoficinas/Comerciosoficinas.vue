<template>
    <div style="display: flex; flex-direction : column;" class="text-center">
        <div style="background-color : #080808; padding-top:20px; display:flex; flex-direction:column; justify-content: space-evenly; padding-top:20px">
            <div style="margin-top : 20px ;">
                <span  style=" font-size:36px; color: white; letter-spacing:16px">COMERCIAL</span>
            </div>    
            <div style="margin-top : 50px; padding-bottom:100px ; display:flex;  justify-content: center">
                <div style="display:flex;  flex-direction : column; background-color: green; padding:30px">
                    <span  style=" font-size:36px; color: white; letter-spacing:16px">PRÓXIMAMENTE</span>
                    <span  style=" font-size:36px; color: white; letter-spacing:16px">CENTRO BALCONES</span>
                </div>
            </div>  
        </div>
        <div style="background-color : #e2e2e4; display:flex; flex-direction : column; padding-top:10px; padding-bottom:40px">
            <div style="margin-top : 20px ; padding : 30px;">
                <span  style=" font-size:36px; color: GREEN; letter-spacing:16px">PLAZAS Y OFICINAS</span>
            </div> 
            <div style="display:flex; flex-direction: row ; justify-content: space-evenly">
                <div style="display: flex; flex-direction:column;">
                <v-avatar size="230" color="#125919">
                <img
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                    alt="John"
                    style="opacity : .5"
                >
                <div style="position:absolute; display:flex; flex-direction : column;  justify-content: space-evenly;">
                <span class="white--text " style="font-size: 24px; font-weigth: bold">Centro Andrade</span>
                <div>
                    <v-chip
                    class="ma-2"
                    outlined
                    color="white"
                    >
                    VER MÁS
                    </v-chip>
                </div>
                </div>
                </v-avatar>
                </div>
                <div style="display: flex; flex-direction : column;">
                <v-avatar size="230" color="#125919">          
                <img
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                    alt="John"
                    style="opacity : .5"
                >
                <div style="position:absolute; display:flex; flex-direction : column">
                <span class="white--text " style="font-size: 24px; font-weigth: bold">Centro Alfa</span>
                <div>
                    <v-chip
                    class="ma-2"
                    outlined
                    color="white"
                    >
                    VER MÁS
                    </v-chip>
                </div>
                </div>
                </v-avatar>
                </div>
                <div style="display: flex; flex-direction : column;">
                <v-avatar size="230" color="#125919">
                <img
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                    alt="John"
                    style="opacity : .5"
                >
                <div style="position:absolute; display:flex; flex-direction : column">
                <span class="white--text " style="font-size: 24px; font-weigth: bold">Centro 87</span>
                <div>
                    <v-chip
                    class="ma-2"
                    outlined
                    color="white"
                    >
                    VER MÁS
                    </v-chip>
                </div>
                </div>
                </v-avatar>
               
                </div>   
            </div>  
             
        </div>
    </div>
</template>
<script>
export default {
    name : 'ComerciosOficinas'
}
</script>