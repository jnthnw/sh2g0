<template>
  <teambase full_name="Andreas Neu" image="andreas.jpg">
    <template v-slot:content>
      <p>Andreas Neu, geb. 26. April 1958 in Berlin.</p>
      <p>
        Im Jahr 1976 machte er sein Abitur und war danach Matrose bei der
        Handelsschifffahrt.
      </p>
      <p>
        Er begann 1983 sein Regiestudium in Berlin an der Hochschule für
        Schauspielkunst „Ernst Busch“. Sein Diplom erhielt er 1987. Seit dem
        arbeitete Andreas Neu als Regisseur, Bühnenbildner, Dramaturg und Autor
        an verschiedenen Theatern.
      </p>
      <p>
        Als Dozent war er an der Hochschule für Schauspielkunst „E. Busch“
        Berlin und an der Filmuniversität „K. Wolf“ Babelsberg tätig.
      </p>
      <p>
        In den Jahren 1989 – 1991 war Andreas Neu Schauspieldirektor am Theater
        der Landeshauptstadt Magdeburg, von 1992 – 1996 übernahm er die
        künstlerische Leitung am Gerhart Hauptmann Theater Zittau.
      </p>
      <p>
        Seit 1998 ist er freischaffender Autor für Theater und Film und arbeitet
        weiterhin als Regisseur. Er ist außerdem als Schauspiellehrer tätig und
        gibt Workshops für Schauspieler und junge Autoren. Von ihm wurden bisher
        zwanzig Stücke aufgeführt sowie neun Drehbücher verfilmt.
      </p>
    </template>
  </teambase>
</template>
<script>
export default {
  components: {
    teambase: Vue.defineAsyncComponent(() =>
      loadModule("./team/team_base.vue", options)
    ),
  },
};
</script>
