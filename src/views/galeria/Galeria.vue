<template>
    <v-container>
        <center><h1 style="color:green">GALERÍA</h1></center>
        <v-row style="margin-top:20px">
        <v-col
        v-for="n in 9"
        :key="n"
        class="d-flex child-flex"
        cols="4"
        >
        <v-img
            :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
            :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
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
    name : 'Galeria'
}
</script>