<template>
  <filmbase
    name="​INSOMNIA oder IRGENDWANN"
    subtitle=""
    film="https://player.vimeo.com/video/266283715"
    year="2018-2019"
    dauer="ca. 120 min"
    esSpielen="Carlotta Schilke, Marieke Gester, Stephanie Seiller-Tarbuk, Louise
        Debatin, Tobias Neumann, Tristan Bumm, Moritz Wigger, Julius Warmuth"
  >
    <template v-slot:description>
      <p>TRÄUME.</p>
      <p>INSOMNIA.</p>
      <p>IRGENDWANN.</p>

      <p>
        Die verrauchte Kneipe um die Ecke – ein ganz eigener Kosmos. Im Equinox
        treffen 8 Gestalten aufeinander, die unterschiedlicher nicht sein
        könnten. Sie alle sind getrieben von Schlaflosigkeit, hin und her
        gerissen im Kampf mit dem Selbst und ihren Träumen und Zweifeln. Sie
        alle fliehen immer wieder in das Wohnzimmer um die Ecke, in der
        Hoffnung, dass irgendwann…
      </p>

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
