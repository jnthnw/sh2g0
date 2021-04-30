<template>
  <div class="main-content text-center filme">
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