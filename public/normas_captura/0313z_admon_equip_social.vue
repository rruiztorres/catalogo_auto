<template>
	<div>
		<h2>Normas de captura</h2>
		<p>Las entidades que se recogen para este objeto geográfico se capturan <b>como elementos superficiales</b> definidos por el borde o contorno exterior de la zona en <b>sentido horario.</b></p>

		<p>Si el perímetro está <b>delimitado</b> por tapias, muros o alambradas deben duplicarse éstos hasta formar el perímetro de la zona de Administración equipamiento social. En caso de <b>no tener una delimitación</b> física en el terreno se representan los límites externos imaginarios de estas zonas.</p>

		<p>En su <b>interior</b> se ubican las entidades (naves, edificios, estanques, depósitos, etc.) estas siguen las normas de captura específicas definidas para ellas.</p>

		<p>El modelo de datos <b>no contempla</b> el estado de uso o conservación de las instalaciones o servicios. Como norma general, la entidad no se captura cuando el servicio ya no se presta de manera definitiva y/o cuando las instalaciones están totalmente deterioradas o han desaparecido, a excepción de entidades con carácter histórico.</p>
		<h3>Ejemplo de captura</h3>
		<div class="picture">
				<i>
				<img src="../img/0313p_admon_equip_social_1.png">
				<p>Ejemplo de captura para un campus universitario</p>
				</i>
		</div>

		<h2>Criterios de selección</h2>
		<p>No se han definido criterios de selección para este objeto.</p>

		<h2>Notas</h2>
		<p>La <b>zona de Administración equipamiento social</b> debe estar asociada a una <b>entidad puntual</b> (ver objeto 0313p). 
		Puede haber varias zonas asociadas al mismo punto. 
		Esta asociación se realiza mediante el atributo <b>globalid</b> del puntual y el <b>guid_p</b> de la zona.
		</p>
	</div>
</template>