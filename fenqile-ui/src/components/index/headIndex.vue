<template>
    <header>
        <div class="headLeft">Master</div>
        <div class="headRight">
            <div class="headTongzhi">
                <p><span class="iconfont">&#x3433;</span></p>
                <p><span class="iconfont">&#xe60a;</span></p>
                <p><span class="iconfont">&#xe626;</span></p>
                <div class="sousuo">
                    <input type="text" placeholder="Search">
                    <span class="iconfont fangdj">&#xe6e4;</span>
                </div>
            </div>
            <div class="headUser">
                <el-dropdown @command="handleCommand">
                    <span class="el-dropdown-link">
                        <div class="user">
                            <img src="https://github.com/yyx990803.png"/>
                            <p>萨瓦迪卡</p>
                            <span class="iconfont">&#xe504;</span>
                        </div>
                    </span>
                    <el-dropdown-menu slot="dropdown" class="usert">
                        <el-dropdown-item command="a"><p>退出</p></el-dropdown-item>
                        <el-dropdown-item command="b"><p>退出</p></el-dropdown-item>
                        <el-dropdown-item command="c"><p>退出</p></el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: "headIndex",
        methods: {
            handleCommand(command) {
                this.$message('click on item ' + command);
            }
        }
    }
</script>

<style scoped>
    .el-dropdown-menu el-popper usert{
        position: absolute;
        top: 30px;
    }
    .el-dropdown-link {
        cursor: pointer;
        color: #409EFF;
    }
    .el-icon-arrow-down {
        font-size: 12px;
    }
    /*header*/
    header{
        display: flex;
        height: 60px;
        background: #663ab9;
    }
    .headLeft{
        width: 220px;
        line-height: 60px;
        text-align: center;
        font-size: 20px;
        color: white;
    }
    .headRight{
        flex: 1;
        display: flex;
        justify-content: space-between;
    }
    .headTongzhi{
        display: flex;
        justify-content: space-between;
    }
    .headTongzhi p{
        width: 44px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 15px;
    }
    .sousuo{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 34px;
        border-radius: 17px;
        margin: auto 0;
        width: 182px;
        background: #734bbf;
        margin-left: 15px;
    }
    .sousuo:hover{
        width: 242px;
        transition: all 1s;
    }
    .sousuo:hover input{
        width: 200px;
        transition: all 1s;
    }
    .sousuo input{
        outline: none;
        background: #734bbf;
        border: 0;
        font-size: 12px;
        color: white;
        width: 140px;
        height: 16px;
    }
    .fangdj{
        font-size: 17px;
        font-weight: 900;
        color: white;
    }
    .headUser{
        min-width: 155px;
        position: relative;
    }
    .headUser:hover{
        background: #734bbf;
    }
    .user{
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .user img{
        width: 42px;
        height: 42px;
        margin: 0 10px;
        border-radius: 50%;
    }
    .user p{
        font-size: 14px;
        color: white;
    }
    .user span{
        color: white;
        margin:0 15px;
    }
    .usert{
        position: absolute;
        left: 7px;
        top: 48px !important;
        min-width: 145px;
        background: white;
        border-radius: 0 0 4px 4px;
        overflow: hidden;
    }
    .usert p{
        line-height:34px;
        padding-left: 10px;
        font-size: 13px;
        color: #373a3c;
    }
    .usert p:hover{
        background: #efefef;
    }
</style>