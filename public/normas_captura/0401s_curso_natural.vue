<template>
  <div>
    <h2>Normas de captura</h2>
    <p>
      Las entidades que se capturan para este objeto geográfico
      <strong>son elementos superficiales</strong> que representan un tramo de
      corriente de agua natural. Constituye una de las dos representaciones de
      los objetos geográficos de hidrografía, junto con la representación lineal
      (ver entidad 0401l-curso_natural)
    </p>

    <p>Como norma general se atenderá al siguiente criterio:</p>

    <p>
      Los elementos estarán <strong>conectados</strong> con la red lineal
      (0401l_curso_natural) o con otras masas superficiales (0410s_embalse).
    </p>

    <p>
      No debe tener <strong>subidas ni bajadas significativas</strong> de cota
      (Z) que no sean las reales del terreno.
    </p>

    <p>
      La suma de las distintas masas superficiales de un río, que
      <strong>no tienen por qué ser contiguas</strong>, junto con su
      representación lineal (0401l) posibilita la creación del elemento único
      para los cursos fluviales. La consistencia entre ambas representaciones se
      garantiza porque sus atributos CÓDIGO son coincidentes y porque los
      lineales discurren por el interior de las masas de agua.
    </p>

    <p>
      Cuando un río con representación superficial
      <strong>desemboca en el mar o en otro río</strong>, ha de ser coincidente
      geométricamente con la línea de costa (0428l) o con el otro río
      respectivamente.
    </p>

    <h3>Ejemplos de capturas</h3>
    <div class="picture">
      <img src="../img/0401s_curso_natural_1.png" />
      <p><i>Río con representación superficial que desemboca en el mar</i></p>
    </div>
    <br />

    <div class="picture">
      <p><strong>n_ag_0401s &gt; Agua aparente</strong></p>
      <img src="../img/0401s_curso_natural_2.png" />
      <p><i>El tramo de río lleva agua en el momento de la captura.</i></p>
    </div>

    <div class="picture">
      <p><strong>n_ag_0401s &gt; Cauce habitual aparente</strong></p>
      <img src="../img/0401s_curso_natural_3.png" />
      <p><i>El tramo de río en el que esporádicamente discurre agua.</i></p>
    </div>

    <h2>Criterio de selección</h2>
    <p>
      Como norma general sólo se capturan como superficiales aquellos cursos
      naturales cuya
      <strong>anchura es aproximadamente superior a 5m</strong> en el terreno.
      Si la anchura es inferior debe capturarse como elemento lineal
      <i>(ver 0401l_curso_natural)</i>.
    </p>

    <h2>Notas</h2>
  </div>
</template>
