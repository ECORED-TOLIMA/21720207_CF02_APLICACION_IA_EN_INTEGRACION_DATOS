export default {
  global: {
    Name:
      'Estrategias de integración y análisis de datos mediante inteligencia artificial',
    Description:
      'Este componente explora la aplicación de la inteligencia artificial en la gestión de datos, abordando herramientas generativas, técnicas de interacción con modelos, preparación e integración de datos, análisis estadístico y fundamentos del aprendizaje automático. Proporciona un enfoque práctico y ético para el uso estratégico de la IA en la toma de decisiones basadas en datos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Inteligencia artificial aplicada a los datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Principios fundamentales de la inteligencia artificial',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Aplicaciones en la vida cotidiana y la industria',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Papel de la IA en el procesamiento de datos',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Herramientas de inteligencia artificial generativas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto y características',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Diferencias con la IA descriptiva',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Casos de uso en entornos reales',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Interacción con modelos generativos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Concepto de <em>prompt</em> y principios de <em>prompting</em>',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Técnicas de mejora de la interacción',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Ejemplos de <em>prompts</em> efectivos y no efectivos',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Casos de uso prácticos',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo:
              'Consideraciones éticas y sesgos en el modelamiento de datos',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Preparación e integración de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto de preparación de datos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Técnicas de limpieza de datos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Modelamiento de datos para las reglas de negocio',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Metodologías de diseño e integración de datos',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Principios de integralidad',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Aplicación estratégica de la estadística descriptiva en IA',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Interpretación de niveles de medición en contextos reales',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo:
              'Análisis de variables categóricas y numéricas en la toma de decisiones',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo:
              'Visualización estratégica mediante histogramas y tablas cruzadas',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo:
              'Uso de medidas estadísticas para el control de calidad de los datos',
            hash: 't_5_4',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Aprendizaje automático (<em>Machine learning</em>)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Concepto, características y tipos',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Principales algoritmos',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo:
              'Herramientas de analítica de datos: características y funcionalidades',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Algoritmos de agrupamiento y técnicas de gestión de datos',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo:
              'Evaluación de modelos de <em>Machine learning</em>: métricas y validación',
            hash: 't_6_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_02_21720207_DU.pdf',
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
  complementario: [
    {
      tema: '4.2. Técnicas de limpieza de datos',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022). Python - Lenguaje de programación [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=7qLlvequpLU',
    },
    {
      tema: '6.2. Principales algoritmos',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022). Algoritmos, estructuras y operaciones [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=aICQGTU4Dm8',
    },
    {
      tema: '6.2. Principales algoritmos',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022). Algoritmos usados en aprendizaje supervisado y no supervisado [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=iZ6soC3Nx9M',
    },
  ],
  glosario: [
    {
      termino: 'Agrupamiento',
      significado:
        'técnica del aprendizaje automático no supervisado que consiste en clasificar datos en grupos o clústeres según similitudes, sin etiquetas previas.',
    },
    {
      termino: 'Aprendizaje supervisado',
      significado:
        'tipo de aprendizaje automático donde el modelo se entrena con datos etiquetados para predecir resultados con base en ejemplos conocidos.',
    },
    {
      termino: 'Asimetría',
      significado:
        'medida estadística que indica si los datos están distribuidos de forma simétrica o si tienden hacia un lado de la media.',
    },
    {
      termino: 'Integración de datos',
      significado:
        'proceso de combinar datos de diferentes fuentes para proporcionar una visión coherente y unificada que facilite su análisis.',
    },
    {
      termino: 'Integración de datos',
      significado:
        'proceso de combinar datos de diferentes fuentes para proporcionar una visión coherente y unificada que facilite su análisis.',
    },
    {
      termino: 'Medidas de tendencia central',
      significado:
        'estadísticas que representan el valor típico o central de un conjunto de datos, como la media, la mediana y la moda.',
    },
    {
      termino: 'Métrica de evaluación',
      significado:
        'indicador cuantitativo utilizado para medir el rendimiento de un modelo de <em>Machine learning</em>, como precisión, <em>recall</em> o F1-score.',
    },
    {
      termino: 'Normalización de datos',
      significado:
        'técnica de preprocesamiento que ajusta los valores de las variables a un mismo rango para mejorar el desempeño de los algoritmos.',
    },
    {
      termino: 'Reglas de negocio',
      significado:
        'conjunto de lineamientos o condiciones que determinan cómo se deben gestionar y procesar los datos dentro de un sistema o empresa.',
    },
    {
      termino: 'Técnica de <em>prompting</em>',
      significado:
        'estrategia para diseñar instrucciones claras y específicas que mejoran la interacción con modelos generativos de IA.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cervero, R. (1998). The transit metropolis: A global inquiry. Island Press.',
      link: '',
    },
    {
      referencia:
        'Chollet, F. (2021). Deep learning with Python (2nd ed.). Manning Publications.',
      link: '',
    },
    {
      referencia:
        'Dignum, V. (2019). Responsible artificial intelligence: How to develop and use AI in a responsible way. Springer.',
      link: '',
    },
    {
      referencia:
        'Eubanks, V. (2018). Automating inequality: How high-tech tools profile, police, and punish the poor. St. Martin’s Press.',
      link: '',
    },
    {
      referencia:
        'European Commission. (2020). White paper on artificial intelligence: A European approach to excellence and trust.',
      link:
        'https://ec.europa.eu/info/publications/white-paper-artificial-intelligence-european-approach-excellence-and-trust_en',
    },
    {
      referencia:
        'Goodfellow, I., Bengio, Y., & Courville, A. (2016). Deep learning. MIT Press.',
      link: '',
    },
    {
      referencia:
        'Kelleher, J. D., & Tierney, B. (2018). Data science. MIT Press.',
      link: '',
    },
    {
      referencia:
        'Ley 1581 de 2012. Por la cual se dictan disposiciones generales para la protección de datos personales. Diario Oficial No. 48.587.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=49981',
    },
    {
      referencia:
        'Marr, B. (2016). Big data in practice: How 45 successful companies used big data analytics to deliver extraordinary results. Wiley.',
      link: '',
    },
    {
      referencia:
        'McCarthy, J. (2007). What is artificial intelligence?. Stanford University.',
      link: '',
    },
    {
      referencia:
        'Mitchell, T. M. (1997). <em>Machine learning</em>. McGraw-Hill.',
      link: '',
    },
    {
      referencia:
        'National Academies of Sciences, Engineering, and Medicine. (2017). Information technology and the U.S. workforce: Where are we and where do we go from here?. The National Academies Press.',
      link: '',
    },
    {
      referencia: 'OpenAI. (2023). ChatGPT and GPT-4 technical report.',
      link: 'https://openai.com/research/gpt-4',
    },
    {
      referencia:
        'Provost, F., & Fawcett, T. (2013). Data science for business: What you need to know about data mining and data-analytic thinking. O´ Reilly Media.',
      link: '',
    },
    {
      referencia:
        'Russell, S., & Norvig, P. (2021). Artificial intelligence: A modern approach (4th ed.). Pearson.',
      link: '',
    },
    {
      referencia:
        'Shalev-Shwartz, S., & Ben-David, S. (2014). Understanding <em>Machine learning</em>: From theory to algorithms. Cambridge University Press.',
      link: '',
    },
    {
      referencia:
        'Zhang, Y., & Zhao, Y. (2019). Urban computing: Concepts, methodologies, and applications. Journal of Urban Technology, 26(2), 3–27.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Javier Eduardo Díaz Machuca',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluadora instruccional ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador <em>web</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jose Yobani Penagos Mora',
          cargo: 'Diseñador <em>web</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
