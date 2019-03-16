<template>
  <div class="contentBodyRight">
    <div class="bodyRightTxt">
      <label>
        Show
        <select name="" id="">
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        entries
      </label>
      <label>
        Search:<input type="text">
      </label>
      <table class="products">
        <thead>
        <tr>
          <th>#</th>
          <th>ProductName</th>
          <th>Model</th>
          <th>Quantity</th>
          <th>Status</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>1</td>
          <td>Elastic</td>
          <td>Yellow</td>
          <td>66</td>
          <td><span class="spec">In Stock</span></td>
          <td>$86,000</td>
          <td>
            <div class="buttonGroup">
              <button><i class="icon iconfont">&#xe61b;</i></button>
              <button><i class="icon iconfont">&#xe644;</i></button>
            </div>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Elastic</td>
          <td>Yellow</td>
          <td>66</td>
          <td><span class="spec">In Stock</span></td>
          <td>$86,000</td>
          <td>
            <div class="buttonGroup">
              <button><i class="icon iconfont">&#xe61b;</i></button>
              <button><i class="icon iconfont">&#xe644;</i></button>
            </div>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Elastic</td>
          <td>Yellow</td>
          <td>66</td>
          <td><span class="spec">In Stock</span></td>
          <td>$86,000</td>
          <td>
            <div class="buttonGroup">
              <button><i class="icon iconfont">&#xe61b;</i></button>
              <button><i class="icon iconfont">&#xe644;</i></button>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
      <div class="productsInfo">显示作品中的1~3个</div>
      <div class="pageBtn">
        <a href="">上一页</a>
        <span><a href="">1</a></span>
        <a href="">下一页</a>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "fqlContentbodyRight"
    }
</script>

<style scoped>
  @import "../../../static/css/orderForm.css";
</style>
