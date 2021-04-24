<template>
  <div class="navbar navbar-expand-md fixed-top headerbar">
    <div class="container-fluid">
      <router-link class="nav-link" to="/">
        <a class="navbar-brand" href="#"
          ><img class="logo" src="assets/logo.webp" alt=""
        /></a>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        @click="menuCollpased = !menuCollpased"
        aria-label="Toggle navigation"
      >
        <span class="material-icons" style="color: white"> menu </span>
      </button>
      <div
        :class="'collapse navbar-collapse ' + (menuCollpased ? 'show' : '')"
        id="navbarNav"
      >
        <ul class="nav navbar-nav justify-content-center text-uppercase">
          <dropdown title="Team">
            <dropdown title="Sonja Holzinger" />
            <dropdown title="David Gräber" />
            <dropdown title="Andreas Neu" />
            <dropdown title="Hannah Müller" to="/team/hannah" />
            <dropdown title="Ehemalige" />
          </dropdown>

          <dropdown title="Filme">
            <dropdown title="MORGEN IST AUCH NOCH EIN TAG" to="/film/morgen"/>
            <dropdown title="CATTLEYA" />
            <dropdown title="KEINE EXPERIMENTE" />
            <dropdown title="ALLES WIRD GUT" />
            <dropdown title="SUMMERNIGHT TALENTS" />
            <dropdown title="GESTERN. HEUTE. MORGEN" />
            <dropdown title="ENGEL" />
          </dropdown>

          <dropdown title="Theater">
            <dropdown title="Schwestern" />
            <dropdown title="Preparadise" />
            <dropdown title="Wendezeit Zeitwende" />
            <dropdown title="Miranda" />
            <dropdown title="Macbeth" />
            <dropdown title="Insomnia" />
            <dropdown title="Mistrauen" />
          </dropdown>

          <dropdown title="Showreel">
            <dropdown title="Eric Lust" />
            <dropdown title="The Missunderstanding" />
            <dropdown title="Popo Martin" />
          </dropdown>

          <dropdown title="Service">
            <dropdown title="Allgemein" />
            <dropdown title="Drehbuch" />
          </dropdown>

          <dropdown title="Aktuelles" />

          <dropdown title="Kontakt" />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    dropdown: Vue.defineAsyncComponent(() =>
      loadModule("./header/dropdown.vue", options)
    ),
  },
  data: () => {
    return {
      menuCollpased: false,
    };
  },
  watch: {
    $route(to, from) {
      window.scrollTo(0,0);
      this.menuCollpased = false;
    },
  },
  created: function () {
    console.log(this.$router, this.$route);
  
  },
};
</script>
<style>
.headerbar {
  background-color: black;
}
.nav {
  background-color: black;
  margin-bottom: 20px;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
}

.navbar {
  height: 100px;
}
</style>