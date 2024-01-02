<template>
  <div>
    <HeaderDesktop
      :data-menu="dataMenu"
      :quick-view="quickView"
      @event-choose-menu="nhanData"
    />
    <div>{{itemMenu.id}}</div>
  </div>
</template>
<script>
import HeaderDesktop from "~/components/desktop/Header.vue";

export default {
  components: {
    HeaderDesktop,
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
      ],
      itemMenu: {},
      quickView: true,
    };
  },
  mounted() {
    this.textDefault = "";
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
  },
};
</script>
<style scoped>
</style>
