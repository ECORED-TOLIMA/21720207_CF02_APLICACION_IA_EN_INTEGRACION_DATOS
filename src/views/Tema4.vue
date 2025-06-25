<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 4
      h1 Preparación e integración de datos

    .row.justify-content-center.mb-5
      .col-12(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema4/img01.png', alt='Imagen decorativa')

    p.mb-0(data-aos="fade-down") La preparación e integración de datos es una etapa crítica en cualquier proceso de análisis y aplicación de inteligencia artificial. Esta fase garantiza que la información esté limpia, organizada, contextualizada y lista para ser utilizada por modelos de aprendizaje automático o herramientas de analítica avanzada. Sin una preparación adecuada, los resultados obtenidos pueden estar sesgados, ser inexactos o completamente inútiles. En este apartado se abordan los conceptos fundamentales y metodologías necesarias para transformar datos crudos en insumos confiables y consistentes.

    separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Concepto de preparación de datos

    p.mb-5(data-aos="fade-down") La preparación de datos se refiere al proceso de transformar datos sin procesar en un formato adecuado para su análisis o uso en modelos de inteligencia artificial. Este proceso incluye actividades como la limpieza, normalización, transformación, reducción de dimensionalidad, imputación de valores faltantes y codificación de variables.

    .row.justify-content-center
      .col-lg-10.col-12
        .row.justify-content-center.cajon.C01.p-4.mb-0(data-aos="flip-up")
          .col-lg-9.col-12.order-lg-2.order-2
            p El propósito de la preparación es mejorar la calidad de los datos y eliminar inconsistencias, duplicados o errores que puedan afectar la precisión de los modelos. Además, este proceso garantiza que los datos estén alineados con los objetivos analíticos y las preguntas de investigación planteadas. De acuerdo con Provost y Fawcett (2013), esta etapa puede consumir hasta el 80 % del tiempo total en proyectos de ciencia de datos, lo que evidencia su importancia crítica.
          .col-lg-3.col-md-7.col-12.mb-3.order-lg-1.order-1.mb-lg-0
            .row.justify-content-center(data-aos="flip-up")
              .col
                figure
                  img(src='@/assets/curso/tema4/img02.png', alt='Imagen decorativa')

    separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Técnicas de limpieza de datos

    p.mb-4(data-aos="fade-down") La limpieza de datos es una etapa esencial en cualquier flujo de trabajo de análisis o ciencia de datos, ya que garantiza que la información utilizada sea precisa, coherente y útil. El objetivo principal es eliminar o corregir errores que puedan afectar la calidad del análisis o el rendimiento de los modelos de inteligencia artificial. Un conjunto de datos sucios puede llevar a conclusiones equivocadas, pérdida de tiempo, decisiones erróneas e incluso fallos en sistemas automatizados.
    p.mb-5(data-aos="fade-down") A continuación, se detallan las técnicas más relevantes empleadas en procesos de limpieza:

    .row.justify-content-center.align-items-center(data-aos="flip-up")
      .col-lg-10.col-12.mb-0
        .row.justify-content-center.align-items-center.mb-5
          .col-12.mb-5.mb-md-0.order-lg-1.order-2.mb-lg-0
            LineaTiempoD.color-acento-botones.especial
              .row(numero="1" titulo="Identificación y tratamiento de valores nulos o faltantes")
                .col-12.mb-4.mb-md-0
                  ul.lista-ul.mb-0
                    li.mb-3
                      i.lista-ul__vineta
                      p.mb-0 <b>Eliminación de registros</b> incompletos: si el porcentaje de datos faltantes es alto, puede eliminarse la fila o columna afectada.
                    li.mb-3
                      i.lista-ul__vineta
                      p.mb-0 <b>Imputación de valores</b>: se reemplazan los valores nulos con la media, mediana, moda, interpolación o predicción basada en otros atributos. Por ejemplo, si faltan ingresos mensuales en una encuesta, pueden estimarse a partir del nivel educativo o la edad.
                .col-12.mb-md-0
                  figure
                    img(src='@/assets/curso/tema4/img03.jpg', alt='Imagen decorativa')

              .row(numero="2" titulo="Detección y corrección de duplicados")
                .col-12.mb-4.mb-md-0
                  p Los registros duplicados pueden sesgar los resultados, especialmente en análisis estadístico o entrenamiento de modelos. Se detectan mediante claves únicas o coincidencias en múltiples campos, y luego se eliminan o consolidan.
                .col-12.mb-md-0
                  figure
                    img(src='@/assets/curso/tema4/img04.jpg', alt='Imagen decorativa')


              .row(numero="3" titulo="Estandarización de formatos")
                .col-12.mb-4.mb-md-0
                  p Es común encontrar datos con formatos incoherentes, por ejemplo: fechas escritas como “01/02/2024” vs “2024-02-01” o nombres de países como “USA”, “Estados Unidos” y “EE. UU.”. La estandarización convierte estos valores a un formato común.
                .col-12.mb-md-0
                  figure
                    img(src='@/assets/curso/tema4/img05.jpg', alt='Imagen decorativa')

              .row(numero="4" titulo="Corrección de errores tipográficos o de codificación")
                .col-12.mb-4.mb-md-0
                  p Los errores de digitación pueden generar múltiples categorías para un mismo valor, como “Bogotá”, “bogota” y “Bogta”. Se usan técnicas de limpieza automática, expresiones regulares o bibliotecas como fuzzywuzzy en Python para detectar y corregir estos casos.
                .col-12.mb-md-0
                  figure
                    img(src='@/assets/curso/tema4/img06.jpg', alt='Imagen decorativa')

              .row(numero="5" titulo="Detección de <em>outliers</em> o valores atípicos")
                .col-12.mb-4.mb-md-0
                  p Valores inusuales pueden ser errores o datos válidos pero excepcionales. Se identifican mediante técnicas estadísticas (como el rango intercuartílico, desviación estándar y z-score) o visualizaciones (boxplots e histogramas) y se decide si deben eliminarse, ajustarse o mantenerse.
                .col-12.mb-md-0
                  figure
                    img(src='@/assets/curso/tema4/img07.jpg', alt='Imagen decorativa')

              .row(numero="6" titulo="Conversión de tipos de datos")
                .col-12.mb-4.mb-md-0
                  p Es fundamental que los datos estén en el tipo correcto (por ejemplo, convertir una fecha en texto a un objeto de tipo datetime) para que los algoritmos los interpreten adecuadamente.
                .col-12.mb-md-0
                  figure
                    img(src='@/assets/curso/tema4/img08.jpg', alt='Imagen decorativa')
              
              .row(numero="7" titulo="Verificación de consistencia y reglas de negocio")
                .col-12.mb-4.mb-md-0
                  p Se asegura que los datos cumplan reglas lógicas. Por ejemplo, si un niño tiene 12 años no puede estar en la universidad; o si un producto tiene una fecha de caducidad anterior a la fecha de fabricación, hay un error.
                .col-12.mb-md-0
                  figure
                    img(src='@/assets/curso/tema4/img09.jpg', alt='Imagen decorativa')

              .row(numero="8" titulo="Eliminación de espacios en blanco o caracteres invisibles")
                .col-12.mb-4.mb-md-0
                  p A veces, los datos contienen espacios adicionales, saltos de línea ocultos u otros caracteres que impiden agrupar o analizar correctamente.
                .col-12.mb-md-0
                  figure
                    img(src='@/assets/curso/tema4/img10.jpg', alt='Imagen decorativa')

    .row.justify-content-center.mb-5
      .col-lg-10.col-12.order-lg-2.order-2
        .cajon.cajon.C01.color-primario.p-4.mb-3
          p.mb-0 En proyectos de inteligencia artificial, la limpieza de datos cobra aún más relevancia, ya que los algoritmos no tienen la capacidad de “interpretar” errores como lo haría un humano. Un pequeño porcentaje de datos sucios puede deteriorar significativamente el aprendizaje de un modelo, especialmente en tareas sensibles como el reconocimiento facial, la predicción médica o el análisis financiero.

    p.mb-0(data-aos="fade-down") Por ello, se recomienda usar herramientas y lenguajes de programación especializados como Python (con bibliotecas como pandas, numpy o scikit-learn) o plataformas como OpenRefine, Talend y Trifacta, que permiten automatizar, documentar y repetir procesos de limpieza de forma eficiente.

    separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 Modelamiento de datos para las reglas de negocio
    
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .row.justify-content-center
          .col-lg-7.col-12.order-lg-1.order-2
            p El modelamiento de datos consiste en la organización y estructuración lógica de los datos para que representen adecuadamente los procesos de una organización o sistema, alineándose con sus reglas de negocio. Estas reglas son lineamientos, condiciones o restricciones que reflejan cómo opera una empresa, entidad o proyecto, y determinan qué datos deben capturarse, cómo deben relacionarse y en qué condiciones deben ser procesados o validados.
            p Este proceso no solo busca eficiencia técnica, sino que también garantiza que los datos representen con fidelidad la realidad del negocio, permitiendo una mejor toma de decisiones y facilitando el trabajo de sistemas automatizados e inteligencia artificial.
          .col-lg-5.col-md-7.col-12.mb-3.order-lg-2.order-1.mb-lg-0
            .row.justify-content-center(data-aos="flip-up")
              .col
                figure
                  img(src='@/assets/curso/tema4/img11.png', alt='Imagen decorativa')

    p.mb-5(data-aos="fade-down") La importancia del modelamiento orientado a reglas de negocio radica en su capacidad para representar con claridad los procesos operativos y las decisiones estratégicas de una organización. Al estructurar los datos en función de estas reglas, se logra mayor coherencia en la gestión de la información, se optimizan los flujos de trabajo y se facilita la integración con sistemas inteligentes. Entre sus principales beneficios se destacan:

    .row.justify-content-center.mb-4
      .col-lg-10.col-12
        .row
          .col-lg-6.col-12
            .row.justify-content-center
              .col-lg-auto.col-4.px-0.mb-4(data-aos="flip-up")
                .cajon.cajon.C03.p-4.h-100
                  img.w-100.my-auto(src='@/assets/curso/tema4/img12.svg' alt="Imagen decorativa")
              .col-lg-8.col-8.px-0.mb-4(data-aos="fade-down")
                .cajon.cajon.C01.p-4.h-100
                  p.mb-0 Permite mantener la integridad y coherencia de los datos a lo largo del tiempo.

          .col-lg-6.col-12
            .row.justify-content-center
              .col-lg-auto.col-4.px-0.mb-4(data-aos="flip-up")
                .cajon.cajon.C03.p-4.h-100
                  img.w-100.my-auto(src='@/assets/curso/tema4/img13.svg' alt="Imagen decorativa")
              .col-lg-8.col-8.px-0.mb-4(data-aos="fade-down")
                .cajon.cajon.C01.p-4.h-100
                  p.mb-0 Favorece la automatización de procesos, pues los datos ya están organizados según la lógica del negocio. 

          .col-lg-6.col-12
            .row.justify-content-center
              .col-lg-auto.col-4.px-0.mb-4(data-aos="flip-up")
                .cajon.cajon.C03.p-4.h-100
                  img.w-100.my-auto(src='@/assets/curso/tema4/img14.svg' alt="Imagen decorativa")
              .col-lg-8.col-8.px-0.mb-4(data-aos="fade-down")
                .cajon.cajon.C01.p-4.h-100
                  p.mb-0 Facilita la trazabilidad, el cumplimiento normativo y la auditoría.

          .col-lg-6.col-12
            .row.justify-content-center
              .col-lg-auto.col-4.px-0.mb-4(data-aos="flip-up")
                .cajon.cajon.C03.p-4.h-100
                  img.w-100.my-auto(src='@/assets/curso/tema4/img15.svg' alt="Imagen decorativa")
              .col-lg-8.col-8.px-0.mb-4(data-aos="fade-down")
                .cajon.cajon.C01.p-4.h-100
                  p.mb-0 Ayuda a prevenir errores operativos derivados de inconsistencias o malas interpretaciones de la información.

    p.mb-5(data-aos="fade-down") En el modelamiento de datos orientado a reglas de negocio, es fundamental identificar y estructurar adecuadamente los elementos que permiten al sistema reflejar la lógica y las necesidades operativas de la organización. Estos elementos aseguran que los datos sean consistentes, útiles y alineados con los procesos estratégicos. A continuación, se destacan algunos de los más relevantes:

    .tarjeta.tarjeta--BG04.p-4.mb-5
      LineaTiempoC.color-acento-botones(text-small)(data-aos="flip-up")
        .row(titulo="a.")
          .col-lg-6.mb-4.mb-md-0.order-lg-2.order-2
            h4 Identificación de entidades y atributos relevantes
            p Se define qué objetos o conceptos del negocio deben ser representados (clientes, productos, transacciones, usuarios) y cuáles son sus características principales (nombre, fecha, valor, estado, etc.).
          .col-lg-6.order-lg-1.order-1
            figure
              img(src='@/assets/curso/tema4/img16.jpg', alt='Imagen decorativa')

        .row(titulo="b.")
          .col-lg-6.mb-4.mb-md-0.order-lg-2.order-2
            h4 Relaciones entre entidades
            p Se establece cómo se vinculan los elementos. Por ejemplo, un cliente puede tener muchas compras, pero una compra solo pertenece a un cliente. Estas relaciones se clasifican como uno a uno, uno a muchos o muchos a muchos.
          .col-lg-6.order-lg-1.order-1
            figure
              img(src='@/assets/curso/tema4/img17.jpg', alt='Imagen decorativa')

        .row(titulo="c.")
          .col-lg-6.mb-4.mb-md-0.order-lg-2.order-2
            h4 Definición de reglas de integridad
            p Se incluyen condiciones como: “no puede haber una factura sin cliente asociado”, “el valor del descuento no puede superar el valor total del producto” o “un pedido no puede tener una fecha de entrega anterior a la de creación”.
          .col-lg-6.order-lg-1.order-1
            figure
              img(src='@/assets/curso/tema4/img18.jpg', alt='Imagen decorativa')

        .row(titulo="d.")
          .col-lg-6.mb-4.mb-md-0.order-lg-2.order-2
            h4 Establecimiento de claves primarias y foráneas
            p Las claves primarias identifican de forma única cada registro, mientras que las foráneas permiten enlazar tablas relacionadas, respetando las reglas de negocio.
          .col-lg-6.order-lg-1.order-1
            figure
              img(src='@/assets/curso/tema4/img19.jpg', alt='Imagen decorativa')

        .row(titulo="e.")
          .col-lg-6.mb-4.mb-md-0.order-lg-2.order-2
            h4 Normalización de datos
            p Se aplica para evitar redundancias, facilitar la actualización de la información y cumplir con las reglas lógicas del sistema. La normalización ayuda a descomponer los datos en varias tablas bien estructuradas.
          .col-lg-6.order-lg-1.order-1
            figure
              img(src='@/assets/curso/tema4/img20.jpg', alt='Imagen decorativa')

        .row(titulo="f.")
          .col-lg-6.mb-4.mb-md-0.order-lg-2.order-2
            h4 Modelos conceptuales, lógicos y físicos
            ul.lista-ul.mb-0(style="color: white")
              li.mb-3
                i.lista-ul__vineta
                p.mb-0 El modelo conceptual representa el panorama general y semántico del negocio.
              li.mb-3
                i.lista-ul__vineta
                p.mb-0 El modelo lógico traduce el concepto en estructuras más técnicas (tablas y relaciones). 
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 El modelo físico se implementa directamente en un sistema de gestión de bases de datos (SGBD), considerando aspectos como índices, particiones y rendimiento.
          .col-lg-6.order-lg-1.order-1
            figure
              img(src='@/assets/curso/tema4/img21.jpg', alt='Imagen decorativa')
            
    .row.justify-content-center
      .col-lg-10.col-12
        p.mb-5(data-aos="fade-down") Para comprender mejor cómo se aplica el modelamiento de datos basado en reglas de negocio, resulta útil revisar un caso concreto que ilustre su implementación en un contexto real. Este ejemplo permite visualizar cómo se estructuran los datos, qué reglas se definen y cómo estas impactan en la eficiencia de los procesos empresariales.

    .row.justify-content-center.cajon.C02.mb-5
      .col-lg-10.col-12
        .row.justify-content-center.p-4(data-aos="flip-up")
          .col-lg-9.col-12.order-lg-2.order-2
            h4 En una empresa de logística:
            ul.lista-ul.mb-0
              li.mb-3
                i.lista-ul__vineta
                p.mb-0 La entidad <b>“Envío”</b> tiene atributos como número de guía, origen, destino, peso y estado.
              li.mb-3
                i.lista-ul__vineta
                p.mb-0 Una regla de negocio puede ser: <b>“si el estado del envío es ‘Entregado’, debe existir una fecha de entrega registrada”.</b>
              li.mb-3
                i.lista-ul__vineta
                p.mb-0 Estas reglas se traducen en validaciones automáticas dentro del sistema, previniendo errores como reportar entregas incompletas.
          .col-lg-3.col-md-7.col-12.mb-3.order-lg-1.order-1.mb-lg-0
            .row.justify-content-center(data-aos="flip-up")
              .col
                figure
                  img(src='@/assets/curso/tema4/img22.png', alt='Imagen decorativa')

    p.mb-0(data-aos="fade-down") El modelamiento de datos efectivo y basado en reglas de negocio es clave para que los sistemas de inteligencia artificial operen sobre bases estructuradas y confiables. Esto impacta directamente en la calidad de los análisis, las predicciones, las recomendaciones automáticas y cualquier otra funcionalidad basada en datos.

    separador
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.4 Metodologías de diseño e integración de datos

    p.mb-4(data-aos="fade-down") El diseño e integración de datos es un proceso esencial para garantizar que la información utilizada en sistemas de inteligencia artificial sea coherente, accesible y útil para el análisis. Para lograrlo, se aplican diversas metodologías que permiten estructurar y conectar datos de múltiples fuentes. Estas metodologías no solo organizan la información, sino que aseguran su calidad, trazabilidad y alineación con los objetivos del negocio.
    p.mb-5(data-aos="fade-down") A continuación, se presentan algunas de las metodologías y estrategias más relevantes:

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      SlyderF(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema4/img23.svg' alt='AvatarTop')
          h4.text-center Modelado entidad-relación (ER)
          p Permite representar gráficamente las relaciones entre entidades y atributos en una base de datos, facilitando su diseño lógico y estructurado.

        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema4/img24.svg' alt='AvatarTop')
          h4.text-center Modelado dimensional (esquema estrella o copo de nieve)
          p Se utiliza especialmente en sistemas de inteligencia empresarial, permitiendo organizar los datos para su análisis en almacenes o cubos OLAP.

        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema4/img25.svg' alt='AvatarTop')
          h4.text-center ETL (Extracción, Transformación y Carga)
          p Estrategia que consiste en extraer datos desde diversas fuentes, transformarlos según las necesidades del sistema y cargarlos en una base de datos central.

        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema4/img26.svg' alt='AvatarTop')
          h4.text-center Metodologías orientadas a objetos o servicios
          p Dependiendo del tipo de sistema, se pueden aplicar enfoques centrados en objetos o en componentes reutilizables para el modelado de datos.

        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema4/img27.svg' alt='AvatarTop')
          h4.text-center Herramientas de integración de datos
          p Plataformas como Talend, Apache NiFi, Microsoft SSIS o Informática facilitan la conexión, limpieza y sincronización de fuentes de datos heterogéneas.

        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema4/img28.svg' alt='AvatarTop')
          h4.text-center Integración en tiempo real
          p Uso de <em>middleware</em>, servicios web o APIs para sincronizar datos desde múltiples sistemas de forma continua y automatizada.

    .row.justify-content-center
      .col-lg-10.col-12
        p.mb-0(data-aos="fade-down") Estas metodologías favorecen una arquitectura de datos robusta, adaptable y alineada con las necesidades de la inteligencia artificial.

    separador
    #t_4_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.5 Principios de integralidad

    p.mb-5(data-aos="fade-down") La integralidad de los datos se refiere a la cualidad de que la información esté completa, sin omisiones significativas y que cada componente tenga sentido dentro del conjunto. Para garantizar esta integralidad, se deben aplicar los siguientes principios:

    .row.cajon.BG06.align-items-center.pt-3.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center
          .col-md-6.col-lg-4.mb-4.mb-md-0.d-lg-flex.d-none(data-aos="fade-right")
            img(src='@/assets/curso/tema4/img29.png', alt='Imagen decorativa')
          .col-md-8.col-lg-8.mb-4.mb-md-0(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-4")
              .tarjeta.tarjeta--C04.p-2
                .row.justify-content-center.mb-3
                  .col-lg-8.col-sm-4.col-6
                    img(src='@/assets/curso/tema4/img30.svg' alt='AvatarTop')
                h4.text-center Completitud
                p.text-center Todos los campos y registros necesarios deben estar presentes.

              .tarjeta.tarjeta--C04.p-2
                .row.justify-content-center.mb-3
                  .col-lg-8.col-sm-4.col-6
                    img(src='@/assets/curso/tema4/img31.svg' alt='AvatarTop')
                h4.text-center Coherencia
                p.text-center Los datos deben mantener consistencia entre distintas fuentes y formatos.

              .tarjeta.tarjeta--C04.p-2
                .row.justify-content-center.mb-3
                  .col-lg-8.col-sm-4.col-6
                    img(src='@/assets/curso/tema4/img32.svg' alt='AvatarTop')
                h4.text-center Exactitud
                p.text-center Los datos deben reflejar la realidad de forma precisa.

              .tarjeta.tarjeta--C04.p-2
                .row.justify-content-center.mb-3
                  .col-lg-8.col-sm-4.col-6
                    img(src='@/assets/curso/tema4/img33.svg' alt='AvatarTop')
                h4.text-center Auditabilidad
                p.text-center Debe existir trazabilidad que permita verificar el origen y las transformaciones  aplicadas a los datos.

              .tarjeta.tarjeta--C04.p-2
                .row.justify-content-center.mb-3
                  .col-lg-8.col-sm-4.col-6
                    img(src='@/assets/curso/tema4/img34.svg' alt='AvatarTop')
                h4.text-center Actualización 
                p.text-center Los datos deben estar al día y reflejar los cambios en los sistemas de origen.

    .row.justify-content-center
      .col-lg-10.col-12
        p.mb-0(data-aos="fade-down") Aplicar estos principios asegura que los modelos de inteligencia artificial operen sobre bases sólidas y confiables, permitiendo resultados precisos y decisiones fundamentadas.

</template>

<script>
export default {
  name: 'Tema4',
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
