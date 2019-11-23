<template>
  <div id="app">
    <div id="nav">
      <Navigation />
    </div>
    <router-view />
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue"

export default {
  name: "app",
  components: {
    Navigation
  }
}
</script>

<style lang="scss">
$primary: steelblue;
@import "node_modules/bootstrap/scss/bootstrap.scss";
</style>
