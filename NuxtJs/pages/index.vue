<template>
    <div class="font-plus-jakarta">
    <HeaderDesktop :data-menu = "dataMenu" :quick-view = "quickView" @event-choose-menu="nhanData"/>

      <div>{{itemMenu.name}}</div>

      <div class="container">
        <div class="form">
          <InputForm/>
        </div>
      </div>
    </div>
</template>
<script>
import HeaderDesktop from "~/components/desktop/Header.vue";
import InputForm from "~/components/desktop/inputForm.vue";


export default {
  components: {
    HeaderDesktop,
    InputForm,
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
    nhanData(data){
      this.itemMenu = data;
    }
  },
};
</script>
<style scoped>
</style>
