<template>
	<div>
		<h2>Normas de captura</h2>
		<p>Las entidades que se recogen para este objeto geográfico son <b>elementos puntuales indicativos del lugar</b> 
		donde se encuentra la instalación o el servicio. Se debe <b>especificar siempre el valor del atributo tipo</b> (tipo_0301p). 
		Además, el <b>atributo sustancia</b> es obligatorio siempre que la instalación ocupe una <b>superficie mayor de 5Ha</b>. 
		En caso contrario, se admite el valor -97 (desconocido).</p> 

		<p>En el caso de las explotaciones subterráneas, la geometría puntual puede indicar tanto la <b>boca de entrada</b> a una galería subterránea 
			como la <b>posición representativa</b> de toda la explotación o todo el conjunto de pozos y galerías.</p>

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
