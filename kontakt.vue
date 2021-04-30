<template>
  <div class="main-content">
    <div class="container ">
      <h1 class="black">KONTAKT</h1>
      <div class="row justify-content-md-center">
        <div class="col-12 col-lg-6 contact-box">
          <a
            href="https://www.facebook.com/Shakespeare-to-go-1812940565700467/"
          >
            <span class="material-icons white"> facebook </span></a
          >

          <div class="row">
            <div class="col-12 col-sm-6">ANSPRECHPARTNER</div>
            <div class="col-12 col-sm-6">Sonja Holzinger</div>
          </div>
          <div class="row">
            <div class="col-12 col-sm-6">TEL</div>
            <div class="col-12 col-sm-6">+49 178 329 81 51</div>
          </div>
          <div class="row">
            <div class="col-12 col-sm-6">MAIL</div>
            <div class="col-12 col-sm-6">sh2go.online@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
div {
  color: black;
  text-align: center;
}

h2 {
  margin-top: 40px;
}

.contact-box {
  width: 500px;
  background-color: white;
  color: black;
  padding: 40px 40px;
}

@media (min-width: 575px) {
  .contact-box .row div {
    text-align: right;
  }

  .contact-box .row div:last-child {
    text-align: left;
  }
}

.contact-box .row {
  text-align: center !important;
}

.contact-box .row div:last-child {
  padding-bottom: 20px;
}

.contact-box a {
  color: white;
}

.contact-box a span {
  font-size: 40px;
}
</style>