<template>
  <div class="orderFormContent">
    <div class="contentHead">ProductList</div>
    <div class="contentBody">
      <fqlContentBodyRight></fqlContentBodyRight>
    </div>
  </div>
</template>

<script>
  import fqlContentBodyRight from "./fqlContentBodyRight"
    export default {
        name: "fqlOrderformContent",
      components:{
        fqlContentBodyRight
      }
    }
</script>

<style scoped>
  .orderFormContent{
    overflow: hidden;
    padding-right: 15px;
    margin-top: 25px;
    background: #fff;
  }
  .contentHead{
    text-align: left;
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

</style>
