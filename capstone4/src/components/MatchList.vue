<template>
  <div>
    <h1>Match List</h1>
    <ol>
      <li v-for="record in filteredUndertoneData" :key="record.id" :value="record.fields.Undertone">
        {{ record.fields.Brand }} - {{ record.fields.Foundation }} - {{ record.fields.Shade }}
      </li>
    </ol>
    <div v-if="selectedFoundation">Selected Foundation: {{ selectedFoundation }}</div>
    <MatchList
      v-if="stillSelectedFoundation"  
      :selectedBrand="stillSelectedBrand"
      :selectedFoundation="stillSelectedFoundation"
      :selectedShade="selectedShade"
    />
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
    };
  },
  computed: {
    filteredUndertoneData() {
      // Logging for debugging
      console.log("in filter undertone data", this.undertoneData);
      console.log(this.selectedBrand)
        console.log('?', this.selectedFoundation)
        console.log(this.selectedShade)
      // Filter data based on props
      return this.undertoneData.filter(record =>
        record.fields.brand === this.selectedBrand &&
        record.fields.foundation === this.selectedFoundation &&
        record.fields.shade === this.selectedShade
      );
    },
  },
  watch: {
    selectedBrand: 'fetchData',
    selectedFoundation: 'fetchData',
    selectedShade: 'fetchData',
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

      axios.get('https://api.airtable.com/v0/appFlshcnftsNhlyj/tbl9vXFTlipcXcHRF', {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
        params: {
          filterByFormula: `AND(
            {brand} = "${this.selectedBrand}",
            {foundation} = "${this.selectedFoundation}",
            {shade} = "${this.selectedShade}"
          )`,
        },
      })
      .then(response => {
        this.undertoneData = response.data.records;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    },
  },
};
</script>