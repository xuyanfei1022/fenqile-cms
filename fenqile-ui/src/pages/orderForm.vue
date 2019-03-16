<template>
  <div>
    <fqlAside></fqlAside>
  </div>
</template>

<script>
  import fqlAside from '../components/orderForm/fqlAside'
    export default {
      name: "orderForm",
      components:{
        fqlAside
      }


    }
</script>

<style scoped>
  @import "../../static/css/orderForm.css";
  @import "../../static/css/g-font/iconfont.css";
</style>
