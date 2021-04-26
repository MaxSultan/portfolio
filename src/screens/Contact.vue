<template>
  <div class="contact-background">
    <header class="contact-title">
      <hr />
      <h1>Contact me</h1>
      <hr />
    </header>
    <section class="contact-form-container">
      <ContactForm />
    </section>
  </div>
</template>

<script>
import ContactForm from "@/components/ContactForm";

export default {
  components: {
    ContactForm,
  },
};
</script>

<style scoped>
.contact-title {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
hr {
  width: 8em;
  margin-left: 1em;
  margin-right: 1em;
  background-color: white;
  height: 1.5px;
}
.contact-background {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.contact-form-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>