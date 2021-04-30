<template>
  <filmbase
    name="MIRANDA"
    subtitle="eine absurde Komödie nach Goldoni"
    film="https://player.vimeo.com/video/347071070"
    year=""
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
