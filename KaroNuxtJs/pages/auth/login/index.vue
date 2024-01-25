<template>
  <div class="login-section">
    <div class="thumb-img">
      <img
        src="https://images.pexels.com/photos/262347/pexels-photo-262347.jpeg?cs=srgb&dl=pexels-pixabay-262347.jpg&fm=jpg"
        alt=""
      />
    </div>
    <div class="login-form">
      <form @submit.prevent="submitForm" ref="infoUser">
        <h1>Đăng nhập tài khoản</h1>
        <div class="input-account-section">
          <input
            type="text"
            name="email"
            placeholder="Email/SDT"
            v-model="email"
            class="input-account email"
          />
          <input
            type="password"
            name="password"
            placeholder="mat khau"
            v-model="password"
            class="input-account password"
          />
        </div>
        <div>
          <button type="submit">Submit form</button>
          <button type="button" @click.prevent="chuyentrang">
            ve trang chu
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    async submitForm() {
      try {
        const response = await this.$auth.loginWith("local", {
          data: {
            email: this.email,
            password: this.password,
          },
        });
        //neu co loi bo qua
        console.log(response);
      } catch (error) {
        // co loi xu ly.
        console.log(error.response.data);
      }
    },
    chuyentrang() {
      this.$router.push("/");
    },
  },
};
</script>
