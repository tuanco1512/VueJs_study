<template>
  <div>
    sdsad
  </div>
</template>
<script>
export default {
  data(){
    return {
      param:''
    }
  },

  mounted() {
   console.log(this.$route.params.id)
   console.log(this.$route.query.abc)

  }
}
</script>
