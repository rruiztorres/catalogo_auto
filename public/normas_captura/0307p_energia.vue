<template>
	<div>
		<h2>Normas de captura</h2>
		<p>Las entidades que se recogen para este objeto geográfico son <strong>elementos puntuales indicativos del lugar</strong> donde se encuentra la instalación o el servicio. Se debe <strong>especificar siempre el valor del atributo tipo</strong> (tipo_0307p).</p>

		<p>El modelo de datos <strong>no contempla</strong> el estado de uso o conservación de las instalaciones o servicios. Como norma general, la entidad no se captura cuando el servicio ya no se presta de manera definitiva y/o cuando las instalaciones están totalmente deterioradas o han desaparecido, a excepción de entidades con carácter histórico.</p>
		<h3>Ejemplo de captura</h3>
		<div class="picture">	
			<img src="../img/0307z_energia_1.png">
			<p><i>Ejemplo de captura para una central térmica</i></p>
		</div>


		<h2>Criterios de selección</h2>
		<p>No se han definido criterios de selección específicos para este objeto.</p>

		<h2>Notas</h2>
		<p>Puede haber <strong>una o varias zonas</strong> de Energía <strong>asociadas</strong> a la entidad puntual (ver objeto 0307z). La asociación de las zonas al punto se recoge en el atributo <strong>“id_ener”</strong> (no obstante, en los trabajos de captura mediante el entorno de actualización, esta relación se materializa mediante una relationship class, empleando otros atributos internos).</p>
	</div>
</template>