<template>
  <div class="login">
    <div class="container">
      <h1>Login</h1>

      <LoginComponent />
    </div>
  </div>
</template>

<script>
import LoginComponent from '@/components/LoginComponent.vue';

export default {
  name: 'LoginView',
  components: {
    LoginComponent,
  }
}

</script>

<style scoped lang="scss">
  .login {
    background-color: #fff;
    
    height: 100vh;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    .container {
      width: 100%;

      h1 {
        margin-top: 0;
        margin-bottom: 1.5rem;
      }
    }
  }
</style>