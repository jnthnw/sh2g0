<template>
  <div class="main-content text-center">
    <div class="container">
      <div class="examples">
        <h1>
          FILME
        </h1>
        <div>
          <router-link class="link" to="/film/cattleya"> > CATTLEYA </router-link>
        </div>
        <div>
          <router-link class="link" to="/film/morgen">
            > MORGEN IST AUCH NOCH EIN TAG
          </router-link>
        </div>
        <div>
          <router-link class="link" to="/film/experimente"> > KEINE EXPERIMENTE</router-link>
        </div>
        <div>
          <router-link class="link" to="/film/alleswirdgut"> > ALLES WIRD GUT</router-link>
        </div>
        <div>
          <router-link class="link" to="/film/summernight"> > SUMMERNIGHT TALENTS</router-link>
        </div>
        <div>
          <router-link class="link" to="/film/gestern"> > GESTERN. HEUTE. MORGEN</router-link>
        </div>
        <div>
          <router-link class="link" to="/film/engel"> > ENGEL</router-link>
        </div>

      </div>
    </div>
  </div>
</template>
<style>
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

.infotext {
  hyphens: auto;
  text-align: justify;
}

h2 {
  text-align: left;
}

.text {
  margin-top: 50px;
  font-size: 20px;
  text-align: center;
  color: white;
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

.examples div {
  margin-top: 10px !important;
  display: block !important;
}
</style>