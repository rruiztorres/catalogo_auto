<template>
  <div>
    <h2>Normas de captura</h2>
    <p>
      Como <strong>norma general</strong> las entidades que se capturan para
      este objeto geográfico son elementos superficiales y representan el
      contorno del nivel del agua existente en su máxima capacidad o de
      vegetación fija, y de altura constante.
    </p>

    <p>
      Para los siguientes elementos se atenderá a demás a sus normas
      específicas:
    </p>
    <ul>
      <li>
        <strong>Marisma – Zona encharcable:</strong> En su interior debe
        representarse todos los detalles planimétricos que aparezcan.
      </li>
      <li>
        <strong>Laguna:</strong> Los ejes del curso natural deben atravesar las
        lagunas, exista o no en ellas una presa, para dar continuidad al
        elemento hidrográfico (ver entidad 0401l_cauce_natural). Si la laguna
        tiene una presa debe procederse al ajuste perfecto del contorno de la
        laguna a la presa. <br />
        Para determinar la PERSISTENCIA de una laguna es conveniente consultar
        la fecha del vuelo y la cartografía existente en caso de duda. (Ej. Si
        el vuelo se hizo en primavera, en zonas escarpadas, al derretirse la
        nieve o en el deshielo pueden aparecer numerosas lagunas. En estos
        casos, deben registrarse como estacionales pues desaparecen en otras
        estaciones del año).
      </li>
      <li>
        <strong>Balsa de riego:</strong> Ésta puede representarse como
        balsa/alberca/estanque (ver entidad 0204s_constr_almacenaje) cuando es
        de construcción totalmente artificial, o como laguna cuando es una
        depresión natural cerrada por una presa.
      </li>
    </ul>

    <h3>Ejemplos</h3>
    <div class="picture">
      <i>
        <img src="../img/0407s_lamina_de_agua_1.png" />
        <p>Laguna <strong>no ajustada</strong> a presa.</p>
      </i>
    </div>

    <div class="picture">
      <i>
        <img src="../img/0407s_lamina_de_agua_2.png" />
        <p>Laguna <strong>ajustada</strong> a presa.</p>
      </i>
    </div>

    <div class="picture">
      <i>
        <img src="../img/0407s_lamina_de_agua_3.png" />
        <p>Balsa de regulación de riego captura como laguna.</p>
      </i>
    </div>

    <h2>Criterio de selección</h2>
    <p>
      Como norma general se capturan todos los elementos,
      <strong>salvo en el caso de las lagunas</strong> donde se tendrán en
      cuenta los siguientes criterios:
    </p>
    <ul>
      <li>
        <strong>España Húmeda:</strong> Deben capturarse todas las lagunas
        (permanentes o no) que tengan topónimo en el MTN y omitir aquellas cuya
        superficie sea menor de 100 m2 y no lleven etiqueta.
      </li>
      <li>
        <strong>España Semiárida:</strong> Mismo criterio que para la España
        Húmeda.
      </li>
      <li>
        <strong>España Seca:</strong> Deben capturarse todas las lagunas
        permanentes y aquellas no permanentes cuya superficie sea mayor de 100
        m2 o menor de 100 m2 con etiqueta.
      </li>
    </ul>
    <div class="picture">
      <i>
        <img src="../img/0401l_curso_natural_13.jpg" />
        <p>
          Índice de aridez en España -fuente:
          <a href="https://www.miteco.gob.es/es/" target="blank"
            >MITECO 2019-</a
          >
        </p>
        <ul>
          <li><strong>España húmeda:</strong> Verde</li>
          <li><strong>España semiárida:</strong> Naranja</li>
          <li><strong>España árida:</strong> Rojo</li>
        </ul>
      </i>
    </div>

    <h2>Notas</h2>
  </div>
</template>
