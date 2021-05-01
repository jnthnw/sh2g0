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
            <dropdown title="Sonja Holzinger" to="/team/sonja"/>
            <dropdown title="David Gräber" to="/team/david"/>
            <dropdown title="Andreas Neu" to="/team/andreas"/>
            <dropdown title="Hannah Müller" to="/team/hannah" />
            
          </dropdown>

          <dropdown title="Filme" >
            <dropdown title="MORGEN IST AUCH NOCH EIN TAG" to="/film/morgen"/>
            <dropdown title="CATTLEYA" to="/film/cattleya"/>
            <dropdown title="KEINE EXPERIMENTE" to="/film/experimente"/>
            <dropdown title="ALLES WIRD GUT" to="/film/alleswirdgut"/>
            <dropdown title="SUMMERNIGHT TALENTS" to="/film/summernight"/>
            <dropdown title="GESTERN. HEUTE. MORGEN" to="/film/gestern"/>
            <dropdown title="ENGEL" to="/film/engel" />
          </dropdown>

          <dropdown title="Theater">
            <dropdown title="Schwestern" to="/theater/schwestern"/>
            <dropdown title="Preparadise"  to="/theater/preparadise"/>
            <dropdown title="Wendezeit Zeitwende" to="/theater/wendezeit"/>
            <dropdown title="Miranda" to="/theater/miranda"/>
            <dropdown title="Macbeth" to="/theater/macbeth"/>
            <dropdown title="Insomnia" to="/theater/insomnia"/>
            <dropdown title="Misstrauen" to="/theater/misstrauen"/>
            <dropdown title="Julie" to="/theater/julie"/>
          </dropdown>



          <dropdown title="Service">
              <dropdown title="Showreel" to="/service/showreel" />
            <dropdown title="Drehbuchklasse"  to="/service/drehbuch"/>
            <dropdown title="Coaching für Schauspieler" to="/service/coaching" />
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
    width: 100vw;
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