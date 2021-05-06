<template>
<v-app>
    <div class="hidden-sm-and-down">
	<div :style="{backgroundImage: `url(${require('@/assets/desarrollos/veranda/2.jpg')})`, backgroundSize: '100% 100%', display:'flex', flexDirection:'column', justifContent: 'center', alignItems:'center' ,paddingTop:'10%', height:'500px',}">     
		<div style="display:flex;  flex-direction : row; align-items:center;justify-content: space-between; padding:30px; width:40%;">
			<div style="display:flex; flex-direction:column; width:10%; padding-right:40px; text-align:justify;" class="CircularStd-Bold">
				<span  style=" font-size:30px; color: white; letter-spacing:7px; line-height: .8;">VERANDA</span>
				<span  style=" font-size:30px; color: white; letter-spacing:.01px; line-height: .8;">RESIDENCES</span>
			</div>
			<div style="width:50%; text­align: justify; padding-left:5px;  border-left: 2px solid #d70947;" >
				<span class="CircularStd-Bold"  style=" font-size:24px; text-­align: justify; color: white;line-height: .8;">EL ESPACIO IDEAL PARA TI</span>
			</div>
		</div>  
    </div>
	<div style="display:flex;  flex-direction : row; align-items:center;justify-content: space-between; ">
		<div style="width:50%; padding-left:3%">
			<div style="padding-left:7%; font-size:24px; color:#56555a; letter-spacing:.01px;">
                <span class="CircularStd-Book">Te presentamos nuestro proyecto en Los Cabos, </span>
                <span class="CircularStd-Bold">con todas las comodidades para tu familia. </span>
                <span class="CircularStd-Book">Con la mejor vista.</span>
            </div>
            <div style="padding-left:7%; font-size:24px; color:#56555a; letter-spacing:.01px; margin-top:5%;">
                <span class="CircularStd-Book">El proyecto está en la estapa de prospección, listo para arrancar. Ubicado dentro del condominio </span>
                <span class="CircularStd-Bold">Vista Real </span>
                <span class="CircularStd-Book">en Cabo San Lucas.</span>
            </div>
            <div style="padding-left:7%; font-size:24px; color:#56555a; letter-spacing:.01px; margin-top:5%;">
                <span class="CircularStd-Book">Conócelo.</span>
            </div>
		</div>
        <div style="width:50%; display:flex; justify-content:flex-end;">
			<img src="../../assets/desarrollos/veranda/mozaico.png" width="50%">
		</div>
	</div>  
	<div>
        <div style="padding-left:5%; padding-right:5% ; padding-top:3%; padding-bottom:3%" >
            <img src="../../assets/desarrollos/veranda/3.jpg" width="100%" height="300px">
            <div class="text-center">
            <span class="text-center" style=" font-size:36px; font-weight: bold; color:#56555a; letter-spacing: 5px;">AMENIDADES</span>
            </div>
        </div>
        <div style="display:flex;  flex-direction : row; align-items:center;justify-content: space-between; ">
            <div style="width:50%; padding-left:10%; padding-right:5%">
                <div style="padding-left:7%; font-size:18px; color:#56555a; letter-spacing:1px; line-height: 1.2;" class="CircularStd-Book">
                    <ul>
                        <li> <span style="font-size:24px; color:#56555a;" class="CircularStd-Book">•Alberca.</span></li>
                        <li> <span style="font-size:24px; color:#56555a;" class="CircularStd-Book">•Chapoteadero.</span></li>
                        <li> <span style="font-size:24px; color:#56555a;" class="CircularStd-Book">•Comedor con Asador.</span></li>
                        <li> <span style="font-size:24px; color:#56555a;" class="CircularStd-Book">•Zona de Juegos.</span></li>
                    </ul>
                </div>
            </div>
            <div style="width:50%; padding-left:1%; padding-right:5%">
                <div style="padding-left:3%; font-size:18px; color:#56555a; letter-spacing:1px; line-height: 1.2;" class="CircularStd-Book">
                    <ul>
                        <li> <span style="font-size:24px; color:#56555a;" class="CircularStd-Book">•Áreas ajardinadas.</span></li>
                        <li> <span style="font-size:24px; color:#56555a;" class="CircularStd-Book">•Roof Garden en cada edificio.</span></li>
                        <li> <span style="font-size:24px; color:#56555a;" class="CircularStd-Book">•Dos cajones de estacionamiento techado por departamento.</span></li>
                        <li> <span style="font-size:24px; color:#56555a;" class="CircularStd-Book">•Bodega opcional.</span></li>
                    </ul>
                </div>
            </div>
        </div>	
    </div>
	<div style="background-color : #d4cbc2" class="CircularStd-Book" >
		<center><h1 style="color:white; letter-spacing:6px;">CONTACTO</h1></center>
		<FormContacto></FormContacto>
	</div>
</div>
<div class="hidden-md-and-up">
	<div :style="{backgroundImage: `url(${require('@/assets/comercialoficinas/plazabalcones.jpg')})`, backgroundSize: '100% 100%', display:'flex', flexDirection:'column', justifyContent: 'center', alignItems:'center' , height:'200px',}">     
		<div style="display:flex;  flex-direction : row; align-items:center;justify-content: space-between; ">
			<div style="display:flex; flex-direction:column; width:100%; margin-rigth:10px;" class="CircularStd-Bold">
				<div style="display:flex;  flex-direction : row; justify-content:flex-end;">
					<span  style=" font-size:18px; color: white; letter-spacing:7px; line-height: .8; width:70%">CENTRO</span>
				</div>
				<div style="display:flex;  flex-direction : row; justify-content:flex-end">
					<span  style=" font-size:18px; color: white; letter-spacing:2px; line-height: .8; width:70%">VERANDA</span>
				</div>	
			</div>
			<div style="width:100%; margin-left: 5%;padding-left:5px; padding-right:20%;  border-left: 2px solid #d70947; line-height: 60%; text-align:justify;" >
				<div style="width:70%;">
				<span class="CircularStd-Bold"  style="font-size:12px; color: white;">EL ESPACIO IDEAL PARA TI</span>
				</div>
			</div>
		</div>  
    </div>
	<div style="display:flex;  flex-direction : row; align-items:center;justify-content: space-between; ">
		<div style="width:50%;">
			<div style="padding:10%; font-size:12px; color:#56555a; letter-spacing:1px; line-height: 1.2;" class="CircularStd-Book">
				<span>Ubicado en una zona con importante desarrollo urbano en la ciudad de Culiacán, Sinaloa, Centro Balcones cuenta con espacios diseñados para cualquier tipo de negocio.</span>
			</div>
		</div>
		<div style="width:50%">
			<img src="../../assets/comercialoficinas/centrobalcones/imagenes/planos/Croquis.jpg" width="100%"
			height = "200px">
		</div>
	</div>	
	<div style="background-color : #d4cbc2" class="CircularStd-Book" >
		<center><h1 style="color:white; letter-spacing:6px;">CONTACTO</h1></center>
		<FormContacto></FormContacto>
	</div>
</div>

</v-app>
</template>

<script>
import FormContacto from '../../components/FormContacto';

export default {
	name: "CentroBalcones",
	components :  {
		FormContacto,
	},
	data : ()=>({
		
		
	}),
	
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
  content: ""; /* Insert content that looks like bullets */
  padding-right: 4px;
  font-size:18px;
  vertical-align:middle;
  line-height:10px;
  color: #c4c4c4; /* Or a color you prefer */
}

</style>
 