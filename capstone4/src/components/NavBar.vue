<template>
    <nav>
    <router-link to="/" name="BrandList">Home</router-link>
    <router-link to="/about" name="AboutPage">About</router-link>
    <router-link to="/updates" name="UpdatePage">Updates</router-link>
    </nav>
  </template>
  
  <script>
    export default {
      name: 'NavBar'
    }
  </script>
  
  <style>
    .router-link-exact-active {
      color: #fff;
    }
  
    nav {
      /* background: #fff; */
     padding: 1em;
     width: 50%;
     margin: auto;
    }
  
    nav a {
      margin: 1em;
      color: tan;
      text-decoration: none;
      font-weight: 800;
    }
  </style>