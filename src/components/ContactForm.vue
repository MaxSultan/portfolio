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
  background-color: #899878;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  color: white;
  padding-left: 15%;
  padding-right: 15%;
  padding-top: 10%;
  padding-bottom: 10%;
  width: 33vw;
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
.form-button{
    padding-left: 30%;
    padding-right: 30%;
    padding-top: 2%;
    padding-bottom: 2%;
    border: none;
    border-radius: 40px;
    color: white;
    background-color: #98a297;
    box-shadow: 2.5px 3px 2px #121113;
}
</style>