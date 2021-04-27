<template>
  <div id="app">
    <NavBar />
    <div class="background-image">
      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  min-height: 100vh;
  width: 100%;
}
* {
  margin: 0px;
  padding: 0px;
}
.background-image {
  background-image: url("./assets/Matrix-Background.png");
  background-size: 100% 100%;
  min-height: 100vh;
}
</style>
