<template>
    <div>
        <div style="display: flex; flex-direction : column;" class="CircularStd-Book hidden-sm-and-down">
            <div style="display: flex; flex-direction : column; background-color:#edeef0">
                <v-container style="padding-left:10%; padding-right:10%">
                    <div style="display: flex; flex-direction : column; ">
                        <span style="font-size:24px; color:#56555a;" class="CircularStd-Black">Casa</span>
                        <div style="display: flex; flex-direction : row; align-items:baseline;">
                            <span style="font-size:30px; color:#56555a; background-color:#d6d6d6; padding:1%; letter-spacing:5px;" class="CircularStd-Black">EN VENTA</span>
                            <span style="font-size:24px; color:#9e9da2; padding:1%;" class="CircularStd-Book">ID:</span>
                        </div>
                        <div style="display: flex; flex-direction : column;">
                            <div style="display:flex; flex-direction: row">
                                <span style="color:#3ab14d;">•</span>
                                <span style="border-bottom:  2px solid #d6d6d6; width:90%; color:#56555a;">Lorem ipsum dolor</span>
                            </div>
                            <div style="display:flex; flex-direction: row">
                                <span style="color:#3ab14d;">•</span>
                                <span style="border-bottom:  2px solid #d6d6d6; width:90%; color:#56555a;">Lorem ipsum dolor</span>
                            </div>
                            <div style="display:flex; flex-direction: row">
                                <span style="color:#3ab14d;">•</span>
                                <span style="border-bottom:  2px solid #d6d6d6; width:90%; color:#56555a;">Lorem ipsum dolor</span>
                            </div>
                            <div style="display:flex; flex-direction: row">
                                <span style="color:#3ab14d;">•</span>
                                <span style="border-bottom:  2px solid #d6d6d6; width:90%; color:#56555a;">Lorem ipsum dolor</span>
                            </div>
                            <div style="display:flex; flex-direction: row">
                                <span style="color:#3ab14d;">•</span>
                                <span style="border-bottom:  2px solid #d6d6d6; width:90%; color:#56555a;">Lorem ipsum dolor</span>
                            </div>
                            <div style="display:flex; flex-direction: row">
                                <span style="color:#3ab14d;">•</span>
                                <span style="border-bottom:  2px solid #d6d6d6; width:90%; color:#56555a;">Lorem ipsum dolor</span>
                            </div>
                            <div style="display:flex; flex-direction: row">
                                <span style="color:#3ab14d;">•</span>
                                <span style="border-bottom:  2px solid #d6d6d6; width:90%; color:#56555a;">Lorem ipsum dolor</span>
                            </div>
                            
                        </div>
                        <div style="margin-top:5%; margin-bottom:3%;padding-left:30px;padding-right:30px; width:100%; padding-top:15px; padding-bottom:15px; background-color: white; color:#6a6a6b">
                            <div style="font-size:16px; width:70%;" class="CircularStd-Book">
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin congue sem quis suscipit dignissim. Nulla eget metus eu ligula venenatis vulputate at a risus. Duis sagittis tincidunt erat sed dignissim.
                                </span>
                            </div>
                        </div>
                    </div>
                </v-container>
            </div>
            <div style="background-color : #3ab14d; padding-left:10%; padding-right:10%;">
                <v-container style="padding-left:10%; padding-right:10%;">
                <center class="CircularStd-Bold" style="color:white ; font-size: xx-large; margin-top:5%; margin-bottom:3%; letter-spacing:5px;">CONTACTO</center>
                <FormContacto></FormContacto>
                </v-container>
            </div>
        </div>

    </div>
</template>

<script>
import FormContacto from '../../components/FormContacto';
export default {
    name : 'DescripcionBienesRaices',
    components : {
        FormContacto
    },
    props : {
        rutaRouter : String,
        idBien : String
    }

}
</script>

<style>

</style>