<template>
  <form action="">
    <table class="biao">
      <tr>
        <th class="num">#<span class="down"></span></th>
        <th class="cus">顾客<span class="down"></span></th>
        <th class="email">电子邮件<span class="down"></span></th>
        <th class="deli">交货<span class="down"></span></th>
        <th class="data">数据<span class="down"></span></th>
        <th class="status">状态<span class="down"></span></th>
        <th class="price">价钱<span class="down"></span></th>
        <th class="action">行动<span class="down"></span></th>
      </tr>
      <table-row></table-row>
      <table-row></table-row>
      <table-row></table-row>
      <table-row></table-row>
      <table-row></table-row>
      <table-row></table-row>
      <table-row></table-row>
      <table-row></table-row>
      <table-row></table-row>
      <table-row></table-row>
    </table>
  </form>
</template>

<script>
import tableRow from './table-row'
	export default {
		name: "customer-con-table",
		components:{
		  tableRow
		}
	}
</script>

<style scoped>
  .down{
    display: block;
    width:0px;
    height: 0px;
    border:5px solid transparent;
    border-top-color:black;
    float: right;
    margin-top: 10px;
    margin-right: 12px;
  }
  .biao{
    width: 100%;
    border-collapse: collapse;
  }
  .biao tr{
    height: 43px;
    width: 100%;
    border-bottom: 1px solid #dddddd;
  }
  .biao th{
    width:12.5%;
    text-align: left;
    color:#363a3c;
    padding-left: 5px;
  }
  .biao td{
    padding-left: 5px;
    font-size: 14px;
  }
  .biao tr:nth-child(2n){
    background:#efefef;
  }
  .biao .num{
    width: 6%;
  }
  .biao .cus{
    width: 12%;
  }
  .biao .email{
    width: 14%;
  }
  .biao .deli{
    width: 12%;
  }

  .biao .data{
    width: 10%;
  }
  .biao .status{
    width: 8%;
  }
  .biao .price{
    width: 8%;
  }
  .biao .action{
    width: 6%;
  }

</style>
