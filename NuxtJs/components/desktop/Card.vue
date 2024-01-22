<template>
  <div>
    <nuxt-link :to="`/detail/${item.id}`">{{ item.title }}</nuxt-link>
  </div>
</template>
<script>
export default {
  props: {
    item:{
      type:Object
    },
  },



}
</script>
