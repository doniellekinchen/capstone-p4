<template>
  <div class="app-container">
    <img class="logo" style="display: center" src="./assets/whitetextshadow.png" alt="logo" />
    <br/>
    <NavBar />
    <main class="brands">
      <router-view></router-view>
      </main>
    </div>
</template>


<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
},
};
</script>


<style>
body {
  /* background-color: #e4e2dd; */
  /* background-image: url('./assets/texturedbkg.png'); */
  /* background-size: cover; */
  background: linear-gradient(to right, #a90329 2%,#8f0222 49%,#6d0019 100%);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
}

.app-container {
  animation: fadeIn 2s ease-in-out;
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
  background-color: white;
  width: 50%;
  /* padding-right: 1em; */
  position: static;
  margin: auto;
  box-shadow: 10px 10px;
}

button{
  background-color: white;
  border-width: 5px;
  border-radius: 50%;
  border-color: #000000;
  color: #000;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
}

h3 {
    color: white;
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
  background-color: white; 
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

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>