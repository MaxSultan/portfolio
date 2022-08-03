<template>
  <div>
    <a name="top"></a>
    <section class="landing">
      <NavBar />
      <div class="float-left full-vh centered">
        <div class="center-row half-vh space-evenly container-thin">
          <h1 class="main-text corben">
            I <br />am a <br />Full Stack <br />Developer
          </h1>
          <p class="poppins">
            This is some more text about me. Its gonna be super interesting, but
            tight now, this is it. So much cool stuff, What a developer. Wow, I
            am impressed.
          </p>
          <router-link to="/contact" class="contact-button poppins">
            Contact me
          </router-link>
        </div>
      </div>
      <div class="float-right side-by-side">
        <img
          src="../assets/IMG_9404-min.png"
          class="profile-image"
          alt="Max Sultan and dog"
        />
        <SocialLinks />
      </div>
    </section>
    <div class="aspect-ratio-box">
      <div class="background-image padding-top-title">
        <Projects />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Projects from "@/components/Projects";
import NavBar from "@/components/NavBar";
import SocialLinks from "@/components/SocialLinks";
import Footer from "@/components/Footer";

export default {
  components: {
    Projects,
    NavBar,
    SocialLinks,
    Footer
  }
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
  text-decoration: none;
}
.profile-image {
  max-width: 31.3vw;
  aspect-ratio: 1/0.99;
  position: relative;
  top: 9.2vh;
  left: 5.65vw;
}

.side-by-side {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.padding-top-title {
  padding-top: 25%;
}
</style>
