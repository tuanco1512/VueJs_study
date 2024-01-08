<template>
<<<<<<< HEAD
  <div>
    <div v-for="(item, index) in conssignmentArray" :key="index">
      <div>{{ item.full_address }}</div>
      <div>{{ item.price }}</div>
    </div>
    <hr />
    <button @click.prevent="loadData" v-if="isLoadData">Load Data</button>
=======
  <div >
    <div v-for="(item, index) in consignmentArray" :key="index">
      <NuxtLink :to="`/detail/${item.post_link}`">{{ item.full_address }}</NuxtLink>
      <div>{{ item.price }}</div>
    </div>
    <hr>
    <button @click.prevent="loadData" v-if="isLoadData">
      Load Data
    </button>
>>>>>>> CallAPI
  </div>
</template>
<script>
export default {
  data() {
    return {
<<<<<<< HEAD
      conssignmentArray: [],
      page: 1,
      isLoadData: true,
=======
      consignmentArray:[],
      page:1,
      isLoadData:true
>>>>>>> CallAPI
    };
  },

  mounted() {
<<<<<<< HEAD
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
=======
    this.loadData()
>>>>>>> CallAPI
  },

  methods: {
    async loadData() {
      try {
        if(this.isLoadData){
          const response = await this.$axios.get(`/get-consignment-list?page=${this.page}`)
        // this.consignmentArray = response.data.filterResult.data
          this.consignmentArray = [...this.consignmentArray, ...response.data.filterResult.data ]

          this.page ++
          if(response.data.filterResult.data.length === 0) {
            this.isLoadData = false
          }
        }

      } catch (error) {
        console.error('Error fetching data:', error)
      }
    },

    loaddautien () {
      console.log('asdsa')
    }
  }

};
</script>
