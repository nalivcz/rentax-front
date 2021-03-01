<template>
    <v-container >
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation
        >
            <v-text-field
                outlined
                dense
                label="NOMBRE"
                background-color="white"
                color="black"
            ></v-text-field>
            <v-text-field
                outlined
                dense
                label="E-MAIL"
                background-color="white"
                color="black"
            ></v-text-field>
            <v-text-field
                outlined
                dense
                label="TELÉFONO"
                background-color="white"
                color="black"
            ></v-text-field>
            <v-textarea
                outlined
                background-color="white"
                color="black"
                name="input-7-4"
                label="Comentarios"
            ></v-textarea>
            <center>
                <v-btn
                color="#4d4d4f"
                class="white--text"
                >
                Enviar
                </v-btn>
            </center>
        </v-form>   
    </v-container>    
</template>

<script>
export default {
    name:"FormContacto",
    props : {
        estilo : Object
    },
    data : () => ({
        estiloObject : "background-color : " + this.props.estilo.color
     }),
    mounted() {
    
    }
}
</script>

<style>

</style>