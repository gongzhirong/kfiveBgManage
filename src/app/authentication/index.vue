<template>
  <div class="authentication" :style="textPaddingTop">
    <br />
    <transition name="el-zoom-in-center">
      <div v-show="show" class="transition-box">Hello! Welcome to enter!</div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'Authentication',
    data () {
      return {
        textPaddingTop: {
          paddingTop: '0px'
        },
        show: true
      }
    },
    created () {
      this.textPaddingTop.paddingTop = document.documentElement.clientHeight / 2 - 40 + 'px'
    },
    mounted () {
      setTimeout(() => {
        this.show = false
        setTimeout(() => {
          window.location.hash = 'mainPage'
        }, 500)
      }, 2000)
    }
  }
</script>

<style type="lang" scoped>
  .authentication {
    color: #5ed8b1;
    font-size: 2rem;
    font-family: "Roboto","Source Sans Pro","Segoe UI","Gill Sans",Calibri,Tahoma,"Lucida Sans Unicode","Lucida Grande",Verdana,sans-serif;
    font-weight: 100;
  }
</style>