<template>
  <filmbase
    name="MISSTRAUEN IST DIE INTELLIGENZ DER BENACHTEILIGTEN"
    film="https://player.vimeo.com/video/295788435"
    year="2017-2019"
    dauer="ca. 60 - 120 min"
    esSpielen="das Ensemble von SH2GO"
  >
    <template v-slot:description>
      <p>Wir schauen, aber wir sehen nichts.</p>
      <p>Wir sprechen, aber kommunizieren nicht.</p>
      <p>Wir wissen, aber haben keine Ahnung.</p>
      <p>Wir hoffen, aber wir glauben nicht.</p>
      <p>Wir verstehen, aber begreifen nichts.</p>
      <p>Wir besitzen alles, aber haben nur ein bisschen.</p>
      <p>Wir bewegen uns pausenlos, aber wir kommen nicht an.</p>
      <p>Wir leben und erleben nichts.</p>
      <p></p>
      <p></p>
      <p>Shakespeare2go begibt sich auf einen Streifzug durch unsere Leben:</p>
      <p>
        MISSTRAUEN IST DIE INTELLIGENZ DER BENACHTEILIGTEN - Ist eine Collage
        aus Szenen und Kommentaren aus dem Alltag zwischen Privatheit und
        Gesellschaft, ein Kaleidoskop unserer Kultur.
      </p>
      <p>
        Die Hoffnung stirbt zuerst und das Lachen ist ein Weg - zurück zu uns.
      </p>
      <p>Denn wir sind die Menschen, die wir fürchten.</p>
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
