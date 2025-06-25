<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 3
      h1 Interacción con modelos generativos

    .row.justify-content-center.mb-5
      .col-12(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema3/img01.png', alt='Imagen decorativa')

    p.mb-0(data-aos="fade-down") La interacción con modelos generativos se ha convertido en una habilidad clave en la era de la inteligencia artificial. Estos modelos, como los basados en arquitecturas de lenguaje (por ejemplo, GPT) o generadores visuales (como DALL·E o Midjourney), responden a instrucciones llamadas <em>prompts</em>. La calidad de estas respuestas depende en gran medida de cómo se estructura dicha instrucción, por lo que entender las técnicas de <em>prompting</em> es esencial para obtener resultados relevantes, éticos y útiles en diversos contextos.

    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Concepto de <em>prompt</em> y principios de <em>prompting</em>

    .row.tarjeta--BG05.px-md-5.px-4
      p.mb-5(data-aos="fade-down") En el contexto de la inteligencia artificial generativa, el término <em>prompt</em> se refiere a la instrucción o conjunto de instrucciones que una persona proporciona a un modelo para que este genere una respuesta coherente, creativa y útil. Es, en esencia, la interfaz comunicativa entre el ser humano y la máquina. El <em>prompt</em> puede adoptar múltiples formas: una pregunta, una orden, una descripción o incluso un conjunto de ejemplos.

      .row.justify-content-center.mb-5(data-aos="flip-up")
        .col-lg-10.col-12
          .row.justify-content-center.mb-5
            .col-lg-8.col-12.order-lg-2.order-2
              .cajon.cajon.C01.color-primario.p-4.mb-3
                p.mb-0 Aunque pueda parecer una acción sencilla, formular un <em>prompt</em> efectivo es una habilidad que requiere práctica y comprensión del comportamiento del modelo. Un mismo modelo puede producir respuestas muy distintas dependiendo de cómo se redacta el <em>prompt</em>. Por ejemplo, ante un modelo de lenguaje, no es lo mismo decir “Explica la fotosíntesis” que “Explica la fotosíntesis en términos simples para un niño de 8 años”. En el segundo caso, el <em>prompt</em> está dirigido a un público específico, lo que orienta mejor la respuesta.
              
            .col-lg-4.col-md-7.col-12.mb-3.order-lg-1.order-1.mb-lg-0
              .row.justify-content-center(data-aos="flip-up")
                .col
                  figure
                    img(src='@/assets/curso/tema3/img02.png', alt='Imagen decorativa')

          p.mb-0(data-aos="fade-down") Para lograr interacciones eficaces con modelos generativos, es importante tener en cuenta ciertos principios de <em>prompting</em> que ayudan a estructurar adecuadamente las instrucciones:

    .row.justify-content-center.align-items-center(data-aos="flip-up")
      .col-lg-10.col-12.mb-0
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-7.col-12.mb-5.mb-md-0.order-lg-1.order-2.mb-lg-0
            LineaTiempoD.color-acento-botones.especial
              .row(numero="1" titulo="Claridad")
                .col-12.mb-4.mb-md-0
                  p.mb-0 El <em>prompt</em> debe ser directo, específico y libre de ambigüedades. Un <em>prompt</em> confuso puede producir respuestas irrelevantes o incoherentes. En lugar de “Háblame de economía”, es mejor usar “Resume las diferencias entre economía de mercado y economía planificada”.

              .row(numero="2" titulo="Contextualización")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Incluir información de fondo o un entorno determinado ayuda al modelo a situar su respuesta. Por ejemplo: “Actúa como un asesor financiero y explica a un cliente los beneficios de invertir en bonos”.

              .row(numero="3" titulo="Delimitación del formato")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Es útil indicar la forma en la que se espera la respuesta: un listado, una tabla, una carta formal, un resumen, una narración creativa, etc. Esto orienta al modelo sobre la estructura deseada.

              .row(numero="4" titulo="Lenguaje positivo y no sesgado")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Es importante evitar construcciones que promuevan estereotipos o contengan términos ofensivos. Además, se debe tener cuidado de no inducir al modelo a emitir juicios que no están respaldados por datos confiables.

              .row(numero="5" titulo="Iteración como proceso de mejora")
                .col-12.mb-4.mb-md-0
                  p.mb-0 La calidad de los resultados mejora al refinar el <em>prompt</em> después de observar los primeros intentos del modelo. Un usuario experto ajusta, combina o reformula instrucciones hasta alcanzar un resultado satisfactorio.

              .row(numero="6" titulo="Simulación de roles")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Atribuir un rol al modelo ayuda a darle un marco de referencia. Ejemplo: “Eres un profesor de historia explica el Renacimiento a estudiantes universitarios”.
              
              .row(numero="7" titulo="Control del estilo y tono")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Se puede pedir una respuesta formal, humorística, técnica, académica o amigable, dependiendo del propósito. Ejemplo: “Escribe una explicación técnica sobre la computación cuántica en un tono divulgativo”.
          .col-lg-5.col-sm-4.col-5.order-lg-1.order-2.mb-lg-0.mb-4.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema3/img03.png', alt='Imagen decorativa')
    
    p.mb-0(data-aos="fade-down") En conjunto, dominar estos principios permite no solo obtener respuestas más precisas, sino también aprovechar de forma responsable y creativa el potencial de los modelos generativos. Esta habilidad, conocida como <em>prompt</em> engineering, se está consolidando como una competencia clave en campos como la educación, el análisis de datos, la programación, la comunicación, el diseño y muchos otros.

    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Técnicas de mejora de la interacción

    p.mb-4(data-aos="fade-down") La interacción efectiva con modelos generativos, como los basados en inteligencia artificial, depende en gran medida de cómo se estructura la comunicación entre el usuario y el modelo. Para lograr que los resultados generados sean precisos, útiles y alineados con los objetivos del usuario, existen técnicas específicas que permiten optimizar esta interacción. Estas técnicas no solo mejoran la calidad de las respuestas, sino que también contribuyen a reducir el tiempo necesario para llegar al resultado esperado.

    p.mb-5(data-aos="fade-down") A continuación, se presentan algunas de las técnicas más relevantes para mejorar la interacción con modelos generativos:

    .tarjeta.tarjeta--BG02.p-4.p-md-5.mb-5(data-aos="flip-up")
      .tarjeta.tarjeta--blanca.p-4
        PasosB.color-acento-botones
          .row.justify-content-center.p-4(titulo=" ")
            .col-lg-6.order-lg-1.order-2
              h4 Ingeniería de <em>prompts</em> iterativa
              p Consiste en realizar ajustes progresivos al <em>prompt</em> inicial basándose en las respuestas que ofrece el modelo. Esta técnica permite identificar patrones, ambigüedades o limitaciones en las instrucciones dadas, y afinar la redacción para lograr mayor precisión. A continuación, se presenta un ejemplo:
              .cajon.cajon.C02.p-4.mb-3
                ul.lista-ul.mb-0
                  li.mb-3
                    i.lista-ul__vineta
                    p.mb-0 <b>Prompt inicial</b>: resume la Segunda Guerra Mundial.
                  li.mb-0
                    i.lista-ul__vineta
                    p.mb-0 <b>Iteración</b>: resume las causas principales de la Segunda Guerra Mundial en 5 frases para estudiantes de secundaria.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema3/img04.jpg', alt='Imagen decorativa')

          .row.justify-content-center.p-4(titulo=" ")
            .col-lg-6.order-lg-1.order-2
              h4 Descomposición de tareas complejas
              p Cuando una solicitud es muy amplia o involucra múltiples pasos, es recomendable dividirla en partes más manejables. Esto facilita que el modelo comprenda mejor el objetivo de cada sección y dé respuestas más enfocadas. A continuación, se presenta un ejemplo:
              .cajon.cajon.C02.p-4.mb-3
                p.mb-4 En lugar de pedir “Diseña un plan de negocios completo”, se puede dividir en:
                ul.lista-ul.mb-0
                  li.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Describe la propuesta de valor.
                  li.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Establece el perfil del cliente objetivo.
                  li.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Propón una estrategia de <em>marketing</em> inicial, etc.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema3/img05.jpg', alt='Imagen decorativa')

          .row.justify-content-center.p-4(titulo=" ")
            .col-lg-6.order-lg-1.order-2
              h4 Uso de ejemplos en el <em>prompt</em>
              p.mb-4 Agregar ejemplos concretos en el <em>prompt</em> ayuda a contextualizar la tarea, mostrando al modelo el tipo de respuesta esperada. Esta técnica es especialmente útil para tareas repetitivas o con formatos específicos. A continuación, se presenta un ejemplo:
              .cajon.cajon.C02.p-4.mb-3
                p.mb-4 Completa la siguiente lista de ventajas de la energía solar:
                ul.lista-ul.mb-0
                  li.mb-0
                    i.lista-ul__vineta
                    p.mb-0 No produce emisiones contaminantes.
                  li.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Recurso renovable.
                  li.mb-0
                    i.lista-ul__vineta
                    p.mb-0 “...”
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema3/img06.jpg', alt='Imagen decorativa')

          .row.justify-content-center.p-4(titulo=" ")
            .col-lg-6.order-lg-1.order-2
              h4 Indicaciones sobre el formato de salida
              p Especificar el tipo de salida deseada (tabla, lista, texto argumentativo, código, entre otros) mejora la claridad de los resultados y permite integrarlos más fácilmente en otros entornos de trabajo. A continuación, se presenta un ejemplo:
              .cajon.cajon.C02.p-4.mb-3
                p.mb-0 Escribe los pasos de una receta en formato de lista numerada.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema3/img08.jpg', alt='Imagen decorativa')

          .row.justify-content-center.p-4(titulo=" ")
            .col-lg-6.order-lg-1.order-2
              h4 Simulación de roles o perfiles
              p Solicitar al modelo que actúe desde una perspectiva específica (como un profesional, personaje o experto en un área) puede mejorar significativamente la calidad y el enfoque de la respuesta. A continuación, se presenta un ejemplo:
              .cajon.cajon.C02.p-4.mb-3
                p.mb-0 Actúa como un nutricionista y sugiere un plan alimenticio para un adolescente deportista.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema3/img09.jpg', alt='Imagen decorativa')

          .row.justify-content-center.p-4(titulo=" ")
            .col-lg-6.order-lg-1.order-2
              h4 Control del estilo, tono y extensión
              p Indicar cómo debe ser el tono del texto (formal, coloquial, técnico, motivador), su longitud (breve, extenso, resumen, esquema) y estilo (narrativo, expositivo, instructivo) proporciona un marco más claro para la generación de contenidos. A continuación, se presenta un ejemplo:
              .cajon.cajon.C02.p-4.mb-3
                p.mb-0 Resume el siguiente texto en 100 palabras usando un lenguaje accesible para personas no expertas.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema3/img10.jpg', alt='Imagen decorativa')

          .row.justify-content-center.p-4(titulo=" ")
            .col-lg-6.order-lg-1.order-2
              h4 Retroalimentación constructiva
              p En ambientes donde es posible interactuar continuamente con el modelo, se puede usar la retroalimentación como forma de refuerzo para ajustar la calidad de los resultados. A continuación, se presenta un ejemplo:
              .cajon.cajon.C02.p-4.mb-3
                p.mb-0 “Más claro”, “Hazlo más técnico”, “Amplía la segunda parte”.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema3/img07.jpg', alt='Imagen decorativa')

    
    .row.justify-content-center.mb-0
      .col-lg-10.col-12
        p.mb-0(data-aos="fade-down") Estas técnicas pueden combinarse de forma estratégica para enfrentar distintos retos comunicativos. Su dominio no solo facilita el uso efectivo de la inteligencia artificial, sino que también potencia la creatividad y productividad del usuario en contextos educativos, laborales y profesionales.

    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Ejemplos de <em>prompts</em> efectivos y no efectivos

    p.mb-5(data-aos="fade-down") La forma en que se formula un <em>prompt</em> determina en gran medida la calidad y pertinencia de la respuesta generada por un modelo de inteligencia artificial. Un <em>prompt</em> poco claro o ambiguo puede conducir a respuestas genéricas o irrelevantes, mientras que un <em>prompt</em> bien diseñado puede guiar al modelo hacia una respuesta precisa, coherente y útil. A continuación, se presentan ejemplos comparativos entre <em>prompts</em> no efectivos y sus versiones mejoradas, explicando brevemente las razones del cambio:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span <em>Clasificación según el tipo</em>          
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(style= "width: 30%") <em>Prompt</em> no efectivo
                th(style= "width: 35%") <em>Prompt</em> efectivo
                th(style= "width: 35%") Elementos que lo hacen efectivo
            tbody
              tr
                td(style="background-color: #F6F6F6") ¿Qué es el cambio climático?
                td(style="background-color: #F6F6F6") Explica qué es el cambio climático en un párrafo breve y con lenguaje sencillo, como si se lo explicaras a un estudiante de secundaria.
                td(style="background-color: #F6F6F6") Define el formato (un párrafo), el tono (sencillo) y el público (estudiante), lo que guía mejor la respuesta.
              tr
                td Hazme una lista de ideas.
                td Haz una lista de 5 ideas creativas para promover la lectura entre jóvenes en redes sociales.
                td Especifica la cantidad (5), el enfoque (creativas), el propósito (promover lectura) y el contexto (redes sociales).
              tr
                td(style="background-color: #F6F6F6") Escribe un ensayo.
                td(style="background-color: #F6F6F6") Escribe un ensayo argumentativo de 300 palabras sobre los beneficios de la inteligencia artificial en la educación.
                td(style="background-color: #F6F6F6") Establece el tipo de texto (argumentativo), la extensión (300 palabras) y el tema concreto.
              tr
                td Explica la inteligencia artificial.
                td Describe la inteligencia artificial como si estuvieras explicándosela a un niño de 10 años, usando ejemplos cotidianos.
                td Indica el público (niño de 10 años) y sugiere usar ejemplos, lo que enfoca la complejidad y estilo del contenido.
              tr
                td(style="background-color: #F6F6F6") Dime algo sobre reciclaje.
                td(style="background-color: #F6F6F6") Resume en 3 frases los principales beneficios del reciclaje para el medio ambiente.
                td(style="background-color: #F6F6F6") Limita la extensión (3 frases), especifica el tema (beneficios) y el enfoque (medio ambiente), haciendo la instrucción clara.

    .row.justify-content-center.mb-5
      .col-lg-10.col-12.order-lg-2.order-2
        .cajon.cajon.C01.color-primario.p-4.mb-3
          p.mb-0 Estos ejemplos evidencian la importancia de estructurar los <em>prompts</em> con intención, claridad y contexto. Un <em>prompt</em> efectivo proporciona al modelo las condiciones necesarias para generar resultados alineados con las expectativas del usuario. Dominar este aspecto es clave para aprovechar al máximo las capacidades de los sistemas de inteligencia artificial generativa. 

    separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4 Casos de uso prácticos

    p.mb-5(data-aos="fade-down") La interacción con modelos generativos de inteligencia artificial se ha vuelto cada vez más común en diversos sectores, gracias a su capacidad para comprender instrucciones complejas y generar contenido útil en múltiples formatos. Los siguientes casos prácticos muestran cómo los <em>prompts</em> bien diseñados permiten aprovechar eficazmente estas herramientas en entornos reales:

    TabsB.color-acento-botones.mb-5(data-aos="flip-up")
      .py-4.py-md-5(titulo="Educación personalizada" :icono="require('@/assets/curso/tema3/img11.svg')")
        .row.justify-content-center.p-4
          .col-lg-5.order-lg-2.order-2
            p Los instructores pueden generar materiales didácticos adaptados al nivel de los aprendices mediante <em>prompts</em> específicos.
            p Por ejemplo, un <em>prompt</em> como “Crea una guía de estudio sobre fracciones para aprendices del técnico en contabilidad con ejercicios resueltos”, puede producir contenido claro y apropiado para su nivel.
          .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema3/img12.jpg', alt='Imagen decorativa')

      .py-4.py-md-5(titulo="Generación de contenido en <em>marketing</em>" :icono="require('@/assets/curso/tema3/img13.svg')")
        .row.justify-content-center.p-4
          .col-lg-5.order-lg-2.order-2
            p Profesionales del <em>marketing</em> utilizan modelos generativos para redactar publicaciones, slogans o guiones publicitarios.
            p Un <em>prompt</em> como “Escribe un texto persuasivo para promocionar una bebida energética entre jóvenes de 18 a 25 años”, genera mensajes enfocados en un público específico.
          .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema3/img14.jpg', alt='Imagen decorativa')

      .py-4.py-md-5(titulo="Asistencia en programación" :icono="require('@/assets/curso/tema3/img15.svg')")
        .row.justify-content-center.p-4
          .col-lg-5.order-lg-2.order-2
            p Desarrolladores pueden usar <em>prompts</em> para escribir o depurar fragmentos de código.
            p Por ejemplo, “Escribe una función en Python que ordene una lista de números de mayor a menor”, permite obtener rápidamente soluciones funcionales.
          .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema3/img16.jpg', alt='Imagen decorativa')

      .py-4.py-md-5(titulo="Atención automática al cliente" :icono="require('@/assets/curso/tema3/img17.svg')")
        .row.justify-content-center.p-4
          .col-lg-5.order-lg-2.order-2
            p Las empresas entrenan modelos generativos para responder preguntas frecuentes con lenguaje natural.
            p Un <em>prompt</em> como “Simula una conversación donde el cliente pregunta por el estado de su pedido y recibe una respuesta cordial y clara”, permite generar ejemplos útiles para bots o asistentes.
          .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema3/img18.jpg', alt='Imagen decorativa')

      .py-4.py-md-5(titulo="Apoyo en redacción académica" :icono="require('@/assets/curso/tema3/img19.svg')")
        .row.justify-content-center.p-4
          .col-lg-5.order-lg-2.order-2
            p Aprendices emplean <em>prompts</em> para redactar resúmenes, ensayos o introducciones.
            p Por ejemplo, “Resume en 100 palabras un artículo sobre cambio climático con enfoque crítico”, permite sintetizar información clave manteniendo el enfoque solicitado.
          .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema3/img20.jpg', alt='Imagen decorativa')

    .row.justify-content-center.mb-0
      .col-lg-10.col-12.order-lg-2.order-2
        p.mb-0 Estos casos muestran que la clave del éxito radica en diseñar <em>prompts</em> precisos, contextualizados y enfocados en el resultado esperado, permitiendo así que los modelos generativos sean herramientas efectivas en entornos reales.

    separador
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.5 Consideraciones éticas y sesgos en el modelamiento de datos

    p.mb-5(data-aos="fade-down") El desarrollo y aplicación de modelos de inteligencia artificial, especialmente los generativos, debe regirse por principios éticos fundamentales que garanticen un uso responsable, justo y transparente de los datos. En este contexto, las consideraciones éticas no son opcionales, sino esenciales para evitar impactos negativos en la sociedad y asegurar que los beneficios de la IA se distribuyan de forma equitativa.

    .row.tarjeta--BG05.px-md-5.px-4
      .row.justify-content-center.mb-5(data-aos="flip-up")
        .col-lg-10.col-12
          .row.justify-content-center.mb-5
            .col-lg-7.col-12.order-lg-1.order-2
              p Uno de los principales desafíos éticos es la presencia de sesgos en los datos. Los modelos de IA aprenden a partir de los datos que se les suministran; si estos contienen prejuicios, estereotipos o representaciones desproporcionadas de ciertos grupos, el modelo replicará y amplificará dichos sesgos en sus resultados. Esto puede llevar a discriminación en decisiones automatizadas como contrataciones, acceso a servicios financieros o diagnósticos médicos. Es fundamental aplicar técnicas de evaluación y corrección de sesgos antes, durante y después del entrenamiento de los modelos.
              p También se debe considerar el respeto a la privacidad y la protección de los datos personales. El uso indebido o no autorizado de datos sensibles puede tener consecuencias legales y éticas graves. Es importante aplicar principios como la minimización de datos, el consentimiento informado, el anonimato y la seguridad en el almacenamiento y procesamiento de la información. Las leyes de protección de datos, como el GDPR en Europa o la Ley 1581 de 2012 en Colombia, establecen directrices claras para proteger los derechos de los ciudadanos.
            .col-lg-5.col-md-7.col-12.mb-3.order-lg-2.order-1.mb-lg-0
              .row.justify-content-center(data-aos="flip-up")
                .col
                  figure
                    img(src='@/assets/curso/tema3/img21.png', alt='Imagen decorativa')

          .row.justify-content-center.mb-5
            .col-lg-10.col-12.order-lg-2.order-2
              .cajon.cajon.C01.color-primario.p-4.mb-3
                p.mb-0 Otro aspecto crucial es la explicabilidad y transparencia de los modelos. Muchas veces, los algoritmos se comportan como “cajas negras”, dificultando la comprensión de cómo llegan a ciertas conclusiones. La explicabilidad permite que los usuarios y auditores entiendan los criterios utilizados en las decisiones automatizadas, lo cual es esencial para generar confianza y para corregir errores o sesgos indeseados.

    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col-lg-10.col-12
        .row.justify-content-center
          .col-lg-7.col-12.order-lg-2.order-2
            p Además, debe garantizarse la responsabilidad algorítmica, es decir, que exista una trazabilidad clara sobre quién diseña, entrena y supervisa los modelos, y que se establezcan mecanismos para responder ante posibles fallos o impactos negativos. Esto incluye la implementación de políticas éticas internas, comités de revisión de IA, y auditorías periódicas de los sistemas.
            p Finalmente, es importante fomentar una alfabetización ética en IA, promoviendo una cultura de responsabilidad en el uso de estas tecnologías tanto entre desarrolladores como entre usuarios. La ética no es solo una etapa del desarrollo, sino un eje transversal que debe guiar todas las decisiones en torno al modelamiento de datos y el diseño de sistemas inteligentes.
          .col-lg-5.col-md-7.col-12.mb-3.order-lg-1.order-1.mb-lg-0
            .row.justify-content-center(data-aos="flip-up")
              .col
                figure
                  img(src='@/assets/curso/tema3/img22.png', alt='Imagen decorativa')

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
