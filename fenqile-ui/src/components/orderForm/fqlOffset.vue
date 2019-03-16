<template>
  <div class="offset">
    <button>取消</button>
    <button>保存</button>
  </div>
</template>

<script>
    export default {
        name: "fqlOffset"
    }
</script>

<style scoped>
  .offset{
    padding: 0 15px;
    margin-left: 67px;
    height: 40px;
    text-align: right;
  }
  .offset button{
    width: 51px;
    height: 19px;
    font-size: 14px;
    padding: 9px 11px;
    border-radius: 4px;
    outline: none;
    border: 0;
    box-sizing: content-box;
  }
  .offset button:nth-child(1){
    background: #FE5050;
  }
  .offset button:nth-child(2){
    background: #663ab8;
  }
</style>
