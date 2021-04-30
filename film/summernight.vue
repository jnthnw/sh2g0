<template>
  <filmbase
    name="SUMMERNIGHT TALENTS"
    subtitle=""
    film="https://player.vimeo.com/video/393144689"
             dauer="15 min"
    year="2018"
    genre=""
    esSpielen=""
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
