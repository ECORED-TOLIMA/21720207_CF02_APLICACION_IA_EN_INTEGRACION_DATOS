<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-5(data-aos="fade-down") Este componente formativo explora cómo la inteligencia artificial transforma el análisis y la integración de datos en entornos reales. A través del estudio de principios fundamentales, herramientas generativas, técnicas de preparación e integración de datos, estadística aplicada y aprendizaje automático, se ofrece una visión estratégica del uso de los datos como recurso clave para la toma de decisiones inteligentes y automatizadas. Para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video:
    
    .row.justify-content-center.align-items-center.mb-0           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/oprbe7CHaUc?si=CcllSeUuemO621gQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
