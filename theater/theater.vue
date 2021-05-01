<template>
  <div class="main-content text-center filme">
    <div class="container">
      <div class="examples">
        <h1>THEATER</h1>
        <div>
          <router-link class="link" to="/theater/schwestern">
            > Schwestern
          </router-link>
        </div>
        <div>
          <router-link class="link" to="/theater/preparadise">
            > Preparadise
          </router-link>
        </div>
        <div>
          <router-link class="link" to="/theater/wendezeit">
            > Wendezeit Zeitwende</router-link
          >
        </div>
        <div>
          <router-link class="link" to="/theater/miranda">
            > Miranda
          </router-link>
        </div>
        <div>
          <router-link class="link" to="/theater/macbeth">
            > Macbeth
          </router-link>
        </div>
        <div>
          <router-link class="link" to="/theater/insomnia">
            > Insomnia</router-link
          >
        </div>
        <div>
          <router-link class="link" to="/theater/mistrauen">
            > Mistrauen</router-link
          >
        </div>
        <div>
          <router-link class="link" to="/theater/julie"> > Julie</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.filme h1 {
  color: #ffa500;
  font-size: 80px;
}

.filme .container {
  color: white;
  max-width: 800px;
}

.filme .examples div {
  margin-top: 10px !important;
  display: block !important;
}
</style>