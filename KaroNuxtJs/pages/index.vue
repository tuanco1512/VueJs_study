<template>
  <div class="font-plus-jakarta">
    <div class="intro">
      <div class="intro-title">
        <div class="intro-text-button">
          <h1>
            Chào mừng bạn <br />
            đến với Karo
          </h1>
          <p>
            Hệ sinh thái kinh doanh bất động sản ứng dụng <br />
            công nghệ AI đầu tiên ở Việt Nam
          </p>
          <div class="function-btns">
            <nuxt-link class="default-btn" id="ky-gui-btn" :to="`/`"
              >Ký gửi nhà</nuxt-link
            >
            <nuxt-link class="default-btn" :to="`/`">Tìm hiểu thêm</nuxt-link>
          </div>
        </div>
        <div class="intro-img">
          <img src="../assets/img/Illustration 4.png" alt="" />
        </div>
      </div>
      <HouseFilter :data-menu="dataMenu" :quick-view="quickView" />
    </div>
    <div class="card-section success">
      <div v-for="(item, index) in consignmentArray" :key="index">
        <Card :item="item" />
      </div>
    </div>
    <button @click.prevent="handleApiConsignment" v-if="isLoadData">
      Xem thêm
    </button>
  </div>
</template>
<script>
import HouseFilter from "~/components/desktop/HouseFilter.vue";
import Card from "~/components/desktop/Card.vue";

export default {
  layout: "",
  components: {
    HouseFilter,
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
      dataMenu: [
        {
          id: 1,
          name: "Can ban",
        },
        {
          id: 2,
          name: "Can mua",
        },
        {
          id: 3,
          name: "Cho thue",
        },
        {
          id: 4,
          name: "Tất cả",
        },
      ],
      itemMenu: {},
      quickView: true,
      page: 1,
      consignmentArray: [],
      isLoadData: true,
    };
  },
  mounted() {
    this.textDefault = "";
    this.handleApiConsignment();
  },
  methods: {
    changeText() {
      this.textDefault = this.text123;
    },
    showText() {
      this.isShow = !this.isShow;
    },
    nhanData(data) {
      this.itemMenu = data;
    },

    async handleApiConsignment() {
      try {
        const repo = await this.$axios.get(
          `/get-consignment-list?page=${this.page}`
        );
        console.log(repo);
        // this.consignmentArray = repo.data.filterResult.data;
        this.consignmentArray = [
          ...this.consignmentArray,
          ...repo.data.filterResult.data,
        ];

        this.page++;
        if (repo.data.filterResult.data.length === 0) {
          this.isLoadData = false;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style scoped>
</style>
