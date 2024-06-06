<template>
	<div>
		<h2>Normas de captura</h2>
		<p>Las entidades que se recogen para este objeto geográfico son <b>elementos puntuales indicativos del lugar</b> donde se encuentra la instalación o el servicio. Se debe <b>especificar siempre el valor del atributo tipo</b> (tipo_0313p).</p> 

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
		<p>Puede haber <b>una o varias zonas</b> de Administración equipamiento social <b>asociadas</b> a la entidad puntual (ver objeto 0301z). 
		Esta asociación se realiza mediante el atributo <b>globalid</b> del puntual y el <b>guid_p</b> de la zona.	
		</p>

		<h3>SUPRAEQUIPAMIENTO</h3>
		<p>En determinados casos podemos encontrar <b>construcciones que, aun estando separadas</b> por varios kilómetros e incluso en provincias diferentes, forman parte de un mismo complejo.</p>

		<p><b>Por ejemplo</b>, podemos encontrar varios centros hospitalarios en una misma ciudad que, aunque formen parte del mismo complejo hospitalario, no comparten una ubicación. Un centro hospitalario puede tener uno o varios edificios.</p>

			<blockquote>
				<h4>Caso práctico - Hospital Universitario Reina Sófia (Córboba)</h4>
				<p>Este supraequipamiento lo forman 5 complejos hospitalarios, de los cuales:</p>
					<ol>
						<li>El centro <b>"padre"</b> Es el Hospital Universitario Reina Sofia, ubicado en la Avda. Menéndez Pidal s/n.</li>
						<li>Hospital Materno - Infantil del H.U. Reina Sofía, ubicado en la Avda. Menéndez Pidal s/n. Es un centro "hijo"</li>
						<li>Hospital Provincial, ubicado en la Avda. Menéndez Pidal s/n. Es un centro "hijo"</li>
						<li>Hospital General de H.U Reina Sofía, ubicado en la Avda. Menéndez Pidal s/n. Es un centro "hijo"</li>
						<li>Hospital Los Morales, ubicado en la ctra. de los Morales s/n.</li>
					</ol>

				<p>Como podemos ver tenemos cuatro hospitales formando un complejo en la Avda. Menéndez Pidal s/n y un completo hospitalario (de un solo hospital) ubicado en la ctra. de los Morales. No obstante todos forman parte del Supraequipamiento <b>Hospital Universitario Reina Sofia</b></p>
				<i>Información procedente del Catálogo de Hospitales del Ministerio de Sanidad y Consumo 2020</i>
			</blockquote>


		<p>En estos casos hablamos de que existe un SUPRAEQUIPAMIENTO. Ya que un centro hospitalario actúa como “sede central” (padre) y uno o varios centros que actúan como “sedes” (hijos). El “padre” es un SUPRAEQUIPAMIENTO de los hijos.</p>

		<p><b>Para vincular estos centros “hijos” al “padre” los atributos han de completarse de este modo: </b></p>

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

		<p>En el caso que de los <b>complejos hospitalarios formados solo por un centro hospitalario</b>, los atributos “supr_0313p” y “cod_supra” deben ser “NO” y “NULL” respectivamente.</p>

		<p>El resto de atributos de los elementos deben completarse de acuerdo a sus normas específicas. </p>

		<p>Además del ejemplo empleado para el caso de los hospitales, podemos encontrar <b>otros ejemplos de supraequipamientos</b> en las universidades, estas pueden tener varios campus ubicados en zonas diferentes aunque todos ellos formen parte de la misma universidad.</p>

		<p>Por ello el atributo supraequipamiento debe emplearse en todos los casos en los que sea aplicable el razonamiento expuesto anteriormente.</p>
	</div>
</template>