<template>
  <img class="logo" style="display: center" src="./assets/transparentlogo2.png" alt="logo" />
  <div class="brands">
  <BrandList />
  </div>
<!-- <br/>
<div class="foundation">
<FoundationList />
</div>
<br/>
<div class="shade">
<ShadeList />
</div>
<br/>
<div class="matches">
<MatchList />
</div>  -->

</template>

<script>
import BrandList from './components/BrandList.vue'
// import FoundationList from './components/FoundationList.vue';
// import MatchList from './components/MatchList.vue';
// import ShadeList from './components/ShadeList.vue';


export default {
  name: 'App',
  components: {
    BrandList,
//     FoundationList,
//     ShadeList,
//     MatchList,
 },
};
</script>


<style>
body {
  /* background-color: #e4e2dd; */
  background-image: url('./assets/texturedbkg.png');
  /* background-size: cover; */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
 select {
  appearance: none;
  -webkit-appearance: none;
  width: 30%;
  font-size: 1.15rem;
  /* padding: 0.675em 6em 0.675em 1em; */
  background-color: #fff;
  border: 2px solid rgb(165, 42, 42);
  border-radius: 0.25rem;
  color: #000;
  cursor: pointer;
  box-shadow: 10px 10px;
}
option {
  text-align: center; 
}

.logo{
  width: 500px;
}

.matchtitle{
  background-color: tan;
  width: 50%;
  /* padding-right: 1em; */
  position: static;
  margin: auto;
  box-shadow: 10px 10px;
}

h3 {
    color: black;
    width: 50%;
    margin: auto;
  }

.ulist{
  list-style-type: none;
  text-align: center;
}

li {
  border: 1px solid #ddd; 
  margin-top: -1px; 
  background-color: tan; 
  width: 50%;
  margin: auto;
  box-shadow: 5px 5px;
}

.brands {
 color: black;
}



.select-container {
  text-align: center;
}


option {
  text-align: center;
}

</style>