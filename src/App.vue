<template>
  <div class="app">
    <Tabbar></Tabbar>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Tabbar from './components/Tabbar'
export default {
  name :'App',
  components:{
    Tabbar
  }
}
</script>

<style>

</style>
