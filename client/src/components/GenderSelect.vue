<template>
  <div class="blockContainer" :style="{ width: componentWidth }">
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
  props: [
    'componentWidth'
  ],
  data() {
    return {
      gender: '',
    }
  }
}
</script>

<style scoped>
  .blockContainer {
    display: block;
    margin: 0 auto;
  }

  .radioPair {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .radioLabel {
    color: #156064;
    font-family: IndieFlower;
    font-size: 1.8rem;
  }

  .radioButton {
    height: 1.5rem;
    width: 1.5rem;
  }
</style>