<template>
  <section>
    <h2>Compose Mail</h2>
    <div class="section_top">
      <img src="../../../static/img/home.png" alt=""/>
      <p>Home</p>
      <img src="../../../static/img/jiantou.png" alt=""/>
      <p>Message</p>
      <img src="../../../static/img/jiantou.png" alt=""/>
      <p>Compose Mail</p>
    </div>
    <div class="main">
      <div class="main_left">
        <p class="tit">COMPOSE</p>
        <div class="left1">
          <a href="##">
            <img src="../../../static/img/ss01.png" alt="">
            <span>inbox</span>
          </a>
          <a href="##">
            <img src="../../../static/img/ss02.png" alt="">
            <span>Sent Mail</span>
          </a>
          <a href="##">
            <img src="../../../static/img/ss03.png" alt="">
            <span>Important</span>
          </a>
          <a href="##">
            <img src="../../../static/img/ss04.png" alt="">
            <span>Drafts</span>
          </a>
          <a href="##">
            <img src="../../../static/img/ss05.png" alt="">
            <span>Trash</span>
          </a>
        </div>
        <div class="left2">
          <p class="p1">LABELS</p>
          <a href="##">
            <p></p>
            <span>Work</span>
          </a>
          <a href="##">
            <p></p>
            <span>Design</span>
          </a>
          <a href="##">
            <p></p>
            <span>Family</span>
          </a>
          <a href="##">
            <p></p>
            <span>Friends</span>
          </a>
          <a href="##">
            <p></p>
            <span>Office</span>
          </a>
        </div>
        <div class="left3">
          <p class="p1">BUDDY ONLINE</p>
          <a href="##">
            <p></p>
            <span>Anna Doe<br/><label>Online</label></span>
          </a>
          <a href="##">
            <p></p>
            <span>Paul Walker<br/><label>Busy</label></span>
          </a>
          <a href="##">
            <p></p>
            <span>John Doe<br/><label>Offline</label></span>
          </a>
          <a href="##">
            <p></p>
            <span>jack Johnson<br/><label>Offline</label></span>
          </a>
        </div>
      </div>
      <form class="main_right">
        <h3>New Message</h3>
        <input class="int" type="text" placeholder="to:">
        <input class="int" type="text" placeholder="Subject">
        <div class="right1">
          <p><img src="../../../static/img/ss06.png" alt=""></p>
          <p>
            <img src="../../../static/img/ss07.png" alt=""/>
            <img src="../../../static/img/ss08.png" alt=""/>
            <img src="../../../static/img/ss09.png" alt=""/>
          </p>
          <p>OPEN SANS</p>
          <!-- <p>
                        <img src="img/ss20.png" alt="">
                    </p> -->
          <input type="color"/>
          <p>
            <img src="../../../static/img/ss10.png" alt="">
            <img src="../../../static/img/ss11.png" alt="">
            <img src="../../../static/img/ss12.png" alt="">
          </p>
          <p>
            <img src="../../../static/img/ss13.png" alt="">
          </p>
          <p>
            <img src="../../../static/img/ss14.png" alt="">
            <img src="../../../static/img/ss15.png" alt="">
            <img src="../../../static/img/ss16.png" alt="">
          </p><br/>
          <p>
            <img src="../../../static/img/ss17.png" alt="">
            <img src="../../../static/img/ss18.png" alt="">
            <img src="../../../static/img/ss19.png" alt="">
          </p>
        </div>
        <textarea rows="" cols=""></textarea>
        <input class="last" type="file">
        <div class="foot">
          <input type="reset" value="CANCEL">
          <input type="submit" value="SEND">
        </div>
      </form>
    </div>
    <p class="la">版权所有©2016 Zwolek开发。版权所有。</p>
  </section>
</template>

<script>
    export default {
        name: "zxbdSide"
    }
</script>

