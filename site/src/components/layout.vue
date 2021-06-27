<template>
  <div class="layout">
    <main-header></main-header>
    <slot />
    <main-footer></main-footer>
  </div>
</template>

<script>
import MainFooter from "./footer.vue";
import MainHeader from "./header.vue";

export default {
  name: "Layout",
  components: {
    MainFooter,
    MainHeader,
  },
};
</script>

<style></style>
