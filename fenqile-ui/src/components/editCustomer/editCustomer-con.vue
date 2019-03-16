<template>
    <div>
      <div class="aside_top">
        <h3>编辑客户</h3>
        <p><img src="" alt=""> <span>家</span>  > <span>电子商务</span> > <span class="here">编辑客户</span></p>
      </div>
      <div class="aside_bot">
        <h4>编辑用户</h4>
        <div class="tab_con">
          <div class="con_left">
            <div class="information">
              信息
            </div>
            <div class="orders">
              命令
            </div>
          </div>
          <div class="con_right">
            <editCustomer-form></editCustomer-form>
          </div>
        </div>
      </div>
      <div class="aside_footer">
        Copyright© 2016 Develop by Zwolek. All Rights Reserved.
      </div>
    </div>
</template>

<script>
  import editCustomerForm from './editCustomer-form'
	export default {
		name: "editCustomer-con",
		components:{editCustomerForm}
	}
</script>

<style scoped>
  .orders:hover{
    background:#663ab9;
    color:white;
    transition: all .5s;
  }
</style>
