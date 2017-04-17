<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div>
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="3">{{status}}<a v-bind:href='url'>订单管理</a></el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import {user_name} from '../store/actions'
import {USER_NAME} from '../store/userType'
import { mapActions } from 'vuex'

export default {
  name: 'hello',
  data() {
      return{
        status:this.$store.state[USER_NAME],
        url:"dfdfd",
        activeIndex:"1",
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        user_name(this.$store);
      }
    }
}

</script>
