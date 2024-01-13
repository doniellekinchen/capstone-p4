<template>
  <div id="app">
    <HomePage msg="SITE TITLE HERE"/>
    <HomeForm/>
    <!-- <FoundationShadelist/> -->
  </div>
</template>

<script>
// import FoundationShadelist from './components/FoundationShadeList.vue'
import HomePage from './components/Home.vue';
import HomeForm from './components/HomeForm.vue';

export default {
  name: 'App',
  components: {
    // FoundationShadelist,
    HomePage,
    HomeForm
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: linear-gradient(to bottom, #f0b7a1 0%,#8c3310 100%,#bf6e4e 100%,#8c3310 101%);
  min-height: 100vh;
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  padding: 0;
}
</style>
