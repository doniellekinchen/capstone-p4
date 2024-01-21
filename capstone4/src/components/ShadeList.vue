<template>
  <div>
    <!-- <label for="shadeSelect">Select Your Shade</label> -->
    <div class="select-container">
    <select id="shadeSelect" v-model="selectedShade">
      <option value="">Select Your Shade</option>
      <option
        v-for="record in filteredShadeData"
        :key="record.id"
        :value="record.fields.Shade"
      >
        {{ record.fields.Shade }}
      </option>
    </select>
  </div>
    <br/>
    <hr>
    <!-- <div v-if="selectedShade">Selected Shade: {{ selectedShade }}</div> -->
    <MatchList
      v-if="!loading"
      :selectedBrand="stillSelectedBrand"
      :selectedFoundation="stillSelectedFoundation"
      :selectedShade="selectedShade"
    />
  </div>
</template>

<script>
import axios from 'axios';
import Airtable from 'airtable';
import MatchList from './MatchList.vue';

const API_KEY = process.env.VUE_APP_AIRTABLE_KEY;

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: API_KEY,
});

export default {
  props: ['selectedBrand', 'selectedFoundation'],
  components: { MatchList },
  computed: {
    stillSelectedFoundation() {
      return this.selectedFoundation;
    },
    stillSelectedBrand() {
      return this.selectedBrand;
    },
    filteredShadeData() {
      // console.log('shadelist', this.selectedBrand);
      // console.log('shadelist', this.selectedFoundation);
      // console.log('shadelist', this.selectedShade);
      return this.shadeData.filter(
        (record) => record.fields.Foundation === this.selectedFoundation
      );
    },
  },
  data() {
    return {
      selectedShade: '',
      shadeData: [],
      loading: true,
    };
  },
  watch: {
    selectedBrand: 'fetchData',
    selectedFoundation: 'fetchData',
    // selectedFoundation(newVal) {
      // console.log('selectedFoundation changed:', newVal);
    },
    
  mounted() {
    this.fetchData();
  },

  methods: {
    fetchData() {
      axios.get(
        'https://api.airtable.com/v0/appFlshcnftsNhlyj/tbl9vXFTlipcXcHRF',
        {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      })
      .then(response => {
        // console.log(response.data.records);
        this.shadeData = response.data.records;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      })
      .finally(() => {
        this.loading = false;
      })
      // console.log("Selected Foundation in ShadeList:", this.selectedFoundation);
  },
  
}
}
</script>
