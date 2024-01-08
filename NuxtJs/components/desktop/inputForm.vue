<template>
  <div >
    <div v-for="(item, index) in consignmentArray" :key="index">
      <NuxtLink :to="`/detail/${item.post_link}`">{{ item.full_address }}</NuxtLink>
      <div>{{ item.price }}</div>
    </div>
    <hr>
    <button @click.prevent="loadData" v-if="isLoadData">
      Load Data
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      consignmentArray:[],
      page:1,
      isLoadData:true
    };
  },

  mounted() {
    this.loadData()
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
