<template>
    <div style="background-color : green; padding-bottom : 30px" class="text-center">
        <div style="margin-top : 20px ;">
        <span class="text-center" style=" font-size:36px; font-weight: bold; color: white">BIENES RAÍCES</span>
        </div>
        <div style="margin-top:20px; display:flex; justify-content: space-evenly;">
            <div style="display: flex; flex-direction : column;">
                <v-avatar size="230" color="black">
                <img
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                    alt="John"
                    style="opacity : .5"
                >
                <span class="white--text " style="position:absolute; font-size: 24px; font-weigth: bold">Casas y Departamentos</span>
                </v-avatar>
                <v-container>
                    <v-btn
                    tile
                    color="#4d4d4f"
                    style="margin-top:30px;"
                    outlined
                    class="white--text "
                    >
                    VER MÁS
                    <v-icon right color="grey">
                        mdi-play
                    </v-icon>
                    </v-btn>
                </v-container>
            </div>
            <div style="display: flex; flex-direction : column;">
                <v-avatar size="230" color="black">          
                <img
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                    alt="John"
                    style="opacity : .5"
                >
                <span class="white--text " style="position:absolute; font-size: 24px; font-weigth: bold">Áreas Comerciales</span>
                </v-avatar>
                <v-container>
                    <v-btn
                    tile
                    color="#4d4d4f"
                    style="margin-top:30px;"
                    outlined
                    class="white--text "
                    >
                    VER MÁS
                    <v-icon right color="grey">
                        mdi-play
                    </v-icon>
                    </v-btn>
                </v-container>
            </div>
            <div style="display: flex; flex-direction : column;">
                <v-avatar size="230" color="black">
                <img
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                    alt="John"
                    style="opacity : .5"
                >
                <span class="white--text " style="position:absolute; font-size: 24px; font-weigth: bold">Áreas Industriales</span>
                </v-avatar>
                <v-container>
                <v-btn
                tile
                color="#4d4d4f"
                style="margin-top:30px;"
                outlined
                class="white--text "
                >
                VER MÁS
                <v-icon right color="grey">
                    mdi-play
                </v-icon>
                </v-btn>
                </v-container>
            </div>    
        </div>
        <div style="margin-top:50px; display: flex; flex-direction : column; justify-context : center" class="text-center">
            <div><span  style=" font-size:36px; color: white; letter-spacing:16px">Financiando tu proyecto</span></div>
            <div style="margin-top:10px"><span style=" font-size:18px; color: white; letter-spacing:2px">Las mejores condiciones de financiamiento</span></div>
            <div style="margin-top:50px">                
                <v-btn
                tile
                color = "#4d4d4f"
                style="margin-top:30px;"
                class="white--text "
                >
                VER MÁS
                <v-icon right color="green">
                    mdi-play
                </v-icon>
                </v-btn></div>
        </div>
    </div>
</template>
<script>
export default {
    name : 'BienesRaices'
}
</script>