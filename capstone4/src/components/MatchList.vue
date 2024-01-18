<template>
  <div>
    <h1>Match List</h1>
    <ol for="filterMatch">
      <li v-for="record in filteredUndertoneData" :key="record.id" :value="record.fields.Undertone">
        {{ record.fields.Brand }} - {{ record.fields.Foundation }} - {{ record.fields.Shade }}
      </li>
    </ol>
    <!-- <div v-if="selectedFoundation">Selected Foundation: {{ selectedFoundation }}</div> -->
    <!-- <MatchList
      v-if="stillSelectedFoundation"  
      :selectedBrand="stillSelectedBrand"
      :selectedFoundation="stillSelectedFoundation"
      :selectedShade="selectedShade"
    /> -->
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
    console.log(undertone)
    let matchedUndertone = this.undertoneData.filter(record => record.fields.undertone === undertone[0].fields.undertone)
    console.log(matchedUndertone)
    this.matchedResults = matchedUndertone
      // Logging for debugging
      console.log(this.undertoneData.filter(record =>
        record.fields.Brand === this.selectedBrand &&
        record.fields.Foundation === this.selectedFoundation &&
        record.fields.Shade === this.selectedShade))
      console.log("in filter undertone data", this.undertoneData);
      console.log('brandy', this.selectedBrand)
        console.log('foundation', this.selectedFoundation)
        console.log('shady?', this.selectedShade)
      // Filter data based on props
      return this.undertoneData.filter(record =>
        record.fields.brand === this.selectedBrand &&
        record.fields.foundation === this.selectedFoundation &&
        record.fields.shade === this.selectedShade &&
        record.fields.undertone === this.undertoneData
      
      );
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
      // Handle cases where filter criteria are not provided
      if (!this.selectedBrand || !this.selectedFoundation || !this.selectedShade) {
        this.undertoneData = [];
        return;
      }
      console.log('brandy-', this.selectedBrand)
        console.log('foundation-', this.selectedFoundation)
        console.log('shady-', this.selectedShade)
        console.log('undies-', this.undertoneData)

      axios.get('https://api.airtable.com/v0/appFlshcnftsNhlyj/tbl9vXFTlipcXcHRF', {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
     
          
        })
        // params: {
        //   filterByFormula: `AND(
        //     {brand} = "${this.selectedBrand}",
        //     {foundation} = "${this.selectedFoundation}",
        //     {shade} = "${this.selectedShade}"
        //   )`,
        // },
      // })
      .then(response => {
        console.log('first call finished', response.data.records)
        this.undertoneData = response.data.records
        // this.undertoneData = response.data.records;
        // axios.get('https://api.airtable.com/v0/appFlshcnftsNhlyj/tbl9vXFTlipcXcHRF', {
        // headers: {
        //   Authorization: `Bearer ${API_KEY}`,
        // },
        // params: {
        //   filterByFormula: `AND(
        //     {undertone} = "${response.data.records.fields.undertone}",
        //   )`,
        // },
     
      })
      // })
      // .then(response)
      // console.log(response)
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    },
  },
};
</script>