<template>
  <div>
    <div>
      <form @submit.prevent="submitForm" ref="infoUser">
        <div class="email">
          <label for="email">email</label>
          <input type="text" name="email" placeholder="email" v-model="email" />
        </div>
        <div class="password">
          <label for="password">password</label>
          <input
            type="password"
            name="password"
            placeholder="mat khau"
            v-model="password"
          />
        </div>
        <div>
          <button type="submit">Submit form</button>
          <button type="button">button binh thuong</button>
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
  },
};
</script>
