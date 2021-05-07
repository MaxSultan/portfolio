<template>
<div>
  <a name="top"></a>
  <div class="aspect-ratio-box">
    <div class="background-image aspect-ratio-content">
      <NavBar />
      <Title title="About me" />

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
    Footer,
  },
};
</script>

<style>
</style>