<template>
  <div>
    <label for="foundationSelect">Select Your Foundation</label>
    <select id="foundationSelect" v-model="selectedFoundation">
      <option value="" >Select Your Foundation</option>
      <option v-for="foundation in uniqueFoundations" :key="foundation" :value="foundation">
        {{ foundation }}
      </option>
    </select>
    <div class="response" v-if="selectedFoundation">Selected Foundation: {{ selectedFoundation }}</div>
    <ShadeList v-if="!loading" :selectedBrand="stillSelectedBrand" :selectedFoundation="selectedFoundation" />
  </div>
</template>

  <script>
  import axios from 'axios';
  import Airtable from 'airtable';
  import ShadeList from './ShadeList.vue';
  
  const API_KEY = process.env.VUE_APP_AIRTABLE_API_KEY;

  Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: API_KEY,
  });
  
  export default {
   props: ['airtableData', 'selectedBrand'],
   computed: {
  filteredAirtableData() {
    return this.airtableData.filter(record => record.fields.Brand === this.selectedBrand);
  },
  uniqueFoundations() {
    const uniqueSet = new Set();
    this.filteredAirtableData.forEach(record => {
      uniqueSet.add(record.fields.Foundation);
    });
    return Array.from(uniqueSet);
  },
},
    data() {
      return {
        stillSelectedBrand: this.selectedBrand,
        selectedFoundation: '',
        loading: true,
      }
    },  
    watch: {
    airtableData: 'fetchData',
    selectedBrand: 'fetchData',
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    
  fetchData() {
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
      })
      .finally(() => {
        this.loading = false;
      })
      console.log("Selected Foundation in ShadeList:", this.selectedFoundation);
      
  },
},
components: { ShadeList }
}
</script>
