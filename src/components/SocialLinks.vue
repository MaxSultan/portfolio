<template>
  <ul>
    <!-- <li v-for="num in [1, 2, 3, 4]" :key="num">
      <a :href="'link' + num" target="_blank">
        <img :src="`../assets/icon-0${num}-min.png`" />
      </a>
    </li> -->
    <li>
      <a href="https://www.instagram.com/maxsultan1/?hl=en" target="_blank">
        <img src="../assets/icon-01-min.png" alt="Instagram icon" />
      </a>
    </li>
    <li>
      <a href="https://www.facebook.com/maxamillionludacris" target="_blank">
        <img src="../assets/icon-02-min.png" alt="Facebook icon" />
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/maxsultan/" target="_blank">
        <img src="../assets/icon-03-min.png" alt="LinkedIn icon"/>
      </a>
    </li>
    <li>
      <a href="https://github.com/MaxSultan" target="_blank">
        <img src="../assets/icon-04-min.png" alt="Github icon" />
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      link1: "www.google.com",
      link2: "www.google.com",
      link3: "www.google.com",
      link4: "www.google.com",
    };
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  z-index: 5;
  margin-right: 70px;
}
img {
  height: 50.2px;
  width: 57.2px;
}
</style>