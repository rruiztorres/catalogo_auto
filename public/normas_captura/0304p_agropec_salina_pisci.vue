<template>
	<div>
		<h2>Normas de captura</h2>
		<p>Las entidades que se recogen para este objeto geográfico son <b>elementos puntuales representativos del lugar</b> 
			donde se encuentra la instalación o el servicio. Se debe <b>especificar siempre el valor del atributo tipo</b> (tipo_0304p).</p>
			
		<p>El modelo de datos <b>no contempla</b> el estado de uso o conservación de las instalaciones o servicios. Como norma general, 
			la entidad no se captura cuando el servicio ya no se presta de manera definitiva y/o cuando las instalaciones están 
			totalmente deterioradas o han desaparecido, a excepción de entidades con carácter histórico.</p>




		<h3>Ejemplos de captura</h3>

		<h4>Salinas</h4>
		<div class="picture">
			<img src="../img/0304p_agropec_salina_pisci_1.png">
			<p><i>Salinas de evaporación no costeras en Añana, Euskadi (capa 0304p)</i></p>
		</div>
		<div class="picture">
			<img src="../img/0304p_agropec_salina_pisci_3.png">
			<p><i>Mina de sal de Cardona (0301p – 0301z Extracción de materiales)</i></p>
		</div>
		<div class="picture">
			<img src="../img/0304p_agropec_salina_pisci_2.png">
			<p><i>Salinas costeras de evaporación en Santa Pola, Alicante (capa 0304p)</i></p>
		</div>
		<div class="picture">
			<img src="../img/0304p_agropec_salina_pisci_4.png">
			<p><i>Mina de sal de Cardona (0301p – 0301z Extracción de materiales) – Vista ortofoto</i></p>
		</div>
		<div class="picture">
			<img src="../img/0304p_agropec_salina_pisci_5.png">
			<p><i>Ejemplo de captura para una Salina costera de evaporación en Santa Pola, Alicante</i></p>
		</div>
		<div class="picture">
			<img src="../img/0304p_agropec_salina_pisci_6.png">
			<p><i>Ejemplo de captura para explotación minera de sal en Cardona (Barcelona)</i></p>
		</div>

		<h2>Criterios de selección</h2>
		<p>No se han definido criterios de selección específicos para este objeto.</p>

		<h2>Notas</h2>
		<p>Puede haber <b>una o varias zonas</b> Agropecuarias, salinas y pisciculturas <b>asociadas</b> a la entidad puntual (ver objeto 0304z). 
		Esta asociación se realiza mediante el atributo <b>globalid</b> del puntual y el <b>guid_p</b> de la zona.
		</p>
	</div>
</template>