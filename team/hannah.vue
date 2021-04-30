<template>
  <teambase full_name="Hanna Müller" image="hannah.jpg">
    <template v-slot:content>
      Hannah Müller ist in Stuttgart aufgewachsen und studiert Theater- und
      Veranstaltungstechnik an der Beuth Hochschule für Technik Berlin. Sie hat
      bereits bei einigen freien Filmproduktionen mitge-arbeitet und ist beim
      Rundfunk Berlin Brandenburg als Technische Hilfskraft angestellt. Außerdem
      ist sie Hobbykünstlerin. Bei Shakespeare2go übernimmt sie die technische
      Leitung von Theater- und Filmprojekten und unterstützt Sonja Holzinger in
      der Produktion.
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
