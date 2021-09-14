<template>
  <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <MagicNumber/>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import MagicNumber from "@/components/MagicNumber";

export default {
  name: 'App',
  components: {
    // HelloWorld
    MagicNumber
  }
}
</script>

<style>
body {
  font-size: 70%;
}
/*
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
*/
</style>
