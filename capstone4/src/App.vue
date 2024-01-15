<template>
  <h1>TITLE GOES HERE</h1>
  <BrandList />
  <br/>
  <FoundationList/>
  <br/>
  <ShadeList/>
</template>

<script>
import BrandList from './components/BrandList.vue'
import FoundationList from './components/FoundationList.vue'
import ShadeList from './components/ShadeList.vue'

export default {
  name: 'App',
  components: {
    BrandList,
    FoundationList,
    ShadeList,
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
}
</style>
