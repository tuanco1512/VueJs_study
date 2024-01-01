<template>
  <div>
    <input type="text" v-model="name" placeholder="Nhap du lieu" />
    <p>{{ name }}</p>
    <p>{{ error }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      error: "",
    };
  },
  watch: {
    name:{
        handler(newValue, oldValue){
            if(newValue === ''){
                this.error = 'du lieu chua co';
            }else{
                this.error = '';
            }
        },
        deep: true,
        immediate: true,
    },
  },
};
</script>
