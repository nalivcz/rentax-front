<template>
    <v-app>
        <div style="display: flex; flex-direction : column;" class="CircularStd-Book hidden-sm-and-down" >
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
                <ImagenCVM :srcImagen=item.src :precio=item.precio :direccion=item.direccion :nombrePropiedad=item.nombrePropiedad :arrayImages=item.arrayImages :totalCuartos=item.totalCuartos :totalBanos=item.totalBanos :totalCocheras=item.totalCocheras :totalMetros=item.totalMetros  />
                
                </v-col>
                </v-row> 
            </div>    
        </div>
        <div style="display: flex; flex-direction : column; margin-top:10px;" class="CircularStd-Book hidden-md-and-up" >
            <div v-if="$route.params.seccion == 'casasDepartamentos'" :style="{ backgroundImage: `url(${require('@/assets/bienesraices/casasdepartamentos.png')})`, backgroundSize: '100% 100%',height : '170px' , display: 'flex', flexDirection : 'column', justifyContent : 'center'  ,alignItems:'center', paddingLeft:'5%', paddingRight:'5%'}">
                <div style="display: flex; flex-direction : column; align-items:center; background-color:#3ab14d; color:white; font-size:14px; letter-spacing:2px;padding-top:5px;padding-bottom:5px; width:100%;" class="CircularStd-Bold">
                    <span v-if="$route.params.seccion == 'casasDepartamentos'">CASAS Y DEPARTAMENTOS</span>
                    <span v-else-if="$route.params.seccion == 'areasComerciales'">ÁREAS COMERCIALES</span>
                    <span v-else-if="$route.params.seccion == 'areasIndustriales'">ÁREAS INDUSTRIALES</span>
                </div>
            </div> 
            <div v-if="$route.params.seccion == 'areasComerciales'" :style="{ backgroundImage: `url(${require('@/assets/bienesraices/areascomerciales.jpeg')})`, backgroundSize: '100% 100%',height : '170px' , display: 'flex', flexDirection : 'column', justifyContent : 'center'  ,alignItems:'center', paddingLeft:'5%', paddingRight:'5%'}">
                <div style="display: flex; flex-direction : column; align-items:center; background-color:#3ab14d; color:white; font-size:14px; letter-spacing:2px;padding-top:5px;padding-bottom:5px; width:100%;" class="CircularStd-Bold">
                    <span v-if="$route.params.seccion == 'casasDepartamentos'">CASAS Y DEPARTAMENTOS</span>
                    <span v-else-if="$route.params.seccion == 'areasComerciales'">ÁREAS COMERCIALES</span>
                    <span v-else-if="$route.params.seccion == 'areasIndustriales'">ÁREAS INDUSTRIALES</span>
                </div>
            </div> 
            <div v-if="$route.params.seccion == 'areasIndustriales'" :style="{ backgroundImage: `url(${require('@/assets/bienesraices/areasindustriales.png')})`, backgroundSize: '100% 100%',height : '170px' , display: 'flex', flexDirection : 'column', justifyContent : 'center'  ,alignItems:'center', paddingLeft:'5%', paddingRight:'5%'}">
                <div style="display: flex; flex-direction : column; align-items:center; background-color:#3ab14d; color:white; font-size:14px; letter-spacing:2px;padding-top:5px;padding-bottom:5px; width:100%;" class="CircularStd-Bold">
                    <span v-if="$route.params.seccion == 'casasDepartamentos'">CASAS Y DEPARTAMENTOS</span>
                    <span v-else-if="$route.params.seccion == 'areasComerciales'">ÁREAS COMERCIALES</span>
                    <span v-else-if="$route.params.seccion == 'areasIndustriales'">ÁREAS INDUSTRIALES</span>
                </div>
            </div> 
            <div style="display: flex; flex-direction : column; padding-left:5%; padding-right:5%; margin-top:10px;">
                <div style="display: flex; flex-direction : row;">
                    <div style="background-color:#4d4d4f; color:white; font-size:12px; letter-spacing:2px; padding-left:5px;padding-right:5px;padding-top:2px;padding-bottom:2px; " class="CircularStd-Bold">
                        <span>ME INTERESA</span>
                    </div>
                </div> 
                <v-combobox
                v-model="select"
                :items="opcionesinteres"
                solo
                label="Seleccione"
                dense
                >
                </v-combobox>
                
                <div style="display: flex; flex-direction : row; ">
                    <div style="background-color:#4d4d4f; color:white; font-size:12px; letter-spacing:2px; padding-left:5px;padding-right:5px;padding-top:2px;padding-bottom:2px; " class="CircularStd-Bold">
                        <span>UBICACIÓN</span>
                    </div>
                </div> 
                <v-combobox
                v-model="select2"
                :items="opcionesUbicacioo"
                solo
                dense
                label="Seleccione"
                ></v-combobox>
                <v-btn
                tile
                color="success"
                @click="buscar"
                >
                BUSCAR 
                <v-icon style="margin-left:10px;" left>
                    mdi-magnify
                </v-icon>
                </v-btn>
            </div>
            <div style="padding-left:10%; padding-right:10%; padding-bottom:10%;  padding-top:5%;">
                <v-row>
                <v-col
                v-for="item in items"
                :key="item.src"
                class="d-flex child-flex"
                cols="12"
                >
                <div style="display: flex; flex-direction : column; ">
                    <img
                    :src="require(`@/assets/bienesraices/submodules/casasdepartamentos/${item.src}`)"
                    :lazy-src="require(`@/assets/bienesraices/submodules/casasdepartamentos/${item.src}`)"
                    >
                    <span style="font-size:18px;">EN VENTA</span>
                    <span style="font-size:18px;" class="CircularStd-Bold">{{item.precio}}</span>
                    <div style="display: flex; flex-direction : row; justify-content:flex-start; align-items:baseline; color:#515153">
                        <div style="width:70%">
                            <span style="font-size:12px;" >{{item.direccion}}</span>
                        </div>
                        <div style="display: flex; flex-direction : column; width:30%">
                        <v-btn
                        tile
                        color="success"
                        >
                            <span style="font-size:12px;">VER MÁS</span> 
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
    </v-app>
