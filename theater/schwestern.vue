<template>
  <filmbase
    name="Schwestern "
    subtitle="von Andreas Neu nach Anton Tschechow"
    trailer="https://player.vimeo.com/video/376574474"
    year="2019"
    dauer="circa 70 Minuten ohne Pause"
    esSpielen="das Ensemble von SH2GO"
  >
    <template v-slot:description>
      <p>Was ich habe, will ich nicht verlieren, aber</p>
      <p>wo ich bin, will ich nicht bleiben, aber</p>
      <p>die ich liebe, will ich nicht verlassen, aber</p>
      <p>die ich kenne, will ich nicht mehr sehen, aber</p>
      <p>wo ich lebe, will ich nicht sterben, aber</p>
      <p>wo ich sterbe, da will ich nicht hin:</p>
      <p>Bleiben will ich, wo ich nie gewesen bin.</p>
      <p>(Thomas Brasch)</p>
      <p></p>
      <p>
        Überdruss angesichts der Gegenwart. Die chronische Unzufriedenheit des
        Menschen – sein Antrieb, aber auch seine Verdammnis.
      </p>
      <p>
        Sehnsucht verklärt die Realität und Wissen verändert deine Träume. Meine
        Mutter sagt, dass sich ihr Jugendwunsch nach Lateinamerika zu gehen erst
        damit geändert hat, dass die Mauer fiel und sie es tatsächlich konnte.
        Vielleicht ist also auch die vermeintliche Unerreichbarkeit etwas, was
        Dinge attraktiv macht. Sehnsucht hat immer ein Ziel, man hat immer
        Sehnsucht nach etwas. Und sei es noch so vage. Die Sehnsucht sucht, was
        immer des Sehnens Sucht befriedigt. Doch da ist auch immer die Angst vor
        dem Unbekannten, die Angst, Risiken einzugehen. Was, wenn der
        Sehnsuchtsort doch nicht so ist, wie ich ihn mir vorstelle? Was, wenn
        ich scheitere?
      </p>
      <p>
        Und überhaupt: Ich muss keinen äußerlich großen Wechsel schaffen,
        solange mir nicht klar ist, was ich innerlich verändern möchte. Und wenn
        ich innerlich klar bin, dann ist mir egal, an welchen Ort ich komme; ich
        werde ihn mir so zu eigen machen, dass ich mich zu Hause fühle. Oder?
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
