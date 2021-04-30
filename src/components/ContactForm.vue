<template>
  <form class="form-background">
    <div class="form-row">
      <div class="form-input-wrapper half-w">
        <label for="first name">first name</label>
        <input name="first name" v-model="firstName" />
      </div>
      <div class="form-input-wrapper half-w">
        <label for="last name">last name</label>
        <input name="last name" v-model="lastName" />
      </div>
    </div>
    <div class="form-row">
      <div class="form-input-wrapper">
        <label for="message">message</label>
        <input name="message" v-model="message" />
      </div>
    </div>
    <div class="form-row">
      <div class="form-input-wrapper">
        <label for="email">email</label>
        <input name="email" v-model="email" />
      </div>
    </div>
    <div class="form-row">
      <div class="form-input-wrapper">
        <label for="phoneNumber">phone number</label>
        <input name="phoneNumber" v-model="phoneNumber" />
      </div>
    </div>
    <div class="form-row">
      <button class="form-button">Send</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      message: "",
      email: "",
      phoneNumber: "",
    };
  },
};
</script>

<style scoped>
form {
  width: 70%;
}
.form-background {
  background-color: #98a297;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  color: white;
  padding-left: 15%;
  padding-right: 15%;
  padding-top: 10%;
  padding-bottom: 10%;
  width: 71.25vw;
  height: 60vh;
}
.form-input-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin: 1em;
}
.half-w {
  max-width: 50%;
}
.form-row {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
}
input {
  width: 100%;
}
.form-button {
  padding-left: 30%;
  padding-right: 30%;
  padding-top: 2%;
  padding-bottom: 2%;
  border: none;
  border-radius: 40px;
  color: white;
  background-color: #80857f;
  box-shadow: 2.5px 3px 2px #121113;
  cursor: pointer;
}
@keyframes slideDown {
  0% {
  }
  50% {
    transform: translateY(-10px);
  }
}
input {
  border: none;
  border-bottom: 1px solid white;
  background-color: transparent;
  caret-color: white;
  text-indent: 2px;
  padding: 2px;
  color: white;
  margin-top: 0px;
  transition: all 0.3s;
  font-size: 10px;
  line-height: 2px;
}
input:focus {
  background-color: transparent;
  border: none;
  border-bottom: 1px solid white;
  padding-bottom: 4px;
  margin-top: 10px;
  transition: all 0.3s;
  width: 110%;
  font-size: 12px;
}
input:focus-visible {
  outline-offset: none;
  padding: 0px;
  padding-bottom: 4px;
  outline: none;
  animation: slideDown 1s once 0s ease-in;
  animation-fill-mode: forwards;
}
label{
  position: relative;
  top: 8px;
}
</style>