<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

import './assets/css/font-awesome.css'
import './assets/css/ace-fonts.css'
import './assets/css/ace2.css'
export default {
  name: 'app'
}
</script>

<style>
html, body {
  height: 100%;
  margin: 0;
}
#app {
  min-height: 100%;
  background-image: url(./assets/authenticationBg.jpg);
}
</style>
