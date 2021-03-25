<template>
  <div style="background-color:#f2f2f2; padding:5%;" class="text-center">
    <span style="font-size:36px; color:#56555a;" class="CircularStd-Black">AZOTEA</span>
    <div style="display:flex; flex-direction : row;justify-content: space-between; ">
        <div style="width:100%; display:flex; flex-direction:column; align-items:center;" >
            <div>
            <img :src="require(`@/assets/comercialoficinas/centrobalcones/imagenes/planos/${srcImagen}`)" style="margin-left:10%;" width="70%">
            </div>
        </div>	
    </div>
  </div>
</template>

<script>
export default {
    name : 'Azotea',
    props : {
        srcImagen : String 
    }
}
</script>

<style>

</style>