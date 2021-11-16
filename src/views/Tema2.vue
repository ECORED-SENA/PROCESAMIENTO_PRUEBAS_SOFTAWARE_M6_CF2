<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Construcción, desarrollo y ejecución de pruebas de <i>software</i>

    .row.justify-content-center.align-items-center.no-gutters.mb-5
      .col-lg-10
        .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.radius-50
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2-img1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-5
            p.mb-0 La construcción de software está basada en fases que permiten incrementar el producto desde sus cimientos hasta obtener un producto base; esto es posible, ya que en el proceso se implementan diferentes estrategias y metodologías, el gran desafío está, en cómo construir un producto que se pueda validar rápidamente y que contenga los niveles adecuados de calidad. La naturaleza de los requisitos de software es cambiante, lo cual complica la precisión de los equipos, dilatando posiblemente el tiempo, los recursos y el presupuesto asignado.

    Separador

    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1  Aseguramiento de calidad de <i>software</i>

    .row.justify-content-center.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema2-img2.svg")
      .col-lg-8
        p.mb-3 El aseguramiento de la calidad de software o SQA, es un área importante en el proceso que busca estar en constante validación de la calidad del producto software, por lo general en el establecimiento de un plan de aseguramiento de calidad.
          br
          br
          | Por esto, es importante tener en cuenta los siguientes conceptos y su aplicación práctica en el ciclo de desarrollo de software:
        p.mb-0.py-5.box-with-degrade-invert.color-acento-contenido Se define el concepto de “calidad” como un conglomerado de características de una entidad que son esenciales y que además permiten calificar su valor. Otro concepto a nivel de empresa está relacionado con el conjunto de estándares y normas que debe tener un producto o servicio para ser reconocido y percibido en el mercado satisfaciendo las necesidades de los clientes.

    p.mb-5 Cuando se hace referencia a la “Calidad de Software (QA)” se entiende como el nivel que tienen los clientes para determinar según su percepción que el producto software satisface sus necesidades y expectativas. A nivel empresarial, la calidad de software hace referencia a las actividades que se establecen de manera común para asegurar que el desarrollo de software en todos los proyectos es de calidad. También se puede definir como la relación coherente del producto software con los requerimientos funcionales y no funcionales.
      br
      br
      | El “Aseguramiento de la Calidad de Software (SQA)” se conoce como el conjunto de actividades, métodos y técnicas planificadas y sistemáticas necesarias para asegurar que el producto software satisfará los requerimientos dados de calidad. Se encarga de garantizar que el producto haya sido construido siguiendo los procesos establecidos por la organización.
      br
      br
      | En el siguiente video se presente la breve historia del surgimiento del Aseguramiento de la Calidad de Software (SQA):

    .row.justify-content-center.align-items-center.caja-aux.color-acento-contenido.border.radius-50.py-4.px-3.mb-5
      .col-lg-10
        p.mb-0 Cabe aclarar que la calidad de software puede medirse una vez en la fase de implementación o terminado completamente o cuando el producto está en producción, no obstante, este hecho implicaría amplios costos para la compañía de software a diferencia de detectar y resolver los problemas en las fases iniciales como el diseño o en los requerimientos que generaría una reducción de los costos en cuanto a los cambios a realizar. Por lo tanto, es necesario tener en cuenta el proceso de SQA durante las etapas iniciales de la construcción del producto, puesto que es donde se definen las características que el producto debe garantizar para satisfacer las necesidades implícitas y explícitas. Por lo tanto, se debe tener en cuenta que si el diseño y los requerimientos no están correctamente definidos, es decir que están ambiguos, incompletos o son incoherentes, en este momento va a ser muy costosa su corrección.
      .col-lg-2
        figure
          img(src="@/assets/curso/tema2-img3.svg")

    p.mb-5 En la siguiente infografía interactiva se presentan las funciones del Aseguramiento de la Calidad de Software (SQA):

    ImagenInfografica.xl.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema2-img4.svg', alt='Texto que describa la imagen')

      .tarjeta.color-acento-contenido.p-4(x="26%" y="65.2%" )
        p.mb-0 <strong>1.</strong> Establecer estándares, procesos y planes con el objetivo de satisfacer las políticas de la organización y se ajusten a las necesidades de cada proyecto en particular para asegurar la calidad del producto software.

      .tarjeta.color-acento-contenido.p-4(x="29%" y="50.2%" )
        p.mb-0 <strong>2.</strong> Auditar y revisar y los productos y actividades desarrolladas para verificar que satisfacen los procesos y estándares definidos.

      .tarjeta.color-acento-contenido.p-4(x="32.5%" y="33.8%" )
        p.mb-0 <strong>3.</strong> Proporcionar las herramientas necesarias que den soporte al proceso definido, facilitando su ejecución, visualización, administración y seguimiento.

      .tarjeta.color-acento-contenido.p-4(x="42.2%" y="28.3%" )
        p.mb-0 <strong>4.</strong> Proveer al equipo de proyecto y a otros interesados, los resultados sobre las revisiones, auditorías y actividades.

      .tarjeta.color-acento-contenido.p-4(x="48.2%" y="33.8%" )
        p.mb-0 <strong>5.</strong> Escalar problemas que se puedan presentar dentro del equipo de un proyecto hacia un nivel apropiado de administración para su resolución en caso de no encontrar solución.

      .tarjeta.color-acento-contenido.p-4(x="67.8%" y="33.8%" )
        p.mb-0 <strong>6.</strong> Garantizar que se cumpla el plan generado para el desarrollo del proyecto y del proceso de desarrollo de software.

      .tarjeta.color-acento-contenido.p-4(x="67.5%" y="51.4%" )
        p.mb-0 <strong>7.</strong> Determinar las funcionalidades esperadas por el cliente.

    p.mb-5 Además, para realizar el Aseguramiento de la Calidad de Software (SQA) se deben tener en cuenta diversos principios básicos como son:

    SlyderF.mb-5(columnas="col-lg-4 col-xl-4 d-flex")
      .tarjeta.color-acento-contenido-3.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2-img51.svg' alt='AvatarTop')
        p.text-center La calidad debe ser una constante a lo largo de todo el ciclo de vida del software. Por lo tanto, la calidad es una acción que se construye en la medida que el producto se va desarrollando, mas no cuando el producto está terminado, es por esta razón que todo el equipo o involucrados en el proceso deben también enfocarse en la calidad del producto.
      .tarjeta.color-acento-contenido-4.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2-img52.svg' alt='AvatarTop')
        p.text-center La calidad de software solo se logra con la contribución de todas las personas involucradas, es decir que la calidad no es un proceso solo del equipo de aseguramiento de la calidad de software, sino más bien una actividad sincrónica entre todas las personas que colaboran para el desarrollo del producto.
      .tarjeta.color-acento-contenido-3.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2-img53.svg' alt='AvatarTop')
        p.text-center La gestión y la planificación de la calidad debe ser eficaz y previamente definido y ejecutado; por lo tanto, se deben establecer procesos, estándares y una planeación claramente definida para poder asegurar la calidad del producto, donde contengan puntos de verificación y un proceso claro definido que incluya qué, quién y cuándo va a realizar la verificación o medición de la calidad.
      .tarjeta.color-acento-contenido-4.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2-img54.svg' alt='AvatarTop')
        p.text-center Se deben dirigir los esfuerzos a prevención de defectos, es decir que una vez que un defecto es detectado además de corregirlo se deben tomar medidas necesarias para que no vuelva a ocurrir. Es en este punto donde se tiene en cuenta lo que es el análisis de las causas raíces, una vez que se encuentra un defecto se debe analizar por qué se ocasionó y cuál fue la causa que lo originó; por ejemplo, si es un problema en el proceso o si es un problema con las herramientas que se están utilizando o si fue una mala definición de los requerimientos, lo que constata que un error no solamente se soluciona o resuelve, sino que hay que indagar más en la causa raíz; porque de no hacerlo en el futuro se va a presentar el mismo problema.
      .tarjeta.color-acento-contenido-3.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2-img55.svg' alt='AvatarTop')
        p.text-center Hay que reforzar los sistemas de detección y eliminación de defectos durante las etapas iniciales, lo que reafirma que eliminando los defectos en las etapas de requerimientos y diseño, estamos asegurando que esos defectos no van a ser replicados en las etapas subsiguientes, por ende es menos costoso detectar y corregir los defectos en las etapas iniciales, por ejemplo si se detecta un defecto en los requerimientos o en el diseño del software, lo más posible es que se tenga que corregir documentos o diagramas, pero si se espera a la etapa de desarrollo o cuando el software ya está en producción, tenemos que volver hacia atrás en todas las fases del ciclo de vida del desarrollo del software.
      .tarjeta.color-acento-contenido-4.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2-img56.svg' alt='AvatarTop')
        p.text-center La calidad, al igual que la productividad, costos y los plazos de entrega están al mismo nivel, lo que quiere decir que el cumplimiento de los plazos de entrega y mantenerse dentro del presupuesto también son variables que se evalúan dentro del proceso de aseguramiento de calidad de software, pues de que sirve un producto sin defectos cuando ha costado mucho más de lo presupuestado y se ha entregado cuando ya no será útil.
      .tarjeta.color-acento-contenido-3.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2-img57.svg' alt='AvatarTop')
        p.text-center Es esencial la participación de la dirección, que ha de propiciar la calidad, esto quiere decir que la dirección debe ser el primer interesado en asegurar la calidad y de proveer las directrices, herramientas y el apoyo necesarios para que se pueda lograr, por lo tanto si no hay apoyo de la dirección para implementar y ejecutar el proceso de aseguramiento de calidad del software, será difícil que se pueda llevar a cabo la calidad y por ende los productos no van a salir con la calidad requerida.


    p.mb-5 Es importante reconocer los factores que afectan o determinan la calidad del software, los cuales se definen a continuación:

    AcordionA(tipo="b" clase-tarjeta="tarjeta color-acento-contenido-2 px-5").mb-5
      .row(titulo="Corrección:")
        .col
          p.mb-0 nivel en que un software satisface las especificaciones y logra los objetivos propuestos por el cliente, lo anterior responde a la pregunta: ¿el software hace lo que yo quiero?
      .row(titulo="Fiabilidad")
        .col
          p.mb-0 nivel en que se puede esperar que un programa realice sus funciones esperadas con la precisión requerida, lo anterior responde a la pregunta: ¿el sistema está apto para usarse?
      .row(titulo="Eficiencia")
        .col
          p.mb-0 cantidad de recursos de máquina y de código requeridos por un programa para efectuar sus funciones, este factor responde a la pregunta: ¿se ejecutará en mi hardware con eficiencia?
      .row(titulo="Integridad")
        .col
          p.mb-0 nivel en el que puede controlarse el acceso al software o a los datos por personal que no es autorizado, este factor responde a la pregunta: ¿el software es seguro?
      .row(titulo="Seguridad")
        .col
          p.mb-0 disponibilidad de instrumentos que permiten controlar y proteger los programas y los datos.
      .row(titulo="Reusabilidad")
        .col
          p.mb-0 nivel de trabajo solicitado para que el software o alguna de sus partes pueda reutilizar en otras aplicaciones. Este factor responde a la pregunta: ¿podré reutilizar alguna parte del programa para construir otro proyecto?
      .row(titulo="Exactitud")
        .col
          p.mb-0 nivel de precisión de los cálculos y del control que tiene el programa al ejecutar sus funciones.
      .row(titulo="Completitud")
        .col
          p.mb-0 nivel en que se ha obtenido una total implementación de las funciones solicitadas.
      .row(titulo="Flexibilidad")
        .col
          p.mb-0 trabajo necesario para modificar un programa que ya está en funcionamiento u operación. Este factor responde a la pregunta: ¿puede ser modificado de manera fácil?
      .row(titulo="Portabilidad")
        .col
          p.mb-0 trabajo necesario para migrar el programa desde un hardware o un entorno de sistemas a otro ambiente u otro hardware, este factor responde a la pregunta: ¿podré usarlo en otra máquina o con otra configuración distinta a la máquina donde se desarrolló?
      .row(titulo="Consistencia")
        .col
          p.mb-0 consiste en utilizar un diseño semejante y técnicas de documentación en el transcurso del proyecto de desarrollo de software.
      .row(titulo="Facilidad de uso")
        .col
          p.mb-0 trabajo necesario para aprender a utilizar un programa y que además sabe preparar su entrada e interpretar su salida. ¿Está diseñado para ser utilizado de manera fácil?
      .row(titulo="Facilidad de mantenimiento")
        .col
          p.mb-0 trabajo necesario para ubicar y arreglar un error en un programa, este factor responde a la pregunta: ¿permite ser corregido de manera fácil?
      .row(titulo="Facilidad de prueba")
        .col
          p.mb-0 nivel de trabajo requerido para probar un programa de forma que asegure la ejecución de las funciones solicitadas, ¿permite ser probado de manera fácil?
      .row(titulo="Facilidad de interoperabilidad")
        .col
          p.mb-0 nivel de trabajo necesario para acoplar un sistema a otro, lo anterior responde a la pregunta: ¿podrá interactuar con otros sistemas?
      .row(titulo="Facilidad de auditoría")
        .col
          p.mb-0 se concentra en la facilidad en que se puede comprobar la conformidad con los estándares.
      .row(titulo="Normalización de las comunicaciones")
        .col
          p.mb-0 nivel en que se utiliza el ancho de banda, las interfaces estándar y los protocolos.
      .row(titulo="Tolerancia a los errores")
        .col
          p.mb-0 percance que se ocasiona cuando el programa encuentra un error.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p.mb-0 Cuando se califica la calidad de un producto se debe elegir los factores que van a ser estimados como requerimientos; por lo tanto, para realizar esta elección se debe tener en cuenta las propiedades particulares de la aplicación a desarrollar o de su ambiente, como ejemplo podemos observar que si la aplicación se desarrolla para un ambiente en el que el hardware evoluciona rápidamente; entonces, se debe tener en cuenta el factor de portabilidad, por otro lado si se espera que las especificaciones del sistema cambien frecuentemente entonces el factor flexibilidad va a ser importante.
          br
          br
          | Otro punto que se debe tener en cuenta es el costo de los factores de calidad frente al beneficio que van a proporcionar (análisis de costo/beneficio), es decir que si agregamos todos los factores implicaría un incremento amplio de los costos, en lugar de lo anterior es prudente seleccionar los factores que logren contribuir el mayor valor posible al producto.
          br
          br
          | Los costos de calidad son importantes para conseguir productos de calidad, por lo que se establecen actividades para prevenir, mejorar o detectar la baja calidad que puede haber en los productos software.
      .col-lg-4
        figure
          img(src="@/assets/curso/tema2-img5.svg")

    .row.justify-content-center.mb-5
      .col-lg-10
        .row.justify-content-center.align-items-center.caja-aux.color-acento-contenido.border.radius-50.py-4.px-5
          .col-lg-2
            figure
              img(src="@/assets/curso/tema2-img3.svg")
          .col-lg-9.offset-1
            p.mb-0 Cabe aclarar que la calidad de software puede medirse una vez en la fase de implementación o terminado completamente o cuando el producto está en producción, no obstante, este hecho implicaría amplios costos para la compañía de software a diferencia de detectar y resolver los problemas en las fases iniciales como el diseño o en los requerimientos que generaría una reducción de los costos en cuanto a los cambios a realizar. Por lo tanto, es necesario tener en cuenta el proceso de SQA durante las etapas iniciales de la construcción del producto, puesto que es donde se definen las características que el producto debe garantizar para satisfacer las necesidades implícitas y explícitas. Por lo tanto, se debe tener en cuenta que si el diseño y los requerimientos no están correctamente definidos, es decir que están ambiguos, incompletos o son incoherentes, en este momento va a ser muy costosa su corrección.

    p.mb-5 Si se detectan los errores en las primeras fases como de requerimientos o diseño los costos son menores debido a que lo más posible es que se deba modificar básicamente documentos; en cambio sí se detecta un defecto en las pruebas de aceptación o en producción, lo más seguro es que se deban involucrar prácticamente a todo el equipo porque posiblemente se deba regresar hasta la primera fase que es de requerimientos; por ende, el costo de corregir defectos se incrementa debido a que todo el trabajo que va a tener que realizar el equipo nuevamente seria cargado al costo del proyecto. Debido a lo anterior es muy importante que el Aseguramiento de la Calidad de Software (SQA) comience en las primeras etapas del desarrollo de software.

    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.tarjeta--color-secundario.p-5
          .titulo-sexto.color-acento-contenido
            h5 Figura 3
            br
            span Costo promedio de filtrado de defectos
          figure
            img(src="@/assets/curso/tema2-img7.jpg")

    p.mb-5 Para garantizar el Aseguramiento de la Calidad de Software (SQA), se deben incluir los siguientes componentes:

    ImagenInfografica.xl.extra-text.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema2-img8.svg', alt='Texto que describa la imagen')

      .tarjeta.color-acento-contenido.p-4(x="38%" y="23.5%" )
        .row.justify-content-center
          .col-lg-2
            figure
              img(src="@/assets/curso/tema2-img9.svg")
          .col-lg-10
            p.mb-0.fs-7
              strong Procedimientos e instrucciones de trabajo:
              |    procesos claramente definidos e instructivos que ayuden al personal a realizar sus actividades con cierto nivel de estandarización.

      .tarjeta.color-acento-contenido.p-4(x="28%" y="48.5%" )
        .row.justify-content-center
          .col-lg-2
            figure
              img(src="@/assets/curso/tema2-img10.svg")
          .col-lg-10
            p.mb-0.fs-7
              strong Plantillas  y listas de verificación:
              |    se crean plantillas base para estandarizar la documentación producida y también crear instrumentos que permitan medir la calidad de dichos documentos.

      .tarjeta.color-acento-contenido.p-4(x="38%" y="72.5%" )
        .row.justify-content-center
          .col-lg-2
            figure
              img(src="@/assets/curso/tema2-img11.svg")
          .col-lg-10
            p.mb-0.fs-7
              strong Capacitación del personal, la readaptación profesional y la certificación:
              |    el personal debe estar capacitado para ejecutar las actividades que le corresponden a su rol, por eso la capacitación juega un papel muy importante dentro de SQA.

      .tarjeta.color-acento-contenido.p-4(x="62%" y="23.5%" )
        .row.justify-content-center
          .col-lg-2
            figure
              img(src="@/assets/curso/tema2-img12.svg")
          .col-lg-10
            p.mb-0.fs-7
              strong Acciones preventivas y correctivas:
              |    se deben realizar acciones para prevenir que un problema se presente y acciones para corregir los problemas que ya se presentaron, usualmente estas acciones preventivas y correctivas surgen a raíz de las verificaciones y de las auditorías.

      .tarjeta.color-acento-contenido.p-4(x="72%" y="48.5%" )
        .row.justify-content-center
          .col-lg-2
            figure
              img(src="@/assets/curso/tema2-img13.svg")
          .col-lg-10
            p.mb-0.fs-7
              strong Gestión de la configuración:
              |    en la organización se deben de tener procesos que especifiquen cómo serán llevadas a cabo las actividades cotidianas como son la recepción de los requerimientos y movimientos de activos de software entre las áreas tales como el código fuente.

      .tarjeta.color-acento-contenido.p-4(x="62%" y="72.5%" )
        .row.justify-content-center
          .col-lg-2
            figure
              img(src="@/assets/curso/tema2-img14.svg")
          .col-lg-10
            p.mb-0.fs-7
              strong Control de la documentación:
              |    esto incluye controlar las versiones de los documentos y garantizar la disponibilidad y el acceso a los mismos por todos los involucrados en el proceso.

    p.mb-5 La implementación del Aseguramiento de la Calidad de Software (SQA) trae consigo beneficios y problemas, los cuales se presentan a continuación:

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario-2.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema2-img15.svg', alt='Texto que describa la imagen')

        .row.justify-content-center
          .col-9
            h2.text-center.text-white Beneficios
            ul.lista-ul--color
              li.text-white
                i.lista-ul__vineta
                | El software reducirá los defectos que son poco perceptibles o latentes, lo que implica la reducción del tiempo y el trabajo en el transcurso de las fases de prueba y mantenimiento.
              li.text-white
                i.lista-ul__vineta
                | Se proporcionará una mayor fiabilidad, lo que proveerá al cliente una mayor satisfacción, objetivo común que todas las empresas buscan.
              li.text-white
                i.lista-ul__vineta
                | Se lograrán disminuir los costos de mantenimiento (un porcentaje importante de los costos totales del software).
              li.text-white
                i.lista-ul__vineta
                | El tiempo y el costo total del ciclo de vida del software disminuirá, si se realiza una eficiente implementación y ejecución del proceso de aseguramiento de calidad del software.
      .col-md.tarjeta.color-acento-contenido-2.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema2-img16.svg', alt='Texto que describa la imagen')

        .row.justify-content-center
          .col-9
            h2.text-center Problemas
            ul.lista-ul--color
              li
                i.lista-ul__vineta
                | Es difícil institucionalizar en organizaciones pequeñas, en las que no están disponibles los recursos necesarios para realizar las actividades del Aseguramiento de la Calidad de Software (SQA).
              li
                i.lista-ul__vineta
                | Representa un cambio cultural, y el cambio nunca es fácil de aceptar e implementar.
              li
                i.lista-ul__vineta
                | Requiere un gasto que, de otro modo, nunca se hubiera destinado explícitamente a la ingeniería del software o al aseguramiento de la calidad.

    p.mb-5 Para que el proceso del Aseguramiento de la Calidad de Software (SQA) se aplique correctamente, se deben aplicar estas tres etapas:

    .row.justify-content-center.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema2-img17.svg")
      .col-lg-4
        figure
          img(src="@/assets/curso/tema2-img18.svg")
      .col-lg-4
        figure
          img(src="@/assets/curso/tema2-img19.svg")

    p.mb-5 En el Aseguramiento de la Calidad de Software usualmente se pueden trabajar con cuatro roles; no obstante, un analista puede ejercer el rol de diseñador y tester:

    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema2-img20.svg' alt='AvatarTop')
          .tarjeta.color-acento-contenido-3
            .p-4
              p.mb-0
                strong Gerente de pruebas:
                |  tiene la responsabilidad de lograr el éxito del esfuerzo de las pruebas, es el responsable de planificar, gestionar los recursos y solucionar los problemas que se presentan dentro del equipo de trabajo.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema2-img21.svg' alt='AvatarTop')
          .tarjeta.color-acento-contenido-4
            .p-4
              p.mb-0
                strong Analista de pruebas:
                |  inicialmente este rol identifica y define las pruebas necesarias, por lo tanto, va a indicar el alcance de lo que es necesario probar.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema2-img22.svg' alt='AvatarTop')
          .tarjeta.color-acento-contenido-3
            .p-4
              p.mb-0
                strong Diseñador de pruebas:
                |  es el responsable de definir hacia dónde se enfocan las pruebas, así como la identificación de técnicas y recursos requeridos.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema2-img23.svg' alt='AvatarTop')
          .tarjeta.color-acento-contenido-4
            .p-4
              p.mb-0
                strong Tester:
                |  es el responsable de realizar las pruebas requeridas, así como de registrar los resultados de las pruebas.

    p.mb-5 Los productos que resultan del proceso de desarrollo de software son identificados como <strong>artefactos</strong>; por ejemplo, el código fuente, defectos, plan y script de pruebas.
      br
      br
      | El Aseguramiento de la Calidad de Software se compone de artefactos específicos que se forman en las diversas etapas del proceso de SQA, como se muestra en el siguiente recurso de aprendizaje:

    .row.justify-content-center
      .col-lg-10
        ImagenInfografica.xl.extra-text.color-acento-contenido.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema2-img24.svg', alt='Texto que describa la imagen')

          .tarjeta.color-primario.p-4(x="36.6%" y="71.6%" )
            h5 Planificación
            ul.lista-ul--color
              li
                i.fas.fa-code
                p.mb-0
                  strong Plan de pruebas:
                  |  documento que describe un enfoque sistemático para probar un sistema.
              li
                i.fas.fa-code
                p.mb-0
                  strong Informe de resultados de pruebas:
                  |  organiza y presenta un análisis resumido de los resultados de las pruebas para su auditoría y evaluación. Este informe debe incluir un listado de defectos detectados, la cantidad y tipos de pruebas elaboradas, así como su complejidad y los tipos de pruebas realizadas.
          .tarjeta.color-primario.p-4(x="69.8%" y="31%" )
            h5 Construcción
            ul.lista-ul--color
              li
                i.fas.fa-code
                p.mb-0
                  strong Caso de prueba:
                  |  conjunto de condiciones con las cuales un tester debe determinar si un sistema funciona según lo requerido.
              li
                i.fas.fa-code
                p.mb-0
                  strong Script de prueba:
                  |  recopilación de instrucciones que se realizan al software sujeto a prueba para verificar que el sistema funciona de acuerdo con lo requerido; hay scripts de pruebas automatizadas y manuales.
          .tarjeta.color-primario.p-4(x="87.8%" y="61%" )
            h5 Ejecución
            ul.lista-ul--color
              li
                i.fas.fa-code
                p.mb-0
                  strong Resultado de ejecución de prueba:
                  |   recopilación de la información con los resultados de la ejecución de cada script de prueba, especificando si tuvieron una representación exitosa o con problemas respecto al comportamiento mostrado por la aplicación y los resultados requeridos.
              li
                i.fas.fa-code
                p.mb-0
                  strong Defectos:
                  |  un error produce un defecto y un defecto produce una falla.

    Separador

    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2  Implementación del plan de pruebas

    p.mb-5 El plan de pruebas es un documento que describe un conjunto de procedimientos, técnicas y normas para probar un sistema.
      br
      br
      | En la siguiente tabla se describen los elementos que contiene un plan de pruebas:

    .titulo-sexto.color-acento-contenido
      h5 Tabla 1
      span Elementos de un plan de pruebas

    .tabla-b.color-acento-botones.mb-5
      .tabla-b__header
      table
        tr
          th Nombre y versión
          td Debe contener el nombre del sistema a probar, el nombre del documento y la versión.
        tr
          th Introducción
          td Especificar en qué consiste el sistema y cual sistema se va a probar. También se incluye y describe el alcance de las pruebas.
        tr
          th Pruebas planificadas
          td En esta parte se listan los tipos de prueba a realizar y los requerimientos a probar en el proceso. Especifica y describe las características a probar y las que no se van a probar.
        tr
          th Estrategias de prueba
          td Representa el enfoque recomendado para la comprobación de las aplicaciones.
        tr
          th Criterios de entrada y salida
          td En esta parte se especifica los criterios de entrada y salida de la aplicación al área de Aseguramiento de Calidad de Software (SQA).

    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.color-primario-degrade.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema2-img25.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1.text-white Anexo Ejemplo Diseño Plan de Pruebas
                  p.text-small.text-white Para un mejor entendimiento de cómo construir e implementar el plan de pruebas, ver el anexo que contiene un ejemplo práctico y cómo se relacionan los elementos requeridos.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexo_Ejemplo_Diseno_Plan_de_Pruebas_CF02_M6.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    p.mb-5 La estructuración de un caso de prueba se convierte en una actividad sin dificultad, si tenemos la información necesaria para su proceso de elaboración, así mismo al momento de verificar un software es de mucho aporte, puesto que se transforma en una herramienta esencial en el proceso de registro, seguimiento y control.
      br
      br
      | A continuación, se nombran los elementos principales que debe contener un caso de prueba:

    .titulo-sexto.color-acento-contenido
      h5 Tabla 2
      span Elementos de caso de prueba

    .tabla-b.color-acento-botones.mb-5
      .tabla-b__header
      table
        tr
          th Identificador
          td Puede ser alfanumérico o numérico.
        tr
          th Nombre
          td Nombre del caso de prueba de manera concisa.
        tr
          th Descripción
          td Objetivo del caso de prueba, también describe que probara, en ciertas ocasiones se incluye el ambiente de pruebas.
        tr
          th Numero de orden Ejecución
          td Orden en la cual se ejecuta el caso de prueba, en la situación de que se tengan múltiples casos de prueba.
        tr
          th Requerimiento asociado
          td Si se plantea un caso de prueba se debe saber a qué requerimiento va asociado para mantener la trazabilidad.

    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.color-primario-degrade.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema2-img25.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1.text-white Redacción  Caso de Prueba
                  p.text-small.text-white Para aprender cómo redactar y construir un caso de prueba vea el siguiente anexo
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexo_Redaccion_Caso_de_Prueba_CF02_M6.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    p.mb-5 Redactar el script de pruebas es un artefacto responsabilidad del tester, siendo este quien lo escribe y lo ejecuta. A continuación, se nombran los elementos principales que debe contener un script de prueba:

    .titulo-sexto.color-acento-contenido
      h5 Tabla 3
      span Elementos para el Script de prueba

    .tabla-b.color-acento-botones.mb-5
      .tabla-b__header
      table
        tr
          th Nombre
          td Identificador único para el script.
        tr
          th descripción
          td Describe el objetivo del script de pruebas.
        tr
          th Pasos
          td Acciones que se van ejecutando en la aplicación.
        tr
          th Puntos de verificación
          td Se comprueban aquellos puntos donde se verifica si la aplicación se está comportando de la forma esperada.<br>Son las observaciones puntuales que se realizan durante la ejecución de las pruebas para verificar que el producto cumple con los requerimientos específicos.
        tr
          th Resultado esperado
          td Por cada punto de verificación puede haber un resultado esperado asociado.

    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.color-primario-degrade.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema2-img25.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1.text-white Redaccion Script De Prueba
                  p.text-small.text-white Para aprender cómo redactar y construir un script de prueba ver el siguiente anexo
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexo_Ejemplo_Redaccion_Script_De_Prueba_CF02_M6.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    Separador

    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3  Configuración del ambiente de pruebas

    p.mb-5 El ambiente de pruebas es una configuración de software y hardware en el que el equipo de pruebas va a realizar la prueba del producto de software que ha sido desarrollado. La gestión de los ambientes de pruebas es de gran importancia, puesto que asegura que el software sea llevado a producción con los niveles de calidad óptimos.

    TabsA.color-acento-botones.mb-5
      .tarjeta.tarjeta--color-secundario.p-4(titulo="Características de los<br> ambientes de pruebas")
        h4 Características de los ambientes de pruebas
        .row.justify-content-center
          .col-lg-8
            ul.lista-ul--color
              li
                i.fas.fa-code
                p.mb-0 El equipo de pruebas debe compartir un servidor en el cual va a residir el ambiente de pruebas, por lo general en una máquina distinta a la que utiliza el desarrollador.
              li
                i.fas.fa-code
                p.mb-0 Es recomendable que no se usen direcciones IP, sino más bien nombres de dominio distintos a los de desarrollo y producción, por lo que podría crear desorden o confusión en el equipo de pruebas.
              li
                i.fas.fa-code
                p.mb-0 Preferiblemente el ambiente de pruebas debe ser lo más parecido a uno de producción, que incluya herramientas de control de versiones, aplicaciones cliente/servidor, bases de datos, cuentas de usuario del sistema operativo, clusters, configuración de servidores, el mismo sistema gestor de bases de datos instalado tanto en desarrollo como en producción e instalar en un computador o servidor diferente al del ambiente de pruebas las herramientas de gestión de incidencias y casos de prueba.
          .col-lg-4
            figure
              img(src="@/assets/curso/tema2-img26.svg")
      .tarjeta.tarjeta--color-secundario.p-4(titulo="Restricciones en los<br> ambientes de pruebas")
        h4 Restricciones en los ambientes de pruebas
        .row.justify-content-center
          .col-lg-8
            ul.lista-ul--color
              li
                i.fas.fa-code
                p.mb-0 Los desarrolladores deben tener desactivados los privilegios relacionados con el acceso de modificación en los ambientes de pruebas.
              li
                i.fas.fa-code
                p.mb-0 El desarrollador no debe gestionar directamente el ambiente de pruebas, si no el administrador.
              li
                i.fas.fa-code
                p.mb-0 Requiere de control de versiones.
              li
                i.fas.fa-code
                p.mb-0 Instalar una versión en producción, una vez que ha sido probada en el ambiente de pruebas.
          .col-lg-4
            figure
              img(src="@/assets/curso/tema2-img27.svg")
      .tarjeta.tarjeta--color-secundario.p-4(titulo="Procedimientos para la <br>gestión de ambientes<br> de pruebas")
        h4 Procedimientos para la gestión de ambientes de pruebas
        .row.justify-content-center
          .col-lg-8
            ul.lista-ul--color
              li
                i.fas.fa-code
                p.mb-0 Todas las etapas de pruebas funcionales y no funcionales requieren de ambientes de pruebas, por lo que es necesario definir en cada fase de los proyectos procedimientos específicos.
              li
                i.fas.fa-code
                p.mb-0 Es recomendable que el gerente de cambios u operaciones sea diferente al del ambiente de producción, por lo que tiene el trabajo de planear y operar.
              li
                i.fas.fa-code
                p.mb-0 Especificar los requerimientos de configuración, infraestructura y herramientas necesarias.
              li
                i.fas.fa-code
                p.mb-0 La documentación de requerimientos de los proyectos debe incluir los requerimientos de ambientes.
              li
                i.fas.fa-code
                p.mb-0 La utilización y disponibilidad de los ambientes de pruebas deben ser previamente planificados, del mismo modo el equipo de pruebas debe incluir en la planeación de los requerimientos las restricciones mencionadas.
              li
                i.fas.fa-code
                p.mb-0 Se deben tener en cuenta procedimientos de gestión de soporte de ambientes.
              li
                i.fas.fa-code
                p.mb-0 Se deben establecer procedimientos que se puedan auditar para la preparación de datos de prueba, accesos múltiples, actualizaciones, instalaciones, contar con herramientas de debugging y procesos de elaboración, asistencia y conectividad a los equipos de pruebas de todas las etapas.

          .col-lg-4
            figure
              img(src="@/assets/curso/tema2-img28.svg")

    .row.justify-content-center
      .col-auto
        .titulo-sexto.color-acento-contenido
          h5 Figura 4
          br
          span Ambientes de pruebas de software
    figure.mb-5
      img(src="@/assets/curso/tema2-img29.svg")

    p.mb-5 En la figura anterior se pueden observar los aspectos más importantes para tener en cuenta en la configuración de los ambientes, elementos como definiciones, características y restricciones.

    Separador

    #t_2_4.titulo-segundo.color-acento-contenido
      h2 2.4  Ejecución de las pruebas

    p.mb-5 Inicia creando los datos de prueba requeridos para ejecutar los casos de prueba establecidos. La ejecución de los casos de prueba se puede realizar de forma automatizada o manual, en cualquiera de las dos formas se debe registrar y documentar los fallos detectados en el sistema y su posterior corrección.
      br
      br
      | En el siguiente recurso de aprendizaje se puede observar el flujo de las actividades en relación con la ejecución de pruebas:

    h3.titulo-tercero Flujo de las actividades de la ejecución de pruebas

    ImagenInfografica.xl.extra-text.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema2-img30.svg', alt='Texto que describa la imagen')

      .tarjeta.color-primario.p-4(x="7%" y="66.4%" )
        p.mb-0
          strong 1. Planificar calendario detallado de ejecución:
          |    definir el calendario que especifique la ejecución de los casos de prueba, teniendo en cuenta el plan y los casos de prueba.
      .tarjeta.color-primario.p-4(x="29.2%" y="66.4%" )
        p.mb-0
          strong 2. Verificar entorno de pruebas:
          |    verificar que el ambiente de pruebas tenga un funcionamiento correcto.
      .tarjeta.color-primario.p-4(x="49.9%" y="66.4%" )
        p.mb-0
          strong 3. Integrar los datos de pruebas:
          |    realizar una recolección de los datos de prueba a utilizar en la ejecución de pruebas.
      .tarjeta.color-primario.p-4(x="70.4%" y="66.4%" )
        p.mb-0
          strong 4. Evaluar criterios de entrada:
          |    analizar los criterios de entrada contenidos en el plan de pruebas, de tal forma que se pueda verificar la ejecución de las pruebas.
      .tarjeta.color-primario.p-4(x="88.4%" y="66.4%" )
        p.mb-3
          strong 5. Ejecutar las pruebas:
          |    incluye las siguientes actividades:
        ul.lista-ul--color
          li
            i.fas.fa-code
            p.mb-0 Ejecutar casos y script de prueba.
          li
            i.fas.fa-code
            p.mb-0 Analizar y registrar los resultados.
          li
            i.fas.fa-code
            p.mb-0 Registrar y reportar las incidencias encontradas

    Separador

    #t_2_5.titulo-segundo.color-acento-contenido
      h2 2.5  Creación de plan de pruebas e integración y entrega continua en una metodología ágil

    p.mb-5 En un proyecto ágil está compuesto por iteraciones o sprints, cada sprint tiene una duración que no es muy extensa, aproximadamente dos a cuatro semanas tal como se puede ver la siguiente figura, al final de cada iteración ya están definidas funcionalidades que pueden ser utilizadas por el cliente. En los proyectos agiles existen dos tipos de planificaciones reléase/entrega y sprint/iteración, no obstante, estas se pueden dar en un mismo momento; es decir, que puede incluir una sola planificación con actividades tanto del reléase como del sprint. No obstante, se debe tener en cuenta que en un proyecto ágil las pruebas de software se realizan en cada iteración.

    figure.mb-5
      img(src="@/assets/curso/tema2-img31.svg")
      figcaption Nota. Tomada de Globetesting (s.f.)

    .row.justify-content-center.align-items-center.no-gutters.mb-5
      .col-lg-7.box-with-degrade.color-acento-botones.radius-25
        p.mb-0.p-5 Teniendo en cuenta las iteraciones de un sprint, al final de cada iteración ya están definidas funcionalidades que pueden ser utilizadas por el cliente. En los proyectos ágiles existen dos tipos de planificaciones reléase/entrega y sprint/iteración; no obstante, estas se pueden dar en un mismo momento, es decir que puede incluir una sola planificación con actividades tanto del reléase como del sprint. La siguiente figura lo representa.
      .col-lg-5
        figure
          img(src="@/assets/curso/tema2-img32.svg")
          figcaption Nota. Tomada de Globetesting (s.f.)

    p.mb-5 La metodología de desarrollo de software en cascada utiliza diferentes tipos de pruebas de software que probaran tanto requerimientos funcionales como no funcionales de manera secuencial. No obstante, en metodologías ágiles específicamente en las pruebas ágiles, también se consideran varios tipos de pruebas, pero teniendo en cuenta que se utilizan sprints o interacciones cortas e integraciones continuas entre los equipos de desarrollo, diseño y pruebas.
      br
      br
      | En el siguiente recurso de aprendizaje se presentan los principios de las pruebas ágiles o Agil Testing:

    ImagenInfografica.xl.extra-text.color-acento-botones.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema2-img33.svg', alt='Texto que describa la imagen')

      .tarjeta.color-acento-contenido.p-4(x="71%" y="14.4%" )
        p.mb-0
          strong Integración continua:
          |   los equipos de diseño y desarrollo ejecutan pruebas continuamente, puesto que es una forma de asegurar el avance continuo del producto.
      .tarjeta.color-acento-contenido.p-4(x="74%" y="30.4%" )
        p.mb-0
          strong Entrega continua:
          |   se soporta en la integración continua, en este punto los desarrolladores realizan un control y la cantidad de veces que se realiza la entrega continua.
      .tarjeta.color-acento-contenido.p-4(x="76%" y="46.4%" )
        p.mb-0
          strong Elaborar menos documentación:
          |   los participantes de los equipos en metodologías ágiles pueden crear listas y tomar notas para centrarse en probar el software, lo que permite no enfocarse en detalles secundarios que tomarían mucho tiempo.
      .tarjeta.color-acento-contenido.p-4(x="74%" y="60.4%" )
        p.mb-0
          strong Responder con velocidad a la retroalimentación:
          |   los involucrados en el negocio del producto están estrechamente conectados con las interacciones del producto, además el tiempo de respuesta se reduce debido a la realimentación continua en cada parte de la interacción.
      .tarjeta.color-acento-contenido.p-4(x="69%" y="72.4%" )
        p.mb-0
          strong Proporcionar retroalimentación constante:
          |   en las pruebas ágiles la retroalimentación es continua, de modo que el diseño del producto logre los propósitos del negocio requeridos.

    p.mb-5 Cuando utilizamos el desarrollo guiado por pruebas (TDD) la planificación de las pruebas ágiles tiene en cuenta los siguientes elementos:

    figure.mb-5
      img(src="@/assets/curso/tema2-img34.svg")

    p.mb-5 Para planificar las pruebas ágiles nos podemos basar en los cuadrantes del agile testing, que aporta una biblioteca de tipos de pruebas que se pueden usar para cumplir con los requerimientos.
      br
      br
      | Los cuatro cuadrantes son una clasificación que contribuye al momento de planificar las pruebas ágiles, asegurando que se tengan en cuenta los métodos y recursos para alcanzar productos de software de calidad.
      br
      br
      | En el siguiente recurso se presentan los cuadrantes de las pruebas ágiles (Agile Testing):

    .row.justify-content-center.mb-5
      .col-lg-7
        vue-flip(height="226px" active-hover)
          template(v-slot:front)
            figure
              img(src="@/assets/curso/tema2-img35.svg")
          template(v-slot:back)
            figure
              img(src="@/assets/curso/tema2-img36.svg")

    .row.justify-content-center.mb-5
      .col-lg-3.d-flex
        .tarjeta.color-acento-contenido-3.py-2.px-4.no-flips
          p.mb-0.fs-7
            strong El primer cuadrante (Q1) contiene los siguientes tipos de pruebas:
            ul.lista-ul--color.mb-0
              li.fs-7.mb-0
                i.fas.fa-code
                p.mb-0 Pruebas unitarias.
              li.fs-7.mb-0
                i.fas.fa-code
                p.mb-0 Pruebas de componente
      .col-lg-3.d-flex
        .tarjeta.color-acento-contenido-4.py-2.px-5.no-flips
          figure
            img(src="@/assets/curso/tema2-img37.svg")
      .col-lg-3.d-flex
        .tarjeta.color-acento-contenido-3.py-2.px-4.no-flips
          p.mb-0.fs-7
            strong El segundo cuadrante (Q2) definen las funcionalidades que el cliente solicita:
            ul.lista-ul--color.mb-0
              li.fs-7.mb-0
                i.fas.fa-code
                p.mb-0 Pruebas funcionales.
              li.fs-7.mb-0
                i.fas.fa-code
                p.mb-0 Pruebas de historias.
              li.fs-7.mb-0
                i.fas.fa-code
                p.mb-0 Pruebas de prototipos y simulaciones.
            | Las pruebas y las funcionalidades de este cuadrante detallan cada historia de usuario y, además, pueden ser automatizadas, es necesario que algunas de estas pruebas sean ejecutadas desde la interfaz de usuario, los diseñadores de la interfaz de usuario crean wireframes para realizar validaciones con el cliente como primera medida para posteriormente iniciar con el desarrollo.
      .col-lg-3.d-flex
        .tarjeta.color-acento-contenido-4.py-2.px-5.no-flips
          figure
            img(src="@/assets/curso/tema2-img38.svg")

    .row.justify-content-center.mb-5
      .col-lg-7
        vue-flip(height="226px" active-hover)
          template(v-slot:front)
            figure
              img(src="@/assets/curso/tema2-img39.svg")
          template(v-slot:back)
            figure
              img(src="@/assets/curso/tema2-img40.svg")

    .row.justify-content-center.mb-5
      .col-lg-3.d-flex
        .tarjeta.color-acento-contenido-4.py-2.px-4.no-flips
          p.mb-0.fs-7
            strong El tercer cuadrante (Q3) contiene los siguientes tipos de pruebas:
            ul.lista-ul--color.mb-0
              li.fs-7.mb-0
                i.fas.fa-code
                p.mb-0 Pruebas exploratorias.
              li.fs-7.mb-0
                i.fas.fa-code
                p.mb-0 Pruebas de usabilidad.
              li.fs-7.mb-0
                i.fas.fa-code
                p.mb-0 Pruebas de escenarios.
              li.fs-7.mb-0
                i.fas.fa-code
                p.mb-0 Pruebas de aceptación de usuario.
      .col-lg-3.d-flex
        .tarjeta.color-acento-contenido-3.py-2.px-5.no-flips
          figure
            img(src="@/assets/curso/tema2-img41.svg")
      .col-lg-3.d-flex
        .tarjeta.color-acento-contenido-4.py-2.px-4.no-flips
          p.mb-0.fs-7
            strong El cuarto cuadrante (Q4) contiene pruebas técnicas relacionadas con los requerimientos no funcionales:
            ul.lista-ul--color.mb-0
              li.fs-7.mb-0
                i.fas.fa-code
                p.mb-0 Pruebas de rendimiento y de estrés.
              li.fs-7.mb-0
                i.fas.fa-code
                p.mb-0 Pruebas de seguridad.
              li.fs-7.mb-0
                i.fas.fa-code
                p.mb-0 Pruebas de robustez.
            | Las pruebas y las funcionalidades de este cuadrante detallan cada historia de usuario y, además, pueden ser automatizadas, es necesario que algunas de estas pruebas sean ejecutadas desde la interfaz de usuario, los diseñadores de la interfaz de usuario crean wireframes para realizar validaciones con el cliente como primera medida para posteriormente iniciar con el desarrollo.
      .col-lg-3.d-flex
        .tarjeta.color-acento-contenido-3.py-2.px-5.no-flips
          figure
            img(src="@/assets/curso/tema2-img42.svg")

    p.mb-5 Para empezar con las pruebas descritas en los cuadrantes, es necesario que haya en un ambiente de desarrollo con alguna funcionalidad instalada y desarrollada.
      br
      br
      | A continuación, se presentan los pasos en el proceso para trabajar con las pruebas especificadas en los cuadrantes:

    .row.justify-content-center.mb-5
      .col-lg-10
        figure
          img(src="@/assets/curso/tema2-img43.svg")

    p.mb-5 En el siguiente recurso se describen algunas recomendaciones para tener en cuenta al momento de trabajar con pruebas de software ágiles (Agile Testing):

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris primario")
      .row(titulo="Realiza la pruebas en el proyecto al inicio, en cada sprint y constantemente")
        .col-lg-3
          figure
            img(src="@/assets/curso/tema2-img44.svg")
        .col-lg-9
          ul.lista-ul--color
            li
              i.fas.fa-code
              p.mb-0 Pruebas de rendimiento y de estrés.
            li
              i.fas.fa-code
              p.mb-0 El propósito es identificar y rectificar problemas de forma temprana, antes que se conviertan en problemas complejos que puedan influir en el proyecto.
      .row(titulo="Incluye analistas de pruebas en el equipo de desarrollo")
        .col-lg-3
          figure
            img(src="@/assets/curso/tema2-img45.svg")
        .col-lg-9
          ul.lista-ul--color
            li
              i.fas.fa-code
              p.mb-0 Los testers tienen el conocimiento para asegurar que se entregue un producto de calidad y que cumpla los requerimientos del cliente.
            li
              i.fas.fa-code
              p.mb-0 Al integrar los testers al equipo de desarrollo se logra compartir el conocimiento.
      .row(titulo="Los tester deben revisar las pruebas unitarias")
        .col-lg-3
          figure
            img(src="@/assets/curso/tema2-img46.svg")
        .col-lg-9
          ul.lista-ul--color
            li
              i.fas.fa-code
              p.mb-0 Los desarrolladores suelen deliberar de forma distinta que los testers.
            li
              i.fas.fa-code
              p.mb-0 Para mejorar las pruebas unitarias, se debe permitir que los analistas de pruebas revisen las pruebas unitarias y realicen sugerencias.
            li
              i.fas.fa-code
              p.mb-0 De esta forma, los tester pueden ayudar a identificar escenarios de alto riesgo que se le pasaron por alto al equipo de desarrollo.
      .row(titulo="Ejecuta las pruebas de carga o estrés diariamente")
        .col-lg-3
          figure
            img(src="@/assets/curso/tema2-img47.svg")
        .col-lg-9
          ul.lista-ul--color
            li
              i.fas.fa-code
              p.mb-0 Las pruebas de estrés son cada vez más críticas, considerando que el software que hoy se diseña generalmente se implementa masivamente y puede escalarse.
            li
              i.fas.fa-code
              p.mb-0 Estas pruebas deben incorporarse en todas las construcciones de software a diario.
            li
              i.fas.fa-code
              p.mb-0 Así se identificarán de forma temprana posibles problemas de desempeño en la aplicación.
      .row(titulo="Automatiza las pruebas de software")
        .col-lg-3
          figure
            img(src="@/assets/curso/tema2-img48.svg")
        .col-lg-9
          ul.lista-ul--color
            li
              i.fas.fa-code
              p.mb-0 Las pruebas manuales suelen ser complicadas, ineficientes y consumen mucho tiempo, además exponen a más errores.
            li
              i.fas.fa-code
              p.mb-0 Hacer uso de herramientas de automatización de pruebas hará más eficiente el proceso y eliminarán las inexactitudes.
            li
              i.fas.fa-code
              p.mb-0 Esto permitirá ejecutar con mayor eficiencia las pruebas de regresión cada vez que se incorporen las actualizaciones.

    p.mb-5 La creación del plan de pruebas para proyectos ágiles es muy importante, pues en este se definen las funcionalidades que ya están disponibles para el cliente. Por lo tanto, una planificación de un reléase tiene los siguientes elementos:

    figure.mb-5
      img(src="@/assets/curso/tema2-img49.svg")

    p.mb-5 Estos se describen en un plan de pruebas, sin embargo, es posible que en los equipos se tome la decisión de no diseñarlo, en ese sentido se recomienda que los tester tomen notas o documenten los factores importantes relacionados con las pruebas en cada release.
      br
      br
      | Para realizar pruebas de software en una metodología ágil, se comienza por redactar el plan de pruebas teniendo en cuenta que se puede actualizar en cada sprint.
      br
      br
      | Un plan de pruebas ágiles debe incluir:

    .row.justify-content-center.mb-5
      .col-lg-7
        ol.lista-ol--cuadro.lista-ol--separador
          li
            .lista-ol--cuadro__vineta
              span.texto-oscuro 1
            | Introducción.
          li
            .lista-ol--cuadro__vineta
              span.texto-oscuro 2
            | Alcance.
          li
            .lista-ol--cuadro__vineta
              span.texto-oscuro 3
            | Recursos en este caso el nombre de los tester.
          li
            .lista-ol--cuadro__vineta
              span.texto-oscuro 4
            | Descripción de funcionalidades a probar.
          li
            .lista-ol--cuadro__vineta
              span.texto-oscuro 5
            | Los tipos de pruebas (pruebas de rendimiento, pruebas de aceptación (UAT) que se van a realizar.
          li
            .lista-ol--cuadro__vineta
              span.texto-oscuro 6
            | Infraestructura lista.
          li
            .lista-ol--cuadro__vineta
              span.texto-oscuro 7
            | Suposiciones, plan de riesgos y los entregables que se producirán al final.
      .col-lg-5
        figure
          img(src="@/assets/curso/tema2-img50.svg")

    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.color-primario-degrade.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema2-img25.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1.text-white Anexo Plan de pruebas Proyectos Agiles
                  p.text-small.text-white Para aprender cómo realizar el plan de pruebas para proyectos ágiles vea el siguiente anexo donde se entrega un ejemplo:
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexo_Plandepruebas_Proyectos_Agiles_CF02_M6.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    Separador

</template>

<script>
import VueFlip from 'vue-flip'
export default {
  name: 'Tema2',
  components: {
    VueFlip,
  },
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
