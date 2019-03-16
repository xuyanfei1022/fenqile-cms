<template>
  <form>
    <div class="label">
      <label>名字</label>
      <div class="inp_box"><input type="text"></div>
    </div>
    <div class="label">
      <label>姓</label>
      <div class="inp_box"><input type="text"></div>
    </div>
    <div class="label">
      <label>电子邮件</label>
      <div class="inp_box"><input type="text"></div>
    </div>
    <div class="label">
      <label>国家</label>
      <div class="inp_box">
        <select name="cou" id="">
          <option value="1">中国</option>
          <option value="1">美国</option>
          <option value="1">英国</option>
        </select>
      </div>
    </div>
    <div class="label">
      <label>城市</label>
      <div class="inp_box"><input type="text"></div>
    </div>
    <div class="label">
      <label>压缩</label>
      <div class="inp_box"><input type="text"></div>
    </div>
    <div class="label">
      <label>地址</label>
      <div class="inp_box"><input type="text"></div>
    </div>
    <div class="label">
      <label>电话</label>
      <div class="inp_box"><input type="text"></div>
    </div>
    <div class="label">
      <label>传真</label>
      <div class="inp_box"><input type="text"></div>
    </div>
    <div class="choose">
      <div class="calcle">取消</div>
      <div class="baocun">保存</div>
    </div>
  </form>
</template>

<script>
	export default {
		name: "editCustomer-form"
	}
</script>

<style scoped>

</style>
