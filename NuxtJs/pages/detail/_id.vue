<template>
  <div>
    <div>{{ dataDetail.full_address }}</div>
    <div @click.prevent="chuyentrang">
      asdasdas
    </div>
  </div>

</template>
<script>
  export default {
    layout: false,
    data() {
      return {
        abc:''
      }
    },

    async asyncData({params}) {
      const repo  = await fetch(`https://api-test.karo.land/api/get-post/${params.id}`)
      const data = await repo.json()
      const dataDetail = data.detail
      return {dataDetail}
    },

    mounted() {
      this.handleAPI();
    },

    methods: {
      async handleAPI() {
      const params = this.$route.params.id
      //this.$router.push('/')

      console.log(params)
      const repo1  = await this.$axios.get(`https://api-test.karo.land/api/get-post/${params}`)
        console.log(repo1);
      },

      chuyentrang() {
        this.$router.push('/')
      }

    }



  }
</script>
