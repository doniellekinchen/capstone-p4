<template>
  <h1>TITLE GOES HERE</h1>
  <BrandList />
<br/>
  <button class="button1">Submit</button>
</template>

<script>
import BrandList from './components/BrandList.vue'
// import FoundationList from './components/FoundationList.vue'
// import ShadeList from './components/ShadeList.vue'

export default {
  name: 'App',
  components: {
    BrandList,
    // FoundationList,
    // ShadeList,
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
  margin-top: 60px;

.button1 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: black;
  border: none;
  border-radius: 50%;
  color: white;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
}
}
</style>
