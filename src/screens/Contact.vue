<template>
  <div>
    <a name="top"></a>
    <div class="aspect-ratio-box">
      <div class="background-image aspect-ratio-content">
        <NavBar />
        <div class="contact-background">
          <Title title="Contact me" />
          <section class="contact-form-container">
            <ContactForm />
          </section>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import ContactForm from "@/components/ContactForm";
import Title from "@/components/Title";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default {
  components: {
    ContactForm,
    Title,
    NavBar,
    Footer,
  },
};
</script>

<style scoped>
.contact-background {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 40vh;
  height: 45%;
}
.contact-form-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>