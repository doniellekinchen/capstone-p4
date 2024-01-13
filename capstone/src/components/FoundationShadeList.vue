<!-- FoundationShadeList.vue -->
<template>
    <div>
      <h1>Foundation Shades</h1>
      <ul>
        <li v-for="shade in foundationShades" :key="shade.id">
          {{ shade.fields.Brand }} - {{ shade.fields.ShadeName }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        foundationShades: [],
      };
    },
    mounted() {
      this.fetchFoundationShades();
    },
    methods: {
      async fetchFoundationShades() {
        try {
          const response = await this.$axios.get(
            `https://api.airtable.com/v0/appFlshcnftsNhlyj/p4`,
            {
              headers: {
                Authorization: `Bearer YOUR_API_KEY`,
              },
            }
          );
          this.foundationShades = response.data.records;
        } catch (error) {
          console.error('Error fetching foundation shades:', error);
        }
      },
    },
  };
  </script>
  