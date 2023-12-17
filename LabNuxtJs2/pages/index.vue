<template>
  <div>
    <div>{{ textDefault }}</div>
    <div @click.prevent="changeText">ChangeText</div>

    <div v-if="iShow">
      <div :class="{ show: a < b }">Show noi dung</div>
    </div>

    <p @click.prevent="ShowText">Click show/hide noi dung</p>

    <div>
      click vao trang detail
      <nuxt-link to="/detail">detail</nuxt-link>
      <!-- <a href=""></a> -->
    </div>

    <Header />
    
  </div>
</template>
<script>
import Header from '~/components/Header.vue'

export default {
  data() {
    return {
      iShow: true,
      text123: 'noi dung moi',
      yfg: [],
      isdas: '',
      textDefault: 'noi dung mac dinh sadsdfsdgdgsg',
      a: 5,
      b: 10,
    }
  },

  componets: {
    Header
  },

  mounted() {
    this.textDefault = ''
  },

  methods: {
    changeText() {
      this.textDefault = this.text123
    },
    ShowText() {
      this.iShow = !this.iShow
    },
  },
}
</script>
<style scoped>
</style>

