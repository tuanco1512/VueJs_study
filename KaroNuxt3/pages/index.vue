<template>
  <div>
    <NuxtLink :to="`/detail/${property.id}`">{{ string }}</NuxtLink>
    <button @click.prevent="changeText">thay đổi nội dungg</button>
  </div>
</template>

<script setup>
const string = ref("index page");

const changeText = () => {
  string.value = "you change the string value";
};

const property = ref({
  id: 2,
  name: "nha 2",
});
</script>

<style lang="scss" scoped>
</style>