</template>
<script>
import ImagenCVM from '../../components/GalleryDialogComponents/ImagenCVM' ;
export default {
    name : 'BienesRaicesIndex',
    props : {
        rutaRouter : String
    },
    components:{
        ImagenCVM 
    },
    data : () => ({
         items :[
             {
                 precio : "4.9 MDP",
                 direccion : "Casa en San Miguel, La primavera",
                 src : "201.png",
                 id : 201,
                 nombrePropiedad : 'Propiedad 1', 
                    arrayImages : [
                    { src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg', index : 0  }, 
                    { src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg', index : 1 }, 
                    { src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg', index : 2 }, 
                    { src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg', index : 3},
                ],
                totalCuartos : '10' ,
                totalBanos  : '2 1/2',
                totalCocheras : '1',
                totalMetros : '160' 
             },
             {
                 precio : "4.9 MDP",
                 direccion : "Casa en San Miguel, La primavera",
                 src : "202.png",
                 id : 202,
                 nombrePropiedad : 'Propiedad 2', 
                    arrayImages : [
                    { src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg', index : 0  }, 
                    { src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg', index : 1 }, 
                    { src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg', index : 2 }, 
                    { src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg', index : 3},
                ],
                totalCuartos : '10' ,
                totalBanos  : '2 1/2',
                totalCocheras : '1',
                totalMetros : '160' 
             },{
                 precio : "4.9 MDP",
                 direccion : "Casa en San Miguel, La primavera",
                 src : "203.png",
                 id : 203,
                 nombrePropiedad : 'Propiedad 3', 
                    arrayImages : [
                    { src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg', index : 0  }, 
                    { src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg', index : 1 }, 
                    { src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg', index : 2 }, 
                    { src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg', index : 3},
                ],
                totalCuartos : '10' ,
                totalBanos  : '2 1/2',
                totalCocheras : '',
                totalMetros : '100' 
             },{
                 precio : "4.9 MDP",
                 direccion : "Casa en San Miguel, La primavera",
                 src : "204.png",
                 id : 204,
                 nombrePropiedad : 'Propiedad 4', 
                    arrayImages : [
                    { src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg', index : 0  }, 
                    { src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg', index : 1 }, 
                    { src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg', index : 2 }, 
                    { src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg', index : 3},
                ],
                totalCuartos : '10' ,
                totalBanos  : '',
                totalCocheras : '1',
                totalMetros : '160' 
             },{
                 precio : "4.9 MDP",
                 direccion : "Casa en San Miguel, La primavera",
                 src : "205.png",
                 id : 205,
                 nombrePropiedad : 'Propiedad 5', 
                    arrayImages : [
                    { src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg', index : 0  }, 
                    { src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg', index : 1 }, 
                    { src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg', index : 2 }, 
                    { src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg', index : 3},
                ],
                totalCuartos : '10' ,
                totalBanos  : '2 1/2',
                totalCocheras : '1',
                totalMetros : '160' 
             },{
                 precio : "4.9 MDP",
                 direccion : "Casa en San Miguel, La primavera",
                 src : "206.png",
                 id : 206,
                 nombrePropiedad : 'Propiedad 6', 
                    arrayImages : [
                    { src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg', index : 0  }, 
                    { src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg', index : 1 }, 
                    { src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg', index : 2 }, 
                    { src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg', index : 3},
                ],
                totalCuartos : '10' ,
                totalBanos  : '2 1/2',
                totalCocheras : '1',
                totalMetros : '160' 
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
