<template>
  <div>
    <h1 class="pageTitle">Add a name!</h1>

    <form class="form">
      <input class="nameInput" type="text" v-model="name" placeholder="Name" />
      <GenderSelect @genderSelected="genderSelected" />

      <button :disabled="!isActive" class="button addButton" type="button" @click="addName()">Add</button>

      <h4 v-if="showNameAddDuplicate" class="errorMessage">Name already found on the shortlist!</h4>
      <h4 v-if="showNameAddSuccess" class="successMessage">Name successfully added to the shortlist!</h4>
    </form>
    <BackButton />
  </div>
</template>

<script>
import BackButton from '../components/BackButton.vue';
import GenderSelect from '../components/GenderSelect.vue';
import NameService from '../services/nameService';

const nameService = new NameService(); // Todo: this should become a reuseable instance of nameService

export default {
  name: "Add",
  components: {
    BackButton,
    GenderSelect
  },
  methods: {
    async addName() {
      this.isActive = false;
      await nameService.addName(this.name, this.gender)
        .then((responseData) => {
          if(responseData.success) { // If a success, clear the name and show that the name was added
            this.name = '';
            this.showNameAddDuplicate = false;
            this.showNameAddSuccess = true;
          } else{ // if not a succes, maybe some warning and don't clear the name?
            this.showNameAddDuplicate = true;
            this.showNameAddSuccess = false;
          }
          this.isActive = true;
        })
    },
    genderSelected(gender) {
      console.log(gender);
      console.log("I am logging test event from add.vue");
    }
  },
  data() {
    return {
      name: '',
      gender: '',
      isActive: true,
      showNameAddDuplicate: false,
      showNameAddSuccess: false
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

  .button.addButton {
    margin-top: 2rem;
  }

  .addButton:disabled {
    background-color: lightgray;
  }

  .errorMessage {
    color: #DC602E;
    margin-bottom: 0;
    margin-top: 2.5rem;
  }

  .successMessage {
    margin-bottom: 0;
    margin-top: 2.5rem;
  }
</style>