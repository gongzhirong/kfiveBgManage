<template>
  <div class="mainPage">
    <el-row>
      <el-menu
      default-active="2"
      background-color="#303136"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="selectMenu">
        <el-submenu v-for="item in menuList" :index="item.index" :key="item.index">
          <template v-if="item.list" slot="title">
            <i :class="item.icon"></i>
            <span>{{item.name}}</span>
          </template>
          <el-menu-item v-for="menu in item.list" :index="menu.routPath" :key="menu.index">{{menu.name}}</el-menu-item>
        </el-submenu>
        <!-- 以下代码为样板 -->
        <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item index="1-1" route="">选项1</el-menu-item>
          <el-menu-item index="1-2" indexPath="选项2">选项2</el-menu-item>
          <el-menu-item index="1-3">选项3</el-menu-item>
          <el-menu-item index="1-4">选项4</el-menu-item>
        </el-submenu>
        <el-menu-item index="4">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="6" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="7">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
      <div class="rightPart">
        
      </div>
    </el-row>
  </div>
</template>

<script>
  import Menu from '@/api/menu.json'
  export default {
    data () {
      return {
        menuList: Menu
      }
    },
    methods: {
      // 菜单选择事件，目前主要定位于跳转功能
      selectMenu (index, indexPath) {
        // 选择事件
        console.log(index, indexPath)
        window.location.href = indexPath[1]
      }
    },
    created () {
      console.log(this.menuList)
    }
  }
</script>

<style type="lang">
  .mainPage {
  }
  .mainPage .el-menu:first-child {
    height: 100vh;
    width: 200px;
    float: left;
    /*border-right-width 取值0，去掉原来的右边框*/
    border-right-width: 0px;
  }
  .rightPart {
    margin-left: 200px;
  }
</style>