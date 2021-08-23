<template>
  <div>
    <h1 class="pageTitle">Pick your favorite!</h1>
    <BackButton />
    <GenderSelect @testEvent="logTestEvent" />
  </div>
</template>

<script>
import BackButton from '../components/BackButton.vue';
import GenderSelect from '../components/GenderSelect.vue';

export default {
  name: "Rate",
  components: {
    BackButton,
    GenderSelect
  },
  methods: {
    logTestEvent() {
      console.log("Hallo uit tweede plek, namelijk rate");
    }
  }
}
</script>
