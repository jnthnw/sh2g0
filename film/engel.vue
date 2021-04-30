<template>
  <filmbase
    name="Engel"
    subtitle='"If you exorcise your devils, may your angels leave to." - Tom Waits'
    film="https://player.vimeo.com/video/392341013"
               dauer=""
    year="2017"
    genre=""
    esSpielen=""
  >
    <template v-slot:description>
      Zwischen diesen beiden Gedanken bewegt sich der Kurzfilm um Sehnsucht,
      Liebe und Tod.
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
