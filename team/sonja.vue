<template>
  <teambase full_name="Sonja Holzinger" image="sonja.jpg">
    <template v-slot:content>
      <p>
        Sonja Holzinger studierte Literatur-Kunst-Medien an der Universität
        Konstanz. Während Ihres Studiums absolvierte Sie Praktika in der
        Spielfilmredaktion von ARTE und beim Goethe-Institut Toulouse. Von 2018
        bis 2019 arbeitete sie als Produktionsassistentin bei der Berliner
        Filmproduktionsfirma solo:film GmbH. Darauf arbeitete Sie als
        Assistentin für den Filmemacher Douglas Wolfsperger.
      </p>
      <p>
        Im Oktober beginnt Sie den Master Medien-wissenschaft an der
        Filmuniversität Babelsberg KONRAD WOLF.
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
