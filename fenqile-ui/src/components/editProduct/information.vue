<template>
    <div class="table">
      <form action="">
        <div class="group">
          <p>产品名称</p>
          <div class="input">
            <input type="text"/>
          </div>
        </div>
        <div class="group">
          <p>参考代码</p>
          <div class="input">
            <input type="text"/>
          </div>
        </div>
        <div class="group">
          <p>制造</p>
          <div class="input">
            <input type="text"/>
          </div>
        </div>
        <div class="group">
          <p>可视性</p>
          <div class="input">
            <select name="" id="quanxian">
              <option value="1">everywhere</option>
              <option value="2">home</option>
            </select>
          </div>
        </div>
        <div class="group">
          <p>条件</p>
          <div class="input">
            <select name="" id="quanxian">
              <option value="1">new</option>
              <option value="2">agin</option>
            </select>
          </div>
        </div>
        <div class="group">
          <p>启用</p>
          <div class="input">
            <span id="anniu">
              <span></span>
            </span>
          </div>
        </div>
        <div class="group">
          <p>描述</p>
          <div class="note">

          </div>
          <div class="noteEdit">
            <textarea name="" id="" cols="200"></textarea>
          </div>
        </div>
      </form>
    </div>
</template>

<script>
    export default {
        name: "information",
    }
</script>

<style scoped>
.table{
  width: 82%;
  float: left;
  box-sizing: border-box;
  padding: 0 15px;
}
  .table form{
    padding-left: 15px;
    border-left: 1px solid #e3e3e3;
  }
  .group{
    height: 40px;
    margin: 0 -15px 15px;

  }
  .group p{
    float: left;
    width: 10%;
    box-sizing: border-box;
    padding: 7px 15px 0;
    font-size: 13px;
    font-weight: 700;
  }
.input{
  box-sizing: border-box;
  float: left;
  height: 34px;
  width: 90%;
}
  .input input{
    border: 1px solid #ccc;
    box-sizing: border-box;
    outline: none;
    padding: 6px 12px;
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }
#quanxian{
  border: 1px solid #ccc;
  box-sizing: border-box;
  outline: none;
  padding: 6px 12px;
  width: 100%;
  height: 100%;
  border-radius: 4px;
}
  #anniu{
    display:block;
    width: 50px;
    height: 30px;
    margin-top: 4px;
    border-radius: 20px;
    border: 1px solid #673ab7;
    background: #673ab7;
    position: relative;
  }
  #anniu span{
    display: block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #fff;
    position: absolute;
    left: 20px;
  }
  .note{
    padding: 15px;
  }
  .noteEdit{
    height: 200px;
    border: 1px solid #e3e3e3;
    width: 90%;
    float: right;
  }
  .noteEdit textarea{
    box-sizing: border-box;
    outline: none;
    width: 100%;
    height: 100%;
    padding: 10px;
  }
</style>
