<template>
    <div>
    <select v-model="selectedOption">
      <option value="" disabled>Select an option</option>
      <option v-for="record in airtableData" :key="record.id" :value="record.id">
        {{ record.fields.name }} <!--adjust to airtable-->
      </option>
    </select>
  </div>
<input type="submit" value="Submit" />
 
</template>

<script>
import axios from 'axios';

    export default {
        name: 'HomeForm',
        data() {
            return {
                airtableData: []
            };
        },
        mounted() {
            this.fetchAirtableData()
        },
        methods: {
    async fetchAirtableData() {
      try {
        const response = await axios.get('AIRTABLE ENDPOINT HERE');
        this.airtableData = response.data.records;
      } catch (error) {
        console.error('Error:', error); //airtable error
      }
    },
  },
};
</script>


<style>
    label {
        color: red
    }
</style>