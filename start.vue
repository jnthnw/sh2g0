<template>
  <div class="main-content text-center startpage">
    <div class="container-fluid page-content-full black">
      <img class="logo-big" src="img/logo19.jpg" alt="" />
      <h1 class="title">
        Shakespeare2go <br />
        Plattform für Film und Theater
      </h1>

      <span class="material-icons downbutton text-center" @click="scrollDown()">
        arrow_circle_down
      </span>
    </div>
    <div class="container-fluid team-images page-content-full black" ref="team">
      <a class="anchor"><h1 class="">Team</h1></a>
      <div class="row justify-content-around">
        <div class="_col-sm-6 col-6">
          <router-link to="/team/david">
            <img src="img/david.jpg" alt="" />
          </router-link>
        </div>
        <div class="_col-sm-6 col-6">
          <router-link to="/team/sonja">
            <img src="img/sonja.jpg" alt="" />
          </router-link>
        </div>

        <div class="_col-sm-6 col-6">
          <router-link to="/team/andreas">
            <img src="img/andreas.jpg" alt="" />
          </router-link>
        </div>
        <div class="_col-sm-6 col-6">
          <router-link to="/team/hannah">
            <img src="img/hannah.jpg" alt="" />
          </router-link>
        </div>
      </div>
    </div>

    <div class="container-fluid page-content black">
      <div class="container _d-flex _flex-column">
        <div class="lead _flex-fill">
          <p>
            Wir sind Sonja Holzinger (Redaktion, Produktion, Presse, Drehbuch),
            David Gräber (Drehbuch, Regie, Kamera, Schnitt), Andreas Neu
            (Drehbuch, Regie, Dramaturgie, Schauspielcoach) und Hannah Müller
            (Produktionsassistenz und technische Leitung). ​
          </p>
          <p>
            2020 haben wir einen Langfilm produziert, ein Drehbuch für ein
            Langfilmprojekt geschrieben und zwei Theaterprojekte für das
            Frühjahr 2021 vorbereitet.
          </p>
          <p>
            ​ Einen Überblick über alle bisherigen Projekte findet Ihr unter
            THEATER bzw. FILME. Der Stand der neuen Projekte wird zukünftig über
            AKTUELLES veröffentlicht.
          </p>
        </div>

        <div class="video">
          <iframe
            src="https://player.vimeo.com/video/538262469"
            _width="100"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>

    <div class="container-fluid page-content white" id="aktuelles">
      <h1>AKTUELLES</h1>

      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-3">Mai 2021</div>
          <div class="col-12 col-sm-9">
            aktuell erarbeiten wir die beiden Stücke MADAME JULIE und BLICK
            ZURÜCK IM ZORN. POSTCARDS FROM SICILY läuft auf dem TMF Film
            Festival in Indien.
          </div>
        </div>
        <br/>
        <div class="row">
          <div class="col-12 col-sm-3">16.+17. Juli</div>
          <div class="col-12 col-sm-9">
            Aufführung MADAME JULIE im Zeller Kultur Theater in Radolfzell
          </div>
        </div>

      </div>
        <router-link class="link" to="/aktuelles"> > mehr</router-link>
    </div>

    <div class="container-fluid page-content black filme" id="">
      <div class="container">
        <div class="text-left">
          <h1 class="white d-inline">FILME</h1>
        </div>

        <div class="row justify-content-around m-3">
          <div class="col-sm-4 col-12">
            <router-link to="/film/morgen">
              <img src="img/filme/morgen.jpg" alt="" />
            </router-link>
          </div>
          <div class="col-sm-4 col-12">
            <router-link to="/film/cattleya">
              <img src="img/filme/cattleya.jpg" alt="" />
            </router-link>
          </div>
          <div class="col-sm-4 col-12">
            <router-link to="/film/experimente">
              <img src="img/filme/experimente.jpg" alt="" />
            </router-link>
          </div>
        </div>
        <router-link class="link white" to="/film/filme"> > mehr</router-link>
      </div>
    </div>

    <div class="container-fluid page-content black filme" id="">
      <div class="container">
        <div class="text-left">
          <h1 class="white d-inline">THEATER</h1>
        </div>

        <div class="row justify-content-around m-3">
          <div class="col-sm-4 col-12">
            <router-link to="/theater/julie">
              <img src="img/theater/julie.jpg" alt="" />
            </router-link>
          </div>
          <div class="col-sm-4 col-12">
            <router-link to="/theater/miranda">
              <img src="img/theater/miranda.jpg" alt="" />
            </router-link>
          </div>
          <div class="col-sm-4 col-12">
            <router-link to="/theater/schwestern">
              <img src="img/theater/schwestern.jpg" alt="" />
            </router-link>
          </div>
        </div>

        <router-link class="link white" to="/theater/theater">
          > mehr</router-link
        >
      </div>
    </div>

    <div class="container-fluid page-content white" id="filme">
      <div class="container">
        <div class="text-left">
          <h1 class="black d-inline">SERVICE</h1>
        </div>
        <div class="text-left mx-sm-2 links">
          <div class="mx-sm-4">
            <router-link class="link black" to="/service/showreel">
              > Showreel</router-link
            >
          </div>
          <div class="mx-sm-4">
            <router-link class="link black" to="/service/drehbuch">
              > Drehbuchklasse</router-link
            >
          </div>
          <div class="mx-sm-4">
            <router-link class="link black" to="/service/coaching">
              > Coaching für Schauspieler</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    scrollDown: function () {
      var ref = this.$refs.team; //.scrollIntoView()
      window.scrollTo({ top: ref.offsetTop - 100, behavior: "smooth" });
    },
  },
};
</script>
<style>
.main-content {
  height: calc(100%-100px);
  width: 100%;
}

