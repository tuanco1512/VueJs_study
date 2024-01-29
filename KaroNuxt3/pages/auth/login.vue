<template>
  <div>
    <label for="name">Tai khoan</label>
    <input
      type="text"
      name="name"
      id=""
      placeholder="name"
      v-model="auth.email"
    />
    <label for="password">Mat khau</label>
    <input
      type="password"
      name="password"
      id=""
      placeholder="password"
      v-model="auth.password"
    />
    <button @click.prevent="login">dang nhap</button>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useAuthStore } from '~/store/auth';
    const auth = ref({
        email:'',
        password: ''
    })
const { authenticateUser } = useAuthStore();
const router = useRouter();
const errors = ref({ email: '', password: '' });
const passwordVisible = ref(false);
const { authenticated, errorsResponse, errorCode } = storeToRefs(
  useAuthStore()
);
const accessToken = useCookie('accessToken');
const login = async () => {
  await authenticateUser(auth.value);
  if (authenticated.value) {
    console.log(accessToken);
   console.log(authenticated);
   // router.push(“/”);
  } else {
    if (errorCode.value === 401) {
      errors.value.email = errorsResponse.value.error;
      errors.value.password = '';
    } else {
      const errorArray = errorsResponse.value.errors;
      Object.keys(errorArray).forEach((key) => {
        errors.value[key] = errorArray[key][0];
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
