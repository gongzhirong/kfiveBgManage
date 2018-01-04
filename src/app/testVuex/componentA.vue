<template>
  <div>
    <p>姓名：{{name}}</p>
    <slot :row='nnn' :col="name"></slot>
  </div>
</template>

<script>
  export default {
    name: 'ComponentA',
    data () {
      return {
        name: 'gongzhirong',
        nnn: {
          a: 1,
          b: 2
        }
      }
    },
    beforeCreate () {
      this.$parent.$on('editName', newName => {
        this.name = newName
      })
    }
  }
</script>