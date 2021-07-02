<template>
  <div class="flexContainer">
    <h1 class="pageTitle">Names</h1>
    <div>
      <button class="button" @click="goTo('rate')">Rate</button>
      <button class="button" @click="goTo('add')">Add</button>
    </div>
  </div>
</template>

<script>

export default {
  name: "Names",
  methods: {
    goTo(pageUrl) {
      this.$router.push(pageUrl);
    },
  },
};
</script>

<style scoped>
.flexContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
