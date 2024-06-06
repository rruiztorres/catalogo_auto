<template>
  <div>
    <h2>Normas de captura</h2>
    <p>
      Las entidades que se recogen para este objeto geográfico son
      <b>elementos puntuales indicativos del lugar</b> donde se
      encuentra la instalación o el servicio. Se debe
      <b>especificar siempre el valor del atributo tipo</b>
      (tipo_0319p).
    </p>

    <p>
      El modelo de datos <b>no contempla</b> el estado de uso o
      conservación de las instalaciones o servicios. Como norma general, la
      entidad no se captura cuando el servicio ya no se presta de manera
      definitiva y/o cuando las instalaciones están totalmente deterioradas o
      han desaparecido, a excepción de entidades con carácter histórico.
    </p>
    <p>
      En el interior se capturarán los elementos que forman parte de la
      instalación. Estos elementos se regirán por sus normas específicas de
      captura.
    </p>

    <h3>Ejemplo de captura</h3>
    <div class="picture">
      <i>
        <img src="../img/0319p_tratamiento_de_agua_y_residuos_1.png" />
        <p>Ejemplo de captura para una depuradora de residuos:</p>
      </i>
    </div>

    <h2>Criterios de selección</h2>
    <p>
      No se han definido criterios de selección específicos para este objeto.
    </p>

    <h2>Notas</h2>
    <p>
      Puede haber <b>una o varias zonas</b> de Tratamiento de agua y
      residuos<b>asociadas</b> a la entidad puntual (ver objeto
      0319z). Esta asociación se realiza mediante el atributo <b>globalid</b> del puntual y el <b>guid_p</b> de la zona.
    </p>
  </div>
</template>
