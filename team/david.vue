<template>
  <teambase full_name="David Gräber" image="david.jpg">
    <template v-slot:content>
      <p>
        David Gräber wurde am 19. Juli 1996 in Radolfzell am Bodensee geboren.
        Nach dem Abitur absolvierte er Praktika beim Südwestrundfunk wie bei
        kleinen Filmproduktionen. Danach arbeitete er in verschiedenen Projekten
        als Kameramann und realisierte mit Shakespeare2go fünf Filmprojekte,
        wobei er bei vier auch die Regie übernahm.
      </p>
      <p>
        Im Zeitraum von fünf Jahren fertigte David Gräber über fünfzig Kurzfilme
        dokumentarischer und fiktiver Art. Er arbeitete als Regie- und
        Schnittassistent bei der Berliner Produktionsfirma solo:film Gmbh und
        als Autor für die Filmhaus GmbH.
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
