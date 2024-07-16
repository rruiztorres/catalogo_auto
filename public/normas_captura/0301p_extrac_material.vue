<template>
	<div>
		<h2>Normas de captura</h2>
		<p>Las entidades que se recogen para este objeto geográfico son <b>elementos puntuales indicativos del lugar</b> 
		donde se encuentra la instalación o el servicio. Se debe <b>especificar siempre el valor del atributo tipo</b> (tipo_0301p). 
		Además, el <b>atributo sustancia</b> es obligatorio siempre que la instalación ocupe una <b>superficie mayor de 5Ha</b>. 
		En caso contrario, se admite el valor -97 (desconocido).</p> 

		<p>Las explotaciones mineras <b>no se eliminan</b> mientras: <ol>
			<li>Queden marcas perceptibles en el terreno asociadas a la actividad extractiva.</li>
			<li>Se trate de explotaciones históricas o con valor paisajístico.</li>
		</ol>
			Hay que tener <b>precaución en no eliminar antiguas explotaciones recuperadas paisajísticamente</b> y reconvertidas en espacios naturales, parques, etc. 
			En estos casos coexisten la explotación minera y el objeto con el nuevo uso, un jardín, por ejemplo.
		</p> 

		<p>En el caso de las explotaciones subterráneas, la geometría puntual puede indicar tanto la <b>boca de entrada</b> a una galería subterránea 
			como la <b>posición representativa</b> de toda la explotación o todo el conjunto de pozos y galerías.</p>

		<h3>Ejemplo de captura</h3>
		<div clas="picture">
			<img src="../img/0301p_extraccion_de_materiales_1.png">
			<p><i>Ejemplo de captura para una mina a cielo abierto</i></p>
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
		<p>Puede haber <b>una o varias zonas</b> de Extracción de materiales <b>asociadas</b> a la entidad puntual (ver objeto 0301z).
		Esta asociación se realiza mediante el atributo <b>globalid</b> del puntual y el <b>guid_p</b> de la zona.
	
		<p>Aunque para el <b>atributo sustancia</b> hay una lista de valores, no es una lista cerrada. Además, 
		si se realiza la extracción de más de un tipo de sustancia, se deben concatenar varios valores separados por comas. </p>

		<p>El modelo de datos <b>no contempla</b> si la instalación se encuentra <b>prestando servicio</b> en la actualidad 
		o por el contrario está <b>cerrada de forma temporal o permanente</b>. 
		Como norma general la entidad se mantiene mientras existan restos visibles, 
		aunque ruinosos, de las instalaciones, especialmente cuando tienen carácter histórico.</p>

		<p>En el caso de las explotaciones subterráneas, la geometría puntual puede indicar tanto la boca de entrada a una galería 
		subterránea como la posición representativa de toda la explotación o todo el conjunto de pozos y galerías.
		</p>
	</div>
</template>
