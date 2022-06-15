<template>
	<div>
		<h2>Normas de captura</h2>
		<p>Las entidades que se recogen para este objeto geográfico se capturan <strong>como elementos superficiales</strong> definidos por el borde o contorno exterior de la explotación en <strong>sentido horario.</strong></p>

		<p>En el <strong>caso de una explotación superficial</strong>, si el perímetro está <strong>delimitado</strong> por tapias, muros o alambradas deben duplicarse éstos hasta formar el perímetro de la explotación minera. En caso de <strong>no tener una delimitación</strong> física en el terreno se representan los límites externos imaginarios de estas zonas.</p>

		<p>En su <strong>interior</strong> se ubican las entidades (naves, edificios, estanques, depósitos, etc.) estas siguen las normas de captura específicas definidas para ellas.</p>

		<p>En los casos de <strong>explotaciones a cielo abierto</strong> en el punto o puntos de menor cota se dará un punto de depresión, dejando cortados los caminos de acceso e interiores a la explotación si se aprecia que no son permanentes.</p>

		<h3>Ejemplo de captura</h3>
		<div class="picture">
			<img src="../img/0301p_extraccion_de_materiales_1.png">
			<p><i>Ejemplo de captura para una mina a cielo abierto</i></p>
		</div>

		<h2>Criterios de selección</h2>
		<p>No se han definido criterios de selección específicos para este objeto.</p>

		<h2>Notas</h2>
		<p>La <strong>zona de Extracción de materiales</strong> debe estar asociada a una <strong>entidad puntual</strong> (ver objeto 0301p). Puede haber varias zonas asociadas al mismo punto. La asociación de las zonas al punto se recoge en el atributo <strong>“id_extract”</strong> (no obstante, en los trabajos de captura mediante el entorno de actualización, esta relación se materializa mediante una <strong>relationship class</strong>, empleando otros atributos internos).</p>
	</div>
</template>