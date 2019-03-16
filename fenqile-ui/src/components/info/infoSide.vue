<template>
  <section>
    <h2>Message Detalis</h2>
    <div class="section_top">
      <img src="../../../static/img/home.png" alt=""/>
      <p>Home</p>
      <img src="../../../static/img/jiantou.png" alt=""/>
      <p>Message</p>
      <img src="../../../static/img/jiantou.png" alt=""/>
      <p>Message Detalis</p>
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
      <div class="main_right">
        <div class="right1">
          <img src="../../../static/img/tu01.png" alt=""/>
          <div class="boo">
            <p>
              Bootstrap Validator</p>
            <p>John Doe</p>
            <p>
              <span>From: example@go.com</span><span>08:39AM 24 Apr 2016</span>
            </p>
          </div>
        </div>
        <div class="words">In order to provide the best possible experience to old and buggy browsers, Bootstrap uses CSS browser hacks in several places to target special CSS to certain browser versions in order to work around bugs in the browsers themselves. These hacks understandably cause CSS validators to complain that they are invalid. In a couple places, we also use bleeding-edge CSS features that aren't yet fully standardized, but these are used purely for progressive enhancement. These validation warnings don't matter in practice since the non-hacky portion of our CSS does fully validate and the hacky portions don't interfere with the proper functioning of the non-hacky portion, hence why we deliberately ignore these particular warnings. Our HTML docs likewise have some trivial and inconsequential HTML validation warnings due to our inclusion of a workaround for a certain Firefox bug.</div>
        <div class="right2">
          <h3>
            <img src="../../../static/img/bo01.png" alt="">
            &nbsp;Attachment (2)
          </h3>
          <input type="file"/>
        </div>
        <div class="right3">
          <p>click here to &nbsp;<a href=""> Reply</a>&nbsp;or&nbsp;<a href="">Forward</a> </p>
        </div>
      </div>
    </div>
    <p class="la">版权所有©2016 Zwolek开发。版权所有。</p>
  </section>
</template>

<script>
    export default {
        name: "infoSide"
    }
</script>

<style scoped>
  section{
    flex:1;
    background: #f0f0f0;
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
    /*height: 880px;*/
    background: #f0f0f0;
    margin:0 15px;
    padding-top: 30px;
    margin-bottom: 15px;
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
    padding-right: 15px;
  }
  .right1{
    width: 100%;
    height: 100px;
    background: #f0f0f0;
    display: flex;
    align-items: center;
    border: 1px solid #dedede;
    margin-bottom: 20px;
  }
  .right1 img{
    height: 70px;
    margin-left: 15px;
    margin-right: 10px;
  }
  .boo p:first-child{
    font-size: 20px;
    color:#373f47;
  }
  .boo p:nth-child(2){
    font-size: 16px;
    color:#663ab8;
  }
  .boo p:nth-child(3){
    width: 100%;
    font-size: 14px;
    color:#3c3a3c;
    display: flex;
  }
  .words{
    width: 100%;
    font-size: 14px;
    color:#3c3a3c;
    margin-bottom: 10px;
  }
  .right2{
    width: 100%;
    height: 120px;
    border-top: 1px solid #f0f0f0;
    border-bottom: 1px solid #f0f0f0;
  }
  .right2 h3{
    display: flex;
    font-size: 16px;
    margin-top: 24px;
    margin-bottom: 20px;
  }
  .right3{
    width: 100%;
    height: 80px;
    background: #f0f0f0;
    border: 1px solid #dedede;
    margin-top: 20px;
    line-height: 80px;
  }
  .right3 p{
    display: flex;
    font-size: 14px;
    color:#373a3c;
    margin-left: 20px;
  }
  .right3 a{
    color: #663ab8;
  }
  .la{
    height: 50px;
    line-height: 50px;
    font-size: 12px;
    color: #373a3c;
  }
</style>
