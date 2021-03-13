<template>
    <v-container>
        <center><h1 style="color:green">GALERÍA</h1></center>
        <v-row style="margin-top:20px">
            <v-col
            v-for="item in items"
            :key="item"
            class="d-flex child-flex"
            cols="4"
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
            >
            VER MÁS
            <v-icon right color="success">
                mdi-play
            </v-icon>
            </v-btn>
        </center>
    </v-container>
</template>
<script>
export default {
    name : 'Galeria',
    data : ()=>({
        items : [
            {srcImage : '01.jpg'},
            {srcImage : '02.jpg'},
            {srcImage : '03.jpg'},
            {srcImage : '04.jpg'},
            {srcImage : '05.jpg'},
            {srcImage : '06.jpg'},
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
            {srcImage : '17.jpg'},
        ]
    })
}
</script>