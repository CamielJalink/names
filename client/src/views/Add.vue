<template>
  <div>
    <h1 class="pageTitle">Add a name!</h1>

    <form class="form">
      <input class="nameInput" type="text" v-model="name" placeholder="Name" />
      <div class="radioPair">
        <label class="radioLabel">Boy</label>
        <input class="radioButton" type="radio" value="Boy" v-model="gender" />
      </div>
      <div class="radioPair">
        <label class="radioLabel">Girl</label>
        <input class="radioButton" type="radio" value="Girl" v-model="gender" />
      </div>

      <button class="button addButton" type="button" @click="addName()">Add</button>

    </form>
    <BackButton />
  </div>
</template>

<script>
import BackButton from '../components/BackButton.vue';

export default {
  name: "Add",
  components: {
    BackButton
  },
  methods: {
    addName() {
      alert(this.name + " " + this.gender);
    },
  },
  data() {
    return {
      name: '',
      gender: ''
    }
  }
}
</script>

<style scoped>
  .form {
    background-color: #CFEBDF;
    margin-top: 5rem;
    padding: 5rem 3rem;
    border-radius: 10%;
    border: 2px solid #156064;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .nameInput {
    margin-bottom: 2rem;
    padding: 0.5rem 0;
    outline: none;
    border: 2px solid #156064;
    border-radius: 10%;
    text-align: center;
    color: #156064;
    background-color: #CFEBDF;
    font-family: IndieFlower;
    font-size: 1.8rem;
  }

  .nameInput::placeholder {
    color: lightslategrey;
  }

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

  .button.addButton {
    margin-top: 2rem;
  }

</style>