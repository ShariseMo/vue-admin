<template>
  <header class="header">
    <div class="container">
      <h1 class="logo-wrap">
        <router-link to="/">
          <img class="logo" src="../images/logo.png" alt="logo" />
        </router-link>
      </h1>
      <div class="nav">
        <router-link class="nav-item" to="/components"
          ><span>组件</span></router-link
        >
        <router-link class="nav-item" to="/assets"
          ><span>资源</span></router-link
        >
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
.header {
  height: 80px;
  top: 0;
  left: 0;
  z-index: 100;
  right: 0;
  position: fixed;
  .container {
    display: flex;
    justify-content: space-between;
    width: 1140px;
    margin: 0 auto;
    border-bottom: 1px solid #dcdfe6;
    height: 100%;
    background-color: #fff;
    color: #fff;
    .logo-wrap {
      margin: 0;
      height: 100%;
      .logo {
        height: 100%;
      }
    }
    .nav {
      height: 100%;
      display: flex;

      .nav-item {
        height: 80px;
        line-height: 80px;
        span {
          padding: 0 22px;
          display: block;
          position: relative;
        }
      }
    }
    a {
      display: block;
      // color: #545270;
      height: 100%;
    }
  }
}
</style>
