// Selecteer je gender, man of vrouw. 

// Als je een gender hebt gekozen, gooi een event 'genderGekozen' met payload 'man' of 'vrouw'. 

// Hoe werkt het afvangen van dit event? Alleen op gerenderde items denk ik? 


// Test: 
// Child component gooit event.
// Ouder 1 console.logged X
// Ouder 2 console.logged YHuisa

<template>
  <div>
    <button @click="throwEvent">Event Test</button>
  </div>
</template>


<script>
export default {
  name: 'GenderSelect',
  methods: {
    throwEvent() {
      console.log('going to throw testEvent event');
      this.$emit('testEvent');
    }
  }
}
</script>