<template>
  <div class="main-content text-center">
    <div class="container-fluid page-content black">
      <img class="logo-big" src="assets/logo.webp" alt="" />
      <h1 class="title">Eine Plattform für Film und Theater</h1>
      <h3 class="subtitle">Wir sind super ...</h3>
      <a @click="$refs.team.scrollIntoView()">
        <span class="material-icons downbutton"> arrow_circle_down </span></a
      >
    </div>
    <div class="container-fluid team-images page-content black">
      <a ref="team"><h1 class="">Team</h1></a>
      <div class="row justify-content-around ">
        <div class="col-6">
          <img src="img/sonja_2.webp" alt="" />
        </div>
        <div class="col-6">
          <img src="img/sonja_2.webp" alt="" />
        </div>

        <div class="col-6">
          <img src="img/sonja_2.webp" alt="" />
        </div>
        <div class="col-6">
          <img src="img/sonja_2.webp" alt="" />
        </div>
      </div>
    </div>

    <div class="container-fluid page-content white">
      <div class="container">
        <p class="lead">
          Wir sind Sonja Holzinger (Redaktion, Produktion, Presse, Drehbuch),
          David Gräber (Drehbuch, Regie, Kamera, Schnitt), Andreas Neu
          (Drehbuch, Regie, Dramaturgie, Schauspielcoach) und Hannah Müller
          (Produktionsassistenz und technische Leitung). ​ 2020 haben wir einen
          Langfilm produziert, ein Drehbuch für ein Langfilmprojekt geschrieben
          und zwei Theaterprojekte für das Frühjahr 2021 vorbereitet. ​ Einen
          Überblick über alle bisherigen Projekte findet Ihr unter THEATER bzw.
          FILME. Der Stand der neuen Projekte wird zukünftig über AKTUELLES
          veröffentlicht.
        </p>
      </div>
    </div>
  </div>
</template>

<style>
.logo-big {
  height: 40%;
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
  bottom: 10px;
}

.main-content {
    height: calc(100%-150px);
    padding-top: 150px;
}

.page-content {
    height: calc(100vh - 100px);
    padding-top: 20px;
}


.team-images .row {
  height:30% !important;
}

@media screen and (min-width: 800px) {
    .team-images {
        padding: 0 30%;
    }
}

.team-images img {
    _width: 100%;
    height: 100%;
   
}

.team-images div {
 margin: 10px 0px;
}
</style>