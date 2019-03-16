<template>
    <div class="lock">
        <h3>Lockscreen</h3>
        <img src="../../static/img/lock01.png" alt=""/>
        <p> Veronica Thornton{{username}}</p>
        <div class="sign_en">
            <span class="iconfont icon-yuechi"></span>
            <input type="password" placeholder="password" v-model="password"/>
        </div>
        <input class="login" @click="login" type="button" value="SIGIN IN"/>
        <p>Forogot Password ? <span @click="remove">退出</span></p>
    </div>
</template>

<script>
    import md5 from 'md5'
    export default {
        name: "lockScreen",
        data(){
            return {
                username:'',
                password:''
            }
        },
        methods:{
            getStorage(){
                var username = localStorage.getItem("username");

                var password = localStorage.getItem("password");
                console.log(username,password)
                if (username != null && password != null) {

                    alert("邮箱：" + username + "密码：" + password);
                    this.username=username
                }
            },
            login() {
                // this.checkInput()
                // 获取已有账号密码
                this.$http.get('/api/login/getAccount')
                .then((response) => {
                    // 响应成功回调
                    console.log(response)
                    console.log("res", response.body.length)
                    let n = 0;
                    response.body.forEach((use) => {
                        if (use.username === this.username && use.password === md5(this.password)) {
                            alert("登录成功")
                            this.saveStorage(use.username, use.password)
                            location.href = "/"
                            return;
                        }
                        n++;
                    })
                    if (n >= response.body.length) {
                        // this.reg()
                        alert("账号或密码错误")
                    }
                })
            },
            saveStorage(name,word){

                var username =name;

                localStorage.setItem("username",username);

                var password = word;

                localStorage.setItem("password",password);
            },
            remove(){
                var storage=window.localStorage;
                storage.removeItem("password");
                // this.username=''
                location.href="/login"
            }
        },
        created(){
            this.getStorage()
        }
    }
</script>

<style>
    @import "../../static/css/iconfont.css";
    @import "../../static/css/public.css";
    #app{
        height:100%;
        background:url("../../static/img/background.jpg") no-repeat;
    }
    .lock{
        width:340px;
        height:388px;
        background:white;
        position:absolute;
        left:0;
        top:0;
        right:0;
        bottom:0;
        margin:auto;
        text-align:center;
        padding:0 30px;
    }
    .lock img{
        width:130px;
        height:130px;
    }
    .lock h3{
        font-size: 20px;
        color: #373a3c;
        font-weight: 500;
        margin-top:10px;
    }
    .lock p:nth-child(3){
        font-size:20px;
    }
    .lock img{
        margin:20px auto 12px;
    }
    .sign_en{
         display:flex;
        margin:20px 0 24px;
     }
    .sign_en span{
        color:white;
        text-align:center;
        align-self:center;
        line-height:33px;
        width:38px;
        height:33px;
        background:#6539c2;
        border-top-left-radius:4px;
        border-bottom-left-radius:4px;
    }
    .sign_en input{
        outline:none;
        padding-left:13px;
        flex:1;
        height:31px;
        border:1px solid #c6bef1;
        border-top-right-radius:4px;
        border-bottom-right-radius:4px;
    }
    .login{
        width:75px;
        height:40px;
        border-radius:4px;
        background:#9b7dd5;
        border:none;
        color:#f2e1ff;
    }
    .lock p:last-child{
        color: #373a3c;
        margin-top:10px;
    }
</style>
