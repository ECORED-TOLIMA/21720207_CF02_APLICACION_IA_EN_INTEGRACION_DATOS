<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 5
      h1 Aplicación estratégica de la estadística descriptiva en IA

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La estadística descriptiva desempeña un papel crucial en el análisis de datos orientado a la inteligencia artificial, ya que permite examinar, resumir y visualizar la información de forma clara y significativa. Más allá de su función tradicional, su aplicación estratégica permite detectar errores, validar supuestos, comprender relaciones entre variables y mejorar la calidad de los datos antes de ser utilizados en modelos predictivos o generativos. Esta fase de análisis previo es esencial para tomar decisiones informadas y asegurar que los algoritmos operen sobre bases sólidas.

    p.mb-4(data-aos="fade-down") Desde esta perspectiva, la estadística descriptiva se convierte en una herramienta de diagnóstico y control de calidad en proyectos de ciencia de datos, ayudando a seleccionar variables clave, identificar patrones relevantes y detectar posibles sesgos o inconsistencias. Su adecuada implementación mejora significativamente los resultados de modelos de aprendizaje automático y contribuye a una mejor comprensión del contexto de los datos.
    p.mb-0(data-aos="fade-down") A continuación, se presentan los elementos fundamentales para su aplicación estratégica en entornos de IA.

    separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1 Interpretación de niveles de medición en contextos reales

    .row.tarjeta--BG05.px-md-5.px-4
      p.mb-4(data-aos="fade-down") Los niveles de medición son esenciales para determinar cómo se pueden analizar e interpretar los datos en un proyecto de inteligencia artificial. Cada tipo de medición define qué operaciones estadísticas son válidas y qué tipo de análisis es apropiado, por lo tanto, una comprensión precisa de estos niveles garantiza que los datos sean tratados correctamente según su naturaleza.
      p.mb-4(data-aos="fade-down") En contextos reales de aplicación, como en el comercio electrónico, la salud, la educación o la industria manufacturera, identificar el nivel de medición permite seleccionar los métodos adecuados para predecir comportamientos, optimizar procesos o segmentar clientes. Por ejemplo, en un sistema de recomendación, no es lo mismo tratar una variable como “categoría de producto” (nominal) que “frecuencia de compra mensual” (razón), ya que las técnicas analíticas y los algoritmos a aplicar serán diferentes.
      p.mb-5(data-aos="fade-down") Los niveles se interpretan así:

      .row.justify-content-center.mb-5
        .col-xl-3.col-lg-6.col-md-6.col-12.mb-xl-0
          .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
            .indicador--hover(v-if="mostrarIndicador")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/tema5/img02.png", alt="Imagen decorativa")
            .crd_hover_txt--body
              h5.t1.mb-3 Nominal
              h5.t2.mb-2 Nominal
              p Clasifica datos sin un orden específico. 
              p <b>Ejemplo</b>: género, tipo de producto, y país de origen.

        .col-xl-3.col-lg-6.col-md-6.col-12.mb-xl-0
          .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
            .indicador--hover(v-if="mostrarIndicador")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/tema5/img03.png", alt="Imagen decorativa")
            .crd_hover_txt--body
              h5.t1.mb-3 Ordinal
              h5.t2.mb-2 Ordinal
              p Clasifica datos con un orden jerárquico, pero sin una distancia fija entre valores.
              p <b>Ejemplo</b>: niveles de satisfacción (bajo, medio y alto).

        .col-xl-3.col-lg-6.col-md-6.col-12.mb-xl-0
          .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
            .indicador--hover(v-if="mostrarIndicador")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/tema5/img04.png", alt="Imagen decorativa")
            .crd_hover_txt--body
              h5.t1.mb-3 De intervalo
              h5.t2.mb-2 De intervalo
              p Tiene un orden y distancias iguales entre valores, pero sin un cero absoluto.
              p <b>Ejemplo</b>: temperatura en grados Celsius.

        .col-xl-3.col-lg-6.col-md-6.col-12.mb-xl-0
          .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
            .indicador--hover(v-if="mostrarIndicador")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/tema5/img05.png", alt="Imagen decorativa")
            .crd_hover_txt--body
              h5.t1.mb-3 De razón 
              h5.t2.mb-2 De razón 
              p Posee un orden, intervalos iguales y un cero absoluto.
              p <b>Ejemplo</b>: ingresos, edad y cantidad de productos vendidos.
    
    .row.justify-content-center
      .col-lg-10.col-12
        p.mb-0(data-aos="fade-down") El uso adecuado de estos niveles mejora la precisión del modelamiento de datos y fortalece la toma de decisiones automatizadas o basadas en evidencia.

    separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Análisis de variables categóricas y numéricas en la toma de decisiones

    p.mb-4(data-aos="fade-down") El análisis de variables categóricas y numéricas desempeña un papel central en los procesos de inteligencia artificial, ya que permite transformar datos en información útil para la toma de decisiones informadas, tanto en entornos empresariales como institucionales.
    p.mb-5(data-aos="fade-down") Las variables categóricas son aquellas que representan atributos o cualidades y no poseen un valor numérico intrínseco. Se subdividen en:

    .row.justify-content-center.align-items-center.mb-5
      .col-12.order-lg-2.order-2.mb-lg-0
        .row.justify-content-center.mb-0(data-aos="flip-up")
          .col-lg-6.col-12.mb-3
            .tarjeta-avatar-b.h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema5/img06.svg' alt='AvatarTop')
              .tarjeta.tarjeta--C04.py-4(style= "width: 100%")
                .px-4
                  h4 Nominales
                  p No tienen orden lógico (por ejemplo, color de un producto y país de origen).

          .col-lg-6.col-12.mb-3
            .tarjeta-avatar-b.h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema5/img07.svg' alt='AvatarTop')
              .tarjeta.tarjeta--C04.py-4(style= "width: 100%")
                .px-4
                  h4 Ordinales
                  p Tienen un orden o jerarquía, aunque la distancia entre categorías no es uniforme (por ejemplo, nivel educativo y grado de satisfacción).

    p.mb-5(data-aos="fade-down") Por su parte, las variables numéricas son aquellas que expresan cantidades y permiten realizar operaciones matemáticas. Estas se clasifican en:

    .row.justify-content-center.align-items-center.mb-5
      .col-12.order-lg-2.order-2.mb-lg-0
        .row.justify-content-center.mb-0(data-aos="flip-up")
          .col-lg-6.col-12.mb-3
            .tarjeta-avatar-b.h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema5/img08.svg' alt='AvatarTop')
              .tarjeta.tarjeta--C04.py-4(style= "width: 100%")
                .px-4
                  h4 Discretas
                  p Representan valores enteros contables (por ejemplo, número de visitas a una página web).

          .col-lg-6.col-12.mb-3
            .tarjeta-avatar-b.h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema5/img09.svg' alt='AvatarTop')
              .tarjeta.tarjeta--C04.py-4(style= "width: 100%")
                .px-4
                  h4 Continuas
                  p Pueden tomar cualquier valor dentro de un rango, incluyendo decimales (por ejemplo, temperatura, ingresos mensuales).

    .row.justify-content-center
      .col-lg-10.col-12
        p.mb-5(data-aos="fade-down") Comprender el tipo de variable es clave porque:

      .row.justify-content-center.mb-5
        .col-xl-4.col-lg-6.col-md-6.col-12.mb-xl-0
          .crd_hover_txt1.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
            .indicador--hover(v-if="mostrarIndicador")
            .crd_hover_txt1--img
              figure
                img(src="@/assets/curso/tema5/img10.png", alt="Imagen decorativa")
            .crd_hover_txt1--body
              h5.t1.mb-3 Determina el tipo de visualización
              h5.t2.mb-2 Determina el tipo de visualización
              p Más adecuada (gráficos de barras para categóricas e histogramas para numéricas).

        .col-xl-4.col-lg-6.col-md-6.col-12.mb-xl-0
          .crd_hover_txt1.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
            .indicador--hover(v-if="mostrarIndicador")
            .crd_hover_txt1--img
              figure
                img(src="@/assets/curso/tema5/img11.png", alt="Imagen decorativa")
            .crd_hover_txt1--body
              h5.t1.mb-3 Orienta la elección
              h5.t2.mb-2 Orienta la elección
              p De medidas estadísticas (moda para categóricas, y media de desviación estándar para numéricas).

        .col-xl-4.col-lg-6.col-md-6.col-12.mb-xl-0
          .crd_hover_txt1.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
            .indicador--hover(v-if="mostrarIndicador")
            .crd_hover_txt1--img
              figure
                img(src="@/assets/curso/tema5/img12.png", alt="Imagen decorativa")
            .crd_hover_txt1--body
              h5.t1.mb-3 Influye en los algoritmos
              h5.t2.mb-2 Influye en los algoritmos
              p De aprendizaje automático que se pueden aplicar (por ejemplo, codificación para variables categóricas).

    .row.justify-content-center
      .col-lg-10.col-12
        p.mb-0(data-aos="fade-down") Un análisis adecuado permite identificar patrones, prever comportamientos, segmentar públicos y diseñar estrategias de intervención basadas en evidencia, fortaleciendo así el proceso de toma de decisiones respaldado por inteligencia artificial.

    separador
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.3 Visualización estratégica mediante histogramas y tablas cruzadas

    p.mb-4(data-aos="fade-down") La visualización de datos es una herramienta fundamental en la analítica aplicada a la inteligencia artificial, ya que permite representar de forma gráfica y comprensible grandes volúmenes de información. Entre las herramientas más utilizadas para este fin se encuentran los histogramas y las tablas cruzadas, que facilitan la exploración y comparación de variables para extraer conclusiones relevantes.
    p.mb-5(data-aos="fade-down") El histograma es una representación gráfica de la distribución de una variable numérica continua. Permite observar cómo se agrupan los datos, identificar sesgos, detectar valores atípicos o analizar la forma de la distribución (simétrica, asimétrica, normal, etc.). Su utilidad radica en que:

    .row.mb-5
      .col-lg-4.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema5/img13.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C03(style= "width: 100%")
            .p-4
              p.mb-0.text-center Resume visualmente la frecuencia de los datos en intervalos definidos.

      .col-lg-4.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema5/img14.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C03(style= "width: 100%")
            .p-4
              p.mb-0.text-center Ayuda a determinar patrones, tendencias o anomalías.

      .col-lg-4.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema5/img15.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C03(style= "width: 100%")
            .p-4
              p.mb-0.text-center Apoya decisiones como la selección de modelos en <em>machine learning</em> según la forma de los datos.

    p.mb-5(data-aos="fade-down") Por otro lado, las tablas cruzadas o tablas de contingencia son matrices que muestran la relación entre dos variables categóricas. Estas permiten:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-9.position-relative
        .avatar
          figure
            img(src="@/assets/curso/tema5/img16.png", alt="Imagen decorativa").img280
        .crd.crd--avatarHorizontal.crd--first.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/tema5/img17.svg", alt="Imagen decorativa").img100
            .col
              h4 Observar
              p.mb-3 Observar cómo se distribuyen las frecuencias relativas o absolutas en combinaciones de categorías.

        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/tema5/img18.svg", alt="Imagen decorativa").img100
            .col
              h4 Analizar
              p.mb-3 Analizar correlaciones entre variables cualitativas.
        .crd.crd--avatarHorizontal.crd--last.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/tema5/img19.svg", alt="Imagen decorativa").img100
            .col
              h4 Apoyar
              p.mb-3 Apoyar decisiones estratégicas al identificar asociaciones significativas entre factores.

    .row.justify-content-center
      .col-lg-10.col-12
        p.mb-0(data-aos="fade-down") Ambos instrumentos son fundamentales en procesos de preparación de datos, análisis exploratorio y presentación de resultados, ya que convierten la información en insumos estratégicos para la toma de decisiones informadas y el entrenamiento de modelos inteligentes.

    separador
    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.4 Uso de medidas estadísticas para el control de calidad de los datos

    p.mb-4(data-aos="fade-down") Las medidas estadísticas son herramientas esenciales para garantizar la calidad de los datos, especialmente cuando se utilizan como insumo en modelos de inteligencia artificial. Un análisis riguroso mediante medidas de tendencia central, dispersión y asimetría permite identificar errores, inconsistencias o comportamientos anómalos que podrían afectar negativamente los resultados del modelo.

    p.mb-5(data-aos="fade-down") El control de calidad a través de la estadística descriptiva incluye:

    TabsC.color-acento-botones.mb-5(data-aos="flip-up")
      .py-3.py-md-4(titulo="Medidas de tendencia central (media, mediana y moda)")
        .row.justify-content-center.p-4
          .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/tema5/img20.jpg', alt='Imagen decorativa')
          .col-lg-5.order-lg-2.order-2
            p Permiten identificar valores típicos dentro de un conjunto de datos y detectar sesgos o valores extremos. Por ejemplo, una media muy alejada de la mediana puede indicar la presencia de <em>outliers</em>.

      .py-3.py-md-4(titulo="Medida de variabilidad (Rango, desviación estándar y varianza) ")
        .row.justify-content-center.p-4
          .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/tema5/img21.jpg', alt='Imagen decorativa')
          .col-lg-5.order-lg-2.order-2
            p Revelan cuán dispersos están los datos. Una alta dispersión puede sugerir problemas de consistencia o necesidad de normalización para el análisis posterior.

      .py-3.py-md-4(titulo="Medidas de asimetría (sesgo)")
        .row.justify-content-center.p-4
          .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/tema5/img22.jpg', alt='Imagen decorativa')
          .col-lg-5.order-lg-2.order-2
            p Ayudan a entender si los datos están distribuidos de manera equilibrada o si existe inclinación hacia valores altos o bajos, los cual es crítico al definir umbrales y reglas de negocio.

    .row.justify-content-center
      .col-lg-10.col-12
        p.mb-0(data-aos="fade-down") Estas métricas permiten tomar decisiones informadas sobre el tratamiento de datos: limpieza, imputación de valores perdidos, transformación o segmentación. Además, son fundamentales para establecer protocolos de auditoría de datos y mantener la coherencia y fiabilidad de los insumos que alimentan los sistemas de inteligencia artificial.

</template>

<script>
export default {
  name: 'Tema5',
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
