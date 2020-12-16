<template>
  <div class="app_wapper">
   
    <el-container>
      <!-- 左侧菜单 -->
      <el-aside class="slider_container">
         
        <el-menu class="sub_meuns_wapper" mode="vertical" unique-opened :default-active="$route.path" background-color="#304156" text-color="#fff" active-text-color="#42b983">
          <!-- 菜单组件 -->
          <div style="display:flex;align-items: center;justify-content: center;color:white;height:60px">
            <!-- logo -->
            <img src="../assets/logo.png" style="width:40px;">后台管理系统
          </div>
          <side-Meuns :routes="getRoutes"></side-Meuns>
        </el-menu>
      </el-aside>
      <!-- 右侧内容区域 -->
      <el-container class="app_content">
        <el-header style="text-align: right; font-size: 12px">
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-button @click="outSystem" size="mini" plain type="primary">退出</el-button>
        </el-header>
        <!-- 内容区域 -->
        <el-main>
          <!-- 二级路由跳转 -->
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
// 左侧菜单组件
import sideMeuns from '@/components/sideMeuns'
import { permissionRouter } from '@/router'
export default {
  computed: {
    getRoutes() {
      return global.antRouter
    }

  },
  components: {
    sideMeuns
  },
  data() {
    return {
      userRole: 'Topest',
    }
  },
  methods: {
    outSystem() { //退出系统
      localStorage.setItem("userRole", 'unload')
      // 跳转到登录页的时候顺便刷新
      console.log(window.location.origin)
      console.log(window.location.pathname)
      // window.location.href = window.location.origin + window.location.pathname
    },
  },
  mounted() {
    // console.log("菜单的展开跟路由有关系，查看elementui--el-menu  的default-active 属性")
    // console.log(this.$route.path)
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*wapper*/
.app_wapper {
  position: relative;
  height: 100%;
  width: 100%;
}

.app_content {
  margin-left: 180px;
  /* border: 1px solid #eee; */
  box-sizing: border-box;
}

.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}

.app_wapper .el-aside,
.slider_container .el-menu {
  color: #333;
  transition: width .28s;
  width: 180px !important;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  background-color: rgb(48, 65, 86);
  overflow-y: auto;
}

</style>
