<template>
	<div>
		<h2>Normas de captura</h2>
		<p>	Las entidades que se capturan para este objeto geográfico son elementos superficiales capturada por su contorno. 
			Se incluye en esta tabla cualquier masa de agua exterior a la línea
			de costa como Mares, Rías o Caños.</p>

		<p><b>En el caso de las rías</b>, la geometría interior debe duplicarse respecto a la línea de costa. El límite exterior (imaginario) de
		la ría lo forman los dos cabos o puntas situados en el inicio de la apertura de la ría y que puedan formar una línea recta
		entre ellos sin que esta sea secante a la propia línea de costa y sin que interfiera con otra ría. Si la línea recta (imaginaria)
		formada entre estos dos cabos o puntas está próxima a una o varias islas debe ampliarse la geometría de modo que la
		parte de la isla orientada hacia el interior de la ría duplique su geometría con la de la ría. Si esta línea es secante a la isla
		o islas, debe adaptarse la geometría para que recoja correctamente la línea de costa de la isla o islas. Si parte de la ría
		continua aguas adentro, teniendo en cuenta la línea de costa, ha de capturarse como curso natural superficial (<a href="#0401s">ver
		0401s_Curso natural</a>).</p>

		<h3>Ejemplos</h3>
		<div class="picture">
			<i>
				<img src="../img/0422s_ria_1.png">
				<p><i><strong>correcta</strong> Ría (Ría de Vigo)</i></p>
			</i>
	</div>

	<div class="picture">
		<i>
			<img src="../img/0422s_ria_2.png">
			<p><i>Captura <strong>incorrecta</strong> Ría (Ría de Vigo)</i></p>
		</i>
	</div>

	<div class="picture">
		<i>
			<img src="../img/0422s_ria_3.png">
			<p><i>Captura <strong>correcta</strong> de Ría aguas exteriores hasta la línea de costa (parte izquierda - azul claro)</i></p>
		</i>
	</div>

	<div class="picture">
		<i>
			<img src="../img/0422s_ria_4.png">
			<p><i>Continuación de la captura <strong>como curso natural</strong> 
				desde la línea de costa (parte derecha - azul oscuro) <strong>Captura correcta</strong></i></p>
		</i>
	</div>

	<h2>Criterios de selección</h2>
	<p>Solo se capturan como ría, aquellos elementos <strong>situados en aguas exteriores</strong> (mar adentro desde la línea de costa). Si parte de la ría continua <strong>aguas adentro</strong>, teniendo en cuenta la línea de costa, ha de capturarse como <strong>curso natural superficial</strong><i> (ver 0401s_curso_natural)</i></p>

	<h2>Notas</h2>
	</div>
</template>