<template>
	<div>
		<h2>Normas de captura</h2>
		<p>Las entidades que se recogen para este objeto geográfico son <strong>elementos superficiales representados por su contorno exterior</strong>, siendo los <strong>patios interiores agujeros en la geometría</strong>. El registro debe realizarse por la parte superior de la edificación (ya que es difícil realizarlo sobre el terreno, especialmente en agrupaciones urbanas) y el <strong>sentido de registro será el horario.</strong></p>

		<p>Bajo esta entidad, se capturan <strong>todas aquellas edificaciones</strong>, ya sean aisladas o pertenecientes a cascos de población, a agrupaciones urbanas rurales o a cualquier tipo de edificación que se presente como fusión de varios elementos aislados.</p>

		<p>Los <strong>elementos claramente no estables</strong>, como campamentos, cobertizos, chiringuitos de playa, casetas de baño, etc. no deben representarse. Sin embargo, los <strong>voladizos o cubiertas grandes</strong> (siempre que no se correspondan con otro objeto de este catálogo. Por ejemplo: Cubiertas de surtidores en áreas de servicio) deben aparecer <strong>representados</strong> como una entidad de este objeto geográfico con el <i>tipo_0201s = “EDIFICIO LIGERO”</i></p>

		<p>Como <strong>norma general</strong> debe seguirse el siguiente criterio:</p>
		<ul>
			<li>El lado mínimo que debe tener una edificación es de <strong>2 metros</strong>.</li>
			<li>Cualquier saliente o entrante del edificio debe tener una superficie mínima de <strong>2x2 m</strong>.</li>
			<li>Cuando el ángulo entre dos lados consecutivos de una edificación sea <strong>similar a 90º</strong> se creará en ángulo recto.</li>
			<li>La distancia de un vértice a la recta que une al vértice anterior y posterior debe ser de <strong>2m.</strong> (similar a aplicar un <i>algoritmo de Douglas</i> al contorno de la edificación).</li>
		</ul>

		<p>En los siguientes casos particulares las normas de captura serán las siguientes:</p>
		<ul>
			<li><strong>Plaza de toros:</strong> Debe capturarse por los límites externos de su recinto, <strong>no debe</strong> capturarse el ruedo.</li>
			<li><strong>Faro:</strong> Debe capturarse por los límites externos de su estructura, <strong>no debe</strong> capturarse exclusivamente la torre de la linterna <strong>salvo</strong> que la única estructura visible sea esta.</li>
		</ul>

		<h3>Ejemplos de capturas</h3>

		<div class="picture"><i><img src="../img/0201s_edificio_1.png"><p>Captura <strong>correcta</strong> - Plaza de toros</p></i></div>
		<div class="picture"><i><img src="../img/0201s_edificio_2.png"><p>Captura <strong>incorrecta</strong> - Plaza de toros</p></i></div>
		<div class="picture"><i><img src="../img/0201s_edificio_3.png"><p>Captura <strong>correcta</strong> - Faro</p></i></div>
		<div class="picture"><i><img src="../img/0201s_edificio_4.png"><p>Captura <strong>incorrecta</strong> - Faro</p></i></div>
		<div class="picture"><i><img src="../img/0201s_edificio_5.png"><p>Edificios ligeros en área de servicio - Gasolinera. Captura <strong>correcta</strong> (cubiertas de protección surtidores)</p></i></div>
		<div class="picture"><i><img src="../img/0201s_edificio_6.png"><p>Edificio ligero en playa - Chiringuito. Captura <strong>incorrecta</strong> (se trata de un elemento <strong>no estable</strong>)</p></i></div>
		<div class="picture"><i><img src="../img/0201s_edificio_7.png"><p><strong>Generalización</strong> en zona de alta densidad de invernaderos.</p></i></div>
		<div class="picture"><i><img src="../img/0201s_edificio_8.png"><p>Zona de invernaderos previa a la captura</p></i></div>

		<h2>Criterio de Selección</h2>
		<p>Como norma general se atenderá al siguiente criterio de selección:</p>
		<ul>
			<li><strong>Zona de edificación aislada</strong> (zonas rurales) y de poca densidad planimétrica, deben representarse <strong>todas</strong> las edificaciones, así como sus patios interiores si existieran, poniendo especial cuidado en su <strong>forma real y localización</strong> (refugios, tinadas, cabañas, parideras, etc.). Si existieran edificaciones en estado ruinoso deben registrarse todas ellas, así como los caminos de acceso a todas las edificaciones aisladas, <strong>no debiendo existir</strong> una edificación que se encuentre a más de 20 m. de una vía de acceso, senda, camino, cortafuego, etc.</li>
			<li><strong>Zona de densidad moderada de edificaciones (&lt;11%)</strong>. Las edificaciones que se encuentren a <strong>menos de 5 m</strong>. se agrupan en una misma edificación, siempre y cuando no pase entre ellas <strong>ninguna vía de comunicación</strong>, constituyendo una entidad de edificación única.</li>
			<li><strong>Zona urbana (&gt;11 % de densidad de edificaciones)</strong>. Las edificaciones que componen el casco urbano están muy próximas y <strong>deben agruparse</strong> de modo que quede bien <strong>definido</strong> en las entidades urbanas con larga historia, su casco antiguo, los sucesivos ensanches, suburbios y arrabales. En estas zonas de alta densidad, los edificios <strong>menores de 2x2 m</strong>. son eliminados.</li>
		</ul>
		<p>En los siguientes <strong>casos particulares</strong> se atenderá a un criterio de selección específico detallado a continuación:</p>
		<p><strong>Invernaderos:</strong></p>
		<ul>
			<li><strong>Zona de densidad moderada de Invernadero:</strong> Cuando una entidad de este objeto geográfico esté adosada o se encuentre a menos de 5 m. de separación de otra del mismo tipo, y siempre que <strong>no exista una vía de comunicación entre ambas</strong>, debe representarse como una única entidad, formando superficies de como máximo 100 (10x10) m2. En el caso de que <strong>exista una vía de comunicación</strong> debe representarse cada una de las entidades separadas por la vía y sin que entren en conflicto.</li>
			<li><strong>Zona de alta densidad de Invernadero:</strong> Debe <strong>generalizarse</strong>, agrupándolos en unidades más grandes, de cómo máximo 1000 m2 (100x100 m) , formando polígonos entre caminos y siguiendo el criterio anterior.</li>
		</ul>
		<p><strong>Naves:</strong></p>
		<ul>
			<li>Deben registrarse aquellas naves <strong>aisladas o situadas dentro de recintos de diferentes usos</strong> en los cuales se observe una utilidad de producción o almacenamiento de carácter agrícola o industrial, distinguiéndolas de silos y otros grandes edificios por sus características ya descritas.</li>
		</ul>
		<p><strong>Cuevas:</strong></p>
		<ul>
			<li>En zonas con gran cantidad de cuevas habitables, <strong>generalizar.</strong></li>
		</ul>

		<h2>Notas</h2>
		<p>Como norma general los <strong>servicios</strong> y/o actividades a las que se dedican los edificios se deben capturar con los objetos puntuales específicamente dispuestos para ello.</p>

		<p><i><u>Ejemplo</u></i></p>
		<div class="picture"><i>
			<img src="../img/0201s_edificio_9.png"><p>Captura <strong>correcta</strong> de un colegio</p>
			<ul>
				<li><strong>Edificio:</strong> La geometría del edificio del colegio se captura en la tabla 0201s_edificio como "Edificio genérico".</li>
				<li><strong>Centro docente no universitario:</strong> El uso al que se destina el edificio se captura en la tabla 0313p_admon_equip_social. Los colegios corresponden a la categoría "Centro docente no universitario".</li>
			</ul>
		</i></div>
	</div>
</template>

