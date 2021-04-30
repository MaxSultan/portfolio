<template>
  <header class="page-title">
    <hr />
    <h1 class="nowrap">{{ title }}</h1>
    <hr />
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.page-title {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
hr {
  width: 30vw;
  margin-left: 1em;
  margin-right: 1em;
  background-color: white;
  height: 1.5px;
}
.nowrap {
  white-space: nowrap;
}
</style>