<template>
<div>
	<div :style="{backgroundImage: `url(${require('@/assets/comercialoficinas/plazabalcones.jpg')})`, backgroundSize: '100% 100%', display:'flex', flexDirection:'column', justifContent: 'center', alignItems:'center' ,paddingTop:'30%', height:'800px',}">     
		<div style="display:flex;  flex-direction : row; align-items:center;justify-content: space-between;  background-color: green; padding:30px; width:40%;">
			<div style="display:flex; flex-direction:column; width:10%;">
				<span  style=" font-size:44px; color: white; letter-spacing:1px; line-height: .8;">CENTRO BALCONES</span>
			</div>
			<div style="width:50%; text­align: justify;" >
				<span  style=" font-size:30px; text­align: justify; color: white; letter-spacing:1px; line-height: .8;">EL ESPACIO IDEAL PARA TU NEGOCIO</span>
			</div>
		</div>  
    </div>
	<div style="display:flex;  flex-direction : row; align-items:center;justify-content: space-between; ">
		<div style="width:50%">
			<img src="../../assets/comercialoficinas/centrobalcones/imagenes/balcones2.jpg" width="100%">
		</div>
		<div style="width:50%; padding-left:3%">
			<div style="padding-left:7%; font-size:24px; color:#56555a; letter-spacing:4px;" class="CircularStd-Bold"><span>ZONA CON PLUSVALÍA</span></div>
			<ul>
				<li> <span style="font-size:24px; color:#56555a;" class="CircularStd-Book"> Alto flujo vehicular</span></li>
				<li> <span style="font-size:24px; color:#56555a;" class="CircularStd-Book"> Roof Garden</span></li>
				<li> <span style="font-size:24px; color:#56555a;" class="CircularStd-Book"> Elevador</span></li>
				<li> <span style="font-size:24px; color:#56555a;" class="CircularStd-Book"> 70 cajones de estacionamiento</span></li>
			</ul>
		</div>
	</div>  
	<div style="background-color:#57565b; text-align:center; padding-top:20px;  padding-bottom:10px;">
		<span style=" font-size:18px; color:WHITE; letter-spacing:4px;" class="CircularStd-Bold">EL MEJOR PUNTO DE CONEXIÓN DE LA ZONA SUR DE LA CIUDAD</span> 
	</div>
	<div style="display:flex;  flex-direction : row; align-items:center;justify-content: space-between; ">
		<div style="width:50%; padding-left:10%; padding-right:5%">
			<div style="padding-left:7%; font-size:18px; color:#56555a; letter-spacing:1px; line-height: 1.2;" class="CircularStd-Book">
				<span>Ubicado en una zona con importante desarrollo urbano en la ciudad de Culiacán, Sinaloa, Centro Balcones cuenta con espacios diseñados para cualquier tipo de negocio.</span>
				<hr style="background-color:#4d4d4f; width:40%; border: 2px solid #d70a48; margin-top:60px;">
			</div>
		</div>
		<div style="width:50%">
			<img src="../../assets/comercialoficinas/centrobalcones/imagenes/planos/Croquis.jpg" width="100%">
		</div>
	</div>	
	<div>
	<template v-for="pizo in pizos" :id="pizo.titulo">
		<Nivel :key="pizo.titulo" :titulo="pizo.titulo" :srcImagen="pizo.srcImagen" :totalArea="pizo.totalArea" :areaPorPizo="pizo.areaPorPizo"></Nivel>
	</template>
	</div>
	<Azotea :srcImagen=azoteaSrc></Azotea>
	<div style="background-color : #d80a48" class="CircularStd-Book" >
		<center><h1 style="color:white; letter-spacing:6px;">CONTACTO</h1></center>
		<FormContacto></FormContacto>
	</div>
</div>
</template>

<script>
import FormContacto from '../../components/FormContacto';
import Nivel from '../../components/ComerciosOficinasComponents/Nivel';
import Azotea from '../../components/ComerciosOficinasComponents/Azotea';
export default {
	name: "CentroBalcones",
	components :  {
		FormContacto,
		Nivel,
		Azotea
	},
	data : ()=>({
		pizos : [
			{
				titulo : "NIVEL 1",
				srcImagen : "planonivel1.jpg" ,
				totalArea : "466.00" , 
				areaPorPizo : [
					{
						descripcion : "LOCAL 1",
						medida :  "46.50" 
					}
				]
			},
			{
				titulo : "NIVEL 2",
				srcImagen : "planonivel2.jpg" ,
				totalArea : "466.00" , 
				areaPorPizo : [
					{
						descripcion : "LOCAL 1",
						medida :  "46.50" 
					}
				]
			}
		],
		azoteaSrc : 'azotea1.jpg'
	})

};
</script>

<style>
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
th {
  text-align: center;    
}
tr:nth-child(even) {
  background-color: #d70a48;
}
tr:nth-child(odd) {
   background-color: #c4c4c4;
}
ul {
  list-style: none; /* Remove HTML bullets */
  
}
li::before {
  content: "•"; /* Insert content that looks like bullets */
  padding-right: 4px;
  font-size:36px;
  vertical-align:middle;
  line-height:10px;
  color: #d70a48; /* Or a color you prefer */
}
</style>
