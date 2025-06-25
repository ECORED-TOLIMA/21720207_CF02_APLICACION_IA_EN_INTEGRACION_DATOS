<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p Este componente formativo aborda el uso estratégico de la inteligencia artificial para la integración y el análisis de datos, explorando desde sus principios fundamentales hasta sus aplicaciones en la vida cotidiana y la industria. Profundiza en herramientas generativas, el diseño de <em>prompts</em> efectivos y consideraciones éticas en el modelamiento. Además, presenta técnicas de preparación, limpieza e integración de datos, junto con la aplicación de la estadística descriptiva como soporte para la calidad y la toma de decisiones. Finalmente, introduce el aprendizaje automático, sus algoritmos, herramientas de analítica y métodos de validación, brindando una visión integral para resolver problemas reales mediante soluciones basadas en datos.
    

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Texto alternativo: En la síntesis se presenta un mapa conceptual que organiza los temas principales del componente formativo, distribuidos en seis ejes: fundamentos de la inteligencia artificial, herramientas generativas, interacción con modelos, preparación de datos, estadística aplicada y aprendizaje automático. Cada eje describe subtemas clave y sus relaciones para facilitar la comprensión integral del contenido.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
