<template>
  <div>
    <div>{{ dataDetail.full_address }}</div>
    <button @click.prevent="chuyentrang">ve trang chu</button>
  </div>
</template>
<script>
export default {
  layout: "",

  data() {
    return {};
  },

  async asyncData({ params }) {
    const repo = await fetch(
      `https://api-test.karo.land/api/get-post/${params.id}`
    );
    const data = await repo.json();
    console.log(data);
    const dataDetail = data.detail;
    return { dataDetail };
  },

  mounted() {},

  methods: {
    chuyentrang() {
      this.$router.push("/");
    },
  },
};
</script>
