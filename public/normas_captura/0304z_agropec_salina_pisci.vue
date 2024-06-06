<template>
	<div>
		<h2>Normas de captura</h2>
		<p>Las entidades que se recogen para este objeto geográfico se capturan <strong>como elementos superficiales</strong> definidos por el borde o contorno exterior de la zona en <strong>sentido horario.</strong></p>

		<p>Si el perímetro está <strong>delimitado</strong> por tapias, muros o alambradas deben duplicarse éstos hasta formar el perímetro de la zona agropecuaria-salina-piscifactoria. En caso de <strong>no tener una delimitación</strong> física en el terreno se representan los límites externos imaginarios de estas zonas.</p>

		<p>En su <strong>interior</strong> se ubican las entidades (naves, edificios, estanques, depósitos, etc.) estas siguen las normas de captura específicas definidas para ellas.</p>

		<p>El modelo de datos <strong>no contempla</strong> el estado de uso o conservación de las instalaciones o servicios. Como norma general, la entidad no se captura cuando el servicio ya no se presta de manera definitiva y/o cuando las instalaciones están totalmente deterioradas o han desaparecido, a excepción de entidades con carácter histórico.</p>
		<h3>Ejemplos de captura</h3>
		<div class="picture">
			<img src="../img/0304p_agropec_salina_pisci_1.png">
			<p><i>Ejemplo de captura para una salina</i></p>
		</div>

		<h2>Criterios de selección</h2>
		<p>No se han definido criterios de selección para este objeto.</p>

		<h2>Notas</h2>
		<p>La <strong>zona agropecuaria, salina y piscifactoria</strong> debe estar asociada a una <strong>entidad puntual</strong> (ver objeto 0304p). 
		Puede haber varias zonas asociadas al mismo punto. 
		Esta asociación se realiza mediante el atributo <b>globalid</b> del puntual y el <b>guid_p</b> de la zona.
		</p>
	</div>
</template>