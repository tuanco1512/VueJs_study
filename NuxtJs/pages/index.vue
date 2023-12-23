<template>
    <div class="font-plus-jakarta">
      <Header class="header" />
      <div>
        {{ textDefault }}
      </div>
      <div @click.prevent="changeText">changeText</div>
      <div v-if="isShow">
        <div :class="{ show: a < b }">ASDASdasdasd</div>
      </div>
      <p @click.prevent="showText">click show/hide noi dung</p>
    </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: true,
      text123: "noi dung moi",
      yfg: [],
      isdas: "",
      textDefault: "noi dung mac dinh asdasdasdas",
      a: 5,
      b: 10,
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
  },
};
</script>
<style scoped>
</style>
