<template>
  <div class="vux_test">
    <h1>{{count}}</h1>
    <h1>{{name}}</h1>
    <button @click="addAction">加</button>
    <button @click="reduceAction">减</button>
    <button @click="changeName">更换名字</button>
  </div>
</template>

<script>
  import { queryPicturesLibrary } from '@/api/picturesLibrary'
  export default {
    data () {
      return {
        content: '测试vuex'
      }
    },
    computed: {
      count () {
        return this.$store.state.commonInfo.count
      },
      name () {
        return this.$store.state.commonInfo.name
      }
    },
    methods: {
      addAction () {
        this.$store.dispatch('addAction')
        this.$message({
          type: 'success',
          message: '成功加1'
        })
      },
      reduceAction () {
        this.$store.dispatch('reduceAction')
        this.$message({
          type: 'success',
          message: '成功减1'
        })
      },
      changeName () {
        this.$store.commit('changeName')
        this.$message({
          type: 'success',
          message: '成功改名字'
        })
      }
    },
    created () {
      queryPicturesLibrary().then(res => {
        console.log(res.data)
      })
    }
  }
</script>
