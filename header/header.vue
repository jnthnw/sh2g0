<template>
  <div class="navbar navbar-expand-xl fixed-top headerbar">
    <div class="container-fluid">
      <router-link class="nav-link" to="/">
        <a class="navbar-brand" href="#"
          ><img class="logo" src="assets/logo.webp" alt=""
        /></a>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="material-icons" style="color: white"> menu </span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="nav navbar-nav justify-content-center text-uppercase">
          <dropdown title="Team">
            <dropdown title="Sonja Holzinger" />
            <dropdown title="David Gräber" />
            <dropdown title="Andreas Neu" />
            <dropdown title="Hannah Müller" to="/team/hannah"/>
            <dropdown title="Ehemalige" />
          </dropdown>

          <dropdown title="Filme">
            <dropdown title="MORGEN IST AUCH NOCH EIN TAG" />
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
}

.nav-link {
  background-color: black;
  color: white;
  font-family: montserrat-extralight;
  font-size: 30px;
}

.nav li:last-child .nav-link {
  border-right-style: none;
}
.nav li .nav-link {
  border-right-style: solid;
  border-right-width: 1px;
  border-right-color: orange;
}

.router-link-active {
  color: darkorange;
}

.nav-link:hover {
  color: orange;
}

.dropdown-menu {
  background-color: black !important;
  width: 300px;
}

.dropdown-menu .nav-link {
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: orange;
  font-size: 20px;
}
</style>