<template>
  <tr>
    <td>1</td>
    <td>黎明</td>
    <td>方法</td>
    <td>33</td>
    <td>44</td>
    <td><span class="iswork">启用</span></td>
    <td>66</td>
    <td>
      <div class="edit">
        <div class="bianji"><img src="../../../static/img/edit.jpg" alt=""></div>
        <div class="delete"><img src="../../../static/img/del.jpg" alt=""></div>
      </div>
    </td>
  </tr>
</template>

<script>
	export default {
		name: "table-row"
	}
</script>

<style scoped>


  .iswork{
    display: block;
    width: 44px;
    height:22px;
    text-align: center;
    background:#4eb152;
    color:white;
    border-radius:5px;
  }
  .edit{
    width: 44px;
    overflow: hidden;
    border-radius: 5px;
    text-align:center;
    line-height:30px;
  }
  .bianji, .delete{
    width: 22px;
    height: 30px;
    float: left;
    background:#663ab9;
  }
  .delete{
    background:#ff5050;
  }
</style>
