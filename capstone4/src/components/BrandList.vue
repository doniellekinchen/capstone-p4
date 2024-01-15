<template>
    <div>
      <header>Brand List</header>
      <label for="brandSelect">Select Your Brand</label>
      <select id="brandSelect" v-model="selectedBrand">
        <option value="" >Select Your Brand</option>
        <option v-for="record in airtableData" :key="record.id" :value="record.fields.Brand">
          {{ record.fields.Brand }}
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
    name: 'BrandList',
    data() {
      return {
        airtableData: [],
        selectedBrand: '',
      };
    },
    mounted() {
      // Example API request using Axios
      axios.get('https://api.airtable.com/v0/appFlshcnftsNhlyj/tbl9vXFTlipcXcHRF', {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      })
      .then(response => {
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
  