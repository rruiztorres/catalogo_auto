<template>
	<div>
		<h2>Normas de captura</h2>
		<p>Como norma general las entidades que se recogen para este objeto geográfico son <strong>elementos lineales representados por su eje longitudinal</strong>. La captura debe hacerse <strong>sobre el terreno</strong>, es decir no considerando la altura del cerramiento y en <strong>sentido horario</strong>.</p>

		<p>En los siguientes casos particulares se atenderá también a sus normas específicas:</p>
		<ul>
			<li><strong>Acueducto:</strong> Se representa por su eje longitudinal totalmente coincidente con el eje elevado del canal.</li>
			<li><strong>Cortafuegos:</strong> Se representan por sus márgenes si la anchura del cortafuegos es superior a 8 m. y por el eje cuando su anchura es menor. Cuando el trazado de un cortafuegos representado por su eje aprovecha el trazado de una senda o camino, los ejes representativos de ambas entidades deben de ser coincidentes.</li>
			<li><strong>Muelle:</strong> Los consolidados se representan coincidentes planimétricamente con la línea de agua (línea de costa, margen de embalse, margen de río o margen de laguna) pero altimétricamente con la Z que le corresponda.</li>
			<li><strong>Muralla:</strong> Se captura por su eje longitudinal representativo.</li>
			<li><strong>Muro de contención:</strong> En él se engloban los muros destinados a contener el empuje de la tierra y los muros de contención laterales de los ríos canalizados, coincidiendo en estos casos el muro y los márgenes o el eje del río en el tramo canalizado. <strong>Las barreras transversales a la corriente de un río</strong> cuya labor sea la de retener, ralentizar o embalsar agua no deben capturarse como muro de contención, sino <strong>como presa (0413l)</strong>.</li>
			<li><strong>Pantalán:</strong> Su captura no coincide con la línea de agua.</li>
			<li><strong>Puente:</strong> Representados coincidentes con el eje de la calzada de la vía de comunicación. Los pasos elevados lineales pueden, excepcionalmente, no ir situados sobre una vía de comunicación.</li>
			<li><strong>Rompeolas:</strong> Se representa coincidente planimétrica y altimétricamente con la línea de agua (línea de costa, margen de embalse, margen de río o margen de laguna).</li>
			<li><strong>Tapias:</strong> Si van paralelas a vías de comunicación o en el caso de que una vía de comunicación esté situada entre tapias, deben capturarse ambas de modo que no intercepte la tapia con la vía.</li>
			<li><strong>Túnel:</strong> Irá superpuesto al trazado de la vía de comunicación sobre la que se encuentra, no perdiendo nunca la vía su continuidad. <strong>Si no se conoce el trazado interior</strong>, se trazará una línea recta entre los puntos de entrada y salida del túnel, interpolando la coordenada z entre ellos.</li>
		</ul>

		<h3>Ejemplos de captura</h3>
		<div class="picture"><i><img src="../img/0207l_otras_construcciones_3.png"><p>Dique capturado como rompeolas fuera de un puerto, en este caso para proteger las playas</p></i></div>

		<h2>Criterio de Selección</h2>
		<p>Como <strong>norma general</strong> no se representan las puertas de entrada a recintos <strong>menores de 2,5m.</strong></p>

		<p>En los siguientes casos particulares se atenderá también a sus criterios específicos:</p>
		<ul>
			<li><strong>Tapia:</strong></li><ul>
				<li><strong>Zona de alta densidad de cerramiento:</strong> Debe generalizarse dejando todos aquellos de longitud superior a 250 m. o de longitud inferior a 250 m. siempre que sus extremos no estén libres (es decir, para conservarlo, sus extremos deben estar unidos bien a otros cerramientos bien a alguna edificación). Se eliminarán aquellos interiores a polígonos ya cerrados.</li>
				<li><strong>Zona de baja densidad de cerramiento:</strong> Deben capturarse todas aunque no superen las dimensiones mínimas, dada su importancia geográfica en estas zonas.</li>
			</ul>
			<li><strong>Alambrada:</strong> Deben capturarse todas las que sean visibles o en las que se interprete su situación.</li>
			<li><strong>Muros de contención:</strong></li><ul>
				<li><strong>Muro de contención de tierra:</strong> deben capturarse todos.</li>
				<li><strong>Muro de Contención en los laterales de una corriente de agua:</strong> Debe registrarse cuando el tramo canalizado tiene una longitud mayor de 250 m. Para longitudes menores, la forma rectilínea del río en ese tramo da una idea del hecho.</li>
			</ul>
			<li><strong>Puentes:</strong> Sobre curso de agua natural o artificial sólo tienen representación si son mayores de 3m.</li>
			<li><strong>Cortafuegos:</strong></li><ul>
				<li><strong>Zona de alta densidad de cortafuegos:</strong> Zonas de repoblación, deben eliminarse aquellos que son extremos libres y tengan una longitud menor de 2000 m.</li>
				<li><strong>Zona de baja densidad de cortafuegos:</strong> Deben registrarse todos, ya que los cortafuegos se consideran incluidos dentro de la red de comunicaciones a efectos de establecimiento de redes topológicas.</li>
			</ul>
		</ul>

		<h2>Notas</h2>
	</div>
</template>
