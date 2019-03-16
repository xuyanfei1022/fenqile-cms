<template>
  <div class="orderFormHead">
    <h1>产品列表</h1>
    <ol>
      <li><a href="javascript:;"><i class="icon iconfont">&#xe77e</i>家</a></li>
      <li><a href="javascript:;"><img src="../../../static/img/jt.jpg"/>电子商务</a></li>
      <li><a href="javascript:;"><img src="../../../static/img/jt.jpg"/>产品列表</a></li>
    </ol>
  </div>
</template>

<script>
    export default {
        name: "fqlOrderformHead"
    }
</script>

<style scoped>
  .orderFormHead{
    text-align: left;
    padding: 0 15px;
    height: 61px;
    background: #edf0ef;
  }
  .orderFormHead h1{
    height: 26px;
    margin-top: 10px;
    color: #373a3c;
    font-size: 24px;
    font-weight: 500;
    line-height: 26.4px;
  }
  .orderFormHead ol{
    height: 20px;
    margin-top: 5px;
  }
  .orderFormHead ol li{
    display: inline-block;
    height: 20px;
    font-size: 13px;
    font-weight: 400;
    font-weight: 400;
  }
  .orderFormHead ol li:nth-child(3) a{
    color: #663ab8;
  }
  .orderFormHead ol li a:hover{
    color: #663ab8;
  }
  .orderFormHead ol li img{
    width: 8px;
    height: 12px;
    padding-right: 3px;
  }
  .orderFormHead ol li a{
    color: #81878b;
  }
  .orderFormHead ol li .iconfont{
    font-size: 16px;
    color: #81878b;
  }
  .orderFormHead ol li .iconfont:hover{
    color: #663ab8;
  }
</style>
