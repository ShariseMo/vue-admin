<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  setup() {
    //
  },
  // render() {
  //   return h(MainFooter);
  //   // return h("div", "hello world");
  // },
};
</script>

<style lang="scss" scoped>
.container {
  // background-color: gray;
}
</style>
