<template>
  <div class="container">
    <router-view />
  </div>
</template>

<style>
/* A green color: #156064 (Font and buttons) */
/* honeydew: #CFEBDF  (background)       */
/* flame: #DC602E     (back button)      */

@font-face {
  font-family: "IndieFlower";
  src: local("IndieFlower"), 
  url("./fonts/IndieFlower-Regular.ttf") format("truetype");
}

@font-face {
  font-family: "RalewayLight";
  src: local("RalewayLight"),
  url("./fonts/Raleway-ExtraLight.ttf") format("truetype");
}

:root {
  box-sizing: border-box;
  background-color: #CFEBDF;
}

*, 
::before,
::after {
  box-sizing: inherit;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #156064;
}

.container {
  max-width: 1080px;
  margin: 10vh auto;
  display: flex;
  justify-content: center;
}

.pageTitle {
  border-bottom: 4px solid #DC602E;
  border-radius: 7%;
  font-family: "RalewayLight";
  font-size: 3.5rem;
  margin: 0 auto;
  padding: 1rem 2rem;
}

.button {
  cursor: pointer;
  padding: 1rem 2rem;
  background-color: #CFEBDF;
  color: #156064;
  border: 2px solid #156064;
  border-radius: 10%;
  margin: 5rem 5rem 0;
  font-size: 1.7rem;
  font-family: "IndieFlower";
}

.button:hover {
  transition: all 0.7s;
  color: #CFEBDF;
  background-color: #156064;
}
</style>
