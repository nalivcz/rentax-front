<template >
  <v-app>
    <HeaderMenu></HeaderMenu>
    <router-view style="margin-top : 130px"></router-view>
    <Footer></Footer>
    </v-app>
</template>

<script>

import Footer from '../components/PageAppComponents/Footer' ; 
import HeaderMenu from '../components/PageAppComponents/HeaderMenu' ; 
export default {
  name: "PageApp",

  components: {
    Footer,
    HeaderMenu
  },

  data: () => ({
    
    selectedItem: 0,
  }),
};
</script>
