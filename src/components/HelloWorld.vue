<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
   <div>
      <!-- <van-loading color="black" />
      <van-loading color="white" />
      <van-loading type="spinner" color="black" />
      <van-loading type="spinner" color="white" /> -->
  </div>

  </div>
</template>

<script>
// import { Loading } from 'vant'
export default {
  name: 'HelloWorld',
  //  components: {
  //   [Loading.name]: Loading
  // },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
