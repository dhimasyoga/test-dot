<template>
  <div class="home">
      <LogoutButton />

      <h1>Statistik Covid-19</h1>
      <p class="subtitle">
          <i>Web-app</i> sederhana ini akan mencari statistik Covid-19 di berbagai negara. <br>
          Ketikkan nama negara, kemudian klik cari maka nantinya statistik akan disajikan.
      </p>
      
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <CountryList />
  </div>
</template>

<script>
// @ is an alias to /src
import CountryList from '@/components/CountryList.vue';
import LogoutButton from '@/components/LogoutButton.vue';

export default {
  name: 'MainView',
  components: {
    CountryList,
    LogoutButton
  }
}
</script>

<style scoped lang="scss">
    // body {
    //     color: #58896F;
    //     background-color: #5F9579;
    // }

    .home {
        background-color: #5F9579;
        height: 100vh;
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        position: relative;

        h1, p.subtitle {
            color: #fff;
            margin-top: 0;
            margin-bottom: .5rem;
        }

        p.subtitle {
            font-weight: 500;
            margin-bottom: 2.5rem;
        }
    }
</style>
