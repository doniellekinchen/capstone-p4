<template>
  <div>
    <h1>Match List</h1>
    <ol for="filterMatch">
      <li v-for="record in filteredUndertoneData" :key="record.id" :value="undertone[0].fields.undertone">
        {{ record.fields.Brand }} - {{ record.fields.Foundation }} - {{ record.fields.Shade }}
      </li>
    </ol>
    <div v-if="matchedResults.length > 0">
      <p>Matches: {{ matchedResults.length[0] }}</p>
      <ul>
        <li v-for="result in filteredMatchedResults" :key="result.id">
          {{ result.fields.Brand }} - {{ result.fields.Foundation }} - {{ result.fields.Shade }}
        </li>
      </ul>
    </div>
    <div v-else>
      <p>No matches found.</p>
    </div>
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
  props: ['selectedBrand', 'selectedFoundation', 'selectedShade'],
  data() {
    return {
      undertoneData: [],
      matchedResults: [],
    };
  },
  computed: {
   filteredUndertoneData() {
    let undertone = this.undertoneData.filter(record =>
        record.fields.Brand === this.selectedBrand &&
        record.fields.Foundation === this.selectedFoundation &&
        record.fields.Shade === this.selectedShade)

    let matchedUndertone = this.undertoneData.filter(record => record.fields.undertone === undertone[0].fields.undertone)
    console.log(matchedUndertone)
    this.matchedResults = matchedUndertone
    
      return this.undertoneData.filter(record =>
        record.fields.brand === this.selectedBrand &&
        record.fields.foundation === this.selectedFoundation &&
        record.fields.shade === this.selectedShade &&
        record.fields.undertone === this.undertoneData
      
      );
    },
    filteredMatchedResults() {
      return this.matchedResults.filter(result => !this.isSelected(result));
    },
    stillSelectedFoundation() {
      return this.SelectedFoundation;
    },
    stillSelectedBrand() {
      return this.selectedBrand;
    },
    stillSelectedShade() {
      return this.selectedShade
    }
  },
  watch: {
    selectedBrand: 'fetchData',
    selectedFoundation: 'fetchData',
    selectedShade: 'fetchData',
    selectedUndertone: 'fetchData',
    
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      if (!this.selectedBrand || !this.selectedFoundation || !this.selectedShade) {
        this.undertoneData = [];
        return;
      }

      axios.get('https://api.airtable.com/v0/appFlshcnftsNhlyj/tbl9vXFTlipcXcHRF', {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      })
      .then(response => {
        this.undertoneData = response.data.records;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    },
    // Function to check if a result is the currently selected item
    isSelected(result) {
      return (
        result.fields.Brand === this.selectedBrand &&
        result.fields.Foundation === this.selectedFoundation &&
        result.fields.Shade === this.selectedShade
      );
    },
  },
};
</script>