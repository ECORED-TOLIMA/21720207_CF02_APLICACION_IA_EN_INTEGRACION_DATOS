<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 2
      h1 Herramientas de inteligencia artificial generativas
    
    p.mb-5(data-aos="fade-down") La inteligencia artificial generativa se refiere a un conjunto de tecnologías avanzadas que permiten la creación automática de contenido original y novedoso a partir de datos de entrada, sin la necesidad de intervención humana constante. Estas herramientas utilizan modelos de aprendizaje profundo, especialmente redes neuronales generativas, que han sido entrenadas con grandes volúmenes de información para producir textos, imágenes, música, videos, y otros tipos de datos creativos. La inteligencia artificial generativa representa un avance significativo en el campo de la IA, ya que no solo analiza y responde, sino que es capaz de crear, innovar y expandir el conocimiento y los recursos digitales de forma autónoma.

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las herramientas de inteligencia artificial generativas son capaces de entender patrones complejos en los datos y de replicarlos o modificarlos para generar resultados que no existían previamente, lo que las convierte en un recurso invaluable para múltiples industrias, desde la creatividad y el diseño hasta la ingeniería y la investigación científica. El desarrollo de estas herramientas ha abierto un abanico de posibilidades que transforman radicalmente la forma en que se producen y consumen contenidos, facilitando procesos que antes eran exclusivamente manuales y demandaban largos tiempos de elaboración.
        br

    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Concepto y características

    p.mb-4(data-aos="fade-down") El concepto de inteligencia artificial generativa se basa en la capacidad de un sistema computacional para crear contenido nuevo a partir de ejemplos previos, mediante el uso de algoritmos avanzados que simulan la creatividad humana. Estas herramientas pueden generar textos coherentes, imágenes realistas, música, modelos 3D y más, sin limitarse a replicar, sino que combinan y sintetizan la información aprendida para generar resultados originales.
    p.mb-5(data-aos="fade-down") Entre sus características más relevantes se destacan:

    .tarjeta.tarjeta--BG03.p-md-5.p-4.mb-5(data-aos="flip-up")
      SlyderA(tipo="b")
        .row.justify-content-center.p-4
          .col-lg-4.order-lg-1.order-2
            h4 Creatividad automática
            p A diferencia de otros sistemas de IA, las herramientas generativas pueden producir contenido original, lo que implica una capacidad creativa que puede ser utilizada en múltiples aplicaciones.
          .col-lg-8.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema2/img02.jpg', alt='Imagen decorativa')

        .row.justify-content-center.p-4
          .col-lg-4.order-lg-1.order-2
            h4 Aprendizaje profundo
            p Utilizan arquitecturas de redes neuronales profundas, como modelos generativos adversariales (GANs), transformadores y autoencoders, que les permiten aprender representaciones complejas de los datos.
          .col-lg-8.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema2/img03.jpg', alt='Imagen decorativa')

        .row.justify-content-center.p-4
          .col-lg-4.order-lg-1.order-2
            h4 Adaptabilidad
            p Pueden ajustarse a diferentes tipos de datos y contextos, generando contenido específico según el dominio o la necesidad del usuario.
          .col-lg-8.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema2/img04.jpg', alt='Imagen decorativa')

        .row.justify-content-center.p-4
          .col-lg-4.order-lg-1.order-2
            h4 Interactividad
            p Muchas herramientas ofrecen interfaces que permiten a los usuarios interactuar con el sistema para ajustar parámetros y dirigir la creación de contenido de forma personalizada.
          .col-lg-8.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema2/img05.jpg', alt='Imagen decorativa')

        .row.justify-content-center.p-4
          .col-lg-4.order-lg-1.order-2
            h4 Capacidad de escalabilidad
            p Estas herramientas pueden procesar grandes volúmenes de datos y generar resultados en tiempo relativamente corto, facilitando la producción a gran escala.
          .col-lg-8.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema2/img06.jpg', alt='Imagen decorativa')
    
    .row.justify-content-center
      .col-lg-10.col-12
        p.mb-0(data-aos="fade-down") La inteligencia artificial generativa se ha convertido en un área en constante evolución, donde los avances en algoritmos y el aumento en la capacidad computacional amplían continuamente su potencial y aplicaciones.

    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Diferencias con la IA descriptiva

    p.mb-5(data-aos="fade-down") La inteligencia artificial generativa y la inteligencia artificial descriptiva se diferencian fundamentalmente en sus objetivos y en la naturaleza de los resultados que producen.

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .row.justify-content-center
          .col-lg-7.col-12.order-lg-2.order-2
            p(data-aos="fade-down") La inteligencia artificial descriptiva se centra en analizar y procesar datos para identificar patrones, reconocer objetos, clasificar información y explicar fenómenos basados en datos históricos o en tiempo real. Su propósito es interpretar y describir la realidad existente, proporcionando respuestas, predicciones o clasificaciones basadas en el análisis de información. Por ejemplo, la IA descriptiva se utiliza para reconocer imágenes, detectar fraudes, o hacer diagnósticos médicos mediante el procesamiento de datos.
            .cajon.cajon.C01.color-primario.p-4.mb-3
              p.mb-0 En contraste, la inteligencia artificial generativa va un paso más allá y se dedica a la creación de contenido nuevo y original. En lugar de limitarse a describir o analizar datos, genera productos digitales que pueden ser textos, imágenes, música o cualquier otro tipo de información novedosa. Esto implica que la IA generativa tiene una función creativa y proactiva, mientras que la IA descriptiva tiene una función analítica y reactiva.
            
          .col-lg-5.col-md-7.col-12.mb-3.order-lg-1.order-1.mb-lg-0
            .row.justify-content-center(data-aos="flip-up")
              .col
                figure
                  img(src='@/assets/curso/tema2/img07.svg', alt='Imagen decorativa')

    p.mb-0(data-aos="fade-down") En resumen, mientras que la IA descriptiva responde a preguntas sobre lo que ya existe, la IA generativa propone nuevas creaciones y posibilidades a partir de la información aprendida. Ambas formas de inteligencia artificial son complementarias y muchas aplicaciones combinan ambas para ofrecer soluciones más completas y sofisticadas.

    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Casos de uso en entornos reales

    p.mb-5(data-aos="fade-down") Las herramientas de inteligencia artificial generativas están transformando diversos sectores gracias a su capacidad para producir contenido original, optimizar procesos creativos y aportar soluciones innovadoras a problemas complejos. A continuación, se describen algunos casos de uso representativos en entornos reales:

    .tarjeta.tarjeta--BG04.p-4.mb-5
      LineaTiempoC.color-acento-botones(text-small)(data-aos="flip-up")
        .row(titulo="")
          .col-lg-6.mb-4.mb-md-0.order-lg-1.order-2
            h4 Industria creativa
            p En el ámbito del diseño gráfico, la publicidad y la producción audiovisual, la IA generativa permite crear imágenes, videos y contenidos multimedia personalizados de forma rápida y eficiente. Por ejemplo, diseñadores pueden utilizar estas herramientas para generar propuestas visuales, bocetos o efectos especiales, acelerando el proceso creativo y reduciendo costos.
          .col-lg-6.order-lg-2.order-1.mb-3
            figure
              img(src='@/assets/curso/tema2/img08.jpg', alt='Imagen decorativa')

        .row(titulo="")
          .col-lg-6.mb-4.mb-md-0.order-lg-1.order-2
            h4 Generación de texto 
            p En el campo del periodismo, la redacción de contenidos y la atención al cliente, sistemas como los modelos de lenguaje permiten crear artículos, resúmenes, correos electrónicos y respuestas automáticas coherentes y adaptadas al contexto. Esto facilita la producción masiva de información y mejora la interacción con usuarios en plataformas digitales.
          .col-lg-6.order-lg-2.order-1.mb-3
            figure
              img(src='@/assets/curso/tema2/img09.jpg', alt='Imagen decorativa')

        .row(titulo="")
          .col-lg-6.mb-4.mb-md-0.order-lg-1.order-2
            h4 Educación
            p Se utilizan para desarrollar materiales educativos personalizados, simulaciones y evaluaciones automatizadas, ayudando a adaptar el aprendizaje a las necesidades específicas de cada estudiante y mejorando la eficiencia del proceso formativo.
          .col-lg-6.order-lg-2.order-1.mb-3
            figure
              img(src='@/assets/curso/tema2/img10.jpg', alt='Imagen decorativa')

        .row(titulo="")
          .col-lg-6.mb-4.mb-md-0.order-lg-1.order-2
            h4 Investigación científica
            p La IA generativa colabora en la generación de hipótesis, diseño de experimentos y síntesis de resultados, acelerando la producción de conocimiento en campos como la biomedicina, la química y la ingeniería.
          .col-lg-6.order-lg-2.order-1.mb-3
            figure
              img(src='@/assets/curso/tema2/img11.jpg', alt='Imagen decorativa')

        .row(titulo="")
          .col-lg-6.mb-4.mb-md-0.order-lg-1.order-2
            h4 Moda y diseño de productos
            p Permite la creación de prototipos virtuales y colecciones de moda innovadoras, anticipando tendencias y personalizando ofertas según preferencias de los consumidores.
          .col-lg-6.order-lg-2.order-1.mb-3
            figure
              img(src='@/assets/curso/tema2/img12.jpg', alt='Imagen decorativa')

        .row(titulo="")
          .col-lg-6.mb-4.mb-md-0.order-lg-1.order-2
            h4 Videojuegos y entretenimiento
            p Facilita la generación de escenarios, personajes, diálogos y música dinámica que se adaptan a las decisiones y estilo de juego de cada usuario, mejorando la experiencia interactiva.
          .col-lg-6.order-lg-2.order-1.mb-3
            figure
              img(src='@/assets/curso/tema2/img13.jpg', alt='Imagen decorativa')

    .row.justify-content-center
      .col-lg-10.col-12
        p.mb-0(data-aos="fade-down") Estos ejemplos reflejan cómo la inteligencia artificial generativa no solo está revolucionando la creación y producción de contenido, sino también la forma en que las organizaciones y profesionales abordan sus desafíos y aprovechan nuevas oportunidades en un mundo cada vez más digital y automatizado.


</template>

<script>
export default {
  name: 'Tema2',
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
