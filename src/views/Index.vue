<template >
  <v-app>
    <HeaderMenu></HeaderMenu>
    <div style="padding : 180px">
        <h1><center>Bienvenido al sitio web de Rentax</center></h1>
    </div>
    <Footer></Footer>
    </v-app>
</template>

<script>

import Footer from '../components/PageAppComponents/Footer' ; 
import HeaderMenu from '../components/PageAppComponents/HeaderMenu' ; 
export default {
  name: "Index",

  components: {
    Footer,
    HeaderMenu
  },

  data: () => ({
    
    selectedItem: 0,
  }),
};
</script>
