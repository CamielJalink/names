<template>
  <button class="button" @click='goBack'>Back</button>
</template>

<script>
export default ({
  name: "BackButton",
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
})
</script>

<style scoped>
  .button {
    border-color: #DC602E;
    color: #DC602E;
  }
  .button:hover {
    background-color: #DC602E;
    color: #CFEBDF;
  }
</style>