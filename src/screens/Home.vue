<template>
  <div>
    <section class="landing">
      <NavBar />
      <div class="float-left full-vh centered">
        <div class="center-row half-vh space-evenly container-thin">
          <h1 class="main-text">
            I <br />am a <br />Full Stack <br />Developer
          </h1>
          <p>
            This is some more text about me. Its gonna be super interesting, but
            tight now, this is it. So much cool stuff, What a developer. Wow, I
            am impressed.
          </p>
          <button class="contact-button">Contact me</button>
        </div>
      </div>
      <div class="float-right">
        <!-- <div class="profile-image-container"> -->
        <img src="../assets/IMG_9404-min.png" class="profile-image" />
        <!-- </div> -->
      </div>
    </section>
    <div class="aspect-ratio-box">
      <div class="background-image aspect-ratio-content">
        <Title title="My Projects" />
      </div>
    </div>
  </div>
</template>

<script>
import Title from "@/components/Title";
import NavBar from "@/components/NavBar";
export default {
  components: {
    Title,
    NavBar,
  },
};
</script>

<style>
.landing {
  position: relative;
  top: 0px;
  height: 100vh;
  width: 100%;
  background-image: url("../assets/landing-min.jpeg");
  background-size: 100% 100%;
  color: white;
}
.contact-button {
  padding-left: 5vw;
  padding-right: 5vw;
  padding-top: 2%;
  padding-bottom: 2%;
  border: none;
  border-radius: 40px;
  color: #899878;
  background-color: white;
  box-shadow: 2.5px 3px 2px #121113;
  cursor: pointer;
}
.profile-image {
  /* position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; */
  max-width: 62vw;
  height: 75.3vh;
  position: relative;
  top: 9.2vh;
  left: -3.8vw;
}
.profile-image-container {
  height: 0;
  overflow: hidden;
  padding-top: 138.83%;
  background: white;
  position: relative;
}
</style>
