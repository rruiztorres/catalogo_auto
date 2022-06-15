<template>
	<div>
		<h2>Normas de captura</h2>
		<p>Las entidades que se recogen para este objeto geográfico son <strong>elementos puntuales indicativos del lugar</strong> donde se encuentra la instalación o el servicio. Se debe <strong>especificar siempre el valor del atributo tipo</strong> (tipo_0301p). Además, el <strong>atributo sustancia</strong> es obligatorio siempre que la instalación ocupe una <strong>superficie mayor de 5Ha</strong>. En caso contrario, se admite el valor -97 (desconocido).</p> 

		<h3>Ejemplo de captura</h3>
		<div clas="picture">
			<img src="../img/0301p_extraccion_de_materiales_1.png">
			<p><i>Ejemplo de captura para una mina a cielo abierto</i></p>
		</div>

		<h2>Criterios de selección</h2>
		<p>No se han definido criterios de selección específicos para este objeto.</p>

		<h2>Notas</h2>
		<p>Puede haber <strong>una o varias zonas</strong> de Extracción de materiales <strong>asociadas</strong> a la entidad puntual (ver objeto 0301z). 
			La asociación de las zonas al punto se recoge en el atributo <strong>“id_extract”</strong> (no obstante, en los trabajos de captura mediante el entorno de actualización, 
			esta relación se materializa mediante una relationship class, empleando otros atributos internos).</p>

		<p>Aunque para el <strong>atributo sustancia</strong> hay una lista de valores, no es una lista cerrada. Además, 
			si se realiza la extracción de más de un tipo de sustancia, se deben concatenar varios valores separados por comas. </p>
	</div>
</template>
