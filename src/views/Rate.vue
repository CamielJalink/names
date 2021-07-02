<template>
  <div>
    <h1 class="pageTitle">Pick your favorite!</h1>
    <BackButton />
  </div>
</template>

<script>
import BackButton from '../components/BackButton.vue';

export default {
  name: "Rate",
  components: {
    BackButton
  },
}
</script>
