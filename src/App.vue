<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { init } from "emailjs-com";

export default {
  name: "App",
  methods: {
    initEmailJs() {
      init("user_eebF3SXZYGQGZbE057VxV");
    }
  },
  mounted() {
    this.initEmailJs();
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Corben&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Corben&family=Poppins:wght@100;200&display=swap");
body {
  height: 100%;
  overflow: overlay;
}
html {
  height: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  min-height: 100%;
  width: 100%;
}
* {
  margin: 0px;
  padding: 0px;
}
.background-image {
  background-image: url("./assets/binary-falling-min.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  aspect-ratio: 3/4;
  width: 100%;
  z-index: 1;
}
.float-left {
  float: left;
  width: 50%;
}
.float-right {
  float: right;
  width: 50%;
}
.center-row {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.full-vh {
  height: 94%;
}
.half-vh {
  height: 50%;
}
.space-evenly {
  display: flex;
  justify-content: space-evenly;
}
.centered {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
}
.container-thin {
  width: 40%;
}
.container-med {
  width: 60%;
}
.continer-wide {
  width: 80%;
}
/* .aspect-ratio-box {
  height: 0;
  overflow: hidden;
  padding-top: 135.983264%;
  background: white;
  position: relative;
  width: 100%;
} */
/* .aspect-ratio-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
} */
.main-text {
  font-size: 2.5vw;
}
.corben {
  font-family: "Corben";
}
.poppins {
  font-family: "Poppins";
}
</style>
