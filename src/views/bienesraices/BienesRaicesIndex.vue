<template>
    <div style="display: flex; flex-direction : column;" class="CircularStd-Book" >
        <div style="display: flex; flex-direction : row; padding-left:10%;">
            <div style="background-color:#3ab14d; color:white; font-size:24px; letter-spacing:2px; padding-left:30px;padding-right:30px;padding-top:5px;padding-bottom:5px; " class="CircularStd-Bold">
                <span v-if="$route.params.seccion == 'casasDepartamentos'">CASAS Y DEPARTAMENTOS</span>
                <span v-else-if="$route.params.seccion == 'areasComerciales'">ÁREAS COMERCIALES</span>
                <span v-else-if="$route.params.seccion == 'areasIndustriales'">ÁREAS INDUSTRIALES</span>
            </div>
        </div> 
        <div style="display: flex; flex-direction : row; padding-left:10%; margin-top:10px;">
            <div style="background-color:#4d4d4f; color:white; font-size:20px; letter-spacing:2px; padding-left:5px;padding-right:5px;padding-top:2px;padding-bottom:2px; " class="CircularStd-Bold">
                <span>ME INTERESA</span>
            </div>
            <div style="background-color:#4d4d4f; color:white; font-size:20px; letter-spacing:2px; padding-left:5px;padding-right:5px;padding-top:2px;padding-bottom:2px; margin-left:5px;" class="CircularStd-Bold">
                <span>UBICACIÓN</span>
            </div>
        </div> 
        <div style="display: flex; flex-direction : row; padding-left:10%; margin-top:10px;">
            <v-row>
            <v-col cols="2">
                <v-combobox
                v-model="select"
                :items="opcionesinteres"
                solo
                label="Seleccione"
                dense
                ></v-combobox>
            </v-col>
            <v-col cols="2">
                <v-combobox
                v-model="select2"
                :items="opcionesUbicacioo"
                solo
                dense
                label="Seleccione"
                ></v-combobox>
            </v-col>
            <v-col cols="2">
                <v-btn
                tile
                color="success"
                @click="buscar"
                >
                <v-icon left>
                    mdi-magnify
                </v-icon>
                BUSCAR
                </v-btn>
            </v-col>
            </v-row>
        </div>
        <div style="padding-left:10%; padding-right:10%; padding-bottom:10%;">
        <v-row>
            <v-col
            v-for="item in items"
            :key="item.src"
            class="d-flex child-flex"
            cols="6"
            >
            <div style="display: flex; flex-direction : column; ">
                <img
                :src="require(`@/assets/bienesraices/submodules/casasdepartamentos/${item.src}`)"
                :lazy-src="require(`@/assets/bienesraices/submodules/casasdepartamentos/${item.src}`)"
                >
                <span style="font-size:24px;">EN VENTA</span>
                <span style="font-size:30px;" class="CircularStd-Bold">{{item.precio}}</span>
                <div style="display: flex; flex-direction : row; justify-content:flex-start; align-items:baseline; color:#515153">
                    <span>{{item.direccion}}</span>
                    <div style="display: flex; flex-direction : column; justify-content: flex-end; margin-left:20px;">
                    <v-btn
                    tile
                    color="success"
                    >
                     VER MÁS 
                    <v-icon small style="margin-left:3px;" >
                        mdi-play
                    </v-icon>
                    </v-btn>
                </div>
                </div>
                
            </div>
            
            </v-col>
            </v-row> 
        </div>    
    </div>
</template>
<script>
export default {
    name : 'BienesRaicesIndex',
    props : {
        rutaRouter : String
    },
    data : () => ({
         items :[
             {
                 precio : "4.9 MDP",
                 direccion : "Casa en San Miguel, La primavera",
                 src : "201.png",
             },
             {
                 precio : "4.9 MDP",
                 direccion : "Casa en San Miguel, La primavera",
                 src : "202.png",
             },{
                 precio : "4.9 MDP",
                 direccion : "Casa en San Miguel, La primavera",
                 src : "203.png",
             },{
                 precio : "4.9 MDP",
                 direccion : "Casa en San Miguel, La primavera",
                 src : "204.png",
             },{
                 precio : "4.9 MDP",
                 direccion : "Casa en San Miguel, La primavera",
                 src : "205.png",
             },{
                 precio : "4.9 MDP",
                 direccion : "Casa en San Miguel, La primavera",
                 src : "206.png",
             },
         ],
         opcionesinteres:['Compra','Renta','Venta'],
         opcionesUbicacioo:['Culiacan']
     }),
    methods :{
        buscar(){
            console.log(this.select)
            console.log("buscando ??")
            console.log(this.rutaRouter)
        }
    }
}
</script>
