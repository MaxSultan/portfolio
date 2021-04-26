<template>
  <div id="app">
    <div class="background-image">
      <div class="background-fade">
        <NavBar />
        <router-view />
      </div>
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
  background-image: url("./assets/binary.jpeg");
  /* background: linear-gradient(#fff, #e6e6e6); */
  background-size: 100% 100%;
  min-height: 100vh;
}
.background-fade{
  background-color:#98a297;
  min-height: 100vh;
  opacity: 0.9;
}
</style>
