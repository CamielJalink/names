<template>
  <div>
    <h1 class="pageTitle">Pick your favorite!</h1>
    <GenderSelect @genderSelected="genderSelected" componentWidth="35%" />
    <BackButton />
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
    genderSelected(gender) {
      console.log("Hallo uit tweede plek, namelijk rate", gender);
    }
  }
}
</script>

<style scope>
  .pageTitle {
    margin-bottom: 2rem;
  }
</style>