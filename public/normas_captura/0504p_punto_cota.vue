<template>
	<div>
		<h2>Normas de captura</h2>
		<p>Como norma general las entidades que se capturan para este objeto geográfico son <strong>elementos puntuales</strong> que representan aquellos puntos sobre el terreno que se consideran <strong>claves para la definición correcta de la superficie terrestre, no debiendo existir puntos</strong> de cota en el interior de aguas continentales ni oceánicas.</p>

		<ul>
			<li><strong>En el caso particular de los picos-cimas:</strong> Un pico debe pertenecer a una sierra, en la mayoría de los casos, formando parte de ella y, en menores ocasiones, como pico aislado pero asociado a una sierra o relieve montañoso. <br>
			Los picos del archipiélago canario no están asociados a sierras, pero se consideran picos al ser la cumbre de montañas/volcanes y otros relieves formados por erupciones volcánicas.</li>
			<li><strong>El atributo cumbre_pro </strong>sólo es aplicable cuando el punto es cumbre provincial. Si es cumbre provincial de dos provincias, concatenar prov1#prov2. La provincia no se identifica por el código sino por el nombre.</li>
		</ul>

		<h3>Ejemplos de captura</h3>
		<div class="picture">
			<i>
				<img src="../img/0504p_punto_cota_1.png">
				<p>Puntos de cota genéricos.</p>
			</i>
		</div>

		<h2>Criterio de Selección</h2>
		<p>Como norma general deben capturarse <strong>todos los puntos singulares</strong> del terreno, picos, collados, hoyas, puntos distribuidos en los escarpados, etc.</p>

		<p>La densidad de puntos acotados que deben recogerse varía según el <strong>tipo de terreno y su pendiente</strong>, por ejemplo, en zonas muy llanas o con pendiente suave, donde las curvas de nivel pueden ser poco definitorias del terreno, es conveniente aportar un mayor número de puntos de cota para definir mejor el relieve de la zona.</p>

		<p>Por lo tanto atendiendo al tipo de terreno y su pendiente:</p>
		<ul>
			<li><strong>En zona muy llana</strong> (pendiente inferior al 1 %), el número de puntos adecuado debe ser de 3 puntos de cota por Km2 o que la distancia máxima entre ellos no supere los 500m.</li>
			<li><strong>En zona con pendiente suave</strong> (pendiente comprendida entre 1 y 3%), una media de 1 punto de cota por Km2.</li>
			<li><strong>En zona costera de pendiente media, de pendiente acusada o fuerte pendiente</strong> (pendiente superior al 3%), únicamente se recoge el punto acotado cuando exista una diferencia respecto de la altitud de la curva de 10m y en los casos de puntos acotados relativos a hoyas, collados, picos o cerros o puntos significativos del terreno.</li>
		</ul>

		<h2>Notas</h2>
		<p>El nombre del pico procede del <strong>Nomenclátor Geográfico Básico de España</strong> (“montaña” en NGBE), del que se incluye bien: </p>
		<ul>
			<li><strong>Nombre preferente</strong> (“identificador geográfico” en NGBE)</li>
			<li><strong>Nombre completo</strong> (“nombre extendido” en NGBE), que puede ser un nombre bilingüe o un nombre preferente + variante, de acuerdo con los criterios establecidos para el uso de nombres variantes en BTN25.</li>
		</ul>
		<p><b>id_ng: </b>Cuando no exista ID en el NGBE se le asignará uno provisional de formato 2xxxxxxxxx.</p>
	</div>
</template>