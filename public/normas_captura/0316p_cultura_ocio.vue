<template>
	<div>
		<h2>Normas de captura</h2>
		<p>Las entidades que se recogen para este objeto geográfico son <strong>elementos puntuales indicativos del lugar</strong> donde se encuentra la instalación o el servicio. Se debe <strong>especificar siempre el valor del atributo tipo</strong> (tipo_0316p).</p> 

		<p>Los parques infantiles <strong>no se capturan</strong>, salvo que sean ajardinados y puedan ser considerados un jardín o parque tal y como se definen en el valor <strong>Parque - jardín</strong>.</p>

		<p>El modelo de datos <strong>no contempla</strong> el estado de uso o conservación de las instalaciones o servicios. Como norma general, la entidad no se captura cuando el servicio ya no se presta de manera definitiva y/o cuando las instalaciones están totalmente deterioradas o han desaparecido, a excepción de entidades con carácter histórico.</p>
		<h3>Ejemplo de captura</h3>
		<div class="picture">
			
			<img src="../img/0316p_cultura_ocio.png">
			<p><i>Área recreativa Monterrequejo. En este caso se puede apreciar el cerramiento (alambrada) que delimita la zona de cultura - ocio.</i></p>
		</div>

		<h2>Criterios de selección</h2>
		<p>No se han definido criterios de selección específicos para este objeto.</p>

		<h2>Notas</h2>
		<p>Puede haber <strong>una o varias zonas</strong> de Cultura y ocio <strong>asociadas</strong> a la entidad puntual (ver objeto 0316z). La asociación de las zonas al punto se recoge en el atributo <strong>“id_ocio”</strong> (no obstante, en los trabajos de captura mediante el entorno de actualización, esta relación se materializa mediante una relationship class, empleando otros atributos internos).</p>
	</div>
</template>