<template >
  <v-app>
    <HeaderMenu></HeaderMenu>
    <Inicio style="margin-top:150px"></Inicio>
    <Footer></Footer>
    </v-app>
</template>

<script>

import Footer from '../components/PageAppComponents/Footer' ; 
import HeaderMenu from '../components/PageAppComponents/HeaderMenu' ; 
import Inicio from '../views/inicio/Inicio';
export default {
  name: "Index",

  components: {
    Footer,
    HeaderMenu,
    Inicio
  },
  data: () => ({
    
    selectedItem: 0,
  }),
};
</script>
