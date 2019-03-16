<template>
  <!--<div class="content">-->
    <!--<nav-index></nav-index>-->
    <div class="aside_box">
      <div class="aside_top">
        <h3>客户</h3>
        <p><img src="" alt=""> <span>家</span> > <span>电子商务</span> > <span class="here">客户</span></p>
      </div>
      <div class="aside_con">
        <h3>客户名单</h3>
        <div class="search">
          <label for="">
            显示
            <select name="" id="">
              <option value="1">10</option>
              <option value="1">25</option>
              <option value="1">50</option>
              <option value="1">100</option>
            </select>
            项
          </label>
          <div class="sou">
            搜索: <input type="text">
          </div>
        </div>
        <customer-table></customer-table>
      </div>
      <div class="aside_footer">
        Copyright© 2016 Develop by Zwolek. All Rights Reserved.
      </div>
    </div>
</template>

<script>
import navIndex from '../index/navIndex'
import customerTable from './customer-con-table'
	export default {
		name: "customer-con",
		components:{
      navIndex,
		  customerTable
		}
	}
</script>

<style scoped>

  nav{
    width: 220px;
    background: green;
    margin-right: 15px;
    background: white;
  }
  .aside_box{
    height: 100%;
    overflow-y: auto;
  }
  .aside_top{
    height:88px;
  }
  .aside_top h3{
    padding: 15px 0;
  }
  .aside_top span{
    font-size: 12px;
  }
  .here{
    color:#663ab9;
  }

  .aside_con{
    /*height: 70%;*/
    margin-right: 20px;
    padding:0 10px;
    background:white;
    padding-bottom: 10px;
  }
  .search{
    display: flex;
    justify-content: space-between;
    font-size: 14px;
  }
  .aside_con h3{
    height: 50px;
    line-height: 50px;
    color:#363a3c;
  }
  .search select{
    width:72px;
    border: 1px solid #d5d5d5;
  }
  .sou input{
    width: 175px;
    height: 22px;
    border: 1px solid #d5d5d5;
    padding-left: 5px;
  }
  .aside_footer{
    height: 50px;
    line-height: 50px;
    font-size: 14px;
    color:#373a3c;
  }
</style>
