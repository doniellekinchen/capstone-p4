<template>
  <div>
    <h1 class="matchtitle">Match List</h1>
    <ul>
      <li v-for="record in filteredUndertoneData" :key="record.id" :value="undertone[0].fields.undertone">
        {{ record.fields.Brand }} - {{ record.fields.Foundation }} - {{ record.fields.Shade }}
      </li>
    </ul>
    <div class="matchlist" v-if="matchedResults.length > 0">
      <h3>Here is a list of your matches! We are constantly updating so check back frequently! {{ matchedResults.length[0] }} </h3>
      <ul class="ulist">
        <li v-for="result in filteredMatchedResults" :key="result.id">
          {{ result.fields.Brand }} - {{ result.fields.Foundation }} - {{ result.fields.Shade }}
        </li>
      </ul>
      <h3>Now head to your local Sephora or Ulta and try your new shade! </h3>
    </div>
    <div v-else>
      <p>No matches found yet. Our database may need updates with more brands.</p>
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

    if (undertone.length > 0 && undertone[0].fields) {
    let matchedUndertone = this.undertoneData.filter(record => record.fields.undertone === undertone[0].fields.undertone);
    console.log(matchedUndertone);
    this.matchedResults = matchedUndertone;
  }
    
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

<style>

  h3 {
    color: black;
  }

</style>