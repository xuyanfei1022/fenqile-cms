<template>
    <div class="aside">
      <fqlOrderformHead></fqlOrderformHead>
      <fqlOrderformConent></fqlOrderformConent>
    </div>
</template>

<script>
  import fqlOrderformHead from "./fqlOrderformHead"
  import fqlOrderformConent from "./fqlOrderformConent"
    export default {
        name: "fqlAside",
      components:{
          fqlOrderformHead,
        fqlOrderformConent
      }
    }
</script>

<style scoped>
  aside{
    flex:1;
    background: #edf0ef;

  }

  /*order Form Header*/
  .orderFormHead{
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
  .orderFormContent{
    overflow: hidden;
    padding-right: 15px;
    margin-top: 25px;
    background: #fff;
  }
  .contentHead{
    padding: 15px;
  }
  .contentHead h3{
    font-size: 14px;
    font-weight: 400;
    color: #373a3c;
  }
  .contentBody{
    padding: 0 15px;
  }
  .contentBodyLeft{
    background: #a23;
    width: 164px;
    float: left;
  }

  .contentBodyLeft li a{
    line-height: 20px;
    padding: 10px 15px;
    display: block;
    font-size: 14px;
    background: #f0f0f0;
    color: #373a3c;
  }
  .contentBodyLeft li a:hover{
    background: #663ab8;
    color: #fff
  }
  .contentBodyLeft li:nth-child(1) a{
    background: #663ab8;
    color: #fff
  }
  .contentBodyRight{
    width: 789px;
    float: right;
    padding: 0 15px;
  }
  .bodyRightTxt{
    padding-left: 30px;
    border-left: 1px solid #f0f0f0;
  }
  .bodyRightTxt label:nth-child(1){
    font-size: 14px;
    float: left;
    height: 27px;
    margin-bottom: 10px;
  }
  .bodyRightTxt label select{
    outline: none;
    width: 73px;
    height: 20px;
    padding: 1px;
  }
  .bodyRightTxt label select option{
    padding: 0 2px 1px;
  }
  .bodyRightTxt label:nth-child(2){
    font-size: 14px;
    float: right;
    height: 24px;
    margin-bottom: 5px;
  }
  .bodyRightTxt label:nth-child(2) input{
    width: 164px;
    height: 19px;
    padding: 1px;
    border: 1px solid #d6d6d6;
    margin-left: 7px;
  }
  .products{
    float: left;
    width: 758px;
    border-collapse: collapse;
    height: 167px;
    margin-top: 15px;
  }
  .products thead{
    border-top: 1px solid #e3e3e3;
    width: 35.3px;
  }
  .products thead th{
    padding: 8px 30px 8px 8px;
    font-size: 14px;
    font-weight: 400;
  }
  .products tbody td{
    padding: 8px;
    border-top: 1px solid #ddd;
    font-size: 14px;
  }
  .products tbody td .spec{
    padding: 4px 6px;
    font-size: 14px;
    border-radius: 5px;
  }
  .products tbody tr:nth-child(1) .spec{
    background: #FDCD0C;
  }
  .products tbody tr:nth-child(2) .spec{
    background: #4EB152;
  }
  .products tbody tr:nth-child(3) .spec{
    background: #FDCD0C;
  }
  .buttonGroup button{
    padding: 5px;
    font-size: 14px;
    color: #fff;
    width: 22.3px;
    outline: none;
  }
  .buttonGroup button:nth-child(1){
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    background: #5b34a5;
    border: 1px solid #5b34a5;
  }
  .buttonGroup button:nth-child(2){
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    background: #fe5050;
    border: 1px solid #fe5050;
    margin-left: -4px;
  }
  .buttonGroup button .iconfont{
    width: 9.4px;
    height: 18px;
    font-size: 10px;
    color: #fff;
  }
  .productsInfo{
    float: left;
    width: 128px;
    height: 19px;
    margin-top: 7px;
    padding-top: 8px;
    font-size: 14px;
    line-height: 20px;
  }
  .pageBtn{
    float: right;
    width: 140px;
    height: 19px;
    font-size: 14px;
    line-height: 20px;
    margin-top: 15px;
  }
  .pageBtn a{
    padding: 5px 7px;
    border: 1px solid #e3e3e3;
  }
  .pageBtn span a{
    background: #663ab8;
    border: 1px solid #663ab8;
    color: #fff;
  }
  .pageBtn span{
    margin-left: -6px;
    margin-right: -4px;
  }
  .pageBtn a:hover{
    background: #663ab8;
    border: 1px solid #663ab8;
    color: #fff;
  }

</style>
