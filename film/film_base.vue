<template>
  <div class="main-content text-center">
    <div class="container">
      <h1>{{ name }}</h1>
      <h2 class="text-uppercase">{{ subtitle }}</h2>
      <div class="text">
        <slot name="description" />
      </div>
      <div class="teambox">
        <slot name="team" />
      </div>
      <div class="video" v-if="trailer">
        <h2 class="text-uppercase">Trailer</h2>
        <iframe
          :src="trailer"
          _width="100"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
        ></iframe>
      </div>
      <div class="video" v-if="film">
        <h2 class="text-uppercase">Video</h2>
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
          <div class="col-12 col-sm-6">{{dauer}}</div>
        </div>
        <div class="row" v-if="year">
          <div class="col-12 col-sm-6">Jahr</div>
          <div class="col-12 col-sm-6">{{year}}</div>
        </div>
        <div class="row" v-if="esSpielen">
          <div class="col-12 col-sm-6">Es Spielen</div>
          <div class="col-12 col-sm-6">{{esSpielen}}</div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["name", "film", "trailer", "subtitle","esSpielen","dauer","year"],
};
</script>
<style>
h1 {
  color: #ffa500;
  font-size: 60px;
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

.info {
  color: gray;
}
</style>