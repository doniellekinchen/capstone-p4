<template>
  <div class="app-container">
    <img class="logo" style="display: center" src="./assets/whitetransparentunblur.png" alt="logo" />
    <br/>
    <NavBar />
    <main class="brands">
      <router-view></router-view>
      </main>
      <br/>
      <div>
      <FooterBox />
      </div>
    </div>
</template>


<script>
import FooterBox from './components/FooterBox.vue';
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    FooterBox
},
};
</script>


<style>
body {
  background: linear-gradient(135deg, #dc2626 0%, #991b1b 50%, #7f1d1d 100%);
  margin: 0;
  padding: 0;
  min-height: 100vh;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

#app {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1f2937;
  padding: 2rem 1rem;
  min-height: 100vh;
}

.app-container {
  animation: slideInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  max-width: 1200px;
  margin: 0 auto;
}

select {
  appearance: none;
  -webkit-appearance: none;
  width: 100%;
  max-width: 320px;
  font-size: 1rem;
  padding: 0.875rem 3rem 0.875rem 1rem;
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(220, 38, 38, 0.3);
  border-radius: 12px;
  color: #374151;
  cursor: pointer;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.75rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
}

select:hover {
  border-color: #dc2626;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
}

select:focus {
  outline: none;
  border-color: #dc2626;
  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
}

option {
  text-align: left;
  padding: 0.5rem;
  background-color: white;
  color: #374151;
}

.logo {
  width: 100%;
  max-width: 400px;
  height: auto;
  margin-bottom: 2rem;
  filter: drop-shadow(0 10px 25px rgba(0, 0, 0, 0.2));
}

.matchtitle {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  width: 100%;
  max-width: 600px;
  margin: 2rem auto;
  padding: 1.5rem;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

button {
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  border: 2px solid #dc2626;
  border-radius: 50px;
  color: #dc2626;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 8px 20px rgba(220, 38, 38, 0.2);
  min-width: 120px;
  margin: 0.5rem;
}

button:hover {
  background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 15px 35px rgba(220, 38, 38, 0.3);
}

button:active {
  transform: translateY(-1px);
}

h3 {
  color: white;
  width: 100%;
  max-width: 600px;
  margin: 2rem auto;
  font-size: 1.5rem;
  font-weight: 700;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  letter-spacing: -0.025em;
}

.ulist {
  list-style-type: none;
  text-align: center;
  padding: 0;
  margin: 2rem auto;
  max-width: 600px;
}

li {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(220, 38, 38, 0.1);
  border-radius: 12px;
  margin: 1rem 0;
  padding: 1.25rem;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  font-weight: 500;
}

li:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  border-color: rgba(220, 38, 38, 0.3);
}

.brands {
  color: #1f2937;
  font-weight: 600;
}

.select-container {
  text-align: center;
  margin: 2rem 0;
}

/* Responsive Design */
@media (max-width: 768px) {
  #app {
    padding: 1rem 0.5rem;
  }
  
  .logo {
    max-width: 280px;
  }
  
  select {
    max-width: 280px;
    font-size: 0.9rem;
    padding: 0.75rem 2.5rem 0.75rem 0.875rem;
  }
  
  .matchtitle {
    max-width: 90%;
    padding: 1rem;
  }
  
  h3 {
    font-size: 1.25rem;
    max-width: 90%;
  }
  
  .ulist {
    max-width: 90%;
  }
  
  li {
    padding: 1rem;
  }
  
  button {
    padding: 0.875rem 1.5rem;
    font-size: 0.9rem;
    min-width: 100px;
  }
}

/* Enhanced Animations */
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Loading state animation */
.loading {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

/* Focus styles for accessibility */
button:focus,
select:focus {
  outline: 2px solid #dc2626;
  outline-offset: 2px;
}
</style>