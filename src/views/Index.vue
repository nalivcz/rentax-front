<template >
  <v-app>
    <HeaderMenu></HeaderMenu>
    <Inicio style="margin-top:150px" class="text-center hidden-sm-and-down"></Inicio>
    <Inicio style="margin-top:20px" class="text-center hidden-md-and-up"></Inicio>
    <ResponsiveDownMenu class="hidden-md-and-up"></ResponsiveDownMenu>
    <Footer></Footer>
    </v-app>
</template>

<script>

import Footer from '../components/PageAppComponents/Footer' ; 
import HeaderMenu from '../components/PageAppComponents/HeaderMenu' ; 
import Inicio from '../views/inicio/Inicio';
import ResponsiveDownMenu from '../components/PageAppComponents/ResponsiveDownMenu';
export default {
  name: "Index",

  components: {
    Footer,
    HeaderMenu,
    Inicio,
    ResponsiveDownMenu
  },
  data: () => ({
    
    selectedItem: 0,
  }),
};
</script>
<style>

</style>
