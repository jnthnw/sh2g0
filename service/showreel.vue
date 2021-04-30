<template>
  <div class="main-content text-center showreel">
    <div class="container">
      <h1>Showreel</h1>
      <div class="examples">
          <h2>Beispiele</h2>
        <div>
          <router-link class="link" to="/showreel/ericlust"> > ERIC LUST</router-link>
        </div>
        <div>
          <router-link class="link" to="/showreel/missunderstanding">
            > THE MISSUNDERSTANDING
          </router-link>
        </div>
        <div>
          <router-link class="link" to="/showreel/popomartin"> > POPO MARTIN</router-link>
        </div>
      </div>
      <div class="text text-left">
        <h2>Angebote</h2>
        <div class="infotext">
          <p>1. Filmische Gestaltung eines Monologes</p>
          <p>
            Deal: Nach Absprache bereitet der/die Schauspielerin den Inhalt und
            die Kostümierung mit eigenen Mitteln vor und organisiert ggf. auch
            den Drehort selbst. Das Team von Shakespeare2go stellt Kamera und
            Ton für einen halben Drehtag zur Verfügung und bereitet das
            aufgenommene Material für das Showreel auf.
          </p>
          <p>Preis: ca. 300-400 Euro</p>

          <p>2. Filmische Umsetzung einer Szene</p>
          <p>
            Wie bieten hochqualitative und attraktive Ideen für Showreelszenen
          </p>
          <p>
            Deal: Shakespeare2go übernimmt die Produktion einer kompletten Szene
            vom Drehbuch bis zum fertigen Film. Dieses Angebot beinhaltet das
            Schreiben, die Organisation, den Dreh und die Postproduktion.
            Außerdem werden die Schauspieler von einem professionellen
            Schauspielcoach begleitet. Auf Wunsch bieten wir auch
            Schauspielproben an.
          </p>
          <p>Preis: 1500-2000 Euro</p>
          (Wir empfehlen dieses Paket für zwei bis vier Schauspieler; welche die
          Produktion zusammen finanzieren.)
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.showreel h1 {
  color: #ffa500;
  font-size: 80px;
}

.showreel .infotext {
  hyphens: auto;
  text-align: justify;
}

.showreel h2 {
  text-align: left;
  color: white
}

.showreel .text {
  margin-top: 50px;
  font-size: 20px;
  text-align: center;
  color: white;
}

.showreel .examples div {
  margin-top: 10px !important;
  display: block !important;
}
</style>