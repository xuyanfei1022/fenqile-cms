<template>
  <div>
    <editcustomer-con></editcustomer-con>
  </div>
</template>

<script>
import headIndex from '../components/index/headIndex'
import editcustomerCon from '../components/editCustomer/editCustomer-con'
	export default {
		name: "editCustomer",
		components:{editcustomerCon,headIndex}
	}
</script>

<style>
  @import url('../../static/css/head.css');
  @import url('../../static/css/editCustomer.css');
</style>
