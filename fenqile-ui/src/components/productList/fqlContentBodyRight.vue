<template>
  <div class="contentBodyRight">
    <div class="bodyRightTxt">
      <label for="">
        Show
        <select name="" id="">
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        entries
      </label>
      <label for="">
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
        name: "fqlContentBodyRight"
    }
</script>

<style scoped>
  .contentBodyRight{
    width: 100%;
    float: right;
    padding: 0 15px;
  }
  .bodyRightTxt{
    width: 100%;
    padding-left: 30px;
    border-left: 1px solid #f0f0f0;
  }
  .bodyRightTxt label:nth-child(1){
    font-size: 14px;
    float: left;
    height: 27px;
    margin-bottom: 10px;
  }
  .bodyRightTxt label select{
    outline: none;
    width: 73px;
    height: 20px;
    padding: 1px;
  }
  .bodyRightTxt label select option{
    padding: 0 2px 1px;
  }
  .bodyRightTxt label:nth-child(2){
    font-size: 14px;
    float: right;
    height: 24px;
    margin-bottom: 5px;
  }
  .bodyRightTxt label:nth-child(2) input{
    width: 164px;
    height: 19px;
    padding: 1px;
    border: 1px solid #d6d6d6;
    margin-left: 7px;
  }
  .products{
    float: left;
    width: 100%;
    border-collapse: collapse;
    height: 167px;
    margin-top: 15px;
  }
  .products thead{
    border-top: 1px solid #e3e3e3;
    width: 35.3px;
  }
  .products thead th:after{
    font-family: FontAwesome;
    font-size: 10px;
    color: #d7d8d8;
    content: "\25B2";
    float: right;
  }
  .products thead th:nth-child(1):after{
    color: #9b9d9e;
    content: "\25BC";
  }
  .products thead th{
    text-align: center;
    padding: 8px 30px 8px 8px;
    font-size: 14px;
    font-weight: 400;
  }
  .products tbody td{
    text-align: center;
    padding: 8px;
    border-top: 1px solid #ddd;
    font-size: 14px;
  }
  .products tbody td .spec{
    padding: 4px 6px;
    font-size: 14px;
    border-radius: 5px;
  }
  .products tbody tr:nth-child(1) .spec{
    background: #FDCD0C;
  }
  .products tbody tr:nth-child(2) .spec{
    background: #4EB152;
  }
  .products tbody tr:nth-child(3) .spec{
    background: #FDCD0C;
  }
  .buttonGroup button{
    padding: 5px;
    font-size: 14px;
    color: #fff;
    width: 22.3px;
    outline: none;
  }
  .buttonGroup button:nth-child(1){
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    background: #5b34a5;
    border: 1px solid #5b34a5;
  }
  .buttonGroup button:nth-child(2){
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    background: #fe5050;
    border: 1px solid #fe5050;
    margin-left: -4px;
  }
  .buttonGroup button .iconfont{
    width: 9.4px;
    height: 18px;
    font-size: 10px;
    color: #fff;
  }
  .productsInfo{
    float: left;
    width: 128px;
    height: 19px;
    margin-top: 7px;
    padding-top: 8px;
    font-size: 14px;
    line-height: 20px;
  }
  .pageBtn{
    float: right;
    width: 140px;
    height: 19px;
    font-size: 14px;
    line-height: 20px;
    margin-top: 15px;
  }
  .pageBtn a{
    padding: 5px 7px;
    border: 1px solid #e3e3e3;
  }
  .pageBtn span a{
    background: #663ab8;
    border: 1px solid #663ab8;
    color: #fff;
  }
  .pageBtn span{
    margin-left: -6px;
    margin-right: -4px;
  }
  .pageBtn a:hover{
    background: #663ab8;
    border: 1px solid #663ab8;
    color: #fff;
  }
</style>
