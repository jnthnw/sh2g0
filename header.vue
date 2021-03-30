<template>
  <div class="fixed-top headerbar">
    <div class="text-center"></div>

    <ul class="nav justify-content-center text-uppercase">
      <router-link class="nav-link" to="/">
        <img
          class="logo"
          src="https://static.wixstatic.com/media/758d99_51aa420ab5384d4583d8ee0e6a59c5c7~mv2.jpg/v1/crop/x_642,y_189,w_610,h_671/fill/w_181,h_169,al_c,q_80,usm_0.66_1.00_0.01/LOGO19.webp"
          alt=""
        />
      </router-link>
      <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Team
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
            <li><router-link class="nav-link" to="/hannah">Hannah</router-link></li>
          </ul>
        </li>
      <li class="nav-item">
        
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/aktuelles">Aktuelles</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/filme">Filme</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>
<style>
.headerbar {
  background-color: black;
}
.nav {
  margin-bottom: 20px;
  margin-top: 10px;
}

.nav-link {
  color: white;
  font-size: 30px;
}

.nav li:last-child .nav-link {
  border-right-style: none;
}
.nav li .nav-link {
  border-right-style: solid;
  border-right-width: 1px;
  border-right-color: orange;
}

.router-link-active {
  color: darkorange;
}

.nav-link:hover {
  color: orange;
}
</style>