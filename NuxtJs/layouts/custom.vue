<template>
  <div>
    <HeaderDesktop :data-menu = "dataMenu"/>
    <Nuxt />
    <div>footer</div>
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
   }
  }
}
</script>
