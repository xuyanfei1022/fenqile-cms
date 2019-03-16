<template>
    <nav>
    <div>
        <el-row class="tac">
            <el-col :span="12">
                <el-menu
                        default-active="2"
                        class="el-menu-vertical-demo">
                        <router-link to="indexdata">
                          <el-submenu index="1">
                              <template slot="title">
                                  <span class="iconfont">&#xe9f3;</span>
                                  <p>仪表盘</p>
                              </template>
                          </el-submenu>
                        </router-link>
                        <el-submenu index="2">
                            <template slot="title">
                                <span class="iconfont">&#xe505;</span>
                                <p>管理员</p>
                            </template>
                            <router-link to="/login"><el-menu-item index="2-1">登录</el-menu-item></router-link>
                            <router-link to="/lockScreen"><el-menu-item index="2-2">锁屏</el-menu-item></router-link>
                            <router-link to="/home404"><el-menu-item index="2-3">404错误</el-menu-item></router-link>
                        </el-submenu>
                        <el-submenu index="3">
                            <template slot="title">
                                <span class="iconfont">&#xe626;</span>
                                <p>信息</p>
                            </template>
                            <router-link to="/index/writeTable"><el-menu-item index="3-1">撰写邮件</el-menu-item></router-link>
                            <router-link to="/index/email"><el-menu-item index="3-2">收件箱</el-menu-item></router-link>
                            <router-link to="/index/info"><el-menu-item index="3-3">消息</el-menu-item></router-link>
                        </el-submenu>
                        <el-submenu index="4">
                            <template slot="title">
                                <span class="iconfont">&#xe804;</span>
                                <p>表</p>
                            </template>
                            <router-link to="/index/basic"><el-menu-item index="4-1">基本表格</el-menu-item></router-link>
                            <router-link to="/index/data"><el-menu-item index="4-2">数据表</el-menu-item></router-link>
                        </el-submenu>
                        <el-submenu index="5">
                            <template slot="title">
                                <span class="iconfont">&#xe607;</span>
                                <p>图表</p>
                            </template>
                            <router-link to="/index/echarts"><el-menu-item index="5-1">Echart</el-menu-item></router-link>
                            <el-menu-item index="5-2">空页面</el-menu-item>
                        </el-submenu>
                        <el-submenu index="6">
                            <template slot="title">
                                <span class="iconfont">&#xe60c;</span>
                                <p>客户管理</p>
                            </template>
                          <router-link to="/index/customerCon"><el-menu-item index="6-1">客户</el-menu-item></router-link>
                          <router-link to="/index/editCustomer"><el-menu-item index="6-2">客户编辑</el-menu-item></router-link>
                        </el-submenu>
                        <el-submenu index="7">
                            <template slot="title">
                                <span class="iconfont">&#xe635;</span>
                                <p>产品管理</p>
                            </template>
                            <router-link to="/index/editProduct"><el-menu-item index="7-1">编辑产品</el-menu-item></router-link>
                            <router-link to="/index/orderform"><el-menu-item index="7-2">订单编辑</el-menu-item></router-link>
                            <router-link to="/index/productList"><el-menu-item index="7-3">产品列表</el-menu-item></router-link>
                        </el-submenu>
                </el-menu>
            </el-col>
        </el-row>
    </div>
    </nav>
</template>

<script>

    export default {
        name: "navIndex"
    }
</script>

<style>

    nav .el-submenu__title{
        padding: 0 !important;
        display: flex;
    }

    .el-col-12{
        width: 100%;
    }

    /*nav*/
    nav{
        width: 220px;
        margin-right: 15px;
        background: white;
        color: #373a3c;
        height: 100%;
        overflow-y:auto;
    }
    nav::-webkit-scrollbar {
      display:none
    }
    nav span{
        margin:0 15px;
    }
    nav p{
        font-size: 15px;
    }
</style>
