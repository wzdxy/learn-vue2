<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h2>layout</h2>
    <router-view></router-view>
    <footer>footer</footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
        isActive:true,hasError:true
      }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
