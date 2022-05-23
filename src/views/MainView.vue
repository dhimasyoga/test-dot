<template>
  <div class="home">
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
import CountryList from '@/components/CountryList.vue'

export default {
  name: 'MainView',
  components: {
    CountryList,
  }
}
</script>

<style scoped lang="scss">
    .home {
        height: calc(100vh - 20px);
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

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
