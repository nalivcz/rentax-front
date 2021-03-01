<template >
  <v-app>
    <HeaderMenu></HeaderMenu>
    <router-view style="margin-top : 130px" class="hidden-sm-and-down" ></router-view>
    <router-view style="margin-top : 50px" class="hidden-md-and-up"></router-view>
    <ResponsiveDownMenu class="hidden-md-and-up"></ResponsiveDownMenu>
    <Footer></Footer>
    </v-app>
</template>

<script>

import Footer from '../components/PageAppComponents/Footer' ; 
import HeaderMenu from '../components/PageAppComponents/HeaderMenu' ; 
import ResponsiveDownMenu from '../components/PageAppComponents/ResponsiveDownMenu';
export default {
  name: "PageApp",

  components: {
    Footer,
    HeaderMenu,
    ResponsiveDownMenu
  },

  data: () => ({
    
    selectedItem: 0,
  }),
};
</script>
