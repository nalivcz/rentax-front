<template>

  <v-app>
   <router-view></router-view>
  </v-app>

</template>

<script>

export default {
  name: 'App',

  components: {
  
  },

  data: () => ({
    //
  }),
};
</script>

<style>
@font-face {
  font-family: "CircularStd-Black";
  src: local("CircularStd-Black"),
   url("./tipografia/Circular/CircularStd-Black.otf") format("truetype");
}
@font-face {
  font-family: "CircularStd-BlackItalic";
  src: local("CircularStd-BlackItalic"),
   url("./tipografia/Circular/CircularStd-BlackItalic.otf") format("truetype");
}
@font-face {
  font-family: "CircularStd-Bold";
  src: local("CircularStd-Bold"),
   url("./tipografia/Circular/CircularStd-Bold.otf") format("truetype");
}
@font-face {
  font-family: "CircularStd-BoldItalic";
  src: local("CircularStd-BoldItalic"),
   url("./tipografia/Circular/CircularStd-BoldItalic.otf") format("truetype");
}
@font-face {
  font-family: "CircularStd-Book";
  src: local("CircularStd-Book"),
   url("./tipografia/Circular/CircularStd-Book.otf") format("truetype");
}
@font-face {
  font-family: "CircularStd-BookItalic";
  src: local("CircularStd-BookItalic"),
   url("./tipografia/Circular/CircularStd-BookItalic.otf") format("truetype");
}
@font-face {
  font-family: "CircularStd-Medium";
  src: local("CircularStd-Medium"),
   url("./tipografia/Circular/CircularStd-Medium.otf") format("truetype");
}
@font-face {
  font-family: "CircularStd-MediumItalic";
  src: local("CircularStd-MediumItalic"),
   url("./tipografia/Circular/CircularStd-MediumItalic.otf") format("truetype");
}
.CircularStd-Black{
    font-family:  "CircularStd-Black";
} 
  .CircularStd-BlackItalic{
    font-family:  "CircularStd-BlackItalic";
}
.CircularStd-Bold{
    font-family:  "CircularStd-Bold";
  }
.CircularStd-BoldItalic{
    font-family:  "CircularStd-BoldItalic";
  } 
.CircularStd-Book{
    font-family:  "CircularStd-Book";
  } 
.CircularStd-BookItalic{
    font-family:  "CircularStd-BookItalic";
  }   
.CircularStd-Medium{
    font-family:  "CircularStd-Medium";
  }  
.CircularStd-MediumItalic{
    font-family:  "CircularStd-MediumItalic";
  }
  .letra-color-verde{
    color : "#4eb95f"
  }     
</style>
