<template>
  <nav>
    <ul class="nav-list">
      <img src="@/assets/computer-logo-no-back-min.png" class="nav-logo" alt="a computer logo"/>
      <li class="nav-item"><router-link to="/" class="nav-link">Home</router-link></li>
      <li class="nav-item"><router-link to=/about class="nav-link">About me</router-link></li>
      <li class="nav-item"><router-link to=/contact class="nav-link">Contact me</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.nav-list {
  list-style: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: transparent;
  z-index: 999;
  height: 5.5294vh;
  position: relative;
  top: 25px;
  left: 50px;
}
.nav-logo {
  justify-self: flex-start;
  height: 100%;
  width: auto;
}
.nav-item,
.nav-logo {
  margin-right: 2vw;
}
.nav-item {
  color: white;
}
.nav-item:active {
  color: red;
}
.router-link-exact-active {
  border-bottom: 1px solid white;
  padding-bottom: 3px;
}
.nav-link {
  color: white;
  text-decoration: none;
}
</style>