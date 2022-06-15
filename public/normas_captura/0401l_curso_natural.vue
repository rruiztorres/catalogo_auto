<template>
  <div>
    <h2>Normas de captura</h2>
    <p>
      Como <strong>norma general</strong> las entidades que se capturan para
      este objeto geográfico representan
      <strong>el eje de un tramo de corriente de agua natural</strong> cuya
      anchura es aproximadamente <strong>inferior a 5m</strong> en el terreno.
      Constituye una de las dos representaciones del río, junto con la
      representación superficial <i>(ver entidad 0401s-curso_natural)</i> y con
      las siguientes características básicas:
    </p>

    <ul>
      <li>
        <strong>Continuo</strong> desde el nacimiento hasta la desembocadura en
        el mar o en otro curso de orden superior. Un río puede quedar
        interrumpido por ser endorreico o por desconocerse su trazado por
        diversos motivos (ver entidad 0416p Punto Hidrográfico). En estos casos
        se coloca un punto hidrográfico en el vértice extremo del eje del río
        cuando este desaparece.
      </li>
      <li>
        <strong>Sentido de registro aguas abajo</strong> y conforme con el
        territorio descrito altimétricamente (debe discurrir por la concavidad
        formada por las curvas de nivel con una
        <strong>diferencia máxima de altitud de 2,5m</strong> en su cruce con
        éstas), no debiendo tener subidas ni bajadas significativas de cota (Z)
        que no sean las reales del terreno (cascada, salto, etc.).
      </li>
      <li>
        <strong>Clasificado según su longitud e importancia</strong> respecto al
        conjunto de ríos de España.
      </li>
    </ul>

    <p>
      Cuando un río lineal desemboca en el mar o en otro río, el
      <strong>vértice final del río tiene que coincidir</strong> con un vértice
      de la línea de costa (0352L-Línea de Costa) o del río superior
      respectivamente.
    </p>

    <p>
      Los atributos <strong>CÓDIGO <i>(código)</i></strong> y
      <strong>JERARQUÍA <i>(jera_0401l)</i></strong> caracterizan al río en su
      conjunto y son únicos para el mismo desde su nacimiento hasta su
      desembocadura.
    </p>

    <p>
      Para los siguientes elementos se atenderá además a sus normas específicas
      de captura:
    </p>

    <ul>
      <li>
        <strong>En el caso de islas fluviales</strong>
        <i>(0425s-Isla &gt; tipo_0425s &gt; Aguas interiores)</i> dentro de un
        tramo de río con representación superficial, el eje de conexión se
        llevará por un solo brazo de la isla.
      </li>
      <li>
        <strong>En el caso de embalses</strong> <i>(0410s-Embalse)</i> o lagunas
        grandes <i>(0407s-laguna)</i>, los elementos lineales de red deben
        discurrir por su interior y conectarse al cauce principal, no debiendo
        existir más de un cruce entre un cauce y embalse (excepto el principal
        que tiene dos, al entrar y salir del embalse)
      </li>
      <li>
        <strong>Los barrancos</strong> se representan como cursos de agua no
        permanentes.
      </li>
    </ul>

    <h3>Ejemplos de capturas</h3>
    <h4>Tramo &gt; Eje</h4>
    <div class="picture">
      <i>
        <img src="../img/0401l_curso_natural_1.png" />
        <p>Rio eje de ancho &lt;5m.</p>
      </i>
    </div>

    <div class="picture">
      <i>
        <img src="../img/0401l_curso_natural_2.png" />
        <p>Río canalizado de ancho &lt;5m.</p>
      </i>
    </div>

    <div class="picture">
      <i>
        <img src="../img/0401l_curso_natural_3.png" />
        <p>Conexión en un sólo brazo de isla fluvial.</p>
      </i>
    </div>

    <div class="picture">
      <i>
        <img src="../img/0401l_curso_natural_4.png" />
        <p>Eje de conexión dentro de embalse.</p>
      </i>
    </div>

    <div class="picture">
      <i>
        <img src="../img/0401l_curso_natural_5.png" />
        <p>Conexión dentro de tramo superficial (ancho &gt;5m)</p>
      </i>
    </div>

    <h4>Tramo &gt; Cubierto</h4>
    <p>
      Línea que representa el tramo de río cubierto, bien en el cruce con la red
      de transporte o al atravesar cualquier otro obstáculo (presa, población).
    </p>

    <div class="picture">
      <i>
        <img src="../img/0401l_curso_natural_6.png" />
        <p>Tramo de río cubierto al atravesar una presa.</p>
      </i>
    </div>

    <div class="picture">
      <i>
        <img src="../img/0401l_curso_natural_7.png" />
        <p>Tramo de río cubierto al atravesar una población.</p>
      </i>
    </div>

    <div class="picture">
      <i>
        <img src="../img/0401l_curso_natural_8.png" />
        <p>
          Tramo de río cubierto al atravesar una red de transporte y un núcleo
          de población.
        </p>
      </i>
    </div>

    <div class="picture">
      <i>
        <img src="../img/0401l_curso_natural_111.png" />
        <p>
          Tramos de río cubiertos que atraviesan red de transporte. El situado a
          la derecha no se captura como "cubierto" por ser inferior a 3 metros.
        </p>
      </i>
    </div>

    <h4>Persistencia &gt; Estacional</h4>
    <div class="picture">
      <i>
        <img src="../img/0401l_curso_natural_11.png" />
        <p>El tramo lleva agua solo una parte del año o raramente.</p>
      </i>
    </div>

    <h2>Criterio de Selección</h2>
    <p>
      Como norma general al seleccionar la hidrografía, hay que poner especial
      cuidado en no dar un efecto erróneo de mucha hidrografía en zonas donde
      hay numerosos arroyos o barrancos y
      <strong>generalizar de acuerdo a la zona de España</strong> donde se
      encuentre la zona de trabajo.
    </p>

    <ul>
      <li>
        <strong>España Húmeda</strong>, deben capturarse todos los cursos de
        agua que tengan topónimo en el MTN y omitir aquellos cuya longitud sea
        inferior a 500 m. en el terreno y no lleven etiqueta.
      </li>
      <li>
        <strong>España Semiárida</strong>, mismo criterio que para la España
        Húmeda.
      </li>
      <li>
        <strong>España Árida</strong>, deben capturarse todos los cursos de agua
        que tengan topónimo en el MTN. Si el terreno tiene muchos cursos
        discontinuos, debidos al efecto de erosión de las aguas, sólo deben
        registrarse aquellos que tengan una longitud superior a 2000 m., para
        evitar el efecto erróneo de hidrografía abundante en zonas donde apenas
        existe.
      </li>
    </ul>

    <p>Para determinar</p>

    <p>En los siguientes casos se atenderá además a su criterio específico:</p>
    <ul>
      <li>
        Los <strong>tramos cubiertos</strong> al atravesar la red de transporte
        sólo se capturan cuando son &gt; 3m. Si el tramo es &lt; 3 m se captura
        continuo sin cortar.
      </li>
      <li>
        Las <strong>vaguadas</strong> son ondulaciones sin hendiduras en el
        terreno, producidas por la lluvia y
        <strong>no se representan</strong> ya que vienen indicadas por las
        curvas de nivel.
      </li>
      <li>
        Los <strong>barrancos</strong> sólo se capturan si desembocan en otro
        río y su longitud es &gt; 500m.
      </li>
    </ul>

    <h2>Notas</h2>
    <p>
      En el caso del
      <strong>curso natural con persistencia estacional</strong> es conveniente
      consultar la <strong>fecha del vuelo</strong> y la
      <strong>cartografía</strong> existente en caso de duda en la selección o
      captura.
    </p>

    <p>
      Estos elementos lineales permiten generar un modelo de red válido para el
      tratamiento hidrológico y geográfico que da cobertura a multitud de
      aplicaciones. Este modelo se garantiza mediante la
      <strong>conectividad de todos sus elementos</strong>, así como la
      <strong
        >continuidad de la red lineal por el interior de las masas de
        agua</strong
      >
      que se encuentra en su recorrido (embalse, lagunas, representación
      superficial del río, etc). El modelo de red de origen natural está
      garantizado para los ríos de 1ª, 2ª y 3ª categoría, mientras que la
      conectividad de la red de ríos de 4ª categoría puede necesitar la ayuda de
      cauces artificiales, (ver entidad 0404l-Cauce artificial).
    </p>

    <p>
      <strong>La codificación <i>Pfasftetter</i></strong> del atributo CÓDIGO
      divide España en cuencas de río completo, cuencas de tramo de río entre
      dos ríos y cuencas endorreicas, de acuerdo a la siguiente división:
    </p>

    <div class="picture">
      <img src="../img/0401l_curso_natural_12.png" />
    </div>
  </div>
</template>
