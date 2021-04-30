<template>
  <filmbase
    name="KEINE EXPERIMENTE"
    subtitle="denn wir werden die Welt verändern!"
    film="https://player.vimeo.com/video/306498310"
    trailer="https://player.vimeo.com/video/393311234"
    dauer="15 min"
    year="2019"
    genre="Fiktion"
    esSpielen=""
  >
    <template v-slot:description>
      Nik will Blume, Blume will Liebe, Lou will Erik und Erik will Revolution.
      Vier linke Terroristen planen einen antifaschistischen Anschlag. Obwohl
      sie alle ein Ziel haben, handeln sie nach unterschiedlichen Interessen. ​

      <p>Fiktion, 15 Minuten, 2019</p>
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
