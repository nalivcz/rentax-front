<template>
    <div style="display: flex; flex-direction : column;">
        <v-avatar size="230" color="black">
        <img
            :src="srcImagen"
            alt="John"
            style="opacity : .5"
        >
        <span class="white--text " style="position:absolute; font-size: 24px; font-weigth: bold">{{titulo}}</span>
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
</template>

<script>
export default {
    name : "AvatarDownButton",
    props : {
        srcImagen : String, 
        titulo : String , 

    }
}
</script>

<style>

</style>