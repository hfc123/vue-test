<template>
  <div id="app">
  
  <v-main></v-main>
  
  </div>
</template>

<script>
	import vMain from '@/components/main'
export default {
  name: 'app',
  components:{
  	vMain
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

}
</style>
