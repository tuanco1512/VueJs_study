import { defineStore } from 'pinia';

interface UserPayloadInterface {
  email: string;
  password: string;
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    authenticated: false,
    loading: false,
    user:null,
    errorMessage:'',
    errorsResponse:'',
    errorCode:null
  }),
  actions: {
    async authenticateUser({ email, password }: UserPayloadInterface) {
      this.errorMessage = '';
      try {  
          const { data, pending, error }: any = await useFetch('https://api-test.karo.land/api/login', {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: {
              email,
              password,
          },
        });
        this.loading = pending;
       
        if (error.value) {
          this.errorCode = error.value.statusCode
        
          this.errorsResponse = error.value.data;
          this.authenticated = false;
        }
        else if (data.value) {
          const accessToken = useCookie('accessToken'); 
          accessToken.value = data?.value?.token; 
          this.authenticated = true;
          this.user = data.value.user
        } else {
          this.errorMessage = 'Authentication failed. Please check your credentials.';
          this.authenticated = false;
        }
      } catch (error) {
     
         console.log('')
      } finally {
          this.loading = false;
      }
    },
    logUserOut() {
      const auth = useCookie('auth');
      this.authenticated = false; // set authenticated  state value to false
      auth.value = null; // clear the token cookie
      this.user = null
    },
    setUser(userData: any) {
      this.user = userData
    },
  },
});