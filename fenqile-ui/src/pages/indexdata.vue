<template>
    <div class="asides">
        <!--aside-top-->
        <div class="aside-top">
            <h1>仪表盘</h1>
            <p><span>家</span>&gt;<span style="color:#663ab8">仪表盘</span></p>
        </div>
        <indexdata-one></indexdata-one>
        <indexdata-two></indexdata-two>
        <IndexdataTree></IndexdataTree>
        <p>Copyright© 2016 Develop by Zwolek. All Rights Reserved.</p>
    </div>
</template>

<script>
    import IndexdataOne from "../components/indexdata/indexdataOne";
    import IndexdataTwo from "../components/indexdata/indexdataTwo";
    import IndexdataTree from "../components/indexdata/indexdataTree";
    export default {
        name: "indexdata",
        components: {
            IndexdataTree,
            IndexdataTwo,
            IndexdataOne
        }
    }
</script>

<style scoped>
    .asides{
        background-color: #f0f0f0;
        overflow-y: auto;
    }
    .aside-top{
        padding:15px;
    }
    .aside-top h1{
        font-size: 18px;
        line-height: 18px;
        color: #373a3c;
        margin-bottom: 14px;
    }
    .aside-top p{
        font-size: 12px;
        line-height: 10px;
        color: #81878b;
    }
    .aside-top p span{
        font-size: 12px;
        margin:0 4px;
    }
</style>
