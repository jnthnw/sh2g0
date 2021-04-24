<template>
  <li class="nav-item dropdown" v-if="hasDefaultSlot">
    <a
      class="_dropdown-toggle nav-link"
      type="button"
      href="#"
      :id="title + 'Dropdown'"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      {{ title }}
    </a>
    <ul class="dropdown-menu">
      <li>
        <slot></slot>
      </li>
    </ul>
  </li>

  <li v-else class="nav-item">
    <router-link class="nav-link" :to="toOrDefault">{{ title }} </router-link>
  </li>
</template>

<script>
export default {
  props: ["title", "to"],
  computed: {
    hasDefaultSlot() {
      return !!this.$slots.default;
    },
    hasFooterSlot() {
      return !!this.$slots["footer"];
    },
    toOrDefault() {
      if (this.to) {
        return this.to;
      }
      return "/" + this.title.replace(" ", "").toLowerCase();
    },
  },
};
</script>

<style>
.nav-link {
  background-color: black;
  -webkit-appearance: none !important;
  color: white;

  font-family: montserrat-extralight;
  font-size: 25px;
  padding: 0px 4px !important;
}

@media (min-width: 1350px) {
  .nav-link {
    font-size: 30px;
    padding: 0px 16px !important;
  }
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

.dropdown-menu {
  background-color: black !important;
  width: 300px;
}

.dropdown-menu .nav-link {
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: orange;
  font-size: 20px;
}
</style>