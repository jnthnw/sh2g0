<template>
  <filmbase
    name="Cattleya"
    film="https://player.vimeo.com/video/364543116"
    dauer="14 min"
    year="2019"
    genre="Fiktion"
    esSpielen=""
  >
    <template v-slot:description>
      Ein ungleiches Schwesternpaar muss lernen, miteinander klarzukommen. Doch
      die junge Cathleen macht es ihrer großen Schwester Doris alles andere als
      leicht. ​
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
