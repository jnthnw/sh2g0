<template>
  <filmbase
    name="THE MISSUNDERSTANDING"
    subtitle="ALBERT CAMUS"
    film="https://player.vimeo.com/video/397780003"
    esSpielen="Rahel Schoeppenthau, Luisa Binger"
  >
    <template v-slot:description>
      <p>rahel-schoeppenthau.com</p>
      <p>luisabinger.com</p>
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
