<template>
  <div>
    <h1>Hello World</h1>
    <p class="list">{{ dataList }}</p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      dataList: [1, 2, 3],
    };
  },
};
</script>

<style>
.list {
  color: red;
}
</style>
