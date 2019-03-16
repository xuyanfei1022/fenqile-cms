<template>
  <form action="">
    <div class="formGroup">
      <p>名字</p>
      <input type="text"/>
    </div>
    <div class="formGroup">
      <p>姓</p>
      <input type="text"/>
    </div>
    <div class="formGroup">
      <p>电子邮件</p>
      <input type="text"/>
    </div>
    <div class="formGroup">
      <p>国家</p>
      <input type="text"/>
    </div>
    <div class="formGroup">
      <p>市</p>
      <input type="text"/>
    </div>
    <div class="formGroup">
      <p>压缩</p>
      <input type="text"/>
    </div>
    <div class="formGroup">
      <p>addres</p>
      <input type="text"/>
    </div>
    <div class="formGroup">
      <p>电话</p>
      <input type="text"/>
    </div>
    <div class="formGroup">
      <p>传真</p>
      <input type="text"/>
    </div>
    <fqlOffset></fqlOffset>
  </form>
</template>

<script>
  import fqlOffset from "./fqlOffset"
    export default {
      name: "information",
      components:{
          fqlOffset
      }
    }
</script>

<style scoped>
  .contentBody form{
    width: 82%;
    box-sizing: border-box;
    height: 486px;
    color: #373a3c;
    float: left;
    padding-left: 15px;
    border-left: 1px solid #e3e3e3;
  }
  .formGroup{
    display: flex;
    width: 100%;
    height: 34px;
    margin: 0 -15px 15px;
  }
  .formGroup p{
    float: left;
    padding: 7px 15px  0;
    height: 17px;
    line-height: 17px;
    width: 37px;
    font-size: 12px;
    font-weight: 700;
  }
  .formGroup input{
    float: left;
    width: 100%;
    height: 20px;
    line-height: 20px;
    outline: none;
    margin: 0 15px;
    padding: 6px 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
  }
</style>
