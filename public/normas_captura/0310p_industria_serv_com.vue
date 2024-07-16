<template>
	<div>
		<h2>Normas de captura</h2>
		<p>Las entidades que se recogen para este objeto geográfico son <b>elementos puntuales indicativos del lugar</b> donde se encuentra la instalación o el servicio. Se debe <b>especificar siempre el valor del atributo tipo</b> (tipo_0310p).</p> 

		<p>El modelo de datos <b>no contempla</b> el estado de uso o conservación de las instalaciones o servicios. Como norma general, la entidad no se captura cuando el servicio ya no se presta de manera definitiva y/o cuando las instalaciones están totalmente deterioradas o han desaparecido, a excepción de entidades con carácter histórico.</p>
		<h3>Ejemplo de captura</h3>
		<div class="picture">
			<i>
			<img src="../img/0310p_industria_serv_com_1.png">
			<p>Ejemplo de captura para un polígono industrial</p>
			</i>
		</div>

		<h2>Criterios de selección</h2>
		<h3>Salinas</h3>
		<p>Las salinas de <b>evaporación</b> son frecuentes en <b>zonas costeras</b> donde se aprovecha el agua salina del mar, pero también hay instalaciones 
			en zonas interiores en las que se utilizan manantiales de agua salada debido a que el agua atraviesa depósitos de sal subterráneos.</p>
		<p><b>No deben confundirse las salinas con las minas de sal</b>. En estas últimas la sal se obtiene directamente mediante trabajos mineros sobre la 
			roca de sal o halita. Las minas de sal se capturan en las capas 0301p y 0301z (Extracción de materiales)</p>
		<p>En general cuando existan estanques de vaporación o eras, <b>se considerará la instalación como salina (0204s / 0310p / 0310z)</b>. 
			Si por el contrario no existen se considerará explotación minera</p>
		
		<div class="picture">
			<i>
				<img src="../img/0204s_construccion_de_almacenaje_3.png">
				<p>Salinas de evaporación no costeras en Añana, Euskadi <b>(capa 0204p)</b></p>
			</i>
		</div>
		<div class="picture">
			<i>
				<img src="../img/0204s_construccion_de_almacenaje_5.png">
				<p>Mina de sal de Cardona <b>(0301p – 0301z Extracción de materiales)</b></p>
			</i>
		</div>
		<div class="picture">
			<i>
				<img src="../img/0204s_construccion_de_almacenaje_6.png">
				<p>Mina de sal de Cardona <b>(0301p – 0301z Extracción de materiales)</b> – Vista ortofoto</p>
			</i>
		</div>
		<div class="picture">
			<i>
				<img src="../img/0204s_construccion_de_almacenaje_4.png">
				<p>Salinas costeras de evaporación en Santa Pola, Alicante <b>(capa 0304p)</b></p>
			</i>
		</div>
		<div class="picture">
			<i>
				<img src="../img/0204s_construccion_de_almacenaje_8.png">
				<p>Ejemplo de captura para explotación minera de sal en Cardona (Barcelona)</p>
			</i>
		</div>
		<div class="picture">
			<i>
				<img src="../img/0204s_construccion_de_almacenaje_7.png">
				<p>Ejemplo de captura para una Salina costera de evaporación en Santa Pola, Alicante</p>
			</i>
		</div>

		<h2>Notas</h2>
		<p>Puede haber <b>una o varias zonas</b> de Industria, servicio y comercio <b>asociadas</b> a la entidad puntual (ver objeto 0310z).
		Esta asociación se realiza mediante el atributo <b>globalid</b> del puntual y el <b>guid_p</b> de la zona.
		</p>
	</div>
</template>