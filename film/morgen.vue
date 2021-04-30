<template>
  <filmbase
    name="MORGEN IST AUCH NOCH EIN TAG, WENN DU WILLST (AT)"
    film=""
    trailer=""
  >
    <template v-slot:description>
      Marcus ist unterwegs, wieder. Claudia ist auch unterwegs, unterwegs zu
      Jana. Und Jana? Für Jana ist alles, wie es halt ist.
    </template>
    <template v-slot:team>
      <div class="row">
        <div class="col-12 col-sm-6">Drehbuch</div>
        <div class="col-12 col-sm-6">Andreas Neu</div>
      </div>
      <div class="row">
        <div class="col-12 col-sm-6">Regie</div>
        <div class="col-12 col-sm-6">David Gräber</div>
      </div>
      <div class="row">
        <div class="col-12 col-sm-6">Produktion</div>
        <div class="col-12 col-sm-6">Sonja Holzinger</div>
      </div>
      <div class="row">
        <div class="col-12 col-sm-6">Assistenz</div>
        <div class="col-12 col-sm-6">Hannah Müller</div>
      </div>
      <div class="row">
        <div class="col-12 col-sm-6">Kostüm & Maske</div>
        <div class="col-12 col-sm-6">Luisa Liebe</div>
      </div>
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
