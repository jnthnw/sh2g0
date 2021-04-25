<template>
  <div class="main-content text-center">
    <div class="container">
      <div class="examples">
        <h1>
          THEATER
        </h1>
        <div>
          <router-link class="link" to="/aktuelles"> > Schwestern </router-link>
        </div>
        <div>
          <router-link class="link" to="/aktuelles">
            > Preparadise 
          </router-link>
        </div>
        <div>
          <router-link class="link" to="/aktuelles"> > Wendezeit Zeitwende</router-link>
        </div>
        <div>
          <router-link class="link" to="/aktuelles"> > Miranda </router-link>
        </div>
        <div>
          <router-link class="link" to="/aktuelles"> > Macbeth </router-link>
        </div>
        <div>
          <router-link class="link" to="/aktuelles"> > Insomnia</router-link>
        </div>
        <div>
          <router-link class="link" to="/aktuelles"> > Mistrauen</router-link>
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