<template>
  <div class="footer-background poppins">
      <div class="column flex-column">
          <h2>Social Media</h2>
          <a href="https://www.instagram.com/maxsultan1/?hl=en">Instagram</a>
          <a href="https://www.linkedin.com/in/maxsultan/">LinkedIn</a>
          <a href="https://github.com/MaxSultan">Github</a>
          <a href="https://www.facebook.com/maxamillionludacris">Facebook</a>
      </div>
      <div class="column flex-column">
          <h2>Internal Links</h2>
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link to=/about class="nav-link">About me</router-link>
          <router-link to=/contact class="nav-link">Contact me</router-link>
          <a href="#top">Top of Page</a> 
      </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
a {
  color: white;
  text-decoration: none;
}
.footer-background {
  height: 40vh;
  width: 100%;
  background-color: #98a297;
  color: white;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
}
.flex-column {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-top: 3vh;
  height: 30vh;
}
</style>