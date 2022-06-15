<template>
	<div>
		<h2>Normas de captura</h2>
		<p>Las entidades que se recogen para este objeto geográfico son <strong>elementos puntuales indicativos del lugar</strong> donde se encuentra la instalación o el servicio. Se debe <strong>especificar siempre el valor del atributo tipo</strong> (tipo_0313p).</p> 

		<p>El modelo de datos <strong>no contempla</strong> el estado de uso o conservación de las instalaciones o servicios. Como norma general, la entidad no se captura cuando el servicio ya no se presta de manera definitiva y/o cuando las instalaciones están totalmente deterioradas o han desaparecido, a excepción de entidades con carácter histórico.</p>
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
		<p>Puede haber <strong>una o varias zonas</strong> de Administración equipamiento social <strong>asociadas</strong> a la entidad puntual (ver objeto 0301z). La asociación de las zonas al punto se recoge en el atributo <strong>“id_adeqso”</strong> (no obstante, en los trabajos de captura mediante el entorno de actualización, esta relación se materializa mediante una relationship class, empleando otros atributos internos).</p>

		<h3>SUPRAEQUIPAMIENTO</h3>
		<p>En determinados casos podemos encontrar <strong>construcciones que, aun estando separadas</strong> por varios kilómetros e incluso en provincias diferentes, forman parte de un mismo complejo.</p>

		<p><strong>Por ejemplo</strong>, podemos encontrar varios centros hospitalarios en una misma ciudad que, aunque formen parte del mismo complejo hospitalario, no comparten una ubicación. Un centro hospitalario puede tener uno o varios edificios.</p>

			<blockquote>
				<h4>Caso práctico - Hospital Universitario Reina Sófia (Córboba)</h4>
				<p>Este supraequipamiento lo forman 5 complejos hospitalarios, de los cuales:</p>
					<ol>
						<li>El centro <strong>"padre"</strong> Es el Hospital Universitario Reina Sofia, ubicado en la Avda. Menéndez Pidal s/n.</li>
						<li>Hospital Materno - Infantil del H.U. Reina Sofía, ubicado en la Avda. Menéndez Pidal s/n. Es un centro "hijo"</li>
						<li>Hospital Provincial, ubicado en la Avda. Menéndez Pidal s/n. Es un centro "hijo"</li>
						<li>Hospital General de H.U Reina Sofía, ubicado en la Avda. Menéndez Pidal s/n. Es un centro "hijo"</li>
						<li>Hospital Los Morales, ubicado en la ctra. de los Morales s/n.</li>
					</ol>

				<p>Como podemos ver tenemos cuatro hospitales formando un complejo en la Avda. Menéndez Pidal s/n y un completo hospitalario (de un solo hospital) ubicado en la ctra. de los Morales. No obstante todos forman parte del Supraequipamiento <strong>Hospital Universitario Reina Sofia</strong></p>
				<i>Información procedente del Catálogo de Hospitales del Ministerio de Sanidad y Consumo 2020</i>
			</blockquote>


		<p>En estos casos hablamos de que existe un SUPRAEQUIPAMIENTO. Ya que un centro hospitalario actúa como “sede central” (padre) y uno o varios centros que actúan como “sedes” (hijos). El “padre” es un SUPRAEQUIPAMIENTO de los hijos.</p>

		<p><strong>Para vincular estos centros “hijos” al “padre” los atributos han de completarse de este modo: </strong></p>

		<h3><i>Ejemplo:</i></h3>
		<ul>
			<li>Se captura todo el centro hospitalario incluyendo todos sus edificios y equipamientos. Estos elementos se rigen por sus propias normas específicas. 
			Se captura la zona 0313z_admon_equip_social teniendo en cuenta las normas específicas de captura y selección.</li>
		</ul>
		<h4>SEDE CENTRAL “Padre”</h4>
		<ul>
			<li>El atributo “supr_0313p” toma el valor “SI”</li>
			<li>El atributo “cod_supra” toma el valor “NULL”</li>
			<li>El atributo “codigo” tendrá un valor “x” previamente establecido. Si no se ha establecido ningún código debe establecerse en este momento.</li>
			<li>El atributo id_adeqso debe ser el mismo para los elementos 0313z y 0313p</li>
		</ul>

		<h4>SEDE SATÉLITE “hijo”</h4>
		<ul>
			<li>El atributo “supr_0313p” toma el valor “NO”</li>
			<li>El atributo “cod_supra” toma el valor del atributo “codigo” del “Padre”</li>
			<li>El atributo id_adeqso debe ser el mismo para los elementos 0313z y 0313p</li>
		</ul>

		<p>En el caso que de los <strong>complejos hospitalarios formados solo por un centro hospitalario</strong>, los atributos “supr_0313p” y “cod_supra” deben ser “NO” y “NULL” respectivamente.</p>

		<p>El resto de atributos de los elementos deben completarse de acuerdo a sus normas específicas. </p>

		<p>Además del ejemplo empleado para el caso de los hospitales, podemos encontrar <strong>otros ejemplos de supraequipamientos</strong> en las universidades, estas pueden tener varios campus ubicados en zonas diferentes aunque todos ellos formen parte de la misma universidad.</p>

		<p>Por ello el atributo supraequipamiento debe emplearse en todos los casos en los que sea aplicable el razonamiento expuesto anteriormente.</p>
	</div>
</template>