<style scoped>
  section{
    flex:1;
    background: #f0f0f0;
    padding-right: 15px;
    overflow-y: auto;
  }
  .section_top{
    display: -webkit-flex;
    align-items: center;
  }
  .section_top img{
    height: 10px;
  }
  section h2{
    font-size: 20px;
    margin-top: 14px;
    margin-bottom: 14px;
  }
  .section_top p{
    font-size: 10px;
    color:#81878b;
    margin-left: 5px;
    margin-right: 7px;
  }
  .section_top p:last-child{
    color: #883ab8;
  }
  .section_top p:hover{
    color: #883ab8;
  }
  .main{
    width: 100%;
    /*height: 960px;*/
    background: white;
    box-shadow: 0 0 5px 3px #e3e3e3;
    margin-top: 30px;
    padding-top: 15px;
    display: flex;
  }
  .main_left{
    width: 178px;
    height: 880px;
    background: #f0f0f0;
    margin:0 15px;
    padding-top: 30px;
  }
  .tit{
    width: 148px;
    height:54px;
    background: #fe5050;
    border-radius: 2px;
    font-size: 14px;
    color: white;
    line-height: 54px;
    text-align: center;
    margin-left: 15px;
    margin-bottom: 20px;
  }
  .left1{
    margin-left: 15px;
    margin-right: 15px;
    padding-bottom: 10px;
    border-bottom: 1px solid #dedede;
  }
  .left1 a{
    width: 148px;
    height: 45px;
    display: flex;
    align-items: center;
  }
  .left1 a:nth-child(1){
    background: #dedede;
  }
  a:hover{
    background: #dedede;
  }
  .left1 a img{
    height: 18px;
    margin-left: 15px;
  }
  .left1 span{
    font-size: 10px;
    color: #373a3c;
    margin-left: 14px;
  }
  .left2{
    width: 148px;
    margin-left: 15px;
    margin-right: 15px;
    padding-bottom: 10px;
    border-bottom: 1px solid #dedede;
  }
  .p1{
    font-size: 10px;
    margin-top: 8px;
    margin-left: 15px;
  }
  .left2 a{
    width: 148px;
    height:45px;
    display: flex;
    align-items: center;
  }
  .left2 a p{
    width: 12px;
    height: 12px;
    background: red;
    border-radius: 50%;
    margin-left: 15px;
  }
  .left2 span{
    font-size: 10px;
    color: #373a3c;
    margin-left: 14px;
  }
  .left2 a:nth-child(3) p{
    background: #4eb152;
  }
  .left2 a:nth-child(4) p{
    background: #2097f3;
  }
  .left2 a:nth-child(5) p{
    background: #fdcd0c;
  }
  .left2 a:nth-child(6) p{
    background: #663ab8;
  }
  .left3 a{
    width: 148px;
    height:50px;
    display: flex;
    margin-left: 15px;
    padding-top: 15px;
  }
  .p1{
    font-size: 10px;
    margin-top: 8px;
    margin-left: 30px;
  }
  .left3 a p{
    width: 12px;
    height: 12px;
    background: #4eb152;
    border-radius: 50%;
    margin-left: 15px;
  }
  .left3 span{
    font-size: 10px;
    color: #373a3c;
    margin-left: 14px;
  }
  .left3 label{
    font-size: 10px;
    color:#b0b0b0;
  }
  .left3 a:nth-child(3) p{
    background: #fe5050;
  }
  .left3 a:nth-child(4) p{
    background: #a3a3a3;
  }
  .left3 a:nth-child(5) p{
    background: #a3a3a3;
  }
  .main_right{
    width: 100%;
    padding-right: 20px;
  }
  .main_right h3{
    font-size: 16px;
    color: #373a3c;
    margin-bottom: 15px;
  }
  .main_right .int{
    width: 100%;
    height:32px;
    border-radius: 3px;
    border: 1px solid #cccccc;
    margin-bottom: 20px;
  }
  .main_right .int:hover{
    border: 1px solid #663ab8;
  }
  .main_right textarea{
    width: 100%;
    height:450px;
    max-width: 100%;
    min-width: 100%;
    border: 2px solid #e3e3e3;
  }
  .right1{
    width: 100%;
    background: #f0f0f0;
    padding-top: 30px;
    padding-bottom: 15px;
    display: flex;
  }
  .right1 p{
    height: 24px;
    font-size: 10px;
    color: white;
    padding-top: 10px;
    background: #663ab8;
    border-radius: 3px;
    margin-right: 5px;
    text-align: center;
  }
  .right1 p img{
    height: 15px;
    margin:0 auto;
  }
  .right1 p:nth-child(1){
    width: 5%;
    margin-left: 15px;
  }
  .right1 p:nth-child(2){
    width: 15%;
    display: flex;
  }
  .right1 p:nth-child(3){
    width: 11.4%;
  }
  .right1 input:nth-child(4){
    width: 5%;
    height: 34px;
    background: #663ab8;
    margin-right: 5px;
  }
  .right1 p:nth-child(5){
    width: 15%;
    display: flex;
  }
  .right1 p:nth-child(6){
    width: 5%;
  }
  .right1 p:nth-child(7){
    width: 15%;
    display: flex;
  }
  .right1 p:nth-child(9){
    width: 15%;
    display: flex;
  }
  .last{
    width: 100%;
    height: 220px;
    background: #f5f5f5;
    font-size: 12px;
    color: #373a3c;
    line-height: 220px;
    text-align: center;
    border: 1px dashed #cacaca;
  }
  .foot{
    width: 100%;
    margin-top: 20px;
    margin-bottom: 15px;
    text-align: center;
  }
  .foot input:first-child{
    width: 76px;
    height: 40px;
    background: #fe5050;
    border-radius: 3px;
  }
  .foot input:last-child{
    width: 75px;
    height: 40px;
    background: #663ab8;
    border-radius: 3px;
  }
  .la{
    height: 50px;
    line-height: 50px;
    font-size: 12px;
    color: #373a3c;
  }
</style>
