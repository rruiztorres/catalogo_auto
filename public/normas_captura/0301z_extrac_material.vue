<template>
	<div>
		<h2>Normas de captura</h2>
		<p>Las entidades que se recogen para este objeto geográfico se capturan <b>como elementos superficiales</b> definidos por el borde o contorno exterior de la explotación en <b>sentido horario.</b></p>

		<p>En el <b>caso de una explotación superficial</b>, si el perímetro está <b>delimitado</b> por tapias, muros o alambradas deben duplicarse éstos hasta formar el perímetro de la explotación minera. En caso de <b>no tener una delimitación</b> física en el terreno se representan los límites externos imaginarios de estas zonas.</p>

		<p>En su <b>interior</b> se ubican las entidades (naves, edificios, estanques, depósitos, etc.) estas siguen las normas de captura específicas definidas para ellas.</p>

		<p>En los casos de <b>explotaciones a cielo abierto</b> en el punto o puntos de menor cota se dará un punto de depresión, dejando cortados los caminos de acceso e interiores a la explotación si se aprecia que no son permanentes.</p>

		<h3>Ejemplo de captura</h3>
		<div class="picture">
			<img src="../img/0301p_extraccion_de_materiales_1.png">
			<p><i>Ejemplo de captura para una mina a cielo abierto</i></p>
		</div>

		<h2>Criterios de selección</h2>
		<p>No se han definido criterios de selección específicos para este objeto.</p>

		<h2>Notas</h2>
		<p>La <b>zona de Extracción de materiales</b> debe estar asociada a una <b>entidad puntual</b> (ver objeto 0301p). 
		Puede haber varias zonas asociadas al mismo punto. 
		Esta asociación se realiza mediante el atributo <b>globalid</b> del puntual y el <b>guid_p</b> de la zona.</p>
	</div>
</template>