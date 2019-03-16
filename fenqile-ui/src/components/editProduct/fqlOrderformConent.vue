<template>
  <div class="orderFormContent">
    <div class="contentHead">编辑产品</div>
    <div class="contentBody">
      <div class="contentBodyLeft">
        <ul>
          <li><router-link to="/editProduct/information" tag="a">信息</router-link></li>
          <li><router-link to="/editProduct/price" tag="a">价格</router-link></li>
          <li><router-link to="/editProduct/img" tag="a">图片</router-link></li>
        </ul>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
    export default {
        name: "fqlOrderformConent"
    }
</script>

<style scoped>
  @import "../../../static/css/orderForm.css";
</style>
