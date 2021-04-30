<template>
  <filmbase
    name="ALLES WIRD GUT"
    subtitle=""
    film="https://player.vimeo.com/video/255608913"
    dauer=""
    year="2018"
    genre=""
    esSpielen=""
  >
    <template v-slot:description> </template>
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
