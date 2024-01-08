<template>
  <div>
    <div v-for="(item, index) in conssignmentArray" :key="index">
      <div>{{ item.full_address }}</div>
      <div>{{ item.price }}</div>
    </div>
    <hr />
    <button @click.prevent="loadData" v-if="isLoadData">Load Data</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      conssignmentArray: [],
      page: 1,
      isLoadData: true,
    };
  },

  mounted() {
    this.loadData();
  },

  methods: {
    async loadData() {
      try {
        if (this.isLoadData) {
          const response = await this.$axios.get(
            `/get-consignment-list?page=${this.page}`
          );

          //this.conssignmentArray = response.data.filterResult.data
          this.conssignmentArray = [
            ...this.conssignmentArray,
            ...response.data.filterResult.data,
          ];

          this.page++;
          if (response.data.filterResult.data.length === 0) {
            this.isLoadData = false;
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
};
</script>
