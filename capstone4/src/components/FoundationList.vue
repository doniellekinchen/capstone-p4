<template>
  <div>
    <label for="foundationSelect">Select Your Foundation</label>
    <select id="foundationSelect" v-model="selectedFoundation">
      <option value="" >Select Your Foundation</option>
      <option v-for="record in filteredAirtableData" :key="record.id" :value="record.fields.Foundation">
        {{ record.fields.Foundation }}
      </option>
    </select>
    <div class="response" v-if="selectedFoundation">Selected Foundation: {{ selectedFoundation }}</div>
    <!-- <ShadeList v-if="selectedFoundation" :filteredFoundation="filteredFoundation" /> -->
    <ShadeList :selectedFoundation="selectedFoundation" />
  </div>
</template>
  
  <script>
  import axios from 'axios';
  import Airtable from 'airtable';
  import ShadeList from './ShadeList.vue';
  
  const API_KEY = process.env.VUE_APP_AIRTABLE_API_KEY;
  // console.log(selectedBrand)

  Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: API_KEY,
  });
  
  export default {
   props: ['airtableData', 'selectedBrand'],
   computed: {
    filteredAirtableData() {
      console.log(this.airtableData)
      return this.airtableData.filter(record => record.fields.Brand === this.selectedBrand);
    }
   },
    data() {
      return {
        selectedFoundation: '',
      }
    },  
    mounted() {
    
    axios.get('https://api.airtable.com/v0/appFlshcnftsNhlyj/tbl9vXFTlipcXcHRF', {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      })
      .then(response => {
        console.log(response.data);
        this.airtableData = response.data.records
        ;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  },
  components: { ShadeList },
}; 
</script>

<style>
    h1 {
        color: red;
    }
</style>