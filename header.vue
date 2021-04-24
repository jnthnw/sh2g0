<template>
  <div class="navbar navbar-expand-xl fixed-top headerbar">
    <div class="container-fluid">
      <div class="text-center"></div>
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
          <router-link class="nav-link" to="/"> </router-link>
          <li class="nav-item dropdown">
            <a
              class="_dropdown-toggle nav-link"
              type="button"
              href="#"
              id="navbarScrollingDropdown"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Team
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
              <li>
                <router-link class="nav-link" to="/team/sonja"
                  >Sonja Holzinger</router-link
                >
                <router-link class="nav-link" to="/hannah"
                  >David Gräber</router-link
                >
                <router-link class="nav-link" to="/hannah"
                  >Andres Neu</router-link
                >
                <router-link class="nav-link" to="/team/hannah"
                  >Hannah Müller</router-link
                >
                <router-link class="nav-link" to="/hannah"
                  >Ehemalige</router-link
                >
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="_dropdown-toggle nav-link"
              type="button"
              href="#"
              id="filmeDropdown"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Filme
            </a>
            <ul class="dropdown-menu" aria-labelledby="filmeDropdown">
              <li>
                <router-link class="nav-link" to="/film/morgen"
                  >MORGEN IST AUCH NOCH EIN TAG</router-link
                >
                <router-link class="nav-link" to="/hannah"
                  >CATTLEYA</router-link
                >
                <router-link class="nav-link" to="/hannah"
                  >KEINE EXPERIMENTE</router-link
                >
                <router-link class="nav-link" to="/hannah"
                  >ALLES WIRD GUT</router-link
                >
                <router-link class="nav-link" to="/hannah"
                  >SUMMERNIGHT TALENTS</router-link
                >
                <router-link class="nav-link" to="/hannah"
                  >GESTERN. HEUTE. MORGEN</router-link
                >
                <router-link class="nav-link" to="/hannah">ENGEL</router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="_dropdown-toggle nav-link"
              type="button"
              href="#"
              id="filmeDropdown"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Theater
            </a>
            <ul class="dropdown-menu" aria-labelledby="filmeDropdown">
              <li>
                <router-link class="nav-link" to="/hannah">
                  Schwestern
                </router-link>
                <router-link class="nav-link" to="/hannah">
                  Preparadise
                </router-link>
                <router-link class="nav-link" to="/hannah">
                  Wendezeit Zeitwende
                </router-link>
                <router-link class="nav-link" to="/hannah">
                  Miranda
                </router-link>
                <router-link class="nav-link" to="/hannah">
                  Macbeth
                </router-link>
                <router-link class="nav-link" to="/hannah">
                  Insomnia
                </router-link>
                <router-link class="nav-link" to="/hannah">
                  Miistrauen
                </router-link>
              </li>
            </ul>
          </li>
          <!-- Show reel-->
          <li class="nav-item dropdown">
            <a
              class="_dropdown-toggle nav-link"
              type="button"
              href="#"
              id="filmeDropdown"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Showreel
            </a>
            <ul class="dropdown-menu" aria-labelledby="filmeDropdown">
              <li>
                <router-link class="nav-link" to="/hannah">
                  Eric Lust
                </router-link>
                <router-link class="nav-link" to="/hannah">
                  The Missunderstanding
                </router-link>
                <router-link class="nav-link" to="/hannah">
                  Popo Martin
                </router-link>
              </li>
            </ul>
          </li>

          <li class="nav-item dropdown">
            <a
              class="_dropdown-toggle nav-link"
              type="button"
              href="#"
              id="filmeDropdown"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Service
            </a>
            <ul class="dropdown-menu" aria-labelledby="filmeDropdown">
              <li>
                <router-link class="nav-link" to="/hannah">
                  Allgemein
                </router-link>

                <router-link class="nav-link" to="/hannah">
                  Drehbuch
                </router-link>
              </li>
            </ul>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/aktuelles"
              >Aktuelles</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/kontakt">Kontakt</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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