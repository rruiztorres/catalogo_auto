<template>
	<div>
		<h2>Normas de captura</h2>
		<p>Las entidades que se recogen para este objeto geográfico son <b>elementos puntuales indicativos del lugar</b> donde se encuentra la instalación o el servicio. Se debe <b>especificar siempre el valor del atributo tipo</b> (tipo_0316p).</p> 

		<p>Los parques infantiles <b>no se capturan</b>, salvo que sean ajardinados y puedan ser considerados un jardín o parque tal y como se definen en el valor <b>Parque - jardín</b>.</p>

		<p>El modelo de datos <b>no contempla</b> el estado de uso o conservación de las instalaciones o servicios. Como norma general, la entidad no se captura cuando el servicio ya no se presta de manera definitiva y/o cuando las instalaciones están totalmente deterioradas o han desaparecido, a excepción de entidades con carácter histórico.</p>
		<h3>Ejemplo de captura</h3>
		<div class="picture">
			
			<img src="../img/0316p_cultura_ocio.png">
			<p><i>Área recreativa Monterrequejo. En este caso se puede apreciar el cerramiento (alambrada) que delimita la zona de cultura - ocio.</i></p>
		</div>

		<h2>Criterios de selección</h2>
		<p>No se han definido criterios de selección específicos para este objeto.</p>

		<h2>Notas</h2>
		<p>Puede haber <b>una o varias zonas</b> de Cultura y ocio <b>asociadas</b> a la entidad puntual (ver objeto 0316z). 
		Esta asociación se realiza mediante el atributo <b>globalid</b> del puntual y el <b>guid_p</b> de la zona.
		</p>
	</div>
</template>