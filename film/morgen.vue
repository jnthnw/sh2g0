<template>
  <div class="main-content text-center">
    <div class="container ">
      <h1>Morgen</h1>

      <div class="text">
        Hannah Müller ist in Stuttgart aufgewachsen und studiert Theater- und
        Veranstaltungstechnik an der Beuth Hochschule für Technik Berlin. Sie
        hat bereits bei einigen freien Filmproduktionen mitge-arbeitet und ist
        beim Rundfunk Berlin Brandenburg als Technische Hilfskraft angestellt.
        Außerdem ist sie Hobbykünstlerin. Bei Shakespeare2go übernimmt sie die
        technische Leitung von Theater- und Filmprojekten und unterstützt Sonja
        Holzinger in der Produktion.
      </div>
      <div class="video">
        <h2 class="text-uppercase">Video</h2>
        <iframe
          src="https://player.vimeo.com/video/393301198"
          _width="100"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>
<style scoped>
h1 {
  color: #ffa500;
  font-size: 80px;
}

.pic {
  filter: grayscale();
  width: 100%;
}
.pictext {
}

h2 {
  text-align: left;
}

.text {
  margin-top: 50px;
  font-size: 20px;
  text-align: center;
}

.container {
  color: white;
  max-width: 800px;
}

.video {
  margin-top: 40px;
  margin-bottom: 40px;
}

.video iframe {
  top: 0px;
  width: 100%;
  height: 550px;
}
</style>