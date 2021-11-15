export default {
  global: {
    componenteFormativo: 'Implementar prueba de <i>software</i>',
    descripcionCurso:
      'En este módulo el aprendiz ejecutará y aplicará los artefactos de las pruebas de software sobre el producto, con lo cual tendrá la oportunidad de identificar activamente los diferentes tipos de prueba en acción, generando un informe sobre las pruebas exitosas y los errores o problemas encontrados. ',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Pruebas de <i>software</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Causas que deterioran la calidad en el <i>software</i>',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Modelo de desarrollo CMMI',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Criterios del manejo de la confidencialidad',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Herramientas tecnológicas para pruebas',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Modelo de procesos de pruebas',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Documentación de pruebas',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: '<i>Continuous Integration y Continuous Delivery</i>',
            hash: 't_1_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.8',
            titulo: 'Depuración y técnicas de resolución de problemas',
            hash: 't_1_8',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Construcción, desarrollo y ejecución de pruebas de <i>software</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Aseguramiento de calidad de <i>software</i>',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Implementación del plan de pruebas',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Configuración del ambiente de pruebas',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Ejecución de las pruebas',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo:
              'Creación de plan de pruebas e integración y entrega continua en una metodología ágil',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Gestión del desarrollo y ejecución de pruebas ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Mínimo producto viable',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Aplicación de <i>Scrum</i> y <i>Kanban</i>',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: '<i>DevOps</i>',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: '<i>Git, Gitflow y Githubflow</i>',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Gestión de pruebas',
            hash: 't_3_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.6',
            titulo: 'Gestión de incidencias',
            hash: 't_3_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.7',
            titulo: 'Incidencias funcionales',
            hash: 't_3_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.8',
            titulo: 'Incidencias no funcionales',
            hash: 't_3_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Globetesting. (s. f.). Automatización de pruebas. Globetesting.',
      link: 'https://www.globetesting.com/automatizacion-pruebas/',
    },
    {
      referencia:
        'Grhsoftware. (2020). ¿Qué es el modelo V en las pruebas de software? Grhsoftware.com.',
      link:
        'https://grhsoftware.com/que-es-el-modelo-v-en-las-pruebas-de-software/',
    },
    {
      referencia:
        'Rodríguez, C. (2020). Automatizar pruebas de software: ¿cuándo y por qué? cl.abstracta.us.',
      link: 'https://cl.abstracta.us/blog/automatizar-pruebas-de-software/',
    },
  ],
  glosario: [
    {
      termino: 'Entrega continua',
      significado:
        'proceso en el cual se utilizan herramientas tecnológicas casi sin la necesidad de la intervención de personas.',
    },
    {
      termino: '<i>DevOps</i>',
      significado: 'desarrollo y operaciones.',
    },
    {
      termino: 'Integración continua',
      significado:
        'práctica de desarrollo de <i>software</i> mediante la que los desarrolladores combinan los cambios en el código en un repositorio central de forma periódica, tras lo cual se ejecutan versiones y pruebas automáticas.',
    },
    {
      termino: '<i>Kanban</i>',
      significado:
        'marco de trabajo ágil que opera como herramienta y permite visibilizar los estados de una tarea.',
    },
    {
      termino: 'MVP',
      significado: 'Mínimo Producto Viable.',
    },
    {
      termino: 'QA',
      significado: 'calidad de <i>software</i>.',
    },
    {
      termino: '<i>Scrum</i>',
      significado:
        'marco de trabajo ágil que estipula una serie de tareas y eventos para realizar iteración que den valor a la entrega continua de un producto.',
    },
    {
      termino: 'SQA',
      significado: 'Aseguramiento de la Calidad de <i>software</i>.',
    },
  ],
  complementario: [
    {
      texto:
        'Escobar, S., M. E., y Fuertes, D., W. M. (2015). Modelo formal de pruebas funcionales de software para alcanzar el Nivel de Madurez Integrado 2. Revista Facultad de Ingeniería UPTC, 24(39).',
      tipo: 'Artículo',
      link:
        'https://revistas.uptc.edu.co/index.php/ingenieria/article/view/3549',
    },
    {
      texto:
        'Múnera, Á., , J. y Uribe, A., C. (2020). Desarrollo de aplicaciones web y pruebas de software. Repositorio digital tdea.',
      tipo: 'Artículo',
      link: 'https://dspace.tdea.edu.co/handle/tdea/1081',
    },
    {
      texto:
        'Pressman, R. S. (1993). Ingeniería del Software: un enfoque práctico. Mc Graw-Hill. ',
      tipo: 'Libro',
      link:
        'https://github.com/deberestes01/GeneralTES/blob/master/Ingenieria_del_Software._Un_Enfoque_Practico.pdf',
    },
    {
      texto:
        'Guijarro, O., J., Caparrós, R., J., y Cubero, L., L. (2020). DevOps y seguridad cloud. (Cap. II – Fundamentos avanzados de DevOps). eLibro. ',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/128889?page=27',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
