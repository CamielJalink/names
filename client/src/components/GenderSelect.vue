<template>
  <div>
    <div class="radioPair">
      <label class="radioLabel">Boy</label>
      <input class="radioButton" type="radio" value="Boy" v-model="gender" @click="throwGenderSelected('Boy')" />
    </div>
    <div class="radioPair">
      <label class="radioLabel">Girl</label>
      <input class="radioButton" type="radio" value="Girl" v-model="gender" @click="throwGenderSelected('Girl')" />
    </div>
  </div>
</template>


<script>
export default {
  name: 'GenderSelect',
  methods: {
    throwGenderSelected(gender) {
      this.$emit('genderSelected', gender);
    }
  },
  data() {
    return {
      gender: '',
    }
  }
}
</script>

<style scoped>
  .radioPair {
    display: flex;
    align-items: center;
  }

  .radioLabel {
    color: #156064;
    font-family: IndieFlower;
    font-size: 1.8rem;
    margin-left: auto;
  }

  .radioButton {
    display: block;
    margin-left: auto;
    margin-right: 5rem;
    height: 1.5rem;
    width: 1.5rem;
  }
</style>