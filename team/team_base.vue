<template>
  <div class="main-content">
    <div class="container">
      <h1>{{full_name}}</h1>
      <div class="row pictext">
        <div class="col-12 col-md-6">
          <img :src="'img/'+image" class="pic" alt="" />
        </div>
        <div class="col-12 col-md-6 text">
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
  font-size: 20px;
}

.container {
  color: white;
}
</style>