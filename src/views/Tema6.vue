<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 6
      h1 Aprendizaje automático (<em>Machine learning</em>)

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema6/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El aprendizaje automático, o <em>machine learning</em>, es una rama de la inteligencia artificial que permite a los sistemas aprender automáticamente a partir de datos, sin necesidad de ser programados explícitamente para cada tarea. Esta capacidad convierte al <em>machine learning</em> en una herramienta clave para analizar grandes volúmenes de información, identificar patrones y realizar predicciones precisas en tiempo real. Su aplicación es amplia: desde la personalización de contenidos en plataformas digitales hasta la detección de fraudes financieros, el diagnóstico médico o la automatización de procesos industriales.

    p.mb-0(data-aos="fade-down") El éxito del aprendizaje automático depende en gran medida de la calidad de los datos, la elección del algoritmo y la correcta evaluación del modelo, lo cual requiere una comprensión profunda de sus componentes fundamentales.

    separador
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.1 Concepto, características y tipos
    
    p.mb-4(data-aos="fade-down") El aprendizaje automático (<em>machine learning</em>) es una subdisciplina de la inteligencia artificial que se centra en el desarrollo de algoritmos y modelos capaces de identificar patrones en los datos y realizar predicciones o tomar decisiones sin intervención humana directa. A diferencia de los sistemas tradicionales programados con reglas fijas, los modelos de <em>machine learning</em> aprenden y mejoran su rendimiento con base en la experiencia, es decir, a medida que se les suministra más información.
    p.mb-4(data-aos="fade-down") Esta capacidad de aprendizaje convierte al <em>machine learning</em> en una herramienta esencial en un entorno digital donde se generan y almacenan cantidades masivas de datos (<em>big data</em>). Desde recomendaciones de productos en plataformas de comercio electrónico, hasta detección de fraudes financieros y diagnóstico médico asistido por IA, el aprendizaje automático se aplica a una amplia variedad de campos y problemas complejos.
    p.mb-5(data-aos="fade-down") Entre sus principales características, se destacan:

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      SlyderF(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema6/img02.svg' alt='AvatarTop')
          h4.text-center Adaptabilidad
          p Los modelos se ajustan a nuevos datos y pueden mejorar su precisión con el tiempo.

        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema6/img03.svg' alt='AvatarTop')
          h4.text-center Automatización
          p Permite tomar decisiones o realizar predicciones sin necesidad de codificar instrucciones específicas.

        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema6/img04.svg' alt='AvatarTop')
          h4.text-center Eficiencia
          p Es capaz de procesar grandes volúmenes de información en menor tiempo que los humanos.

        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema6/img05.svg' alt='AvatarTop')
          h4.text-center Generalización
          p Permite que el modelo funcione adecuadamente con datos nuevos, distintos a los utilizados en el entrenamiento.

        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema6/img06.svg' alt='AvatarTop')
          h4.text-center Escalabilidad
          p Los modelos pueden aplicarse a diferentes contextos y aumentarse en tamaño o complejidad según la necesidad.

    p.mb-5(data-aos="fade-down") En función del tipo de tarea que se desea resolver, el aprendizaje automático se clasifica en varios tipos fundamentales:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-12.mb-0
        .row.justify-content-center.align-items-center
          .col-12.mb-md-0.order-lg-2.order-2.mb-lg-0
            TabsA.color-acento-botones(data-aos="zoom-in")
              .tarjeta.tarjeta--C03.p-3(titulo="Aprendizaje supervisado")
                p El modelo se entrena con un conjunto de datos etiquetado, es decir, donde se conoce la respuesta correcta. El objetivo es que el modelo aprenda a predecir etiquetas para nuevos datos.
                p.mb-0 Ejemplos comunes incluyen: Regresión (predicción de valores numéricos) y la clasificación (asignación de categorías).
              .tarjeta.tarjeta--C03.p-3(titulo="Aprendizaje no supervisado")
                p.mb-0 El modelo trabaja con datos sin etiquetas, buscando descubrir estructuras o patrones ocultos. Una técnica común es el <em>clustering</em> o agrupamiento, que permite segmentar datos en grupos homogéneos.
              .tarjeta.tarjeta--C03.p-3(titulo="Aprendizaje semi-supervisado")
                p Combina una pequeña cantidad de datos etiquetados con una gran cantidad de datos no etiquetados.
                p.mb-0 Es útil cuando el etiquetado manual resulta costoso o difícil.
              .tarjeta.tarjeta--C03.p-3(titulo="Aprendizaje por refuerzo")
                p El algoritmo aprende mediante prueba y error, interactuando con un entorno. Recibe recompensas o penalizaciones según sus decisiones, con el fin de maximizar una función objetivo.
                p.mb-0 Este enfoque es clave en la robótica, videojuegos o navegación autónoma.

          .col-lg-3.col-sm-4.col-10.order-lg-1.order-1.mb-lg-0.mb-4.d-xl-none
            figure
              img(src='@/assets/curso/tema6/img07.png', alt='Imagen decorativa')
    .row.justify-content-center
      .col-lg-10.col-12
        p.mb-0(data-aos="fade-down") Cada uno de estos enfoques requiere un diseño cuidadoso, una comprensión profunda del problema que se quiere resolver y una adecuada preparación de los datos para asegurar que el aprendizaje del modelo sea efectivo y confiable.


    separador
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.2 Principales algoritmos

    p.mb-4(data-aos="fade-down") En el aprendizaje automático, los algoritmos son el corazón del proceso de modelamiento, ya que definen la manera en que los modelos aprenden a partir de los datos. La elección del algoritmo adecuado depende del tipo de problema que se desea resolver (clasificación, regresión, agrupamiento, etc.), la calidad y cantidad de los datos disponibles, así como los objetivos del análisis.
    p.mb-5(data-aos="fade-down") A continuación, se describen los principales algoritmos utilizados en <em>machine learning</em>, clasificados por tipo de aprendizaje:

    .row.align-items-center.mb-5(data-aos="flip-up")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/ico.svg', style="width: 70px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 a. - Algoritmos de aprendizaje supervisado

    .row.justify-content-center.align-items-center(data-aos="flip-up")
      .col-lg-10.col-12.mb-0
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-7.col-12.mb-5.mb-md-0.order-lg-1.order-2.mb-lg-0
            LineaTiempoD.color-acento-botones.especial
              .row(numero="1" titulo="Regresión lineal")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Se utiliza para predecir valores numéricos continuos a partir de una o más variables independientes. Es uno de los modelos más sencillos y útiles para establecer relaciones lineales entre variables.

              .row(numero="2" titulo="Regresión logística")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Ideal para problemas de clasificación binaria (sí/no, verdadero/falso), predice la probabilidad de que una observación pertenezca a una clase específica.

              .row(numero="3" titulo="Árboles de decisión")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Modelan decisiones mediante una estructura jerárquica en forma de árbol. Son fáciles de interpretar y útiles para tareas de clasificación y regresión.

              .row(numero="4" titulo="Bosques aleatorios (<em>random forest</em>)")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Conforman un conjunto de árboles de decisión que trabajan en conjunto (ensamble). Ofrecen alta precisión, robustez y resistencia al sobreajuste.

              .row(numero="5" titulo="Máquinas de soporte vectorial (<em>Support Vector Machines</em> - SVM)")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Son eficaces en espacios de alta dimensión y para problemas donde las clases no son fácilmente separables. Utilizan hiperplanos para dividir los datos.
              
              .row(numero="6" titulo="K-Vecinos más cercanos (<em>K-Nearest Neighbors</em> - KNN)")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Clasifica una nueva observación con base en la mayoría de las clases de sus vecinos más próximos. Es simple, pero sensible a la escala y a los valores atípicos.
          .col-lg-5.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema6/img08.png', alt='Imagen decorativa')

    .row.align-items-center.mb-5(data-aos="flip-up")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/ico.svg', style="width: 70px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 b. - Algoritmos de aprendizaje no supervisado

    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col
        .tarjeta--container.row.mb-5
          .col-xl.col-md-4.tarjeta.tarjeta--C02.p-5
            .row.justify-content-center.mb-3
              .col-lg-5.col-6
                figure
                  img(src='@/assets/curso/tema6/img09.svg', alt='Imagen decorativa')
              
            h4.text-center K-means
            p.mb-0 Algoritmo de <em>clustering</em> que agrupa datos en k clústeres (grupos) con base en su similitud. Es ampliamente utilizado por su simplicidad y rapidez.

          .col-xl.col-md-4.tarjeta.tarjeta--C03.p-5
            .row.justify-content-center.mb-3
              .col-lg-5.col-6
                figure
                  img(src='@/assets/curso/tema6/img10.svg', alt='Imagen decorativa')
              
            h4.text-center Algoritmo de agrupamiento jerárquico
            p.mb-0 Construye una jerarquía de clústeres utilizando un enfoque ascendente o descendente. Permite visualizar la relación entre grupos mediante dendrogramas.


          .col-xl.col-md-4.tarjeta.tarjeta--C05.p-5
            .row.justify-content-center.mb-3
              .col-lg-5.col-6
                figure
                  img(src='@/assets/curso/tema6/img11.svg', alt='Imagen decorativa')
              
            h4.text-center Análisis de componentes principales (Principal Component Analysis - PCA)
            p.mb-0 Se usa para reducir la dimensionalidad de los datos conservando la mayor cantidad posible de información. Ayuda a simplificar modelos y visualizar datos complejos.

    .row.align-items-center.mb-5(data-aos="flip-up")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/ico.svg', style="width: 70px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 c. - Algoritmos de aprendizaje por refuerzo

    .row.justify-content-center.align-items-center.mb-5
      .col-12.order-lg-2.order-2.mb-lg-0
        .row.justify-content-center.mb-0(data-aos="flip-up")
          .col-lg-6.col-12.mb-3
            .tarjeta-avatar-b.h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema6/img12.svg' alt='AvatarTop')
              .tarjeta.tarjeta--C04.py-4(style= "width: 100%")
                .px-4
                  h4 Q-learning
                  p Algoritmo basado en recompensas que permite a un agente aprender políticas óptimas para maximizar su beneficio en un entorno determinado.

          .col-lg-6.col-12.mb-3
            .tarjeta-avatar-b.h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema6/img13.svg' alt='AvatarTop')
              .tarjeta.tarjeta--C04.py-4(style= "width: 100%")
                .px-4
                  h4 Deep Q-Networks (DQN)
                  p Combinan redes neuronales profundas con Q-learning para resolver problemas más complejos, como juegos y navegación autónoma.

    .row.align-items-center.mb-5(data-aos="flip-up")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/ico.svg', style="width: 70px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 d. - Redes neuronales artificiales y aprendizaje profundo

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col
        .row.justify-content-center
          .col-lg-8.col-12.order-lg-2.order-2
            .tarjeta.tarjeta--C04.p-4.mb-3
              ol.lista-ol--cuadro
                li.mb-4 
                  .lista-ol--cuadro__vineta.v--green
                    span 1.
                  p.mb-0 Perceptrón multicapa (MLP): base de las redes neuronales profundas, puede modelar relaciones no lineales y resolver problemas complejos de predicción.
                li.mb-4 
                  .lista-ol--cuadro__vineta.v--green
                    span 2.
                  p.mb-0 Redes neuronales convolucionales (CNN): diseñadas para el análisis de imágenes, estas redes detectan patrones espaciales como bordes, formas o texturas.
                li.mb-4 
                  .lista-ol--cuadro__vineta.v--green
                    span 3.
                  p.mb-0 Redes neuronales recurrentes (RNN): eficaces para procesar secuencias de datos como texto o series temporales, ya que retienen información previa a lo largo del tiempo.
          .col-lg-4.col-md-7.col-12.mb-3.order-lg-1.order-1.mb-lg-0
            .row.justify-content-center(data-aos="flip-up")
              .col
                figure
                  img(src='@/assets/curso/tema6/img14.png', alt='Imagen decorativa')

    .row.justify-content-center
      .col-lg-11.col-12
        p.mb-0(data-aos="fade-down") Estos algoritmos constituyen la base para muchas soluciones modernas de inteligencia artificial. La comprensión de sus fortalezas, limitaciones y contextos de uso es esencial para implementar soluciones efectivas y éticamente responsables en diferentes sectores productivos.

    separador
    #t_6_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.3 Herramientas de analítica de datos: características y funcionalidades

    p.mb-4(data-aos="fade-down") Las herramientas de analítica de datos permiten extraer valor de grandes volúmenes de información mediante el procesamiento, análisis, interpretación y visualización de datos. Estas herramientas son esenciales en entornos de inteligencia artificial, ya que facilitan la exploración de patrones, la toma de decisiones informadas y la implementación de modelos predictivos.
    p.mb-5(data-aos="fade-down") Existen diferentes tipos de herramientas, cada una con funcionalidades específicas según las necesidades del usuario. A continuación, se describen sus principales características:

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      SlyderF(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema6/img15.svg' alt='AvatarTop')
          h4.text-center Escalabilidad
          p Permiten trabajar con grandes volúmenes de datos (<em>big data</em>) y escalar fácilmente a medida que crecen las fuentes de información.

        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema6/img16.svg' alt='AvatarTop')
          h4.text-center Interfaz gráfica e interacción visual
          p Muchas de estas herramientas ofrecen <em>dashboards</em> interactivos que permiten visualizar resultados de forma dinámica y comprensible.

        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema6/img17.svg' alt='AvatarTop')
          h4.text-center Compatibilidad con múltiples fuentes de datos
          p Integran diferentes orígenes como bases de datos SQL/NoSQL, archivos planos, servicios en la nube y APIs.

        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema6/img18.svg' alt='AvatarTop')
          h4.text-center Automatización de procesos
          p Automatizan tareas como limpieza de datos, generación de reportes, alertas y ejecución de modelos de análisis predictivo.

        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema6/img19.svg' alt='AvatarTop')
          h4.text-center Integración con lenguajes de programación
          p Algunas plataformas permiten incorporar scripts en Python o R para personalizar el análisis de datos.

    .row.justify-content-center
      .col-lg-10.col-12
        p.mb-5(data-aos="fade-down") Antes de seleccionar una herramienta de analítica de datos, es fundamental comprender qué funcionalidades ofrece y cómo se alinean con los objetivos del análisis. A continuación, se presentan algunas de las funcionalidades clave que hacen de estas herramientas un recurso indispensable en entornos basados en datos:

    .row.justify-content-center.align-items-center(data-aos="flip-up")
      .col-lg-10.col-12.mb-0
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-7.col-12.mb-5.mb-md-0.order-lg-2.order-2.mb-lg-0
            LineaTiempoD.color-acento-botones.especial
              .row(numero="1" titulo="Carga, transformación y limpieza de datos (ETL)")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Facilitan la recolección, estructuración y depuración de datos para su análisis posterior.

              .row(numero="2" titulo="Análisis descriptivo y diagnóstico")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Ofrecen herramientas estadísticas básicas y avanzadas para describir, comparar y detectar relaciones en los datos.

              .row(numero="3" titulo="Análisis predictivo y prescriptivo")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Incorporan algoritmos de <em>machine learning</em> y modelos estadísticos para anticipar comportamientos y sugerir acciones óptimas.

              .row(numero="4" titulo="Visualización de datos")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Permiten crear gráficos, mapas, tableros interactivos y reportes que facilitan la interpretación de los resultados.

              .row(numero="5" titulo="Colaboración y trazabilidad")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Muchas herramientas incluyen funcionalidades para trabajar en equipo, registrar cambios y compartir resultados de manera segura.
          .col-lg-5.col-sm-4.col-5.order-lg-1.order-1.mb-lg-0.mb-4.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema6/img20.png', alt='Imagen decorativa')

    p.mb-5(data-aos="fade-down") En el entorno profesional, existen múltiples herramientas de analítica de datos que se han consolidado por su eficacia, versatilidad y capacidad de integración con otros sistemas. Estas soluciones permiten desde tareas básicas de exploración hasta análisis avanzados con algoritmos de <em>machine learning</em>. Entre las más utilizadas se encuentran:

    .row.justify-content-center
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd01.crd--grayGrad(data-aos="flip-left")
          .bottomCircle01.mb-5
            figure
              img(src="@/assets/curso/tema6/img21.svg", alt="alt").img90.m-auto
          h4.text-center Power BI
          p.text-center.mb-5 Plataforma de visualización desarrollada por Microsoft. Permite crear informes interactivos y <em>dashboards</em> con integración en tiempo real.

      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd01.crd--grayGrad(data-aos="flip-left")
          .bottomCircle01.mb-5
            figure
              img(src="@/assets/curso/tema6/img22.svg", alt="alt").img90.m-auto
          h4.text-center R y RStudio
          p.text-center.mb-5 Lenguaje estadístico especializado en análisis cuantitativo, útil para modelos complejos y visualización de datos científicos.

      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd01.crd--grayGrad(data-aos="flip-left")
          .bottomCircle01.mb-5
            figure
              img(src="@/assets/curso/tema6/img23.svg", alt="alt").img90.m-auto
          h4.text-center <em>Tableau</em>
          p.text-center.mb-5 Herramienta intuitiva de visualización y análisis visual. Es ampliamente utilizada por su capacidad de generar insights rápidamente.

      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd01.crd--grayGrad(data-aos="flip-left")
          .bottomCircle01.mb-5
            figure
              img(src="@/assets/curso/tema6/img24.svg", alt="alt").img90.m-auto
          h4.text-center RapidMiner
          p.text-center.mb-5 Plataforma de analítica avanzada que integra el diseño visual de flujos de trabajo con algoritmos de aprendizaje automático.

      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd01.crd--grayGrad(data-aos="flip-left")
          .bottomCircle01.mb-5
            figure
              img(src="@/assets/curso/tema6/img25.svg", alt="alt").img90.m-auto
          h4.text-center Python (con bibliotecas como Pandas, NumPy, Scikit-learn y Matplotlib)
          p.text-center.mb-5 Ofrece gran flexibilidad para procesamiento, análisis estadístico, aprendizaje automático y visualización.

      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd01.crd--grayGrad(data-aos="flip-left")
          .bottomCircle01.mb-5
            figure
              img(src="@/assets/curso/tema6/img26.svg", alt="alt").img90.m-auto
          h4.text-center Google Data Studio
          p.text-center.mb-5 Herramienta en la nube para generar informes y <em>dashboards</em> fácilmente compatibles con fuentes conectadas en tiempo real.

    .row.justify-content-center
      .col-lg-10.col-12
        p.mb-0(data-aos="fade-down") Estas herramientas potencian el uso de la inteligencia artificial al permitir una comprensión más profunda de los datos y facilitar el desarrollo de soluciones basadas en evidencias. La selección adecuada depende del contexto de uso, los objetivos analíticos y las capacidades técnicas del equipo de trabajo.

    separador
    #t_6_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.4 Algoritmos de agrupamiento y técnicas de gestión de datos

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema6/img27.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El agrupamiento o <em>clustering</em> es una técnica fundamental en el aprendizaje automático no supervisado, que tiene como objetivo identificar patrones o estructuras ocultas dentro de un conjunto de datos. A través de estos algoritmos, los datos se agrupan en subconjuntos homogéneos llamados clústeres, donde los elementos dentro de un mismo grupo comparten características similares y son distintos de los elementos de otros grupos. Esta técnica es ampliamente utilizada en áreas como la segmentación de clientes, la detección de anomalías, la clasificación de documentos y el análisis de redes sociales.

    p.mb-5(data-aos="fade-down") Entre los algoritmos de agrupamiento más conocidos se encuentran:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-8.col-12.mb-md-0.order-lg-2.order-1
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--C01")
          .row(titulo="K-means")
            .col-12.mb-0.mb-md-0
              p Divide el conjunto de datos en k grupos según la cercanía de los puntos a los centroides, los cuales se ajustan iterativamente. Es eficiente y fácil de implementar, aunque sensible a la selección de k y a los valores atípicos.
          .row(titulo="DBSCAN (Density-Based Spatial <em>Clustering</em> of Applications with Noise)")
            .col-12.mb-0.mb-md-0
              p.mb-0 Agrupa datos en función de la densidad de puntos en una región, permitiendo descubrir clústeres de forma arbitraria y manejar mejor los valores atípicos.
          .row(titulo="Hierarchical <em>Clustering</em>")
            .col-12.mb-0.mb-md-0
              p.mb-3 Construye una jerarquía de clústeres que puede representarse como un dendrograma, útil cuando se desea una visión más estructurada de los datos.
      .col-lg-4.col-6.col-md-6.col-8.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema6/img28.png', alt='Imagen decorativa')

    p.mb-5(data-aos="fade-down") Por otro lado, las técnicas de gestión de datos son esenciales para garantizar la calidad, accesibilidad y coherencia de la información utilizada en los procesos analíticos y de aprendizaje automático. Estas técnicas abarcan:

    .row.justify-content-center
      .col-lg-10.col-12
        .row.justify-content-center.tarjeta.tarjeta--C04.p-4.mb-5(data-aos="flip-up")
          .col-lg-9.col-12.order-lg-1.order-2
            ul.lista-ul.mb-0
              li.mb-4
                i.lista-ul__vineta
                p.mb-0 Normalización y estandarización de datos para mejorar el rendimiento de los algoritmos.
              li.mb-4
                i.lista-ul__vineta
                p.mb-0 Control de versiones de datos para rastrear cambios y asegurar reproducibilidad.
              li.mb-4
                i.lista-ul__vineta
                p.mb-0 Catalogación y metadatos para organizar y documentar fuentes de datos.
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 Gobierno de datos que incluye políticas de seguridad, privacidad y cumplimiento normativo.
          .col-lg-3.col-md-7.col-12.mb-3.order-lg-2.order-1.mb-lg-0
            .row.justify-content-center(data-aos="flip-up")
              .col
                figure
                  img(src='@/assets/curso/tema6/img29.png', alt='Imagen decorativa')

    .row.justify-content-center
      .col-lg-10.col-12
        p.mb-0(data-aos="fade-down") La combinación de algoritmos de agrupamiento y técnicas sólidas de gestión de datos permite una exploración más precisa, segura y eficiente de los conjuntos de datos, fortaleciendo los procesos de análisis predictivo y toma de decisiones informadas.

    separador
    #t_6_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.5 Evaluación de modelos de <em>machine learning</em>: métricas y validación
    
    p.mb-4(data-aos="fade-down") La evaluación de modelos de <em>machine learning</em> es un paso crítico en el desarrollo de soluciones basadas en inteligencia artificial, ya que permite determinar la eficacia, la precisión y la capacidad de generalización del modelo antes de su implementación en entornos reales. Un modelo bien evaluado no solo entrega buenos resultados en los datos de entrenamiento, sino que también mantiene su desempeño con datos nuevos e inesperados.
    p.mb-5(data-aos="fade-down") Para este propósito, se utilizan diversas métricas de evaluación, que varían según el tipo de problema:

    .tarjeta.tarjeta--BG04.p-4.mb-5
      LineaTiempoC.color-acento-botones(text-small)(data-aos="flip-up")
        .row(titulo="")
          .col-lg-4.mb-4.mb-md-0.order-lg-1.order-2
            h4 Precisión (<em>accuracy</em>)
            p Mide la proporción de predicciones correctas sobre el total de observaciones. Es útil cuando las clases están balanceadas.
          .col-lg-8.order-lg-2.order-1
            figure
              img(src='@/assets/curso/tema6/img30.jpg', alt='Imagen decorativa')

        .row(titulo="")
          .col-lg-4.mb-4.mb-md-0.order-lg-1.order-2
            h4 Precisión y recall (sensibilidad)
            p Se utilizan principalmente en clasificación binaria. La precisión evalúa la proporción de verdaderos positivos sobre los resultados positivos predichos, mientras que el <em>recall</em> mide la proporción de verdaderos positivos sobre los reales.
          .col-lg-8.order-lg-2.order-1
            figure
              img(src='@/assets/curso/tema6/img31.jpg', alt='Imagen decorativa')


        .row(titulo="")
          .col-lg-4.mb-4.mb-md-0.order-lg-1.order-2
            h4 F1-score
            p Combina precisión y <em>recall</em> en una sola métrica armónica, especialmente útil en contextos con clases desbalanceadas.
          .col-lg-8.order-lg-2.order-1
            figure
              img(src='@/assets/curso/tema6/img32.jpg', alt='Imagen decorativa')


        .row(titulo="")
          .col-lg-4.mb-4.mb-md-0.order-lg-1.order-2
            h4 AUC-ROC
            p Evalúa la capacidad del modelo para distinguir entre clases. Cuanto más cerca de 1, mejor es el desempeño.
          .col-lg-8.order-lg-2.order-1
            figure
              img(src='@/assets/curso/tema6/img33.jpg', alt='Imagen decorativa')


        .row(titulo="")
          .col-lg-4.mb-4.mb-md-0.order-lg-1.order-2
            h4 Error cuadrático medio (MSE) y raíz del error cuadrático medio (RMSE)
            p Métricas empleadas en modelos de regresión para medir la diferencia entre los valores predichos y los reales.
          .col-lg-8.order-lg-2.order-1
            figure
              img(src='@/assets/curso/tema6/img34.jpg', alt='Imagen decorativa')


        .row(titulo="")
          .col-lg-4.mb-4.mb-md-0.order-lg-1.order-2
            h4 R<sup>2</sup> o coeficiente de determinación
            p Indica qué tan bien el modelo explica la variabilidad de los datos.
          .col-lg-8.order-lg-2.order-1
            figure
              img(src='@/assets/curso/tema6/img35.jpg', alt='Imagen decorativa')

    .row.justify-content-center
      .col-lg-10.col-12
        p.mb-5(data-aos="fade-down") Además de las métricas, se deben aplicar técnicas de validación para comprobar que el modelo no ha sido sobreajustado (<em>overfitting</em>) ni subajustado (<em>underfitting</em>). Algunas estrategias incluyen:

    .row.mb-5
      .col-lg-4.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema6/img36.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C03(style= "width: 100%")
            .p-4
              h4.text-center Validación cruzada (<em>cross-validation</em>)
              p.mb-0.text-center El conjunto de datos se divide en partes (por ejemplo, en k pliegues), y el modelo se entrena y valida múltiples veces, garantizando mayor robustez en los resultados.

      .col-lg-4.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema6/img37.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C03(style= "width: 100%")
            .p-4
              h4.text-center División en conjuntos de entrenamiento, validación y prueba
              p.mb-0.text-center Permite separar claramente el entrenamiento de la evaluación final del modelo.

      .col-lg-4.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema6/img38.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C03(style= "width: 100%")
            .p-4
              h4.text-center Validación estratificada
              p.mb-0.text-center Garantiza que cada subconjunto tenga la misma distribución de clases que el conjunto original, lo cual es importante en casos de datos desbalanceados.

    p.mb-5(data-aos="fade-down") Evaluar correctamente un modelo permite seleccionar el enfoque más adecuado para el problema, comparar diferentes algoritmos de forma objetiva y asegurar que los resultados obtenidos sean confiables y reproducibles en contextos reales.

</template>

<script>
export default {
  name: 'Tema6',
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
