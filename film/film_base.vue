<template>
  <div class="main-content text-center">
    <div class="container film_container">
      <h1 class="film_name">{{ name }}</h1>
      <h2 class="text-uppercase">{{ subtitle }}</h2>
      <div class="text">
        <slot name="description" />
      </div>
      <div class="teambox">
        <slot name="team" />
      </div>
      <h2 class="text-uppercase"  v-if="trailer">Trailer</h2>
      <div class="video" v-if="trailer">
        <iframe
          :src="trailer"
          _width="100"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
        ></iframe>
      </div>
      <h2 class="text-uppercase " v-if="film">Film</h2>
      <div class="video" v-if="film">
        <iframe
          :src="film"
          _width="100"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
        ></iframe>
      </div>

      <div class="teambox info">
        <div class="row" v-if="dauer">
          <div class="col-12 col-sm-6">Dauer</div>
          <div class="col-12 col-sm-6">{{ dauer }}</div>
        </div>
        <div class="row" v-if="year">
          <div class="col-12 col-sm-6">Jahr</div>
          <div class="col-12 col-sm-6">{{ year }}</div>
        </div>
        <div class="row" v-if="esSpielen">
          <div class="col-12 col-sm-6">Es Spielen</div>
          <div class="col-12 col-sm-6">{{ esSpielen }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["name", "film", "trailer", "subtitle", "esSpielen", "dauer", "year"],
};
</script>
<style>
.film_name {
  color: #ffa500;
  font-size: 60px;
}

.film_container h2 {
  text-align: left;
}

.film_container .text {
  margin-top: 50px;
  font-size: 20px;
  text-align: center;
}

.film_container {
  color: white;
  max-width: 800px;
}

.film_container .video {
  position: relative;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 */
  margin-bottom: 20px;
}

.film_container .video iframe {
  position: absolute;
  top: 0px;
  left: 0;
  width: 100%;
  height: 100%;
}

.teambox {
  background-color: black;
  color: white;
  padding: 40px 40px;
}

@media (min-width: 575px) {
  .teambox .row div {
    text-align: right;
  }

  .teambox .row div:last-child {
    text-align: left;
  }
}

.teambox .row {
  text-align: center !important;
}

.teambox .row div:last-child {
  padding-bottom: 5px;
  text-transform: uppercase;
}

.teambox a {
  color: white;
}

.teambox a span {
  font-size: 40px;
}

.film_container .info {
  color: gray;
}
</style>