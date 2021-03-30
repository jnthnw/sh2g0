<template>
  <div class="main-content">
    <div class="container">
      <h1>Hannah Müller</h1>
      <div class="row pictext">
        <div class="col-12 col-md-6">
          <img src="hannah.jpg" class="pic" alt="" />
        </div>
        <div class="col-12 col-md-6 text">
          <span class="">
            Hannah Müller ist in Stuttgart aufgewachsen und studiert Theater-
            und Veranstaltungstechnik an der Beuth Hochschule für Technik
            Berlin. Sie hat bereits bei einigen freien Filmproduktionen
            mitge-arbeitet und ist beim Rundfunk Berlin Brandenburg als
            Technische Hilfskraft angestellt. Außerdem ist sie Hobbykünstlerin.
            Bei Shakespeare2go übernimmt sie die technische Leitung von Theater-
            und Filmprojekten und unterstützt Sonja Holzinger in der Produktion.
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
h1 {
  color: white;
  position: relative;
  font-size: 80px;
  text-shadow: 0x 3px 10px gray;
}

.pic {
  filter: grayscale();
  width: 100%;
}
.pictext {
  z-index: -1;
  position: relative;
  margin-top: -60px;
}

.text {
  margin-top: 50px;
  
}

.container {
  color: white;
}
</style>