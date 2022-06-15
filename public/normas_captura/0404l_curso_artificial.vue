<template>
  <div>
    <h2>Normas de captura</h2>
    <p>
      Las entidades de este objeto geográfico son
      <strong>elementos lineales</strong> cuyo
      <strong
        >sentido de registro es el definido por la corriente de las
        aguas</strong
      >, que generalmente se puede determinar a pesar de ser sensiblemente
      horizontales, con ayuda de la información hidrográfica cercana.
    </p>

    <p>
      Los tramos
      <strong>se capturan como eje cuando la conducción es abierta</strong>, es
      decir, se puede ver el agua, o
      <strong>entubado cuando la conducción es cerrada</strong> y discurre por
      una tubería u otro tipo de obra de fábrica o conducto. Los
      <strong>tramos subterráneos</strong> van siempre entubados y se capturan,
      <strong>aunque no se conozca su trazado verdadero</strong>, para no
      interrumpir el cauce artificial. Si no se puede dar continuidad al cauce,
      se coloca un punto hidrográfico <i>(0416p_punto_hidro)</i> en el punto
      donde se pierda su trazado.
    </p>

    <p>
      La Z de los vértices del tramo subterráneo debe
      <strong>interpolarse</strong> entre la de los vértices que marcan el
      inicio y final de dicho tramo. <strong>Si el tramo es elevado</strong> se
      duplica siempre con la entidad Acueducto <i>(0207l_Acueducto)</i>, el cual
      sólo se situará sobre el cauce lineal. La Z de los vértices del tramo
      elevado debe interpolarse entre la de los vértices que marcan el inicio y
      final de dicho tramo.
    </p>

    <h3>Ejemplos</h3>
    <div class="picture">
      <i>
        <img src="../img/0404l_curso_artificial_1.png" />
        <p>Canal en superficie</p>
      </i>
    </div>

    <div class="picture">
      <i>
        <img src="../img/0404l_curso_artificial_2.png" />
        <p>Acequia en superficie</p>
      </i>
    </div>

    <div class="picture">
      <i>
        <img src="../img/0404l_curso_artificial_3.png" />
        <p>Drenaje en superficie</p>
      </i>
    </div>

    <div class="picture">
      <i>
        <img src="../img/0404l_curso_artificial_4.png" />
        <p>Tramo tubería elevado y acueducto</p>
      </i>
    </div>

    <div class="picture">
      <i>
        <img src="../img/0404l_curso_artificial_5.png" />
        <p>Tramo tubería subterráneo que cruza una vía</p>
      </i>
    </div>

    <div class="picture">
      <i>
        <img src="../img/0404l_curso_artificial_6.png" />
        <p>Tramo subterráneo no capturado por ser &lt; 3m</p>
      </i>
    </div>

    <h2>Criterio de Selección</h2>
    <p>
      Como norma general se <strong>representarán todos</strong> los elementos.
      Salvo en los siguientes casos en los que se atenderá a su criterio
      específico:
    </p>
    <ul>
      <li>
        Los <strong>tramos subterráneos</strong> sólo se capturan cuando son
        &gt; 3m. Si el tramo es &lt; 3 m se captura continuo como un cauce en
        superficie.
      </li>
      <li>Las <strong>Acequias y drenajes:</strong></li>
      <ul>
        <li>
          <strong>Zona de alta densidad:</strong> Tendrán representación
          aquellos que tengan una longitud igual o superior a 1 km. Todos los
          que tengan una longitud menor de 1 Km no se representan, a excepción
          de los que comiencen, terminen o se hallen a una distancia máxima de
          20 m. de un detalle planimétrico de carácter hidrográfico o de
          construcción hidrográfica (estanque, alberca, molino, sifón, etc.)
        </li>
        <li>
          <strong>Zona de baja densidad:</strong> Tendrán representación todos
          los visibles.
        </li>
      </ul>
    </ul>

    <h2>Notas</h2>
    <p>
      Constituye una de las dos representaciones de los objetos geográficos
      hidrográficos artificiales, junto con la entidad 0404s - Curso Artificial
      y forma la red hidrográfica con el objeto geográfico 0401l - Curso natural
      mediante la conectividad de todos sus elementos y la
      <strong>continuidad</strong> en el interior de las masas de agua y otras
      infraestructuras.
    </p>
  </div>
</template>
