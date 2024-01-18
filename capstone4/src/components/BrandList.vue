<template>
  <div>
    <header>Brand List</header>
    <div v-if="isLoading">Loading...</div>
    <div v-else>
      <label for="brandSelect">Select Your Brand</label>
      <select id="brandSelect" v-model="selectedBrand">
        <option value="">Select Your Brand</option>
        <option v-for="record in airtableData" :key="record.id" :value="record.fields.Brand">
          {{ record.fields.Brand }}
        </option>
      </select>
      <div class="response" v-if="selectedBrand"><b>Selected Brand: </b>{{ selectedBrand }}</div>
      <div>
        <FoundationList v-if="selectedBrand" :airtableData="airtableData" :selectedBrand="selectedBrand" />
      </div>
      <div>
        <!-- <button class="button1">Submit</button> -->
        <!-- <ShadeList :selectedFoundation="selectedFoundation" /> -->
        <!-- <ShadeList  /> -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Airtable from 'airtable';
import FoundationList from './FoundationList.vue';
// import ShadeList from './ShadeList.vue';

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
      isLoading: false, // Add this line
      // selectedFoundation: '',
    };
  },
  mounted() {
    this.isLoading = true; // Set loading to true before the API call
    axios
      .get('https://api.airtable.com/v0/appFlshcnftsNhlyj/tbl9vXFTlipcXcHRF', {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      })
      .then(response => {
        console.log(response.data);
        this.airtableData = response.data.records;
        this.isLoading = false; // Set loading to false after the API call is complete
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        this.isLoading = false; // Also set loading to false if there's an error
      });
  },
  components: { FoundationList },
};
</script>