<template>
<div class="container">
  <!--<head-index></head-index>-->
  <customer-con></customer-con>
</div>
</template>

<script>
  import headIndex from '../components/index/headIndex'
  import customerCon from '../components/customer/customer-con'
	export default {
		name: "editCustomer",
		components:{
      headIndex,
      customerCon
		}
	}
</script>

<style>
.container{
  height: 89%;
  flex-direction: column;
}
</style>
