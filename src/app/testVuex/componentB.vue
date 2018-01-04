<template>
  <div>
    <input type="text" v-focus  v-on:input="changeName($event)">
    <a href="javascript:void(0)" v-on:click="changeA"><slot name="btName">change</slot></a>
  </div>
</template>

<script>
  export default {
    name: 'ComponentB',
    data () {
      return {
        nameCH: ''
      }
    },
    methods: {
      changeName (e) {
        this.nameCH = e.target.value
      },
      changeA () {
        this.$parent.$emit('editName', this.nameCH)
      }
    }
  }
</script>