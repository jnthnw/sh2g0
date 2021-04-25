<template>
  <div class="main-content text-center">
    <div class="container-fluid page-content-full black">
      <img class="logo-big" src="img/logo19.jpg" alt="" />
      <h1 class="title">Plattform für Film und Theater</h1>

      <span class="material-icons downbutton text-center" @click="scrollDown()">
        arrow_circle_down
      </span>
    </div>
    <div class="container-fluid team-images page-content-full black" ref="team">
      <a class="anchor"><h1 class="">Team</h1></a>
      <div class="row justify-content-around">
        <div class="col-sm-6 col-12">
          <img src="img/david.jpg" alt="" />
        </div>
        <div class="col-sm-6 col-12">
          <img src="img/sonja.jpg" alt="" />
        </div>

        <div class="col-sm-6 col-12">
          <img src="img/andreas.jpg" alt="" />
        </div>
        <div class="col-sm-6 col-12">
          <img src="img/hannah.jpg" alt="" />
        </div>
      </div>
    </div>

    <div class="container-fluid page-content-full black">
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
        <div id="gruppenbild" class="_flex-fill">
          <img class="img-fluid" src="img/gruppe.jpg" alt="" />
        </div>
      </div>
    </div>

    <div class="container-fluid page-content white" id="aktuelles">
      <h1>AKTUELLES</h1>

      <div class="container">
        <h2>Neues</h2>
        <p>POSTPRODUKTION</p>

        <p>
          MORGEN IST AUCH NOCH EIN TAG, WENN DU WILLST (AT) Mittellanger
          Spielfilm, Dreh Juni 2020
        </p>

        <router-link class="link" to="/aktuelles"> > mehr</router-link>
      </div>
    </div>

    <div class="container-fluid page-content black" id="filme">
      <div class="container">
        <div class="text-left">
          <h1 class="white d-inline">FILME</h1>
        </div>

        <div class="row justify-content-around m-3">
          <div class="col-sm-4 col-12">
            <img src="img/filme/morgen.png" alt="" />
          </div>
          <div class="col-sm-4 col-12">
            <img src="img/filme/cattleya.png" alt="" />
          </div>
          <div class="col-sm-4 col-12">
            <img src="img/filme/experimente.png" alt="" />
          </div>
        </div>
        <router-link class="link white" to="/film/filme"> > mehr</router-link>
      </div>
    </div>

    <div class="container-fluid page-content black m-2" id="filme">
      <div class="container">
        <div class="text-left">
          <h1 class="white d-inline">THEATER</h1>
        </div>

        <div class="row justify-content-around m-3">
          <div class="col-sm-4 col-12">
            <img src="img/theater/miranda.png" alt="" />
          </div>
          <div class="col-sm-4 col-12">
            <img src="img/theater/schwestern.png" alt="" />
          </div>
        </div>
        <router-link class="link white" to="/theater/theater"> > mehr</router-link>
      </div>
    </div>

    <div class="container-fluid page-content white m-2" id="filme">
      <div class="container">
        <div class="text-left">
          <h1 class="black d-inline">SERVICE</h1>
        </div>
        <div class="text-left m-2">
          <div class="m-4" >
            <router-link class="link black" to="/theater"> > Showreel</router-link>
          </div>
          <div class="m-4" >
            <router-link class="link black" to="/theater"> > Drehbuchklasse</router-link>
          </div>
          <div class="m-4" >
            <router-link class="link black" to="/theater"> > Coaching für Schauspieler</router-link>
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

.main-content {
  height: calc(100%-100px);
}

.page-content-full {
  height: calc(100vh - 100px);
  padding-top: 20px;
}

.page-content {
  _height: calc(100vh - 100px);
  padding-top: 20px;
  padding-bottom: 20px;
}

@media screen and (max-width: 575px) {
  .page-content {
    height: fit-content;
    min-height: calc(100vh - 100px);
    padding-top: 20px;
    padding-bottom: 20px;
  }
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

#gruppenbild {
  height: 40%;
}

#gruppenbild img {
  max-height: 100%;
  _object-fit: scale-down;
}

.container {
  height: 100%;
}

#aktuelles .container {
  text-align: left;
}

#aktuelles h1{
  color: black
}



.white.link {
  color: white;
  background-color: black;
  border: white solid 1px;
  padding: 5px;
}

#filme img {
  max-width: 100%;
}
</style>