<template>
    <div style="display: flex; flex-direction : column;">
        <v-avatar size="230" color="#0d6a11">
        <img
            :src="require(`@/assets/${srcImagen}`)"
            alt="John"
            style="opacity : .5"
        >
        <span class="white--text CircularStd-Bold" style="position:absolute; font-size: 24px; width:50%;">{{titulo}}</span>
        </v-avatar>
        <v-container>
            <v-btn
            tile
            color="#4d4d4f"
            style="margin-top:30px;"
            
            class="white--text "
            >
            VER MÁS
            <v-icon right color="green">
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