<template>
  <filmbase
    name="ERIC LUST"
    subtitle="INTERVIEW MIT EINEM COWBOY"
    film="https://player.vimeo.com/video/397779638"
    esSpielen="Luisa Binger"
  >
    <template v-slot:description>

      luisabinger.com

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
