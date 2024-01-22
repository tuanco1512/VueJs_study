<template>
    <div class="font-plus-jakarta">
      <div>sdsads</div>

      <div>{{itemMenu.name}}</div>

      <div class="container">
        <div class="form">
          <div v-for="(item,index) in consignmentArray" :key="index">
            <Card :item="item" />
          </div>
        </div>
      </div>
    </div>
</template>
<script>

import Card from "~/components/desktop/Card.vue";


export default {
 layout: 'custom',
  components: {
    Card,
  },
  data() {
    return {
      isShow: true,
      text123: "noi dung moi",
      yfg: [],
      isdas: "",
      textDefault: "noi dung mac dinh asdasdasdas",
      a: 5,
      b: 10,
      dataMenu:[
        {
          id : 1,
          name: "Can Ban",
        },
        {
          id : 2,
          name: "Can Mua",
        },
        {
          id : 3,
          name: "Cho Thue",
        }
      ],
    itemMenu: {},
    quickView: true,
    page:1,
    consignmentArray:[]
    };
  },

  mounted() {

    this.textDefault = "";
    this.handleApiConsignment()
  },
  methods: {
    changeText() {
      this.textDefault = this.text123;
    },
    showText() {
      this.isShow = !this.isShow;
    },
    nhanData(data){
      this.itemMenu = data;
    },

    async handleApiConsignment() {
     try {
        const repo = await this.$axios.get(`/get-consignment-list?page=${this.page}`)
        this.consignmentArray = repo.data.filterResult.data

     } catch (error) {
        console.log(error)
     }
    },

  },
};
</script>
<style scoped>
</style>
