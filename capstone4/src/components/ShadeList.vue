<template>
    <div>
      <header>Shade Name List</header>
      <label for="shadeNameSelect">Select Your Shade</label>
      <select id="shadeNameSelect" v-model="selectedShadeName">
        <option value="">Select Your Shade</option>
        <option v-for="record in airtableData" :key="record.id" :value="record.fields.ShadeName">
          {{ record.fields.ShadeName }}
        </option>
      </select>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import Airtable from 'airtable';
  
  const API_KEY = process.env.VUE_APP_AIRTABLE_API_KEY;
  
  Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: API_KEY,
  });
  
  export default {
    name: 'FoundationList',
    data() {
      return {
        airtableData: [],
        selectedShadeName: '',
      };
    },
    mounted() {
      // Example API request using Axios
      axios
        .get('https://api.airtable.com/v0/appFlshcnftsNhlyj/tbl9vXFTlipcXcHRF', {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
          },
        })
        .then(response => {
          // Log the data structure to the console for debugging
          console.log('Airtable Data:', response.data);
          
          // Update data with the specific field you want to display
          this.airtableData = response.data.records;
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    },
  };
  </script>
  
  <style>
  h1 {
    color: red;
  }
  </style>
  