<template>
  <filmbase
    name="PREPARADISE SORRY NOW"
    subtitle=""
    film="https://player.vimeo.com/video/363546746"
    year="2019"
    esSpielen="das Ensemble von SH2GO"
  >
    <template v-slot:description>
      <p>
        Vorhölle? Als Ian Brady aus den Slums von Glasgow in die noch
        schlimmeren von Manchester zog, nahm er nichts mit als ein paar
        Zeitungsausschnitte über Hitler und eine zerlesene Paperback-Ausgabe von
        Der dritte Mann. Später lernt er Myra Hinley kennen, die er rasch zu
        seiner Hessie dressiert, treu nach des Führers Vize Rudolf Hess benannt.
        Zusammen begehen die sogenannten Moormörder grauenhafte Experimente.
      </p>
      <p>
        Fassbinder war für sein Hinschauen bekannt. In einer Collage aus
        Erzählungen über das Mörderpaar Hinley und Brady, Alltagsfaschismus und
        kultischen Liturgien schuf er ein Stück, das auch nach Jahren des
        Erscheinens erschreckend in die Wirklichkeit einschlägt. Der Faschismus
        ist keine Vergangenheit. Er ist hier, im Jetzt, in Europa, in
        Deutschland, wo ein Regierungspräsident erschossen wurde, wo Parteien
        wie die AfD in die Parlamente einziehen, wo Hass und Ressentiments
        salonfähig werden und die Gewalt mehr wird.
      </p>

      <p>von David Gräber nach Rainer Werner Fassbinder</p>
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
