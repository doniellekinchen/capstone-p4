<template>
  <div>
    <header>Shade Name List</header>
    <label for="shadeSelect">Select Your Shade</label>
    <select id="shadeSelect" v-model="selectedShade">
      <option value="">Select Your Shade</option>
      <option v-for="record in filteredShadeData" :key="record.id" :value="record.fields.Shade">
        {{ record.fields.Shade }}
      </option>
    </select>
    <div v-if="selectedShade">Selected Shade: {{ selectedShade }}</div>
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
   props: ['selectedFoundation'],
     data() {
      return {
        selectedShade: '',
        shadeData:[],
      }
    },   
  computed: {
    filteredShadeData() {
      return this.shadeData.filter(record => record.fields.Foundation === this.selectedFoundation);
    }
   }, 
  mounted() {
    axios
      .get('https://api.airtable.com/v0/appFlshcnftsNhlyj/tbl9vXFTlipcXcHRF', {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      })
      .then(response => {
        console.log(response.data.records);
        this.shadeData = response.data.records;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  },
}
</script>