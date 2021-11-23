<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Gestión del desarrollo y ejecución de pruebas

    figure.mb-0
      img(src="@/assets/curso/tema3-img1.svg")

    Separador

    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1  Mínimo producto viable

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.mb-5.mb-lg-0
        p.mb-4 MVP (<i>Minimum Viable Product</i>) o Producto Mínimo Viable es una versión de prueba de un proyecto, por lo general contempla las funcionalidades base con las cuales deberá contar el elemento a construir. Es una metodología muy usada en la era digital en lo relacionado a la construcción de nuevos productos, que busca evitar perder tiempo y dinero en proyectos que no tendrán la respuesta esperada en el mercado.
        p.mb-0.py-5.px-5.box-with-degrade.color-primario La idea de un MVP es poder ofrecer un producto base con las mismas características de valor del producto terminado, dado que un MVP por lo general inicia con un presupuesto base bajo y se busca poner a prueba el mismo para poder fortalecer el músculo financiero ya sea por cuenta propia o por inversión, se debe construir rápido y poniendo los esfuerzos en los puntos correctos y que generan valor.
      .col-lg-5
        figure
          img(src="@/assets/curso/tema3-img2.svg")

    p.mb-5 Para proponer un MVP es importante tener en cuenta el siguiente paso a paso:

    h3.titulo-tercero MVP (<i>Minimum Viable Product</i>) o Producto Mínimo Viable

    .tarjeta.color-primario-3.p-4.mb-5
      LineaTiempoC.color-secundario(text-small)
        .row(titulo="1. Definir una propuesta de valor ").align-items-center
          .col-lg-7
            p.mb-0
              strong 1. Definir una propuesta de valor
              br
              | Para definir una propuesta de valor es importante dar respuesta a los siguientes interrogantes: ¿por qué el público lo necesita?, ¿qué soluciones ofrece?, ¿cómo lo utilizará el público?, ¿por qué lo eligieron ante la competencia?, ¿qué es lo que realmente agrega valor?
          .col-lg-5
            figure
              img(src="@/assets/curso/tema3-img3.svg")
        .row(titulo="2. Elegir el <i>target</i> correcto").align-items-center
          .col-lg-7
            p.mb-0
              strong 2. Elegir el <i>target</i> correcto
              br
              | Se debe elegir una audiencia correcta alineada con el público objetivo, dado que si no se elige adecuadamente el grupo poblacional, en el cual será medido el MVP, posiblemente se reciban experiencias o expectativas erróneas.
          .col-lg-5
            figure
              img(src="@/assets/curso/tema3-img4.svg")
        .row(titulo="3. Determinar el tiempo de prueba").align-items-center
          .col-lg-7
            p.mb-0
              strong 3. Determinar el tiempo de prueba
              br
              | Debe ser un periodo de tiempo corto, lo suficiente para que entregue respuestas que aporten valor a la evolución del mismo.
          .col-lg-5
            figure
              img(src="@/assets/curso/tema3-img5.svg")
        .row(titulo="4. Probar la respuesta del mercado").align-items-center
          .col-lg-8
            p.mb-0
              strong 4. Probar la respuesta del mercado
              br
              | Se debe realizar una inversión de promoción en la cual hay dos etapas: fase alfa, aquí el estado de maduraciones es intermedio y la población con la que se realizan las pruebas es reducido, mientras que la segunda se realiza con el producto en fase beta, en esta última fase el estado de maduración es más avanzada y proceder a la fase beta, beneficiará al lanzamiento del producto definitivo, dado que ya se han dado a conocer las cualidades y, adicional a ello, también se han hecho intervenciones de acuerdo con los <i>feedback</i> de la fase alfa.
          .col-lg-4
            figure
              img(src="@/assets/curso/tema3-img6.svg")
        .row(titulo="5. Interpretar los <i>feedback</i>").align-items-center
          .col-lg-8
            p.mb-0
              strong 5. Interpretar los <i>feedback</i>
              br
              | Se busca analizar e interpretar los escenarios en los cuales los usuarios darán aplicación al producto,  se determinarán necesidades que previamente no se habían analizado, o complementos a las funcionalidades actuales, de tal manera que se cumpla con las necesidades y expectativas del público objetivo.
          .col-lg-4
            figure
              img(src="@/assets/curso/tema3-img7.svg")
        .row(titulo="6. Modificar el servicio o producto").align-items-center
          .col-lg-8
            p.mb-0
              strong 6. Modificar el servicio o producto
              br
              | En este paso se deberán aplicar los cambios que se consideren necesarios, si estos son muchos se podrá aplicar de nuevo la misma metodología y, por último, se comercializará el producto final.
          .col-lg-4
            figure
              img(src="@/assets/curso/tema3-img8.svg")

    Separador

    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2  Aplicación de Scrum y Kanban

    p.mb-5 Scrum es un marco de trabajo que cuenta con varios eventos (<i>Sprint, Sprint Planning, Daily Scrum, Sprint Review y Sprint Retrospective</i>), roles (<i>Scrum Master, Product Owner and Development Team</i>) y artefactos (<i>Product Backlog, Sprint Backlog</i>); y establece los lineamientos para conformar equipos de trabajo de alto rendimiento, auto organizados, impulsados por el trabajo en equipo, la transparencia en la comunicación y sinergia entre la interdisciplinariedad de los equipos de trabajo en el proyecto.

    .row.justify-content-center.align-items-center.no-gutters.mb-5
      .col-lg-10
        .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.radius-50
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3-img9.svg')})`}"
          )
          .bloque-texto-g__texto.p-5
            p.mb-0 Este enfoque proporciona una serie de reglas y tareas que se deben ejecutar en cada una de las iteraciones de un proyecto de <i>software</i> con la finalidad de asegurar su adecuada implementación. Esto genera como resultado un enfoque muy sencillo, que sus pasos son claros y no dan pie a malas interpretaciones, esto es ideal dado que da menos espacios a suponer cosas y la curva de aprendizaje es mayor al ser aplicada.

    .row.justify-content-center.align-items-center
      .col-lg-7.mb-5.mb-lg-0
        p.mb-0 Por otro lado, Kanban cumple un rol de marco de trabajo ágil como herramienta ya que su misión es aplicar y cumplir una serie de reglas definidas, tales como visualizar el flujo de trabajo, limitar el WIP, definir acciones y políticas explícitas, medir el flujo de trabajo. Al tener reglas tan claras como las de una herramienta, suele ser bastante intuitiva y fácil de implementar, solo es requerido entender su funcionamiento y que cada miembro del equipo lo aplique correctamente para que se ponga en marcha.
          br
          | Es importante que gracias a sus características de herramienta se puede integrar fácilmente a otros enfoques como por ejemplo Scrum. Uno de los principales problemas que nos puede generar Kanban está relacionado con el WIP, dado que puede llegar a generar cuellos de botella.

      .col-lg-5
        figure
          img(src="@/assets/curso/tema3-img10.svg")

    Separador

    #t_3_3.titulo-segundo.color-acento-contenido
      h2 3.3  <i>DevOps</i>

    p.mb-5 <i>DevOps</i>, hace referencia a la combinación de los términos en inglés de desarrollo y operaciones (<i>Development and Operations</i> - <i>DevOps</i>), lo que indica la sinergia de tecnología, procesos y personas para ofrecer entregas de valor constantes a los clientes. Este permite que haya una interacción entre los roles, teniendo en cuenta el desarrollo, operaciones, calidad y seguridad, permitiendo que se coordinen y colaboren para el desarrollo de los productos, aumentando la calidad y la fiabilidad. Al adoptar una cultura <i>DevOps</i> los equipos podrán responder de mejor manera a las necesidades del cliente, alcanzando los objetivos de negocio en menor tiempo.
      br
      | Algunos objetivos que se buscan cumplir con la implementación de la cultura y herramientas <i>DevOps</i> son los siguientes:

    .row.justify-content-center.mb-5
      .col-lg-9
        figure
          img(src="@/assets/curso/tema3-img11.svg")

    p.mb-5 <i>DevOps</i> puede estar presente en las fases de planeación, desarrollo, implementación, despliegue y aplicación, estas fases no son específicas de un rol, y en la cultura <i>DevOps</i> se busca que todos los roles estén implicados de una u otra forma en todas las fases, como se describen en el siguiente recurso de aprendizaje:

    TabsA.color-acento-botones.mb-5
      .tarjeta.tarjeta--color-secundario.p-4(titulo="Planeación")
        h4 Planeación
        .row.justify-content-center
          .col-lg-8
            p.mb-0 En esta fase los equipos conciben, definen, describen y caracterizan las funcionalidades de las necesidades de negocio para la construcción del producto <i>software</i>. Se realiza un seguimiento de los avances, registros de trabajos pendientes, seguimiento de errores y el proceso de desarrollo ágil con un marco como Scrum, y el uso de tableros Kanban.
          .col-lg-4
            figure
              img(src="@/assets/curso/tema3-img12.svg")
      .tarjeta.tarjeta--color-secundario.p-4(titulo="Desarrollo")
        h4 Desarrollo
        .row.justify-content-center
          .col-lg-8
            p.mb-0 En esta fase se definen todos los pasos de la programación, tales como escritura, pruebas, revisiones, integración y compilación del código en artefactos. Los equipos buscan innovar con rapidez sin dejar de lado la calidad, estabilidad y productividad. Aquí se utilizan herramientas productivas de automatización, se realizan iteraciones de entregas pequeñas de valor y se realiza la integración continua.
          .col-lg-4
            figure
              img(src="@/assets/curso/tema3-img13.svg")
      .tarjeta.tarjeta--color-secundario.p-4(titulo="Despliegue")
        h4 Despliegue
        .row.justify-content-center
          .col-lg-8
            p.mb-0 Es en esta fase donde se realizan las entregas en entornos productivos de manera constante y confiable, se incluye la configuración de infraestructura de los entornos a desplegar. Aquí los equipos definen el proceso de administración de versiones, promoción de las versiones entre ambientes hasta llegar al cliente final.
          .col-lg-4
            figure
              img(src="@/assets/curso/tema3-img14.svg")
      .tarjeta.tarjeta--color-secundario.p-4(titulo="Aplicación")
        h4 Aplicación
        .row.justify-content-center
          .col-lg-8
            p.mb-0 En esta fase se realiza la supervisión y el mantenimiento del producto <i>software</i>, donde se solución posibles problemas de operación en los entornos productivos, con <i>DevOps</i> los equipos se aseguran de la confianza, alta disponibilidad y que no haya inactividad en ningún momento del sistema, así se garantizan la seguridad y la gobernanza.
          .col-lg-4
            figure
              img(src="@/assets/curso/tema3-img15.svg")

    Separador

    #t_3_4.titulo-segundo.color-acento-contenido
      h2 3.4  Git, Gitflow y Githubflow

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.mb-5.mb-lg-0
        p.p-4.mb-0.box-with-degrade.color-acento-contenido Git es una herramienta de control de versiones diseñada por Linus Torvalds, es un <i>software</i> libre, la cual está pensada para mejorar la eficiencia, confiabilidad y compatibilidad entre las diferentes versiones de código fuente. Uno de los propósitos es llevar el registro de los cambios realizados, basada en <i>branches</i> (ramas).
          br
          | La estrategia de <i>branching</i> – GitFlow es separar el trabajo en diferentes ramas (<i>branches</i>), lo que permite adaptarse rápidamente al proceso de trabajo colaborativo que se requiere en un equipo de desarrollo, se basa en dos ramas principales que tienen vida infinita y paralela, denominada así:
      .col-lg-5
        figure
          img(src="@/assets/curso/tema3-img16.svg")

    .row.justify-content-center.mb-5
      .col-lg-4.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema3-img17.svg' alt='AvatarTop')
          .tarjeta.color-acento-contenido-2
            .p-4.mt-3
              p.mb-0
                strong <i>Master</i>:
                |  contiene el código de producción.
      .col-lg-4
        .tarjeta-avatar
          img(src='@/assets/curso/tema3-img18.svg' alt='AvatarTop')
          .tarjeta.color-acento-contenido-2
            .p-4.mt-3
              p.mb-0
                strong <i>Develop</i>:
                |  contiene el código que ha finalizado desarrollo.

    p.mb-5 Durante el proceso de desarrollo se crean otras ramas que son de soporte que tienen vida finita, y caducan cuando se realiza el proceso de extracción hacia la rama de desarrollo o master según sea el flujo:

    .row.justify-content-center.mb-5
      .col-lg-10
        .row.justify-content-center.align-items-center.caja-aux.color-acento-contenido.border.radius-50
          .col-lg-9.pt-lg-0.pt-5
            ul.lista-ul--color.mb-0
              li.mb-0
                i.fas.fa-code
                p.mb-0
                  strong <i>Feature</i>:
                  |  se crea a partir de develop cuando es requerido el desarrollo de una nueva funcionalidad. Al finalizar el desarrollo se hace la fusión (<i>merge</i>) o extracción a la rama <i>develop</i>.
              li.mb-0
                i.fas.fa-code
                p.mb-0
                  strong <i>Release</i>:
                  |  se crea a partir de develop para preparar una nueva versión del código que debe ser liberada en producción. Al finalizar el desarrollo se hace <i>merge</i> a <i>develop</i> y a <i>master</i>.
              li.mb-0
                i.fas.fa-code
                p.mb-0
                  strong <i>Hotfix</i>:
                  |  se crea a partir de master cuando es necesario corregir un error detectado en producción de manera urgente, por decirlo así es una solución en caliente. Al finalizar el desarrollo se hace fusión a <i>develop</i> y a <i>master</i>.
          .col-lg-3
            figure
              img(src="@/assets/curso/tema3-img19.svg")

    p.mb-5 La estrategia de <i>branching</i> - GitHub Flow es creada por GitHub y es conocida en la comunidad de desarrolladores como una alternativa simple y ligera a GitFlow. GitHub Flow se basa en un flujo de trabajo en ramas que se enfocan principalmente en la entrega continua. En Git Flow, no existen las ramas de releases, ya que en esta estrategia se tiene pensado que cada implementación ocurra con frecuencia de ser posible hasta varias veces al día.
      br
      br
      | En esta estrategia de ramas, en el repositorio tenemos dos tipos de <i>branches</i>:

    .row.justify-content-center.mb-5
      .col-lg-4.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema3-img20.svg' alt='AvatarTop')
          .tarjeta.color-acento-contenido-2
            .p-4.mt-4
              p.mb-0
                strong <i>Main (o master)</i>:
                |  el <i>branch</i> de código principal, es el que contiene el código que está listo para producción.
      .col-lg-4
        .tarjeta-avatar
          img(src='@/assets/curso/tema3-img21.svg' alt='AvatarTop')
          .tarjeta.color-acento-contenido-4
            .p-4.mt-4
              p.mb-0
                strong Features:
                |  las ramas de funcionalidades que permiten el desarrollo en paralelo.

    p.mb-5 Cuando se utiliza GitHub Flow, existen seis pasos, los cuales se deben seguir para asegurar la calidad en el código y que este está listo para ser liberado a producción en todo momento:

    .row.justify-content-center
      .col-lg-10
        ImagenInfografica.xl.extra-text.color-acento-contenido.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema3-img22.svg', alt='Texto que describa la imagen')

          .tarjeta.color-acento-contenido.p-4(x="17.8%" y="76.4%" )
            p.mb-0
              strong 1.
              |    El código que está en main debe poder implementarse en producción en cualquier momento.
          .tarjeta.color-acento-contenido.p-4(x="21.8%" y="53.8%" )
            p.mb-0
              strong 2.
              |    Cuando se crean nuevos <i>feature branches</i>, se deben crear con nombres descriptivos. Por ejemplo, <strong><i>feature/add-new-account-type</i></strong>.
          .tarjeta.color-acento-contenido.p-4(x="46.6%" y="61%" )
            p.mb-0
              strong 3.
              |    Primero hacer <i>commit</i> en local, para luego hacer <i>push</i> al repositorio remoto.
          .tarjeta.color-acento-contenido.p-4(x="54.2%" y="36%" )
            p.mb-0
              strong 4.
              |    Abrir <strong><i>pull requests</i></strong> para solicitar <i>feedback</i> o ayuda, antes de hacer <i>merge</i> en el <i>branch</i> principal.
          .tarjeta.color-acento-contenido.p-4(x="79.2%" y="34%" )
            p.mb-0
              strong 5.
              |    Hacer <i>merge</i> del código en el <i>branch main</i>, solo después de haber recibido aprobación del <i>pull request</i>.
          .tarjeta.color-acento-contenido.p-4(x="86.2%" y="14%" )
            p.mb-0
              strong 6.
              |    Una vez hecho el <i>merge</i> del código en <i>main</i>, debe implementarse de inmediato, mejor si es en un entorno de producción.

    Separador

    #t_3_5.titulo-segundo.color-acento-contenido
      h2 3.5  Gestión de pruebas

    p.mb-5 En el siguiente recurso de aprendizaje se explica en qué consiste la gestión de pruebas:

    figure.mb-0
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/qPZFXPoFLoY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    Separador

    #t_3_6.titulo-segundo.color-acento-contenido
      h2 3.6  Gestión de incidencias

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-5.mb-lg-0
        figure
          img(src='@/assets/curso/tema3-img23.svg', alt='Texto que describa la imagen')
      .col-lg-7
        p.mb-0 Para hablar sobre la gestión de incidencias es necesario tener en cuenta estos conceptos:
          br
          | Primero identificar que se considera una incidencia, la cual es referida como “una interrupción no planificada de un servicio, o reducción en la calidad de un servicio”. El objetivo de tener un proceso de gestión de incidencias es minimizar el impacto negativo que estas conllevan, y llevar el sistema a su funcionamiento normal, brindando el servicio rápidamente y lo antes posible.
          br
          br
          | Los objetivos de la gestión de incidencias, se encuentran dentro de la cadena de valor de servicio y tiene como objetivo prevenir y restaurar en el menor tiempo posible cualquier interrupción o retraso en el servicio que afecte al cliente, de tal manera que se minimicen los impactos desde las operaciones comerciales.
          br
          | La velocidad de recuperación es la base fundamental de este proceso, por lo cual a menudo las incidencias pueden ser abordadas con soluciones temporales, que posteriormente son refactorización para que sean permanentes.

    .row.justify-content-center.align-items-center.no-gutters.mb-0
      .col-lg-10
        .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.radius-50
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3-img24.svg')})`}"
          )
          .bloque-texto-g__texto.p-5
            p.mb-0 Una de las herramientas que pueden ayudar a gestionar considerablemente este tipo de problemas es la Mesa de Servicio o <i>Service Desk</i>, que ha pasado de ser parte de los procesos estratégicos dentro de las organizaciones, al ser el único punto de contacto con los usuarios. Sin este contacto es posible que se pasen por alto limitaciones en la estructura o en la priorización de incidencias.

    Separador

    #t_3_7.titulo-segundo.color-acento-contenido
      h2 3.7  Incidencias funcionales

    figure.mb-0
      img(src='@/assets/curso/tema3-img25.svg', alt='Texto que describa la imagen')

    Separador

    #t_3_8.titulo-segundo.color-acento-contenido
      h2 3.8  Incidencias no funcionales

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p.mb-0 Son aquellos problemas o errores que no se desprende explícitamente de las funciones del <i>software</i>, corresponden a los problemas o errores que encontramos en el contexto en el cual el producto <i>software</i> se encuentra desplegado. Problemas de carga, problemas de velocidad, problemas de conexión entre componentes, certificados de seguridad caducados, enrutamientos.
          br
          | Para determinar si hay algún tipo de incidencia no funcional, recordemos que las siguientes son tipos de pruebas que nos ayudan a determinar o encontrar esos estados fallidos:
      .col-lg-5
        figure
          img(src="@/assets/curso/tema3-img26.svg")

    .row.justify-content-center.mb-5
      .col-lg-3.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema3-img27.svg' alt='AvatarTop')
          .tarjeta.color-acento-contenido-3
            .p-4
              p.mb-0
                strong Pruebas de carga:
                |   permiten validar y determinar la respuesta del producto <i>software</i> cuando este está sometido a una carga de concurrencia a miles de usuarios o peticiones.
      .col-lg-3.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema3-img28.svg' alt='AvatarTop')
          .tarjeta.color-acento-contenido-4
            .p-4
              p.mb-0
                strong Pruebas de rendimiento:
                |  en este tipo de pruebas se busca realizar un cálculo de la respuesta de la aplicación con distintas peticiones, por ejemplo, procesar el ingreso de 10, 100 o 100 usuarios de forma concurrente, y determinar cuál es la curva de rendimiento y con qué valores el servidor se comienza a saturar.

      .col-lg-3
        .tarjeta-avatar
          img(src='@/assets/curso/tema3-img29.svg' alt='AvatarTop')
          .tarjeta.color-acento-contenido-3
            .p-4
              p.mb-0
                strong Pruebas de estrés:
                |  este tipo de pruebas busca determinar cuáles son los valores máximos que puede resistir el sistema antes de que se caiga, por ejemplo, determinar cuál es la cantidad de usuario que soporta de manera concurrente hasta que llegue un <i>timeout</i>.


    p.mb-0 Este tipo de incidencias son trabajadas por el equipo de infraestructura, el cual, con diferentes herramientas de monitoreo, puede lanzar alertas o mejorar las capacidades de los servidores para tener más recursos y solucionar las fallas no funcionales. Actualmente con las herramientas alojadas en la nube (<i>cloud</i>) es más sencillo conocer los estados de las instancias y mejorar la infraestructura.

    Separador

</template>

<script>
export default {
  name: 'Tema3',
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
