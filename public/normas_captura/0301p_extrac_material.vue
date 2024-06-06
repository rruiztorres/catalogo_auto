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
		<p>No se han definido criterios de selección específicos para este objeto.</p>

		<h2>Notas</h2>
		<p>Puede haber <b>una o varias zonas</b> de Extracción de materiales <b>asociadas</b> a la entidad puntual (ver objeto 0301z).
		Esta asociación se realiza mediante el atributo <b>globalid</b> del puntual y el <b>guid_p</b> de la zona.
	

		<p>Aunque para el <b>atributo sustancia</b> hay una lista de valores, no es una lista cerrada. Además, 
		si se realiza la extracción de más de un tipo de sustancia, se deben concatenar varios valores separados por comas. </p>

		<p>El modelo de datos <b>no contempla</b> si la instalación se encuentra <b>prestando servicio</b> en la actualidad o por el contrario está <b>cerrada de forma temporal o permanente</b>. 
			Como norma general la entidad se mantiene mientras existan restos visibles, aunque ruinosos, de las instalaciones, especialmente cuando tienen carácter histórico.
		</p>
	</div>
</template>
