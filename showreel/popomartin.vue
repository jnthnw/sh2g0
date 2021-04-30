<template>
  <filmbase
    name="POPO MARTIN"
    subtitle=""
    film="https://player.vimeo.com/video/397778625"
    esSpielen="Rahel Schoeppenthau"
  >
    <template v-slot:description>
      <p>rahel-schoeppenthau.com</p>
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
