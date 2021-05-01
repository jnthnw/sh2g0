<template>
  <filmbase
    name="Fräulein Julie"
    subtitle="nach August Strindberg"
    film=""
    year="2021"
    dauer=""
    esSpielen=""
  >
    <template v-slot:description>
    Was passiert, wenn jemand mit seinen Grenzen spielt? Als Julies Vater, der Graf, das Anwesen für einen Tag verlässt, feiert die junge Adlige im Kreis der Dienerschaft ausgelassen die Johannisnacht. Julie hat ein Auge auf Jean, den Diener geworfen. Er, der seine Herrin für ihre Klasse und ihr unangemessenes Verhalten verachtet, will mit seiner Verlobten, Christine, den Abend verbringen, doch die übermütige Julie schafft es, Jean in ein Spiel zu verwickeln, aus dem ein Geschlechterkampf entbrennt. So treiben Sie es beide - getrieben aus Stolz, gegenseitiger Verachtung und wegen des Reizes and der Sexualität und verbunden durch den Wunsch, den gesellschaftlichen Konventionen zu entfliehen - soweit,  bis aus dem Spiel bitterer Ernst wird.

    </template>
  </filmbase>
</template>


<script>
export default {
  components: {
    filmbase: Vue.defineAsyncComponent(() =>
      loadModule("./film/film_base.vue", options)
    ),
  },
};
</script>
