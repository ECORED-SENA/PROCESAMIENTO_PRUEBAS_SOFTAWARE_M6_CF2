<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Pruebas de <i>software</i>

    .row.justify-content-center.align-items-center.no-gutters.mb-5
      .col-lg-7.mb-lg-0.mb-5
        p.px-3.py-4.mb-0.box-with-degrade.color-acento-contenido Son un proceso para explorar, entender y conocer el producto que se está construyendo, en el cual se busca minimizar la cantidad de errores y evitar que de esta manera se repliquen en un ambiente productivo y se vean afectados los usuarios finales.
          br
          br
          | En este se definen diferentes técnicas para ser aplicadas en el producto, con el fin de garantizar el cumplimiento de los estándares definidos por la entidad desarrolladora y las funcionalidades especificadas por el cliente.
      .col-lg-5
        figure
          img(src="@/assets/curso/tema1-img1.svg")

    .row.justify-content-center.align-items-center.no-gutters.mb-5
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1-img2.svg')})`}"
          )
          .bloque-texto-g__texto.p-5
            p.mb-0 Es importante identificar cuáles son las causas que pueden llevar a tener un software de mala calidad, entre los cuales podemos indicar malas prácticas de desarrollo, no entender el negocio (no identificar cuáles son las finalidades de las funciones del producto software), falta de personal calificado para realizar y ejecutar el plan de pruebas, falta de cultura orientada a la calidad de software, entre otras.

    .row
      .col-lg-8
        p.mb-4 Por ende, se recomienda tener en cuenta los siguientes puntos para establecer un plan de pruebas que permita elevar los estándares de calidad:
        ul.lista-ul--color.mb-4
          li
            i.fas.fa-code
            | Analizar los requisitos funcionales del producto software.
          li
            i.fas.fa-code
            | Identificar en cada ciclo las nuevas funcionalidades a probar, o las que se deben volver probar (pruebas de regresión) dado que se ven afectadas por nuevas características.
          li
            i.fas.fa-code
            | Establecer un inventario de todas las funcionalidades del sistema que se deben tener siempre en cuenta en las pruebas.
          li
            i.fas.fa-code
            | Seleccionar estrategias para la ejecución y aplicación de pruebas.
          li
            i.fas.fa-code
            | Seleccionar los criterios de inicio, aceptación y suspensión de pruebas.
          li
            i.fas.fa-code
            | Seleccionar los ambientes y componentes requeridos.
          li
            i.fas.fa-code
            | Seleccionar necesidades de personal y capacitaciones.
          li
            i.fas.fa-code
            | Seleccionar la metodología y procedimientos para la aplicación de pruebas.
          li
            i.fas.fa-code
            | Seleccionar el plan de pruebas.
          li
            i.fas.fa-code
            | Tener en cuenta los riesgos y definir los planes de acción.
    p.mb-4 Estas pruebas buscan abarcar todos los aspectos involucrados desde personal, técnicas, metodologías y conocimientos, pero cada organización puede complementar con acciones de mejora continua adicionales.
    Separador

    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1  Causas que deterioran la calidad en el software

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        figure.mx-lg-n5
          img(src="@/assets/curso/tema1-img3.svg")
      .col-lg-8
        p.mb-0 Las causas que afectan la calidad del software siempre están presentes, ya que son un atributo inevitable del proceso, con ello se tendrá el riesgo de tener un producto defectuoso con mala calidad.
          br
          br
          | Esto es reflejo de las malas prácticas desde la concepción del producto software, las acciones que pueden influenciar una mala calidad en el software o el deterioro de este pueden ser diversas, pero básicamente se podría indicar que se enfocan en los procesos de ejecución del desarrollo del producto de software, pues la mala ejecución genera un efecto en cascada donde se ven afectados el plan de desarrollo, el plan de pruebas, los tiempos de ejecución y los recursos invertidos.
          br
          br
          | Algunas de las prácticas para evitar construir un producto software con mala calidad pueden ser:

    h3.titulo-tercero.mb-5 Para evitar construir un software de mala calidad:

    .row.justify-content-center.slider-special-container(
      :style="{'background-image': `url(${require('@/assets/curso/tema1-img4.svg')})`}"
    )
      .col-lg-11.py-5
        #carouselSpecial.carousel.slide(data-bs-ride='carousel')
          .carousel-indicators
            button.active(type='button' data-bs-target='#carouselSpecial' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
            button(type='button' data-bs-target='#carouselSpecial' data-bs-slide-to='1' aria-label='Slide 2')
            button(type='button' data-bs-target='#carouselSpecial' data-bs-slide-to='2' aria-label='Slide 3')
            button(type='button' data-bs-target='#carouselSpecial' data-bs-slide-to='3' aria-label='Slide 4')
          .carousel-inner
            .carousel-item.active
              .card.shadow
                .card-body.py-5.px-4
                  .row.justify-content-center.p-5
                    .col-lg-6.px-5
                      ul.lista-ul--color
                        li
                          i.fas.fa-code
                          | Constante comunicación,  participación de los clientes y usuarios en la construcción del producto software.
                        li
                          i.fas.fa-code
                          | Compromiso del equipo de desarrollo con la ejecución del proyecto.
                    .col-lg-6.px-5
                      figure
                        img(src='@/assets/curso/tema1-img5.svg', alt='Texto que describa la imagen')
            .carousel-item
              .card.shadow
                .card-body.py-5.px-4
                  .row.justify-content-center.p-5
                    .col-lg-7.px-5
                      ul.lista-ul--color
                        li
                          i.fas.fa-code
                          | Tener claros los requisitos funcionales.
                        li
                          i.fas.fa-code
                          | Ser conscientes de los recursos y capacidades para establecer una planificación realista.
                        li
                          i.fas.fa-code
                          | Tomar las mejores prácticas de las metodologías tradicionales y aplicar conceptos de las metodologías ágiles que permitan entregar aportes de valor al cliente de manera incremental y en espacios de tiempo reducidos.
                    .col-lg-5.px-5
                      figure.px-4
                        img(src='@/assets/curso/tema1-img6.svg', alt='Texto que describa la imagen')
            .carousel-item
              .card.shadow
                .card-body.py-5.px-4
                  .row.justify-content-center.p-5
                    .col-lg-6.px-5
                      ul.lista-ul--color
                        li
                          i.fas.fa-code
                          | Evaluar objetivos.
                        li
                          i.fas.fa-code
                          | Realizar transferencia de conocimientos de manera horizontal y vertical para que cada miembro del equipo esté al tanto de los riesgos y objetivos alcanzados en cada etapa del ciclo de desarrollo.
                    .col-lg-6.px-5
                      figure
                        img(src='@/assets/curso/tema1-img7.svg', alt='Texto que describa la imagen')
            .carousel-item
              .card.shadow
                .card-body.py-5.px-4
                  .row.justify-content-center.p-5
                    .col-lg-6.px-5
                      ul.lista-ul--color
                        li
                          i.fas.fa-code
                          | Motivar a los miembros del equipo principalmente enfocándose en los logros.
                        li
                          i.fas.fa-code
                          | Visibilizar los objetivos sin perderlos de vista.
                        li
                          i.fas.fa-code
                          | Con enfoque de siempre entregar incrementales de valor para el cliente con cada iteración.

                    .col-lg-6.px-5
                      figure
                        img(src='@/assets/curso/tema1-img8.svg', alt='Texto que describa la imagen')
          button.carousel-control-prev(type='button' data-bs-target='#carouselSpecial' data-bs-slide='prev')
            span.carousel-control-prev-icon(aria-hidden='true')
            span.visually-hidden Previous
          button.carousel-control-next(type='button' data-bs-target='#carouselSpecial' data-bs-slide='next')
            span.carousel-control-next-icon(aria-hidden='true')
            span.visually-hidden Next

    Separador

    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2  Modelo de desarrollo CMMI

    figure.mb-5
      img(src="@/assets/curso/tema1-img9.jpg")

    p.mb-5 Es un modelo de capacidad y madurez que posee dos vistas estructurales que permiten tener un enfoque distinto dependiendo de quién esté realizando la implementación; se centra en elementos esenciales de las prácticas y los procesos, el cual permite realizar una evaluación de la madurez del proceso de desarrollo de software en las organizaciones.
      br
      br
      | Los objetivos de CMMI:

    .row.mb-5.justify-content-center
      .col-md-6.col-lg-4.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1-img10.svg' alt='AvatarTop')
          .tarjeta.color-acento-contenido
            .p-4.text-center
              p.mb-0 Producción de calidad de productos o servicios.
      .col-md-6.col-lg-4.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1-img11.svg' alt='AvatarTop')
          .tarjeta.color-acento-contenido
            .p-4.text-center
              p.mb-0 Creación de valor para los accionistas.
      .col-md-6.col-lg-4.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1-img12.svg' alt='AvatarTop')
          .tarjeta.color-acento-contenido
            .p-4.text-center
              p.mb-0 Mejora continua en la satisfacción de los clientes.
      .col-md-6.col-lg-4.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1-img13.svg' alt='AvatarTop')
          .tarjeta.color-acento-contenido
            .p-4.text-center
              p.mb-0 Aumento en la cuota de mercado
      .col-md-6.col-lg-4.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1-img14.svg' alt='AvatarTop')
          .tarjeta.color-acento-contenido
            .p-4.text-center
              p.mb-0 Obtener reconocimiento de excelencia en la industria

    p.mb-5 El modelo estructurado por nivel de madurez es un nivel de madurez bien definido, que entrega las bases necesarias para evolucionar hacia un proceso de software maduro, proporcionando en cada nivel aspecto de mejora continua que se clasifican en:

    .row.justify-content-center.mb-5
      .col-lg-7
        .cajon.color-primario.p-5.border-radius.bottom-right
          .row.justify-content-center
            .col-lg-7
              ul.lista-ul--color
                li
                  i.fas.fa-code
                  | Inicial.
                li
                  i.fas.fa-code
                  | Gestionado.
                li
                  i.fas.fa-code
                  | Definido.
                li
                  i.fas.fa-code
                  | Cuantitativamente gestionado.
                li
                  i.fas.fa-code
                  | Optimizado.
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1-img15.svg")

    p.mb-5 Los niveles de madurez consisten en un conjunto de áreas de proceso predefinidas que se miden por objetivos generales y específicos, aplicándolos a cada conjunto predefinidos de áreas de proceso.

    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--color-secundario p-5").mb-5
      .row(number="1" titulo="Nivel de madurez inicial")
        .col-12
          p.mb-0 los procesos suelen ser caóticos, en el cual se gestionan y crean productos o servicios que no funcionan, excediendo el presupuesto y el calendario de entregas. Las organizaciones en este nivel abandonan los proyectos ante una crisis y no tienen la capacidad de replicar los éxitos y buenas prácticas de procesos previos.
      .row(number="2" titulo="Nivel de madurez administrativo")
        .col-12
          p.mb-0 en este nivel los objetivos generales y específicos han sido alcanzados, los proyectos han asegurado que los requisitos sean gestionados y los procesos son planificados, ejecutados de manera controlada, conforme a los planes documentados y los productos o servicios satisfacen las necesidades del cliente en los requisitos especificados, también los objetivos y normas.
      .row(number="3" titulo="Nivel de madurez definida")
        .col-12
          p.mb-0 en este nivel la organización ha logrado alcanzar todos los objetivos específicos de las áreas asignadas en los niveles 2 y 3. Los procesos están bien caracterizados, entendidos y donde se definen normas, procedimientos, herramientas y métodos para su aplicación.
      .row(number="4" titulo="Nivel de madurez administrativo cuantitativamente")
        .col-12
          p.mb-0 en este nivel se seleccionan los procesos que aportan significativamente al rendimiento del proceso en general, concluyendo subprocesos que se controlan por medio de métricas, reportes y estadísticas que permiten medir la capacidad, permitiendo identificar casos que generen problemas para ser corregidos y no se repitan en el futuro, también para tomar decisiones de negocio que permitan el crecimiento de la organización.
      .row(number="5" titulo="Nivel de madurez optimización")
        .col-12
          p.mb-0 este nivel está centrado en la mejora continua, la optimización y el rendimiento de los procesos de la organización, es el nivel ideal.

    p.mb-5 El modelo está articulado con los siguientes componentes: objetivos, prácticas y subprácticas, cuyas definiciones se encuentran en las siguientes tarjetas:

    .row.justify-content-center.mb-5
      .col-lg-10
        .row.mb-5
          .col-lg-4.mb-4.mb-lg-0
            .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
              .indicador--hover(v-if="indicadorTarjetaSlide")
              .tarjeta-slide__contenedor
                .tarjeta-slide__contenido.p-4.p-xl-5
                  h3 Objetivos
                  p.mb-5 Son elementos requeridos que se deben evaluar satisfactoriamente. Estos pueden ser específicos, por área de proceso y genéricos relacionados con la institucionalización.
                .tarjeta-slide__img.p-5(:style="{'background-image': `url(${require('@/assets/curso/tema1-img16.svg')})`}")
          .col-lg-4.mb-4.mb-lg-0
            .tarjeta.tarjeta-slide.abajo.color-primario(@mouseover="indicadorTarjetaSlide = false")
              .indicador--hover(v-if="indicadorTarjetaSlide")
              .tarjeta-slide__contenedor
                .tarjeta-slide__contenido.p-4.p-xl-5
                  h3 Prácticas
                  p.mb-5 Son esperadas, dado que si se alcanzaron los objetivos se espera también contar con los procesos, ya sean específicos o genéricos.
                .tarjeta-slide__img.p-5(:style="{'background-image': `url(${require('@/assets/curso/tema1-img17.svg')})`}")
          .col-lg-4.mb-4.mb-lg-0
            .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
              .indicador--hover(v-if="indicadorTarjetaSlide")
              .tarjeta-slide__contenedor
                .tarjeta-slide__contenido.p-4.p-xl-5
                  h3 Subprácticas
                  p.mb-5 Son componentes informativos que ayudan a la interpretación e implementación de las prácticas, constituidas por los activos de trabajo y distintas disciplinas.
                .tarjeta-slide__img.p-5(:style="{'background-image': `url(${require('@/assets/curso/tema1-img18.svg')})`}")

    p.mb-5 CMMI también define los niveles capacidad de la organización, en el cual se debe tener en cuenta las prácticas específicas y genéricas que pueden mejorar los procesos de la organización, cada nivel es una capa que permite estar en mejora continua con respecto a un proceso, clasificados así:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--color-secundario")
      .row(titulo="Nivel de capacidad 0: incompleta: ")
        .col
          p.mb-3 indica que un proceso se realiza parcialmente o no se realiza, dado que uno o más objetivos no se cumplen y no presenta objetivos genéricos
      .row(titulo="Nivel de capacidad 1: realizar:")
        .col
          p.mb-3 en este nivel se espera que se realicen todas las actividades específicas y genéricas del proceso, dado el nivel es posible que el rendimiento no sea estable y se llegue a no cumplir con objetivos como calidad, costo, tiempos, pero se puede ejecutar. Este solo es el inicio, lo cual significa que se hace algo, pero no se puede demostrar plenamente cómo funciona.
      .row(titulo="Nivel de capacidad 2: administración:")
        .col
          p.mb-3 se denominan procesos administrados, ya que se puede contar con una planeación, una trazabilidad y un control en los proyectos individuales o grupales.
      .row(titulo="Nivel de capacidad 3: definir:")
        .col
          p.mb-3 son procesos que están diseñados a partir de un conjunto de procesos estándar en la organización, con productos de trabajo, modelos, medidas y otras características relacionadas a herramientas que faciliten la identificación y ejecución del proceso.
      .row(titulo="Nivel de capacidad 4: administrada cuantitativamente:")
        .col
          p.mb-3 en este nivel se realiza un seguimiento al proceso por medio de métricas estadísticas y otras técnicas cuantitativas, para poder establecer el rendimiento de los procesos, con esto se realiza una gestión en el proceso. En este nivel los atributos de calidad y rendimiento se entienden como términos estadísticos usados para la administración del producto a lo largo de la vida del proceso.
      .row(titulo="Nivel de capacidad 5: optimización:")
        .col
          p.mb-3 este nivel se centra en la mejora continua del rendimiento de los procesos por medio de mejoras continuas que buscan la innovación.

    Separador

    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3  Criterios del manejo de la confidencialidad

    .row.justify-content-center
      .col-lg-7
        p.mb-0 Cuando se habla de confidencialidad se refiere a los principios de seguridad de la información y en ese caso es importante tener en cuenta las siglas CIA que hacen referencia a: Confidencialidad, Integridad y Disponibilidad; sin estos principios fundamentales no podemos hacer referencia a que la información está segura, si uno de estos principios falla, existe la posibilidad de materializarse algún riesgo de seguridad de la información. La ISO/IEC 27001, es un estándar que especifica los requisitos necesarios para establecer, desarrollar, mantener y mejorar el sistema de gestión de seguridad la información (SGSI) y en esta norma se definen los controles necesarios para garantizar estos principios.
      .col-lg-5
        figure
          img(src="@/assets/curso/tema1-img19.svg")

    .row.justify-content-center.align-items-center.no-gutters.mb-5
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1-img20.svg')})`}"
          )
          .bloque-texto-g__texto.p-5
            p.mb-0 Se debe tener en cuenta que ningún sistema es totalmente seguro, ni siquiera aquellos que tienen un nivel de madurez avanzado, por el contrario, se deben hacer evaluaciones periódicas frecuentes de los posibles riesgos y tomar las acciones pertinentes para minimizar dichas vulnerabilidades. Es necesario tener en cuenta cuales pueden llegar a ser las posibles amenazas de seguridad y cuando ya se tengan claras se pueden definir las acciones necesarias para minimizarlas.

    p.mb-5 A continuación, una explicación de los términos CIA:

    .row.justify-content-center.mb-5
      .col-lg-6
        figure
          img(src="@/assets/curso/tema1-img21.svg")
      .col-lg-6
        ol.lista-ol--cuadro
          li
            .lista-ol--cuadro__vineta.color-1
              span
            p.mb-0
              strong Confidencialidad
              br
              | Se conoce como el método que permite la prevención de la divulgación de la información a personas o sistemas que no tengan la autorización necesaria para acceder a ella.
          li
            .lista-ol--cuadro__vineta.color-2
              span
            p.mb-0
              strong Integridad
              br
              | Hace referencia a que la información se debe mantener intacta, libre de alteraciones y cambios por terceros, por eso se debe asegurar que la información sea modificada por la misma persona a la que le pertenece evitando de esta manera que se pierda la integridad.
          li
            .lista-ol--cuadro__vineta.color-3
              span
            p.mb-0
              strong Disponibilidad
              br
              | Es de suma importancia dado que de nada sirve que la información esté segura e íntegra si no podemos tener acceso a ella. La información debe estar disponible en cualquier momento que el usuario requiera accederla.

    p.mb-5 La seguridad de la información contempla la protección de la infraestructura, los dispositivos, las herramientas, la integridad física y moral de los usuarios, por lo cual se han optado por mecanismos como la encriptación, creación de firewalls, simuladores de ataques.
      br
      br
      | En la actualidad hay empresas que se encargan de gestionar la seguridad de otras empresas, las cuales pueden proveer servicios en las siguientes áreas:

    .row.justify-content-center
      .col-lg-11
        ol.lista-ol.lista-ol--separador
          li.no-flex
            .tarjeta-avatar-b
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema1-img22.svg' alt='AvatarTop')
              .tarjeta.color-acento-contenido.row.align-items-center
                .p-4
                  p.mb-0
                    strong Los servicios gestionados de seguridad,
                    br
                    | desde los que se administran y monitorean los sistemas de seguridad las 24 horas del día.
          li.no-flex
            .tarjeta-avatar-b
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema1-img23.svg' alt='AvatarTop')
              .tarjeta.color-acento-contenido.row.align-items-center
                .p-4
                  p.mb-0
                    strong Los servicios profesionales,
                    br
                    | que apoyan la consultoría de análisis de vulnerabilidades, las pruebas de penetración, la implantación de normativas y estándares.
          li.no-flex
            .tarjeta-avatar-b
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema1-img24.svg' alt='AvatarTop')
              .tarjeta.color-acento-contenido.row.align-items-center
                .p-4
                  p.mb-0
                    strong El área de tecnología e ingeniería,
                    br
                    | para diseñar, integrar y soportar soluciones tecnológicas de seguridad, pues los clientes no siempre tienen la infraestructura necesaria que ellos le proporcionarán.

    Separador

    #t_1_4.titulo-segundo.color-acento-contenido
      h2 1.4  Herramientas tecnológicas para pruebas

    .row.justify-content-center.mb-5
      .col-lg-5
        figure
          img(src="@/assets/curso/tema1-img25.svg")
      .col-lg-7
        p.mb-0 Cuando se habla de herramientas para la aplicación de pruebas de software, por lo general se piensa en automatización, lo cual es un gran elemento potenciador de productividad, pero no siempre se aplica en todos los contextos, por lo que es importante reconocer la viabilidad de aplicar pruebas automatizadas dependiendo del campo y contexto a aplicar.
          br
          br
          | Se debe iniciar con la identificación de contextos del proyecto, además es necesario para un tester reconocer qué es automatizar una prueba de software y tener total conciencia de cuáles escenarios no son automatizables. Dentro de este proceso es importante que se identifique cómo se puede optimizar el proceso de automatización, trabajo en equipo con los compañeros de proyecto y activos para probar las herramientas de automatización.
          br
          br
          | A continuación, se presentan aspectos a considerar al momento de automatizar las pruebas de software:

    .row.justify-content-center.mb-3
      .col-lg-9
        ImagenInfografica.xl.color-secundario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema1-img26.svg', alt='Texto que describa la imagen')

          .tarjeta.tarjeta--color-secundario.p-5(x="58.5%" y="24.5%" )
            .h5.mb-2 ¿Por qué automatizar pruebas de software?
            p.mb-0 Desde el inicio la automatización se supone la reducción del esfuerzo humano en actividades repetitivas que pueden ser llevadas a cabo por una máquina, por lo que con la automatización de pruebas de software podemos intuir que se llega al objetivo de simplificar un trabajo dispendioso, complejo, repetitivo, cambiando la perspectiva a una respuesta más efectiva y productiva. El objetivo es ahorrar capacidad, energía, tiempos y costos, al igual que liberar personal del equipo para que esté disponible para actividades prioritarias.

          .tarjeta.tarjeta--color-secundario.p-5(x="58.5%" y="38.5%")
            .h5.mb-2 Automatización de esfuerzos manuales
            p.mb-0 Dentro de las pruebas de software hay esfuerzos que son repetitivos y que se pueden abordar por medio de procesos automatizados, es aquí donde los testers entran a traducir las acciones manuales a una serie de comandos que emulan la actividad humana, incluso estos pueden llegar a un nivel que la capacidad humana no sería capaz de replicar como cantidad de ejecuciones o carga a un proceso recurrente.

          .tarjeta.tarjeta--color-secundario.p-5(x="58.5%" y="50.5%")
            .h5.mb-2 ¿Cuándo algo se considera automatizable?
            p.mb-0 Es importante indicar que un tester tendrá el criterio para determinar cuándo un proceso se automatizará, siempre y cuando domine el arte del testeo de forma manual. El conocimiento de los procesos manuales son la base para poder realizar una automatización adecuada y exitosa.
            br
            | Cabe resaltar que las pruebas manuales no pueden ser totalmente reemplazables, básicamente no pueden simplemente desaparecer.

    p.mb-5 La automatización tiene sus ventajas y desventajas y todo depende del proyecto, el tiempo, el costo, la calidad y la metodología, por lo cual otro de los criterios para definir si automatizar o no, es el contexto.
      br
      br
      | Existen algunos mitos que puedes encontrar respecto a la automatización de pruebas que se presentan a continuación:

    .row.justify-content-center.mb-3
      .col-lg-9
        ImagenInfografica.xl.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema1-img27.svg', alt='Texto que describa la imagen')

          .tarjeta.color-acento-contenido.p-4(x="28.5%" y="20.5%" )
            p.mb-0 <strong>1</strong>. Todo se puede automatizar.

          .tarjeta.color-acento-contenido.p-4(x="75.5%" y="9.5%")
            p.mb-0 <strong>2</strong>. El software automatizado presenta mejores estándares de calidad que uno que no lo esté.

          .tarjeta.color-acento-contenido.p-4(x="75.5%" y="34.5%")
            p.mb-0 <strong>3</strong>. Son mejores las pruebas automatizadas que las manuales.

          .tarjeta.color-acento-contenido.p-4(x="15.5%" y="66.5%")
            p.mb-0 <strong>4</strong>. Con las pruebas automatizadas hay retorno de inversión más rápido.

          .tarjeta.color-acento-contenido.p-4(x="68%" y="76.5%")
            p.mb-0 <strong>5</strong>. Si alguno de estos mitos se llegan a cumplir, será en casos excepcionales y siendo la excepción de la regla.

        .bloque-texto-d.color-secundario.p-4.mb-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            h3.text-regular Ahora bien, se expresan los siete principios que ayudan a comprender el objetivo del testing, independientemente de que sean pruebas manuales o automatizadas,
            i.fas.fa-quote-right
          .bloque-texto-d__autor
            .h6.mb-0 según Rodríguez (2020):

    ol.lista-ol--cuadro.mb-5
      li
        .lista-ol--cuadro__vineta
          span.texto-oscuro.fw-bold 1
        | El valor de cualquier práctica depende de su contexto.
      li
        .lista-ol--cuadro__vineta
          span.texto-oscuro.fw-bold 2
        | Hay buenas prácticas en contexto, pero no hay “buenas prácticas”.
      li
        .lista-ol--cuadro__vineta
          span.texto-oscuro.fw-bold 3
        | Las personas, trabajando juntas, son la parte más importante del contexto de cualquier proyecto.
      li
        .lista-ol--cuadro__vineta
          span.texto-oscuro.fw-bold 4
        | Los proyectos no son estáticos y a menudo toman caminos impredecibles.
      li
        .lista-ol--cuadro__vineta
          span.texto-oscuro.fw-bold 5
        | El producto es una solución. Si el problema no se resuelve, el producto no funcionará.
      li
        .lista-ol--cuadro__vineta
          span.texto-oscuro.fw-bold 6
        | El testing de software es un proceso intelectual desafiante.
      li
        .lista-ol--cuadro__vineta
          span.texto-oscuro.fw-bold 7
        | Solo a través del juicio y la habilidad, practicados cooperativamente durante todo el proyecto, podremos hacer las cosas correctas en el momento adecuado para probar nuestros productos de manera efectiva.

    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1-img28.svg')})`}"
          )
          .bloque-texto-g__texto.p-5
            p.mb-0 Al iniciar el proceso de automatización se debe tener en cuenta el costo de mantener los scripts, por esto es ideal garantizar que desde las pruebas unitarias se minimice el riesgo de errores en el código, siendo requerido contar una retroalimentación inmediata y continua a las diferentes capas, por esto las pruebas manuales y exploratorias son más valiosas a nivel de integración e interfaz de usuario, centrando esfuerzos en las pruebas que no son posibles de automatizar.

    p.mb-5 En la siguiente figura, se puede observar dos modelos de aplicación de pruebas de software, a la izquierda un modelo que no está optimizado y donde los esfuerzos se reflejan en la capa superior, sin retroalimentación temprana; mientras que el de la derecha desde el inicio del desarrollo cada elemento como una unidad es verificado minimizando y optimizando los procesos de prueba de cara a un ambiente productivo:

    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.tarjeta--color-secundario.p-5
          .titulo-sexto.color-acento-contenido
            h5 Figura 1
            br
            span Modelo tipo cono y pirámide en ejecución de pruebas
          figure
            img(src="@/assets/curso/tema1-img29.jpg")
            figcaption Nota.Tomada de Rodríguez (2020).

    p.mb-5 Aunque las pruebas manuales y las automatizadas son diferentes no son excluyentes entre ellas, al contrario, se consideran acciones complementarias que buscan mejorar la calidad del producto software.
      br
      br
      | Como se ha indicado previamente desde el contexto, no todas las pruebas son automatizables, por lo que se detallan los casos en los cuales se pueden automatizar:

    .row.justify-content-center.slider-special-container.mb-5(
      :style="{'background-image': `url(${require('@/assets/curso/tema1-img4.svg')})`}"
    )
      .col-lg-11.py-5
        #carouselSpecial2.carousel.slide(data-bs-ride='carousel')
          .carousel-indicators
            button.active(type='button' data-bs-target='#carouselSpecial2' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
            button(type='button' data-bs-target='#carouselSpecial2' data-bs-slide-to='1' aria-label='Slide 2')
            button(type='button' data-bs-target='#carouselSpecial2' data-bs-slide-to='2' aria-label='Slide 3')
            button(type='button' data-bs-target='#carouselSpecial2' data-bs-slide-to='3' aria-label='Slide 4')
          .carousel-inner
            .carousel-item.active
              .card.shadow
                .card-body.py-5.px-4
                  .row.justify-content-center.p-5
                    .col-lg-6.px-5
                      h4.titulo-cuarto Pruebas de regresión
                      p.mb-0 Este tipo de pruebas se deben ejecutar periódicamente después de cada lanzamiento de producto, y al ser un proceso repetitivo son altamente automatizables e incorporado en el proceso de integración y entrega continua.
                    .col-lg-6.px-5
                      figure
                        img(src='@/assets/curso/tema1-img30.svg', alt='Texto que describa la imagen')
            .carousel-item
              .card.shadow
                .card-body.py-5.px-4
                  .row.justify-content-center.p-5
                    .col-lg-7.px-5
                      h4.titulo-cuarto Pruebas basadas en el riesgo
                      p.mb-0 Estos casos son acordados por las partes interesadas en el proyecto, se enfocan en verificar las funcionalidades críticas y de alta prioridad; estas son importantes dado que con cada lanzamiento pueden afectar elementos importantes del negocio.
                    .col-lg-5.px-5
                      figure.px-4
                        img(src='@/assets/curso/tema1-img31.svg', alt='Texto que describa la imagen')
            .carousel-item
              .card.shadow
                .card-body.py-5.px-4
                  .row.justify-content-center.p-5
                    .col-lg-6.px-5
                      h4.titulo-cuarto Pruebas complejas y/o que consumen mucho riesgo
                      p.mb-0 Hace referencia a casos de  que son muy complejos de ejecutar manualmente y, al llevarlos a un script, será más fácil ejecutarlos de manera automatizada.
                        br
                        | Por ejemplo, si se trata de un formulario con muchos datos y el tester debe llenar muchas veces la información, estará propenso a equivocaciones.
                    .col-lg-6.px-5
                      figure
                        img(src='@/assets/curso/tema1-img32.svg', alt='Texto que describa la imagen')
            .carousel-item
              .card.shadow
                .card-body.py-5.px-4
                  .row.justify-content-center.p-5
                    .col-lg-6.px-5
                      h4.titulo-cuarto Casos de pruebas repetitivos
                      p.mb-0 El probar diferentes escenarios de prueba suele ser un proceso tedioso, por lo cual programar scripts con la información de cada escenario para el mismo flujo proporciona valor al optimizar el proceso y minimizar el tiempo y costos del proceso de prueba.
                    .col-lg-6.px-5
                      figure
                        img(src='@/assets/curso/tema1-img33.svg', alt='Texto que describa la imagen')
          button.carousel-control-prev(type='button' data-bs-target='#carouselSpecial2' data-bs-slide='prev')
            span.carousel-control-prev-icon(aria-hidden='true')
            span.visually-hidden Previous
          button.carousel-control-next(type='button' data-bs-target='#carouselSpecial2' data-bs-slide='next')
            span.carousel-control-next-icon(aria-hidden='true')
            span.visually-hidden Next

    p.mb-5 Cuando ya se sabe qué se va a automatizar, se debe seleccionar la herramienta pertinente para implementar el proceso, aunque la decisión de qué herramientas conformarán el repertorio de recursos disponibles dependerá de la experticia del equipo de desarrollo y de pruebas, así como del tipo de proyecto y los recursos asignados.
      br
      br
      | A continuación, se presentan un listado de herramientas que podrán utilizarse para automatizar diferentes tipos de pruebas:

    .row.mb-5
      .col-sm-6.col-xl-3.mb-4(v-for="item in itemsApps1" :key="item.title")
        .tarjeta.tarjeta-flip.color-secundario.apps(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor(style="min-height: 300px; max-height: 300px;")
            .tarjeta-flip__img(:style="{'background-image': `url(${item.img})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h4 {{ item.title }}
              p.fs-7 {{ item.description }}

    p.mb-5 También existen herramientas de gestión de pruebas, a continuación, se presentan algunas de estas:

    .row.mb-5.justify-content-center
      .col-sm-6.col-xl-3.mb-4(v-for="item in itemsApps2" :key="item.title")
        .tarjeta.tarjeta-flip.color-acento-contenido.apps(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor(style="min-height: 300px; max-height: 300px;")
            .tarjeta-flip__img(:style="{'background-image': `url(${item.img})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h4 {{ item.title }}
              p.fs-7 {{ item.description }}

    p.mb-5 Otro tipo de herramientas importantes son las de trazabilidad de incidencias, aquí se presentan algunas:

    .row.mb-5
      .col-sm-6.col-xl-3.mb-4(v-for="item in itemsApps3" :key="item.title")
        .tarjeta.tarjeta-flip.color-secundario.apps(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor(style="min-height: 300px; max-height: 300px;")
            .tarjeta-flip__img(:style="{'background-image': `url(${item.img})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h4 {{ item.title }}
              p.fs-7 {{ item.description }}

    p.mb-5 Para finalizar, se listan algunas herramientas de prueba entre diferentes navegadores:

    .row.mb-5.justify-content-center
      .col-sm-6.col-xl-3.mb-4(v-for="item in itemsApps4" :key="item.title")
        .tarjeta.tarjeta-flip.color-acento-contenido.apps(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor(style="min-height: 300px; max-height: 300px;")
            .tarjeta-flip__img(:style="{'background-image': `url(${item.img})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h4 {{ item.title }}
              p.fs-7 {{ item.description }}

    Separador

    #t_1_5.titulo-segundo.color-acento-contenido
      h2 1.5  Modelo de procesos de pruebas

    .row.justify-content-center.mb-5
      .col-lg-4
        .cajon-b.color-acento-contenido.p-3
          p.mb-0 El modelo de procesos de pruebas en V o modelo a cuatro niveles es empleado en muchos procesos de desarrollo, en los años 90 surgió su primera versión, adicional al modelo en V también lo acompañan los procesos de calidad y las fases individuales como tal, este modelo define las siguientes fases de proyecto individuales:
      .col-lg-8
        .row.justify-content-center.caja-aux.color-acento-contenido.border.radius-50.py-4.px-3
          .col-lg-4
            figure
              img(src="@/assets/curso/tema1-img54.svg")
          .col-lg-8
            ul.lista-ul--color.mb-4
              li
                i.fas.fa-code
                | Al inicio del proyecto se determina un análisis de las especificaciones del sistema.
              li
                i.fas.fa-code
                p.mb-0 Luego se define la fase funcional con los requisitos funcionales y no funcionales.
                  br
                  | Posteriormente se continúa con la fase de diseño.
              li
                i.fas.fa-code
                | Y, por último, se define la arquitectura del sistema y la codificación del mismo.

    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.radius-50
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1-img55.svg')})`}"
          )
          .bloque-texto-g__texto.p-5
            p.mb-0 De acuerdo con estos planes, se inicia el desarrollo y con ello se tendrá lugar a las fases de control de calidad, denominadas también verificación o validación, que por lo general están relacionadas a las fases del desarrollo.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p.mb-0 Es denominado modelo en V dado que compara cada fase de desarrollo con las fases de control de calidad, el brazo izquierdo contiene las tareas de diseño y desarrollo del sistema, el derecho las medidas de control de calidad definidas para cada fase, en medio de los dos se puede encontrar la implementación de producto, es decir el desarrollo y código fuente del producto software.
          br
          br
          | En la siguiente figura se detalla el modelo único de evaluación el cual se orienta a los productos de trabajo en lugar a los procesos que lo producen, además se pueden observar las fases mencionadas:
      .col-lg-5
        figure
          img(src="@/assets/curso/tema1-img56.svg")

    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.tarjeta--color-secundario.p-5
          .titulo-sexto.color-acento-contenido
            h5 Figura 2
            br
            span Modelo V
          figure
            img(src="@/assets/curso/tema1-img57.svg")
            figcaption Nota. Tomada de Grhsoftware (2020).

    #t_1_6.titulo-segundo.color-acento-contenido
      h2 1.6  Documentación de pruebas

    .cajon-b.color-acento-contenido.p-3
      p.mb-0 En la fase de pruebas se lleva a cabo la ejecución de los diferentes planes de prueba definidos en la planeación de las fases anteriores, donde es necesario conseguir el objetivo y documentar la ejecución de cada prueba, en la medida de lo posible minimizando o evitando en su totalidad acarrear con errores que debieron solucionarse en iteraciones anteriores o en fases del desarrollo temprano.
        br
        br
        | En esta fase se deben ejecutar las siguientes acciones y generar estos entregables:

    .row.justify-content-center.slider-special-container.mb-5(
      :style="{'background-image': `url(${require('@/assets/curso/tema1-img4.svg')})`}"
    )
      .col-lg-11.py-5
        #carouselSpecial3.carousel.slide(data-bs-ride='carousel')
          .carousel-indicators
            button.active(type='button' data-bs-target='#carouselSpecial3' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
            button(v-for="(item, index) in itemsTabs1.slice(1, 5)" :key="index"  type='button' data-bs-target='#carouselSpecial3' :data-bs-slide-to='index + 1' :aria-label='`Slide ${index + 2}`')
          .carousel-inner
            .carousel-item.active
              .card.shadow
                .card-body.py-5.px-4
                  .row.justify-content-center.p-5
                    .col-lg-6.px-5
                      h4.titulo-cuarto {{ itemsTabs1[0].title }}
                      p.mb-0 {{ itemsTabs1[0].description }}
                    .col-lg-6.px-5
                      figure
                        img(:src='itemsTabs1[0].img', alt='Texto que describa la imagen')
            .carousel-item(v-for="(tab, index) in itemsTabs1.slice(1, 5)" :key="index")
              .card.shadow
                .card-body.py-5.px-4
                  .row.justify-content-center.p-5
                    .col-lg-6.px-5
                      h4.titulo-cuarto {{ tab.title }}
                      p.mb-0(v-html="tab.description")
                    .col-lg-6.px-5
                      figure.px-4
                        img(:src='tab.img', alt='Texto que describa la imagen')
          button.carousel-control-prev(type='button' data-bs-target='#carouselSpecial3' data-bs-slide='prev')
            span.carousel-control-prev-icon(aria-hidden='true')
            span.visually-hidden Previous
          button.carousel-control-next(type='button' data-bs-target='#carouselSpecial3' data-bs-slide='next')
            span.carousel-control-next-icon(aria-hidden='true')
            span.visually-hidden Next

    Separador

    #t_1_7.titulo-segundo.color-acento-contenido
      h2 1.7 <i>Continuous Integration y Continuous Delivery</i>

    .cajon-b.color-acento-contenido.p-3
      p.mb-0 En la fase de pruebas se lleva a cabo la ejecución de los diferentes planes de prueba definidos en la planeación de las fases anteriores, donde es necesario conseguir el objetivo y documentar la ejecución de cada prueba, en la medida de lo posible minimizando o evitando en su totalidad acarrear con errores que debieron solucionarse en iteraciones anteriores o en fases del desarrollo temprano.
        br
        br
        | En esta fase se deben ejecutar las siguientes acciones y generar estos entregables:

    .row.justify-content-center.mb-5
      .col-lg-10
        .row.justify-content-center.align-items-center.caja-aux.color-acento-contenido.border.radius-50.py-5.px-4
          .col-lg-8
            p.mb-0 Una herramienta de control de versiones es un elemento clave en el proceso de CI, dado que apoya el proceso de verificación con pruebas automatizadas, los estilos definidos por las reglas de desarrollo, verificación de código estático, sintaxis, entre otros.
          .col-lg-4
            figure
              img(src="@/assets/curso/tema1-img63.svg")

    .row.justify-content-center.mb-5
      .col-lg-5
        figure
          img(src="@/assets/curso/tema1-img64.svg")
      .col-lg-7
        p.mb-0.box-with-degrade-invert.color-acento-contenido.p-5 Esta forma de trabajo soluciona problemas de coordinación manual entre los desarrolladores, el equipo de operación y el resto del equipo encargado del correcto funcionamiento del producto software.
          br
          br
          | Este tipo de trabajo manual representa una tarea de sincronización compleja y a menudo confusa, que añade procesos y costos innecesarios a la ejecución del proyecto. Al no contar con procesos CI, las liberaciones son más inestables y lentas, dado que los riesgos crecen considerablemente a medida que aumentan las nuevas funcionalidades o el equipo de desarrollo que intervienen en él, también se puede concluir que sin la integración continua y al limitarse la comunicación el proceso de desarrollo se vuelve engorroso y se cae en el error de trabajar en una caja negra, donde solo llegan solicitudes de nuevas funcionalidades pero no se sabe en realidad con que se cuenta o con que no.

    p.mb-5 Continuous Delivery (entrega continua en español) es un concepto relativamente nuevo que cada vez es adoptado con más frecuencia en los procesos de desarrollo. Estas prácticas incluyen el desarrollo, control de calidad y entrega, dado que estas no son definitivas y antes al contrario se repiten de formas automatizadas, una y otra vez durante el proceso de desarrollo. El beneficio de este es que el producto se puede someter regularmente a procesos de calidad en cada una de sus fases de desarrollo, permitiendo realizar entregas, sin importar que el equipo de desarrollo siga trabajando en funcionalidades del producto final. Otro punto importante es que hay una realimentación o feedback constante que proviene del pipeline, lo que permite tomar acción inmediata ante una mejora.

    Separador

    #t_1_8.titulo-segundo.color-acento-contenido
      h2 1.8   Depuración y técnicas de resolución de problemas

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-8
        .cajon-b.color-acento-contenido.p-3
          p.mb-0 La capacidad de encontrar y solucionar problemas rápidamente en un producto software pertenecen a las habilidades más importantes en los equipos de desarrollo o encontrar un problema en un ambiente productivo suele ser realmente desafiante, hay equipos completos dedicados al mantenimiento del sistema los cuales se encargan de corregir errores en los productos software. También hay personal que están disponibles de guardia de tal manera que si se llega a caer el sistema tienen la responsabilidad de que rápidamente este vuelva a estar en línea lo antes posible.
            br
            br
            | La resolución de problemas en el ámbito de depuración de código tiene como objetivo delinear una serie de recomendaciones o consejos que ayudarán a solucionar los problemas lo antes posible.
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1-img65.svg")
    p.mb-5 El contar con la capacidad necesaria para resolver los problemas en ambientes productivos lo antes posible es sumamente crítico, ya que la caída de un sistema puede generar pérdidas de miles o millones de dólares, por lo cual es ideal seguir las siguientes técnicas:

    .row.justify-content-center.slider-special-container.mb-5(
      :style="{'background-image': `url(${require('@/assets/curso/tema1-img4.svg')})`}"
    )
      .col-lg-11.py-5
        #carouselSpecial4.carousel.slide(data-bs-ride='carousel')
          .carousel-indicators
            button.active(type='button' data-bs-target='#carouselSpecial4' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
            button(v-for="(item, index) in itemsTabs2.slice(1, 8)" :key="index"  type='button' data-bs-target='#carouselSpecial4' :data-bs-slide-to='index + 1' :aria-label='`Slide ${index + 2}`')
          .carousel-inner
            .carousel-item.active
              .card.shadow
                .card-body.py-5.px-4
                  .row.justify-content-center.p-5
                    .col-lg-6.px-5
                      h4.titulo-cuarto {{ itemsTabs2[0].title }}
                      p.mb-0 {{ itemsTabs2[0].description }}
                    .col-lg-6.px-5
                      figure
                        img(:src='itemsTabs2[0].img', alt='Texto que describa la imagen')
            .carousel-item(v-for="(tab, index) in itemsTabs2.slice(1, 8)" :key="index")
              .card.shadow
                .card-body.py-5.px-4
                  .row.justify-content-center.p-5
                    .col-lg-6.px-5
                      h4.titulo-cuarto {{ tab.title }}
                      p.mb-0(v-html="tab.description")
                    .col-lg-6.px-5
                      figure.px-4
                        img(:src='tab.img', alt='Texto que describa la imagen')
          button.carousel-control-prev(type='button' data-bs-target='#carouselSpecial4' data-bs-slide='prev')
            span.carousel-control-prev-icon(aria-hidden='true')
            span.visually-hidden Previous
          button.carousel-control-next(type='button' data-bs-target='#carouselSpecial4' data-bs-slide='next')
            span.carousel-control-next-icon(aria-hidden='true')
            span.visually-hidden Next

    p.mb-0 Una vez se tengan en cuenta estas técnicas el crear nuevas funciones o al realizar mantenimiento, dar soporte o realizar la trazabilidad de un bug, lo más probable es que los tiempos se optimicen y la respuesta respecto a las acciones a realizar sean más rápidas y certeras.

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
    itemsApps1: [
      {
        img: require('@/assets/curso/tema1-img34.svg'),
        title: 'Selenium:',
        description:
          'Herramienta de código abierto que se usa para realizar pruebas de interfaz en aplicaciones web. ',
      },
      {
        img: require('@/assets/curso/tema1-img35.svg'),
        title: 'Appium:',
        description:
          'Herramienta de código abierto basada en Selenium que se puede automatizar pruebas para aplicaciones Android y iOS. ',
      },
      {
        img: require('@/assets/curso/tema1-img36.svg'),
        title: 'Cucumber:',
        description: 'Parte del enfoque BDD (Behavior Driven Development).',
      },
      {
        img: require('@/assets/curso/tema1-img37.svg'),
        title: 'Ghosh inspector:',
        description:
          'Herramienta ideal para principiantes, dado que no se requiere saber programar para la definición de las pruebas. ',
      },
      {
        img: require('@/assets/curso/tema1-img38.svg'),
        title: 'Test Studio:',
        description:
          'Herramienta que sirve para probar funcionalidades de API y carga.',
      },
      {
        img: require('@/assets/curso/tema1-img39.svg'),
        title: 'Testim:',
        description:
          'Herramienta inteligente la cual emplea métodos de aprendizaje automático, pudiendo ejecutar las pruebas en diferentes entornos. ',
      },
      {
        img: require('@/assets/curso/tema1-img40.svg'),
        title: 'LoadRunner:',
        description:
          'Herramienta usada principalmente para probar rendimiento en condiciones de alta carga, simulando la concurrencia de miles de usuarios.',
      },
      {
        img: require('@/assets/curso/tema1-img41.svg'),
        title: 'WebLoad:',
        description:
          'Herramienta con capacidades de scripting puede probar casos de prueba complejos aplicando en aplicaciones web independientes y que están en la nube. ',
      },
      {
        img: require('@/assets/curso/tema1-img42.svg'),
        title: 'Blazemeter:',
        description:
          'Herramienta que se usa para medir el rendimiento de aplicaciones móviles, API o aplicaciones web, es utilizada en cualquier etapa del desarrollo con lo que apoya la entrega de software de alto rendimiento. Permite agregar una nueva configuración de prueba obteniendo nuevos datos de Google Analytics.',
      },
      {
        img: require('@/assets/curso/tema1-img43.svg'),
        title: 'jMeter:',
        description:
          'Herramienta de código abierto tipo apache la cual es aplicada para verificar el rendimiento de sitios web dinámicos, personas con pocos conocimientos puede interpretar fácilmente los resultados generados por la herramienta. ',
      },
    ],
    itemsApps2: [
      {
        img: require('@/assets/curso/tema1-img44.svg'),
        title: 'Xray:',
        description:
          'Herramienta de gestión de pruebas preferidas para pruebas manuales y automatizadas, la cual realiza la clasificación de las mismas y proporciona un resultado de evaluación eficiente en un corto tiempo.',
      },
      {
        img: require('@/assets/curso/tema1-img45.svg'),
        title: 'TestRail:',
        description:
          'Herramienta web que permite gestionar los casos de prueba, se puede personalizar y escalar funcionalidades. Es posible ver en tiempo real el avance de las pruebas y sirve como repositorio de la ejecución de pruebas manuales y automatizadas.',
      },
      {
        img: require('@/assets/curso/tema1-img46.svg'),
        title: 'Testpad:',
        description:
          'Emplea planes de prueba para pruebas ágiles, exploratorias, gestión de casos de prueba, BDD, entre otros. ',
      },
    ],
    itemsApps3: [
      {
        img: require('@/assets/curso/tema1-img47.svg'),
        title: 'Jira:',
        description:
          'Popularmente conocida como una herramienta de gestión de proyectos además de apoyar el proceso de seguimiento y registro de bugs, está integrado con entornos de desarrollo para tener funcionalidades avanzadas en los ciclos de construcción, proporcionando reportes, estadísticas y alertas.',
      },
      {
        img: require('@/assets/curso/tema1-img48.svg'),
        title: 'Mantis:',
        description:
          'Herramienta de seguimiento de código abierto, contiene un panel de servicio donde se pueden ver los elementos pendientes, asignaciones a usuarios y filtros por equipo, proyecto o usuarios. ',
      },
      {
        img: require('@/assets/curso/tema1-img49.svg'),
        title: 'Natsparker:',
        description:
          'Herramienta que sirve para escanear automáticamente sitios web, aplicaciones o servicios web. Esta herramienta busca encontrar vulnerabilidades de seguridad, proporcionando pruebas de explotación sin falsos positivos.',
      },
      {
        img: require('@/assets/curso/tema1-img50.svg'),
        title: 'SoapUI:',
        description:
          'Herramienta funcional para servicios soap, rest, jms y amf, se usa en pruebas funcionales como en cargas de Apis, también puede realizar llamadas HTTP y JDBC.',
      },
    ],
    itemsApps4: [
      {
        img: require('@/assets/curso/tema1-img51.svg'),
        title: 'Lambda Test:',
        description:
          'Herramienta de prueba escalable basada en la nube que permite hacer pruebas entre diferentes navegadores. Permite la ejecución de casos de prueba en paralelo y realiza pruebas en tiempo real de forma eficiente.',
      },
      {
        img: require('@/assets/curso/tema1-img52.svg'),
        title: 'SauceLabs:',
        description:
          'Admite más de 650 navegadores, sistemas operativos y conjugaciones entre dispositivos, lo que brinda una alta gama de infraestructura necesaria para pruebas manuales o automatizadas. ',
      },
      {
        img: require('@/assets/curso/tema1-img53.svg'),
        title: 'Espresso:',
        description:
          'Herramienta de pruebas de software de primera categoría para pruebas en Android desarrollada por Google.',
      },
    ],
    itemsTabs1: [
      {
        img: require('@/assets/curso/tema1-img58.svg'),
        title: 'Acciones de la fase de documentación de pruebas',
        description:
          'Ejecución de pruebas de código: Un porcentaje alto de estas pruebas se podrán automatizar en herramientas como checkstyle, findbugs y pmd.',
      },
      {
        img: require('@/assets/curso/tema1-img59.svg'),
        title: '',
        description:
          'Ejecución del plan de pruebas unitarias:  Para este tipo de pruebas se podrá implementar un componente que automatice el proceso de ejecución de pruebas unitarias como, por ejemplo, JUnit el cual se ejecutará en los eventos de entrega continua, o cuando se realice una sincronización de datos (merge)  al repositorio por medio de pipelines. ',
      },
      {
        img: require('@/assets/curso/tema1-img60.svg'),
        title: '',
        description:
          'Ejecución del plan de pruebas de integración:   Para la implementación de estas pruebas, se puede utilizar las mismas herramientas de las pruebas unitarias, pero los casos de prueba serán más largos y la verificación de resultados necesitará más de una comprobación.',
      },
      {
        img: require('@/assets/curso/tema1-img61.svg'),
        title: '',
        description:
          'Ejecución de pruebas funcionales:   Se deberá ejecutar cada una de estas pruebas según los casos de pruebas funcionales definidos, como resultado de estos se generará un informe en el cual se establece el resultado de cada prueba.',
      },
      {
        img: require('@/assets/curso/tema1-img62.svg'),
        title: '',
        description:
          'Implementación de pruebas unitarias.<br>Implementación de pruebas de integración.<br>Informe de pruebas funcionales.<br>Además, se deberán entregar los siguientes informes:<br>Informe de revisión de la entrega software.<br>Informe de revisión del testing temprano.<br>Informe de revisión de verificación y ajustes en entornos.<br>Informe completo del resumen de las pruebas realizadas.',
      },
    ],
    itemsTabs2: [
      {
        img: require('@/assets/curso/tema1-img66.svg'),
        title:
          'Eliminar o automatizar toda configuración necesaria para que el sistema se ejecute',
        description:
          ' La pregunta que muchos desarrolladores se hacen cuando ingresan a un nuevo proyecto es: ¿cuánta configuración es requerida para que el sistema se ejecute? En muchas ocasiones el tema de configuración puede tomar horas e incluso días, algunas requieren de intervención manual y al evolucionar la tecnología y mejorar las capacidades estas configuraciones suelen quedar obsoletas, lo cual requerirá de actualización en sus definiciones, al suceder esto se deberá invertir tiempo en nuevas configuraciones que permitan el despliegue del sistema. ',
      },
      {
        img: require('@/assets/curso/tema1-img67.svg'),
        title: '',
        description:
          'Con la llegada de los contenedores se facilita el despliegue y funcionamiento las aplicaciones, demanda poco tiempo y el desarrollador se encarga específicamente de mantener el software y no configurarlo; además, los contenedores ofrecen el estandarizar el despliegue sin mayor complicación en cualquier sistema operativo. ',
      },
      {
        img: require('@/assets/curso/tema1-img68.svg'),
        title: 'El error de la sopa tecnológica',
        description:
          'Entre menos tecnologías se usen mejor, se debe tener en cuenta utilizar solo las herramientas necesarias y adecuadas para la construcción del producto software. Una gran cantidad de dependencias pueden hacer la vida imposible de un desarrollador cuando es requerido hacer el mantenimiento de las mismas por cambio de versión o incompatibilidad por actualizaciones.',
      },
      {
        img: require('@/assets/curso/tema1-img69.svg'),
        title:
          'El registro debe guiar a solucionar y encontrar problemas, no invadir con detalles innecesarios',
        description:
          'El registro es un log de datos similar a los comentarios, en el que es necesario documentar todas las acciones y decisiones críticas, además de toda la información que se utilizará en las técnicas de depuración. Este proceso no es sencillo, pero con algo de experiencia es posible replicar escenarios que en producción desencadenan errores y luego hacer el registro necesario para llegar a resolverlo. ',
      },
      {
        img: require('@/assets/curso/tema1-img70.svg'),
        title: 'Manejo de situaciones inesperadas',
        description:
          'Trazar cuáles son los supuestos del código, ya que si una determinada variable debe contener 2, 5 o 7 asegúrese que el dato será un enum y no un int, esto será muy útil ya que en un escenario de error es posible que se busque el problema en un lugar que no es el indicado.<br>Al mapear estos casos se puede lanzar una advertencia y evitar que se desencadene un problema inesperado que posiblemente si el revisor no es el desarrollador buscará en un lugar equivocado. ',
      },
      {
        img: require('@/assets/curso/tema1-img71.svg'),
        title: 'Replicar errores del cliente',
        description:
          'En muchas ocasiones un alto porcentaje de tiempo se emplea tratando de replicar el error, entre 90 a 95%, y posteriormente es cuestión de minutos realizar el ajuste necesario para solucionar el problema, probar y desplegar. Para replicar rápidamente los problemas que se presentan de cara al cliente, es necesario que el arquitecto realice una serie de configuraciones y consideraciones necesarias para que el desarrollador pueda replicar exactamente los pasos llevados a cabo por el usuario. ',
      },
      {
        img: require('@/assets/curso/tema1-img72.svg'),
        title:
          'Debe ser claro dónde poner ‘breakpoints (puntos de interrupción)’ en la aplicación',
        description:
          'Si se cuenta con una GUI, debe ser claro dónde poner los puntos de quiebre, dado que en muchas ocasiones los desarrolladores presentan un grado de abstracción tal que es complicado encontrar los flujos por los cuales se ejecuta un flujo funcional.',
      },
      {
        img: require('@/assets/curso/tema1-img73.svg'),
        title:
          'Asegurar que todas las dependencias externas tengan la documentación explícita de sus funcionalidades, integraciones, parches o despliegues',
        description:
          'Por lo general esto se encuentra en un archivo <strong>README</strong>, dentro del componente raíz, con la finalidad de que la documentación no se pierda y sea fácil su acceso. ',
      },
    ],
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
