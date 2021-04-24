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
    <ul class="dropdown-menu" aria-labelledby="filmeDropdown">
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
      return "/" + this.title.replace(" ","").toLowerCase();
    },
  },
};
</script>

<style>
</style>