.page-content-full {
  height: calc(100vh - 100px);
  padding-top: 20px;
}

.page-content {
  padding-top: 20px;
  padding-bottom: 20px;
}

@media screen and (max-width: 770px) {
  .page-content-full {
    height: fit-content;
    min-height: auto;
    padding-top: 20px;
    padding-bottom: 20px;
  }
}

.links div {
  margin-top: 10px;
}

@media screen and (max-width: 770px) {
  .team-images img {
    width: 100%;
    _height: 100%;
    padding-left: 20px;
    padding-right: 20px;
  }
}

.team-images > div > div {
  height: 100%;
  margin-top: 10px;
  text-align: right;
}

.team-images > div > div:nth-child(2n) {
  text-align: left;
}

.team-images .row {
  height: 40% !important;
}

.team-images img {
  _width: 100%;
  height: 100%;
}

.startpage .filme img {
  max-width: 100%;
}

@media screen and (max-width: 300px) {
  .startpage .container,
  .startpage .container-fluid {
    padding-left: 1px;
    padding-right: 1px;
  }
}

.startpage .container {
  height: 100%;
}

#aktuelles .container {
  _text-align: left;
  color: black;
  margin-bottom: 20px;
}

#aktuelles h1 {
  color: black;
}


@media (min-width: 575px) {
  #aktuelles .row div {
    text-align: right;
  }

  #aktuelles .row div:last-child {
    text-align: left;
  }
}


#aktuelles .row {
  text-align: center !important;
}
</style>

<style scoped>
.video {
  margin-top: 40px;
  padding-bottom: 40px;
}

.video iframe {
  top: 0px;
  width: 100%;
  height: 550px;
}

.logo-big {
  max-height: 40%;
  max-width: 100%;
}

.title {
  margin-top: 100px;
  margin-bottom: 20px;
}

.subtitle {
  color: white;
}

.downbutton {
  font-size: 48px;
  position: absolute;
  bottom: 30px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
}




h1 {
  padding: 2px 5px;
}
.white.link {
  color: white;
  background-color: black;
  border: white solid 1px;
  padding: 5px;
}
</style>