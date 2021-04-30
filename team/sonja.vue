<template>
  <teambase full_name="Sonja Holzinger" image="sonja.jpg">
    <template v-slot:content>
      <p>
        Sonja Holzinger studierte Literatur-Kunst-Medien an der Universität
        Konstanz. Während Ihres Studiums absolvierte Sie Praktika in der
        Spielfilmredaktion von ARTE und beim Goethe-Institut Toulouse. Von 2018
        bis 2020 arbeitete sie als Produktionsassistentin bei der Berliner
        Filmproduktionsfirma solo:film GmbH und für den Filmemacher Douglas
        Wolfsperger.
      </p>
      <p>
        Seit Oktober 2020 studiert sie an der Filmuniversität KONRAD WOLF
        Medienwissenschaft.
      </p>
    </template>
  </teambase>
</template>
<script>
export default {
  components: {
    teambase: Vue.defineAsyncComponent(() =>
      loadModule("./team/team_base.vue", options)
    ),
  },
};
</script>
