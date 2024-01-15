<template>
    <div>
     <header>Foundation Name List</header>
      <label for="foundationSelect">Select Your Foundation Name</label>
      <select id="foundationSelect" v-model="selectedFoundationName">
        <option value="" >Select Your Foundation Name</option>
        <option v-for="record in airtableData" :key="record.id" :value="record.fields.FoundationName">
          {{ record.fields.FoundationName }}
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
      selectedFoundationName: '',
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