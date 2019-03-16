<template>
  <section>
    <h2>Data Tables</h2>
    <div class="section_top">
      <img src="../../../static/img/home.png" alt=""/>
      <p>Home</p>
      <img src="../../../static/img/jiantou.png" alt=""/>
      <p>Tables</p>
      <img src="../../../static/img/jiantou.png" alt=""/>
      <p>Data Tables</p>
    </div>
    <div class="section_xa">
      <div class="main">
        <h3>BASIC DATA TABLES</h3>
        <div class="main_top">
          <div class="top1">
            <p>Show
              <select>
                <option>10</option>
                <option>25</option>
                <option>50</option>
              </select>
              entries</p>
          </div>
          <div class="top2">
            <p>Search:
              <input type="text"/>
            </p>
          </div>
        </div>
        <table class="table-striped">
          <tr>
              <td>Name</td>
              <td>Position</td>
              <td>Office</td>
              <td>Age</td>
              <td>State date</td>
              <td>Salary</td>
          </tr>
          <tr>
            <td>Airi Satou</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>33</td>
            <td>2008/11/28</td>
            <td>$162,700</td>
          </tr>
          <tr>
            <td>Angelica Ramos</td>
            <td>Chief Executive Officer (CEO)</td>
            <td>London</td>
            <td>47</td>
            <td>2009/10/09</td>
            <td>$1,200,000</td>
          </tr>
          <tr>
            <td>Ashton Cox</td>
            <td>Junior Technical Author</td>
            <td>San Francisco</td>
            <td>66</td>
            <td>2009/01/12</td>
            <td>$86,000</td>
          </tr>
          <tr>
            <td>Bradley Greer</td>
            <td>Software Engineer</td>
            <td>London</td>
            <td>41</td>
            <td>2012/10/13</td>
            <td>$132,000</td>
          </tr>
          <tr>
            <td>Brenden Wagner</td>
            <td>Software Engineer</td>
            <td>San Francisco</td>
            <td>28</td>
            <td>2011/06/07</td>
            <td>$206,850</td>
          </tr>
          <tr>
            <td>Airi Satou</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>33</td>
            <td>2008/11/28</td>
            <td>$162,700</td>
          </tr>
          <tr>
            <td>Angelica Ramos</td>
            <td>Chief Executive Officer (CEO)</td>
            <td>London</td>
            <td>47</td>
            <td>2009/10/09</td>
            <td>$1,200,000</td>
          </tr>
          <tr>
            <td>Ashton Cox</td>
            <td>Junior Technical Author</td>
            <td>San Francisco</td>
            <td>66</td>
            <td>2009/01/12</td>
            <td>$86,000</td>
          </tr>
          <tr>
            <td>Bradley Greer</td>
            <td>Software Engineer</td>
            <td>London</td>
            <td>41</td>
            <td>2012/10/13</td>
            <td>$132,000</td>
          </tr>
          <tr>
            <td>Brenden Wagner</td>
            <td>Software Engineer</td>
            <td>San Francisco</td>
            <td>28</td>
            <td>2011/06/07</td>
            <td>$206,850</td>
          </tr>
          <tr>
            <td>Airi Satou</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>33</td>
            <td>2008/11/28</td>
            <td>$162,700</td>
          </tr>
          <tr>
            <td>Angelica Ramos</td>
            <td>Chief Executive Officer (CEO)</td>
            <td>London</td>
            <td>47</td>
            <td>2009/10/09</td>
            <td>$1,200,000</td>
          </tr>
          <tr>
            <td>Ashton Cox</td>
            <td>Junior Technical Author</td>
            <td>San Francisco</td>
            <td>66</td>
            <td>2009/01/12</td>
            <td>$86,000</td>
          </tr>
          <tr>
            <td>Bradley Greer</td>
            <td>Software Engineer</td>
            <td>London</td>
            <td>41</td>
            <td>2012/10/13</td>
            <td>$132,000</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="la">版权所有©2016 Zwolek开发。版权所有。</div>
  </section>
</template>

<script>
    export default {
        name: "dataSide"
    }
</script>

<style scoped>

  section{
    flex:1;
    background: #f0f0f0;
    padding-right: 15px;
  }
  .section_top{
    display: -webkit-flex;
    align-items: center;
  }
  .section_top img{
    height: 10px;
  }
  section h2{
    font-size: 20px;
    margin-top: 14px;
    margin-bottom: 14px;
  }
  .section_top p{
    font-size: 10px;
    color:#81878b;
    margin-left: 5px;
    margin-right: 7px;
  }
  .section_top p:last-child{
    color: #883ab8;
  }
  .section_top p:hover{
    color: #883ab8;
  }
  .section_xa{
    padding-right: 15px;
  }
  .main{
    width: 100%;
    background: white;
    box-shadow: 0 0 5px 3px #e3e3e3;
    margin-top: 30px;
    padding-top: 15px;
    padding-left: 15px;
    margin-right: 20px;
  }
  .main h3{
    font-size: 14px;
    color:#373a3c;
    margin-bottom: 18px;
  }
  .main_top{
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
  }
  .top1 p{
    font-size: 12px;
    color: #373a3c;
  }
  .top1 select{
    width: 75px;
    height: 22px;
  }
  .top2 p{
    font-size: 12px;
    color: #373a3c;
  }
  .top2 input{
    width: 180px;
    height: 22px;
    border: 1px solid #d6d6d6;
    margin-right: 15px;
  }
  table{
    border-collapse: collapse;
  }
  tr:first-child{
    font-size:14px;
    color:#373a3c;
  }
  tr{
    width: 100%;
    display: block;
    line-height: 38px;
  }
  td{
    border:1px solid #e3e3e3;
    padding-left: 5px;

  }
  td:nth-child(1){
    width: 205px;
  }
  td:nth-child(2){
    width: 316px;
  }
  td:nth-child(3){
    width: 157px;
  }
  td:nth-child(4){
    width: 95px;
  }
  td:nth-child(5){
    width: 157px;
  }
  td:nth-child(6){
    width: 130px;
  }
  /*th:nth-child(1){*/
    /*width: 205px;*/
  /*}*/
  /*th:nth-child(2){*/
    /*width: 316px;*/
  /*}*/
  /*th:nth-child(3){*/
    /*width: 157px;*/
  /*}*/
  /*th:nth-child(4){*/
    /*width: 95px;*/
  /*}*/
  /*th:nth-child(5){*/
    /*width: 157px;*/
  /*}*/
  /*th:nth-child(6){*/
    /*width: 130px;*/
  /*}*/

  .la{
    height: 50px;
    line-height: 50px;
    font-size: 12px;
    color: #373a3c;
  }
</style>
