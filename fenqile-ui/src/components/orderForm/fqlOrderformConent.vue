<template>
  <div class="orderFormContent">
    <div class="contentHead">编辑订单</div>
    <div class="contentBody">
      <div class="contentBodyLeft">
        <ul>
          <li><router-link to="/orderForm/fqlContentbodyRight" tag="a">产品</router-link></li>
          <li><router-link to="/orderForm/information" tag="a">信息</router-link></li>
          <li><router-link to="/orderForm/payment" tag="a">Payment</router-link></li>
        </ul>
      </div>
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import fqlContentbodyRight from "./fqlContentbodyRight"
    export default {
        name: "fqlOrderformConent",
      components:{
        fqlContentbodyRight
      }
    }
</script>

<style scoped>
  @import "../../../static/css/orderForm.css";

</style>
