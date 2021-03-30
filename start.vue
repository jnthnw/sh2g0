<template>
  <div class="main-content text-center">
    <div class="container-fluid page-content black">
      <img
        class="logo-big"
        src="https://static.wixstatic.com/media/758d99_51aa420ab5384d4583d8ee0e6a59c5c7~mv2.jpg/v1/crop/x_642,y_189,w_610,h_671/fill/w_181,h_169,al_c,q_80,usm_0.66_1.00_0.01/LOGO19.webp"
        alt=""
      />
      <h1 class="title">Eine Plattform für Film und Theater</h1>
      <h3 class="subtitle">Wir sind super ...</h3>
      <a @click="$refs.team.scrollIntoView();"> <span class="material-icons downbutton"> arrow_circle_down </span></a>
    </div>
    <div class="container-fluid team-images page-content black">
      <a ref="team"><h1 class="">Team</h1></a>
      <div class="row justify-content-around">
        <div class="col-6">
          <img
            src="https://static.wixstatic.com/media/758d99_e738bfec78324b33a1d05f0e56d9b420~mv2.jpg/v1/crop/x_262,y_136,w_386,h_539/fill/w_272,h_380,al_c,q_80,usm_0.66_1.00_0.01/Foto%20Sonja_2.webp"
            alt=""
          />
        </div>
        <div class="col-6">
          <img
            src="https://static.wixstatic.com/media/758d99_e738bfec78324b33a1d05f0e56d9b420~mv2.jpg/v1/crop/x_262,y_136,w_386,h_539/fill/w_272,h_380,al_c,q_80,usm_0.66_1.00_0.01/Foto%20Sonja_2.webp"
            alt=""
          />
        </div>

        <div class="col-6">
          <img
            src="https://static.wixstatic.com/media/758d99_e738bfec78324b33a1d05f0e56d9b420~mv2.jpg/v1/crop/x_262,y_136,w_386,h_539/fill/w_272,h_380,al_c,q_80,usm_0.66_1.00_0.01/Foto%20Sonja_2.webp"
            alt=""
          />
        </div>
        <div class="col-6">
          <img
            src="https://static.wixstatic.com/media/758d99_e738bfec78324b33a1d05f0e56d9b420~mv2.jpg/v1/crop/x_262,y_136,w_386,h_539/fill/w_272,h_380,al_c,q_80,usm_0.66_1.00_0.01/Foto%20Sonja_2.webp"
            alt=""
          />
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
</style>