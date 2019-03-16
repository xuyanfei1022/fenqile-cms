<template>
  <div class="aside">
    <fqlEditHead></fqlEditHead>
    <fqlOrderformConent></fqlOrderformConent>
  </div>
</template>

<script>
  import fqlEditHead from "../editProduct/fqlEditHead"
  import fqlOrderformConent from "./fqlOrderformConent"
    export default {
        name: "fqlAside",
      components:{
        fqlEditHead,
        fqlOrderformConent
      }
    }
</script>

<style scoped>
  aside{
    overflow-y: auto;
    flex:1;
    background: #edf0ef;

  }

</style>
