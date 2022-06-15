<template>
  <div>
    <h2>Normas de captura</h2>
    <p>
      Las entidades que se capturan para este objeto geográfico
      <strong>son elementos superficiales</strong>, que representan un tramo
      artificial de corriente de agua con las siguientes características
      básicas:
    </p>

    <ul>
      <li>
        Los elementos <strong>deben estar conectados</strong> con un curso
        natural lineal (0401l_curso_natural) o con otras masas superficiales:
        Embalse (0410s_embalse) o Ríos (0401s_curso_natural)
      </li>
      <li>
        No debe tener subidas y bajadas <strong>significativas</strong> de cota
        (Z).
      </li>
    </ul>

    <p>
      Para <strong>garantizar la consistencia</strong> entre la representación
      superficial de un canal y su modelo de red es necesario que los elementos
      lineales de red se encuentren dentro de sus límites y conectados a la masa
      artificial de agua. El <strong>atributo CÓDIGO <i>(codigo)</i></strong> de
      la masa artificial de agua deben ser siempre los mismos que los de su eje
      correspondiente.
    </p>

    <p>
      En los tramos de cauce artificial con situación elevada la coordenada Z de
      sus vértices debe <strong>interpolarse</strong> entre la de los vértices
      que marcan la entrada y salida de los tramos con situación en superficie.
    </p>

    <p>
      Los tramos de cauce artificial <strong>subterráneos</strong> sólo se
      representan mediante su eje <i>(0404l_curso_artificial)</i>.
      <strong>No se captura elemento superficial subterráneo.</strong>
    </p>

    <h3>Ejemplos de captura</h3>
    <div class="picture">
      <i>
        <img src="../img/0404s_curso_artificial_1.png" />
        <p>
          Captura <strong>incorrecta</strong>. El curso artificial no está
          conectado con el embalse (0410s_embalse) o con el eje de conexión del
          curso natural (0401l_curso_natural)
        </p>
      </i>
    </div>

    <div class="picture">
      <i>
        <img src="../img/0404s_curso_artificial_2.png" />
        <p>
          Captura <strong>correcta</strong>. El curso artificial está conectado,
          con el eje del curso natural (0401l_curso_natural) que atraviesa el
          embalse, mediante un curso artificial subterráneo.
          (0404l_curso_artificial &gt; Canal &gt; Subterráneo)
        </p>
      </i>
    </div>

    <h2>Criterios de selección</h2>
    <p>
      Sólo se capturan como elementos superficiales aquellos cuya anchura es
      aproximadamente <strong>superior a 5m en el terreno</strong>. Aquellos que
      tengan una anchura inferior deben capturarse mediante representación
      lineal <i>(0404l_curso_artificial)</i>.
    </p>

    <h2>Notas</h2>
    <p>
      Constituye una de las dos representaciones de cauce artificial, junto con
      la representación lineal <i>(0404l_curso_artificial)</i>
    </p>
  </div>
</template>
