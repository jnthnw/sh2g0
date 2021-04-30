<template>
  <filmbase
    name="GESTERN. HEUTE. MORGEN."
    subtitle=""
    film="https://player.vimeo.com/video/241893906"
  >
    <template v-slot:description>
  
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
