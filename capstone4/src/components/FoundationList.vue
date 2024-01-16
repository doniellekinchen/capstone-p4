<template>
  <div>
    <label for="foundationSelect">Select Your Foundation</label>
    <select id="foundationSelect" v-model="selectedFoundation">
      <option value="" >Select Your Foundation</option>
      <option v-for="record in filteredFoundationName" :key="record.id" :value="record.fields.Foundation">
        {{ record.fields.Foundation }}
      </option>
    </select>
    <div class="response" v-if="selectedFoundation">Selected Foundation: {{ selectedFoundation }}</div>
    <!-- <ShadeList v-if="selectedFoundation" :filteredFoundation="filteredFoundation" /> -->
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
      selectedFoundation: '',
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
        console.log(response.data);
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