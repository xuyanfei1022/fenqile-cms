<template>
    <div class="sign">
        <h3 class="title">Sign in</h3>
        <p class="markit">Email</p>
        <div class="sign_en">
            <span class="iconfont icon-youxiang1"></span>
            <input id="email" class="inputs" type="email" @blur="checkInput" @input="checkInput" placeholder="email" v-model="account"/>
        </div>
        <h4 id="disa" class="disa">Bruh, that email address is invalid</h4>
        <p class="markit">Password</p>
        <div class="sign_en">
            <span class="iconfont icon-yuechi"></span>
            <input id="pass" class="inputs" type="password" @blur="checkInput" @input="checkInput" placeholder="password" v-model="password"/>
        </div>
        <div class="checkk">
            <input type="checkbox" checked/>
            <p>Remember me</p>
        </div>
        <div class="login">
            <input type="button" disabled="disabled" id="btnLogin" value="SIGIN IN" @click="login"/>
            <P><a href="#">Register</a><a href="#">Forgot Password</a> </P>
        </div>
    </div>
</template>

<script>
    import md5 from 'md5'
    export default {
        name: "login",
        data() {
            return {
                account : '',
                password : ''
            }
        },
        methods:{
            checkInput(){
                document.querySelector("#btnLogin").disabled=""
                document.querySelector("#btnLogin").style.backgroundColor="#6539c2";
                if(document.querySelector("#pass").value.length<6){
                    document.querySelector("#pass").style.borderColor="red"
                    document.querySelector("#pass").previousElementSibling.style.backgroundColor='red'
                    document.querySelector("#pass").parentNode.previousElementSibling.style.color="red"
                    document.querySelector("#btnLogin").disabled="disabled"
                    document.querySelector("#btnLogin").style.backgroundColor="#9b7dd5";
                }else{
                    document.querySelector("#pass").style.borderColor="#c6bef1"
                    document.querySelector("#pass").previousElementSibling.style.backgroundColor='#6539c2'
                    document.querySelector("#pass").parentNode.previousElementSibling.style.color="#373a3c"
                }
                let reg = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g
                if(reg.test(document.querySelector("#email").value)==false){
                    document.querySelector("#email").style.borderColor="red"
                    document.querySelector("#email").previousElementSibling.style.backgroundColor='red'
                    document.querySelector("#email").parentNode.previousElementSibling.style.color="red"
                    document.querySelector("#btnLogin").disabled="disabled"
                    document.querySelector("#btnLogin").style.backgroundColor="#9b7dd5";
                    document.querySelector("#disa").style.display="block"
                }else{
                    document.querySelector("#email").style.borderColor="#c6bef1"
                    document.querySelector("#email").previousElementSibling.style.backgroundColor='#6539c2'
                    document.querySelector("#email").parentNode.previousElementSibling.style.color="#373a3c"
                    document.querySelector("#disa").style.display="none"
                }
            },
            login() {
                this.reg()
                this.checkInput()
                // 获取已有账号密码
                this.$http.get('/api/login/getAccount')
                .then((response) => {
                    // 响应成功回调

                    console.log(response)
                    console.log("res",response.body.length)
                    let n = 0;
                    response.body.forEach((use)=>{
                        if(use.account ===this.account && use.password===md5(this.password)){
                            alert("登录成功")
                            this.saveStorage(use.username,use.password)
                            location.href="/"
                            return;
                        }
                        n++;
                    })
                    if(n>=response.body.length){
                        // this.reg()
                        alert("账号或密码错误")
                    }
                })
            },
            reg(){
                let params = {
                    account : this.account,
                    password : md5(this.password)
                };
                // 创建一个账号密码
                this.$http.post('/api/login/createAccount',params)
                .then((response) => {
                    console.log(response)
                })
                .catch((reject) => {
                    console.log(reject)
                });
            },
            saveStorage(name,word){

                var username =name;

                localStorage.setItem("username",username);

                var password = word;

                localStorage.setItem("password",password);
            }
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
    .sign{
        width:368px;
        height:312px;
        background:white;
        position:absolute;
        left:0;
        top:0;
        right:0;
        bottom:0;
        margin:auto;
        padding:0 16px;
    }
    .title{
        font-size:20px;
        line-height:44px;
        font-weight:100;
    }
    .markit{
        font-weight:bold;
        margin-bottom:5px;
        font-size:16px;
        margin-top:14px;
        color:#373a3c;
    }
    .sign_en{
        display:flex;
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
    .checkk{
        display:flex;
        height:50px;
        align-items:center;
    }
    .checkk input{
        width:15px;
        height:15px;
    }
    .checkk p{
        color: #373a3c;
        font-weight: 400;
        font-size:16px;
        margin-left:7px;
    }
    .login{
        display:flex;
        align-items:center;
        justify-content: space-between;
    }
    .login input{
        width:75px;
        height:40px;
        border-radius:4px;
        background:#9b7dd5;
        border:none;
        color:#f2e1ff;
    }
    .login p a{
        color:#3e3e3e;
        margin-left:12px;
    }
    .disa{
        font-size:16px;
        color:red;
        font-weight:100;
        display:none;
    }
</style>
