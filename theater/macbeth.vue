<template>
  <filmbase
    name="MACBETH"
    subtitle="Töten. Das ist einfach."
    film="https://player.vimeo.com/video/354973754"
    dauer="ca. 80 min"
    esSpielen="das Ensemble von SH2GO"
  >
    <template v-slot:description>
      <p>
        Solange man als Krieger auf dem Schlachtfeld steht. General Macbeth
        schlägt eine Revolte gegen seinen König Duncan nieder und wird im
        Gegenzug mit Amt und Würden des Abtrünnigen Than von Cawdor belohnt.
        Damit tritt für Macbeth und seinen Kampfgefährten Banquo die erste von
        vier Prophezeiungen dreier Hexen an sie beide ein. Damit entwickelt sich
        Macbeths Fresshunger nach Macht.
      </p>
      <p>
        Wo Zweifel an seinem Weg nagen ist Lady Macbeth zu Stelle, bis ihr Mann
        bereit ist den letzten Schritt zu gehen: Königsmord.
      </p>
      <p>
        Wo Zweifel an seinem Weg nagen ist Lady Macbeth zu Stelle, bis ihr Mann
        bereit ist den letzten Schritt zu gehen: Königsmord.
      </p>
      <p>
        Mit dem Mord stirbt der Schlaf und so beginnt der zersetzende Alptraum
        für den einst aufrechten Kämpfer und seine Welt.
      </p>
      <p>
        William Shakespeares Königsdrama "Macbeth" bietet Raum, in sich selbst
        hinabzusteigen.
      </p>

      <p>
        Wir sind Tiere. Unsere Triebe sind unsere hässlichen Stiefkinder die wir
        in den Keller unserer Gesellschaft verbannt haben.
      </p>
      <p>Wie viel braucht es um sie wieder von der Leine zu lassen?</p>
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
