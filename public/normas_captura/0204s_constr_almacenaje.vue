<template>
	<div>
		<h2>Normas de captura</h2>
		<p>Como norma general las entidades que se recogen para este objeto geográfico <strong>son elementos superficiales capturados por los límites externos del recinto o área</strong>. Con las mismas características de captura que las citadas para la entidad <i>“caso genérico” (ver entidad 0201s-Edificio)</i>.</p>
		<p><strong>En el caso particular del Silo:</strong> Se capturan por el contorno exterior <strong>del edificio</strong>. Como silo deben registrarse los <strong>grandes edificios dedicados a almacenamiento de cereales</strong> y atendiendo a su forma característica se diferenciará de otro tipo de edificaciones como depósitos, grandes edificios, etc.</p>

		<h3>Ejemplos de captura</h3>
		<div class="picture">
			<i>
				<img src="../img/0204s_construccion_de_almacenaje_1.png">
				<p>Captura <strong>correcta</strong> Silos mayores de 20m<sup>2</sup></p>
			</i> 
		</div>

		<div class="picture">
			<i>
				<img src="../img/0204s_construccion_de_almacenaje_2.png">
				<p>Captura <strong>correcta</strong> Depósito de agua elevado mayor de 10m<sup>2</sup></p>
			</i>
		</div>

		

		<h2>Criterio de selección</h2>
		<ul>
			<li><strong>Como norma general:</strong>  Se capturan todos los elementos si su superficie es mayor de 25 m2.</li>
			<li><strong>Silo:</strong> Se capturan todos los elementos si su superficie es mayor de 20 m2.</li>
			<li><strong>Depósito de agua:</strong> Se capturan los que tengan una superficie superior a 10 m2.</li>
		</ul>

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
		<p>Hay que tener en cuenta que, en el caso de plantas de tratamiento de residuos, puntos limpios y vertederos, 
			su límite puede estar materializados por algún tipo de cerramiento: muros, alambradas, etc.  
			En este caso, <strong>se capturan duplicando su geometría con la del cerramiento</strong> (ver objeto 0207l_otras_constr)</p>
	</div>
</template>
