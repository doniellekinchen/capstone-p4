<template>
  <div>
    <div v-if="isLoading">Loading...</div>
        <div v-else>
      <!-- <label for="brandSelect">Select Your Brand: </label> -->
      <br />
      <div class="select-container">
      <select id="brandSelect" v-model="selectedBrand">
        <option value="">Select Your Brand</option>
        <option v-for="brand in uniqueBrands" :key="brand" :value="brand">
          {{ brand }}
        </option>
      </select>
    </div>
      <br/>
      <!-- <div class="response" v-if="selectedBrand"><b>Selected Brand: </b>{{ selectedBrand }}</div> -->
      <div class="foundation">
        <FoundationList v-if="selectedBrand" :airtableData="airtableData" :selectedBrand="selectedBrand" />
      </div>
    </div>
    <button @click="refreshData">Refresh</button>
  </div>
</template>

<script>
import axios from 'axios';
import Airtable from 'airtable';
import FoundationList from './FoundationList.vue';

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
      isLoading: false,
    };
  },
  computed: {
    uniqueBrands() {
      const uniqueSet = new Set();
      this.airtableData.forEach(record => {
        uniqueSet.add(record.fields.Brand);
      });
      return Array.from(uniqueSet);
    },
  },
  mounted() {
    this.isLoading = true;
    axios
      .get('https://api.airtable.com/v0/appFlshcnftsNhlyj/tbl9vXFTlipcXcHRF', {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      })
      .then(response => {
        // console.log(response.data);
        this.airtableData = response.data.records;
        this.isLoading = false;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        this.isLoading = false;
      });
  },
  
  components: { FoundationList },

methods: {
    // Method to reset selected values and clear the match list
    refreshData() {
      this.selectedBrand = '';
      this.selectedFoundation = '';
      this.selectedShade = '';
      this.matchedResults = [];
    },
  }
};
</script>
