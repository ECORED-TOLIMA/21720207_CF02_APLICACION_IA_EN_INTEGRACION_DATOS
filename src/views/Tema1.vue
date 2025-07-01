<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 1
      h1 Inteligencia artificial aplicada a los datos

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La Inteligencia Artificial (IA) se refiere a la capacidad de los sistemas computacionales para realizar tareas que requieren inteligencia humana, como el aprendizaje, el razonamiento y la toma de decisiones. En el contexto del análisis e integración de datos, la IA permite procesar grandes volúmenes de información de forma eficiente, automatizar procesos complejos y generar conocimientos útiles para diferentes sectores. Su aplicación transforma industrias, optimiza operaciones y mejora la experiencia del usuario mediante sistemas inteligentes adaptativos.
        br

    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Principios fundamentales de la inteligencia artificial

    p.mb-4(data-aos="fade-down") Los principios fundamentales de la inteligencia artificial constituyen la base sobre la cual se diseñan y operan los sistemas inteligentes. Estos principios permiten que las máquinas no solo ejecuten instrucciones predefinidas, sino que aprendan de los datos, se adapten al entorno y realicen tareas complejas con eficiencia y autonomía. Comprender estos fundamentos es esencial para identificar cómo la IA puede aplicarse de forma efectiva al análisis, integración y gestión de datos en distintos sectores. A través de estos principios, la inteligencia artificial se convierte en una herramienta poderosa para la toma de decisiones informadas, la automatización de procesos y la generación de soluciones innovadoras.
    p.mb-5(data-aos="fade-down") Entre los principios más relevantes se encuentran:

    .row.justify-content-center.align-items-center(data-aos="flip-up")
      .col-lg-10.col-12.mb-0
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-7.col-12.mb-5.mb-md-0.order-lg-2.order-2.mb-lg-0
            LineaTiempoD.color-acento-botones.especial
              .row(numero="1" titulo="Percepción de patrones")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Capacidad para identificar estructuras o regularidades dentro de los datos.

              .row(numero="2" titulo="Representación del conocimiento")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Almacenamiento estructurado de información que permite su recuperación y uso contextual.

              .row(numero="3" titulo="Aprendizaje automático (<em>machine learning</em>)")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Habilidad para mejorar el rendimiento mediante la experiencia, sin intervención humana directa.

              .row(numero="4" titulo="Razonamiento lógico y toma de decisiones")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Uso de reglas, inferencias y modelos probabilísticos para analizar situaciones y elegir acciones.

              .row(numero="5" titulo="Planificación y resolución de problemas")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Formulación de objetivos y estrategias para alcanzar soluciones efectivas.
              
              .row(numero="6" titulo="Interacción y adaptación")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Facultad para comunicarse con usuarios o sistemas y ajustarse dinámicamente a nuevas condiciones o datos.
          .col-lg-5.col-sm-4.col-5.order-lg-1.order-1.mb-lg-0.mb-4.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema1/img02.svg', alt='Imagen decorativa')

        p.mb-0(data-aos="fade-down") Estos principios permiten que los sistemas de inteligencia artificial se integren en diversos sectores, optimizando procesos, mejorando la toma de decisiones y facilitando soluciones innovadoras basadas en datos.

    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Aplicaciones en la vida cotidiana y la industria

    p.mb-4(data-aos="fade-down") La inteligencia artificial ha dejado de ser una tecnología exclusiva de laboratorios o grandes corporaciones para convertirse en una herramienta presente en múltiples aspectos de la vida diaria y en diversas actividades industriales. Sus aplicaciones abarcan desde funciones básicas en dispositivos personales hasta sistemas avanzados que optimizan procesos complejos en organizaciones globales. Esta versatilidad ha permitido que la IA transforme la manera en que se interactúa con la tecnología, se toman decisiones y se generan soluciones a problemas cotidianos y empresariales.
    p.mb-5(data-aos="fade-down") En la vida cotidiana, la IA se manifiesta en diferentes formas:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col
        .row.justify-content-center
          .col-lg-8.col-12.order-lg-2.order-2
            .tarjeta.tarjeta--C04.p-4.mb-3
              ol.lista-ol--cuadro
                li.mb-3 
                  .lista-ol--cuadro__vineta.v--green
                    span.text-bold 1
                  p.mb-0 Asistentes virtuales como Siri, Alexa o Google Assistant, que interpretan comandos de voz para realizar tareas como enviar mensajes, buscar información o controlar dispositivos inteligentes.
                li.mb-3 
                  .lista-ol--cuadro__vineta.v--green
                    span.text-bold 2
                  p.mb-0 Sistemas de recomendación utilizados por plataformas como Netflix, Spotify o Amazon, que analizan el comportamiento del usuario para sugerir películas, canciones o productos personalizados.
                li.mb-3 
                  .lista-ol--cuadro__vineta.v--green
                    span.text-bold 3
                  p.mb-0 Traducción automática y corrección gramatical, integradas en herramientas como Google Translate o los editores de texto, que mejoran la comunicación multilingüe.
                li.mb-3 
                  .lista-ol--cuadro__vineta.v--green
                    span.text-bold 4
                  p.mb-0 Aplicaciones de navegación y movilidad, como Waze o Google Maps, que predicen rutas óptimas y tiempos de llegada en tiempo real.
                li.mb-0 
                  .lista-ol--cuadro__vineta.v--green
                    span.text-bold 5
                  p.mb-0 Reconocimiento facial y biométrico, usado para desbloquear dispositivos, verificar identidades o autorizar transacciones.
          .col-lg-4.col-md-7.col-12.mb-3.order-lg-1.order-1.mb-lg-0
            .row.justify-content-center(data-aos="flip-up")
              .col
                figure
                  img(src='@/assets/curso/tema1/img03.png', alt='Imagen decorativa')

    p.mb-5(data-aos="fade-down") En la industria, las aplicaciones de la inteligencia artificial son aún más amplias y especializadas:

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      SlyderF(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema1/img04.svg' alt='AvatarTop')
          h4.text-center Manufactura inteligente
          p Con robots colaborativos y sistemas de mantenimiento predictivo que aumentan la productividad y reducen tiempos de inactividad.

        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema1/img05.svg' alt='AvatarTop')
          h4.text-center Sector financiero
          p Donde se aplican modelos predictivos para la detección de fraudes, análisis de riesgos y automatización de inversiones.

        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema1/img06.svg' alt='AvatarTop')
          h4.text-center Salud y biotecnología
          p Con algoritmos capaces de diagnosticar enfermedades a partir de imágenes médicas, predecir epidemias o personalizar tratamientos.

        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema1/img07.svg' alt='AvatarTop')
          h4.text-center Agricultura de precisión
          p Utiliza sensores e inteligencia artificial para monitorear cultivos, predecir cosechas y optimizar el uso de recursos.

        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema1/img08.svg' alt='AvatarTop')
          h4.text-center Logística y cadenas de suministro
          p Mediante sistemas que mejoran la gestión de inventarios, pronostican la demanda y optimizan rutas de distribución.

        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema1/img09.svg' alt='AvatarTop')
          h4.text-center Educación personalizada
          p A través de plataformas adaptativas que ajustan el contenido y ritmo de aprendizaje según el desempeño del estudiante.
    
    .row.justify-content-center
      .col-lg-10.col-12
        p.mb-0(data-aos="fade-down") Estas aplicaciones no solo demuestran el potencial técnico de la IA, sino también su capacidad para generar valor social, económico y humano cuando se implementa con responsabilidad y visión estratégica.

    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Papel de la IA en el procesamiento de datos

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img10.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La inteligencia artificial desempeña un papel fundamental en el procesamiento de datos, ya que permite automatizar, optimizar y escalar tareas que, de forma manual, serían complejas, lentas o imposibles de realizar con precisión. Su intervención ha transformado profundamente el ciclo de vida de los datos, desde su recolección hasta su análisis e interpretación, facilitando la toma de decisiones basadas en información objetiva, oportuna y confiable.

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12.order-lg-2.order-2
        .cajon.cajon.C01.color-primario.p-4.mb-4
          p.mb-0 El procesamiento de datos con inteligencia artificial se caracteriza por la capacidad de identificar patrones, correlaciones y anomalías en grandes volúmenes de información, lo cual permite generar conocimientos relevantes a partir de fuentes estructuradas y no estructuradas, como bases de datos, imágenes, texto o audio.
        p.mb-0(data-aos="fade-down") Entre los principales aportes de la IA al procesamiento de datos se destacan:

    .tarjeta.tarjeta--BG02.p-4.p-md-5.mb-5(data-aos="flip-up")
      .tarjeta.tarjeta--blanca.p-4
        PasosB.color-acento-botones
          .row.justify-content-center.p-4(titulo=" ")
            .col-lg-4.order-lg-1.order-2
              p Clasificación y segmentación de datos mediante algoritmos que reconocen características comunes y agrupan la información según criterios específicos.
            .col-lg-8.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema1/img11.jpg', alt='Imagen decorativa')

          .row.justify-content-center.p-4(titulo=" ")
            .col-lg-4.order-lg-1.order-2
              p Limpieza y preparación automática, que identifica errores, valores atípicos o duplicados, y estandariza los formatos para garantizar datos de calidad.
            .col-lg-8.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema1/img12.jpg', alt='Imagen decorativa')

          .row.justify-content-center.p-4(titulo=" ")
            .col-lg-4.order-lg-1.order-2
              p Análisis predictivo, que utiliza modelos entrenados con datos históricos para anticipar comportamientos o resultados futuros.
            .col-lg-8.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema1/img13.jpg', alt='Imagen decorativa')

          .row.justify-content-center.p-4(titulo=" ")
            .col-lg-4.order-lg-1.order-2
              p Procesamiento del lenguaje natural (PLN), que permite a los sistemas comprender, interpretar y generar lenguaje humano, haciendo posible el análisis de textos, opiniones o conversaciones.
            .col-lg-8.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema1/img14.jpg', alt='Imagen decorativa')

          .row.justify-content-center.p-4(titulo=" ")
            .col-lg-4.order-lg-1.order-2
              p Reconocimiento de patrones y aprendizaje autónomo, por medio de técnicas de aprendizaje automático (<em>machine learning</em>) y aprendizaje profundo (<em>deep learning</em>), que mejoran su desempeño a medida que procesan nuevos datos.
            .col-lg-8.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema1/img15.jpg', alt='Imagen decorativa')

          .row.justify-content-center.p-4(titulo=" ")
            .col-lg-4.order-lg-1.order-2
              p Automatización de decisiones, donde sistemas inteligentes pueden sugerir o ejecutar acciones con base en el análisis de la información disponible.
            .col-lg-8.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema1/img16.jpg', alt='Imagen decorativa')

    p.mb-0(data-aos="fade-down") Gracias a estos aportes, la IA no solo incrementa la eficiencia del procesamiento de datos, sino que también abre nuevas posibilidades para descubrir información oculta, reducir riesgos y generar soluciones innovadoras en distintos sectores. En un entorno donde los datos crecen exponencialmente, la inteligencia artificial se convierte en un recurso indispensable para transformar esos datos en conocimiento útil y accionable.

</template>

<script>
export default {
  name: 'Tema1',
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
