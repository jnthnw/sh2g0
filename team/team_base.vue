<template>
  <div class="main-content">
    <div class="container team_container">
      <h1 class="full_name">{{full_name}}</h1>
      <div class="row teampictext">
        <div class="col-12 col-md-6">
          <img :src="'img/'+image" class="teampic" alt="" />
        </div>
        <div class="col-12 col-md-6 teamtext">
          <span class="">
              <slot name="content"/>
              
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    props: [
        "full_name",
        "image"
    ]
}
</script>
<style>
.full_name {
  color: white;
  position: relative;
  font-size: 80px;
  text-shadow: 0x 3px 5px gray;
}

.teampic {
  filter: grayscale();
  width: 100%;
}
.teampictext {
  z-index: -1;
  position: relative;
  margin-top: -60px;
}

.teamtext {
  margin-top: 50px;
  font-size: 20px;
}

.team_container {
  color: white;
}
</style>