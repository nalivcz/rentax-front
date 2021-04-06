<template>
<div>
    <div style="background-color:#f2f2f2; padding-left:5%; padding-right:5%; padding-bottom:2%" class="text-center hidden-sm-and-down">
		<span style="font-size:36px; color:#56555a;" class="CircularStd-Black">{{titulo}}</span>
		<div style="display:flex; flex-direction : row;justify-content: space-between; ">
			<div style="width:50%; display:flex; flex-direction:column; align-items:center;" >
				<div>
				<img :src="require(`@/assets/comercialoficinas/centrobalcones/imagenes/planos/${srcImagen}`)" style="margin-left:10%;" width="85%">
				<div style="font-size:24px; color:#d70a48; width:55%; text-align:left; margin-left:20%; padding:10px; line-height:30px;" class="CircularStd-Book">Precio de renta por m<sup>2</sup> en NIVEL 1: $230</div>
				</div>
			</div>
			<div style="width:50%; padding-left:2%; padding-right:5%; display:flex; flex-direction:column; align-items: flex-start;">
				<div style="display:flex; flex-direction:column;">
					<table border="3" class="CircularStd-Bold" >
						<thead style="background-color :#d70a48; color:white;">
						<th style="padding-left: 25px; padding-right: 25px;">{{titulo}}</th>
						<th style="padding-left: 50px; padding-right: 50px;">ÁREA</th>
						</thead>
						<tbody>
							<tr v-for="pizo in areaPorPizo" :key="pizo.id">
								<td>{{pizo.descripcion}}</td>
								<td>{{pizo.medida}}</td>
							</tr>
						</tbody>
						<tfoot style="background-color :#414046; color:white;">
						<th>TOTAL</th>
						<th>{{totalArea}} m<sup>2</sup></th>
						</tfoot>
					</table>
					<div style="display:flex; flex-direction:row; margin-top:20px; align-items:baseline;">
						<div style="height: 20px;width: 30px;background-color: #d70a48;">
						</div>
						<div class="CircularStd-Book" style="font-size:24px; margin-left:10px; color:#56555a;">Areá de renta</div>
					</div>
					<div style="display:flex; flex-direction:row; margin-top:10px; align-items:baseline;">
						<div style="height: 20px;width: 30px;background-color: #c7c7c7;">
						</div>
						<div class="CircularStd-Book" style="font-size:24px; margin-left:10px; color:#56555a;">Areas Comunes</div>
					</div>
					<div style="display:flex; flex-direction:row; margin-top:10px; align-items:baseline;">
						<div style="height: 20px;width: 30px;background-color: #ffaa61;">
						</div>
						<div class="CircularStd-Book" style="font-size:24px; margin-left:10px; color:#56555a;">Cajones de Estacionamiento</div>
					</div>
					<div style="display:flex; flex-direction:row; margin-top:10px; align-items:baseline;">
						<div style="height: 20px;width: 30px;background-color: #38b04d;">
						</div>
						<div class="CircularStd-Book" style="font-size:24px; margin-left:10px; color:#56555a;">Areá Verde</div>
					</div>
					<div style="font-size:24px; text-align:left; color:#57565b; width:70%; line-height:30px;" class="CircularStd-Book">• Servicio de mantenimiento de $25 por m<sup>2</sup></div>
				</div>
			</div>
		</div>
		<hr style=" margin-left:5%; margin-right:5%; margin-top:5%; border-top: 5px dashed gray;">
	</div>
	<div style="background-color:#f2f2f2; padding-left:5%; padding-right:5%; padding-bottom:2%" class="text-center hidden-md-and-up">
		<span style="font-size:24px; color:#56555a;" class="CircularStd-Black">{{titulo}}</span>
		<div style="display:flex; flex-direction : row;justify-content: space-between; ">
			<div style="width:50%; display:flex; flex-direction:column; align-items:center;" >
				<div>
				<img :src="require(`@/assets/comercialoficinas/centrobalcones/imagenes/planos/${srcImagen}`)" style="margin-left:10%;" width="85%">
				<div style="font-size:12px; color:#d70a48; width:100%; text-align:left; line-height:15px;" class="CircularStd-Book">Precio de renta por m<sup>2</sup> en NIVEL 1: $230</div>
				</div>
			</div>
			<div style="width:50%; padding-left:2%; padding-right:5%; display:flex; flex-direction:column; align-items: flex-start;">
				<div style="display:flex; flex-direction:column;">
					<div>
						<table border="3" class="CircularStd-Bold"  >
							<thead style="background-color :#d70a48; color:white;">
							<th style="padding-left:10%; padding-right:10%; font-size:12px;">{{titulo}}</th>
							<th style="padding-left:15%; padding-right:20%; font-size:12px; text-align:center;">ÁREA</th>
							</thead>
							<tbody style="font-size:12px;">
								<tr v-for="pizo in areaPorPizo" :key="pizo.id">
									<td>{{pizo.descripcion}}</td>
									<td>{{pizo.medida}} m<sup>2</sup></td>
								</tr>
							</tbody>
							<tfoot style="background-color :#414046; color:white;">
							<th style="font-size:12px;">TOTAL</th>
							<th style="font-size:12px;">{{totalArea}} m<sup>2</sup></th>
							</tfoot>
						</table>
					</div>
					<div style="display:flex; flex-direction:row; margin-top:20px; align-items:baseline;">
						<div style="height: 10px;width: 20px;background-color: #d70a48;">
						</div>
						<div class="CircularStd-Book" style="font-size:8px; margin-left:10px; color:#56555a;">Areá de renta</div>
					</div>
					<div style="display:flex; flex-direction:row; margin-top:1px; align-items:baseline;">
						<div style="height: 10px;width: 20px;background-color: #c7c7c7;">
						</div>
						<div class="CircularStd-Book" style="font-size:8px; margin-left:10px; color:#56555a;">Areas Comunes</div>
					</div>
					<div style="display:flex; flex-direction:row; margin-top:1px; align-items:baseline;">
						<div style="height: 10px;width: 20px;background-color: #ffaa61;">
						</div>
						<div class="CircularStd-Book" style="font-size:8px; margin-left:10px; color:#56555a;">Cajones de Estacionamiento</div>
					</div>
					<div style="display:flex; flex-direction:row; margin-top:1px; align-items:baseline;">
						<div style="height: 10px;width: 20px;background-color: #38b04d;">
						</div>
						<div class="CircularStd-Book" style="font-size:8px; margin-left:10px; color:#56555a;">Areá Verde</div>
					</div>
					<div style="font-size:12px; text-align:left; color:#57565b; width:100%; line-height:10px; margin-top:5px;" class="CircularStd-Book">•Servicio de mantenimiento de $25 por m<sup>2</sup></div>
				</div>
			</div>
		</div>
		<hr style=" margin-right:5%; margin-top:5%; border-top: 5px dashed gray;">
	</div>
</div>
</template>
<script>

export default {
    name : 'Nivel',
	props : {
		titulo : String,
		srcImagen : String ,
		totalArea : String , 
		areaPorPizo : Array
	}
}
</script>