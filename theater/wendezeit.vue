<template>
  <filmbase
    name="WENDEZEIT ZEITENWENDE"
    subtitle="oder DEMO KRATIE"
    film="https://player.vimeo.com/video/314037761"
    year=""
    esSpielen="das Ensemble von SH2GO"
  >
    <template v-slot:description>
      <p>
      Kunst kann Menschen miteinander ins Gespräch bringen, die nicht die gleiche Sprache sprechen. (Steven Cohen)
      </p>
      <p>
        eine absurde Komödie nach Goldoni
      </p>
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
