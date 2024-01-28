<template>
  <div>
    <div>
      <Header />
      <FooterLeft />
      <NuxtLink :to="`/detail/${property.id}`">{{ string }}</NuxtLink>
    </div>
    <button @click.prevent="changeText">Thay doi noi dung</button>
  </div>
</template>

<script setup>
const string = ref("day la trang chu");

const changeText = () => {
  string.value = "123";
};

const property = ref({
  id: 1,
  name: "nha 1",
});
</script>