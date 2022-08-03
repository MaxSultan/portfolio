<template>
  <div>
    <a name="top"></a>
    <div class="background-image">
      <NavBar />
      <div class="margin-top-title">
        <Title title="About me" />
      </div>
      <div class="about-content">
        <div class="container">
          <div class="photo-container"></div>
          <div class="story-text center-vertically margin-min poppins">
            <p>
              I taught math and career preparation teacher at a treatment center
              when I decided I needed a career change. I was teaching a class
              about the Myers-Brigg type indicator and how it can be a good
              indicator of future career aptitude. I decided to look at an MBTI
              test I had taken in college and see what it said. Software
              Engineer was on my list.
            </p>
            <p>
              Never before had I thought of myself as a tech person. I decided
              to look into some free resources and went through a couple of
              courses on freecodecamp.com. I got confused in freecodecamps
              javascript when learning about ES6 and having no idea why these
              changes were helpful. I didnt know about online communities or
              stack overflow so I didnt know where to go for help. I eventually
              decided I liked this coding thing and decided to go to bootcamp.
            </p>
            <p>
              I recieved a scholarship to attend Dev Point Labs bootcamp and
              worked hard for 13 weeks, learning Javascript, Ruby on Rails, SQL,
              and more. I graduated from bootcamp in August of 2020 and got a
              job 3 months later as a full stack developer in November of 2020
              at 4th Wall FX. At Fourth Wall FX I use Vue, Firebase, and
              Cordova, to create a mobile app. I have designed and coded a word
              scramble game, created "migrations" for Firebase data tables, and
              improved documentation of essential processes.
            </p>
            <p></p>
          </div>
        </div>
        <section class="non-career-text">
          <p class="no-margin">
            When I am not coding I can be found spending time with my dog
            Winston, coaching a local high school wrestling team, or watching
            videos about coding.
          </p>
        </section>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Title from "@/components/Title";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default {
  components: {
    Title,
    NavBar,
    Footer
  }
};
</script>

<style>
div {
  color: white;
}
.margin-top-title {
  margin-top: 40vh;
}
.photo-container {
  overflow: hidden;
  aspect-ratio: 4/5;
  background: white;
  min-width: 33vw;
}
.about-content {
  margin: 10vw;
  margin-bottom: 0;
}
.center-vertically {
  margin-top: 50%;
  margin-bottom: 50%;
}
.story-text {
  height: 70vh;
  text-align: left;
}
p {
  margin-bottom: 1vh;
}
.non-career-text {
  margin: 2em;
  margin-bottom: 0;

  @media width {
  }
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.margin-min {
  margin: 2em;
  margin-top: 40vh;
}
.no-margin {
  margin: 0;
}
</style>
