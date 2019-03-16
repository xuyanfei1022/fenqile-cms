<template>
    <div class="asides">
        <!--aside-top-->
        <div class="aside-top">
            <h1>Chartjs</h1>
            <p><span>home</span>&gt;<span>charts</span>&gt;<span style="color:#663ab8">chart.js</span></p>
        </div>
        <!--aside-table01-->
        <echartOne></echartOne>
        <echartTwo></echartTwo>
        <echartTree></echartTree>

        <p>Copyright© 2016 Develop by Zwolek. All Rights Reserved.</p>
    </div>
</template>

<script>

    import echartOne from "../components/echarts/echartOne";
    import echartTwo from "../components/echarts/echartTwo";
    import echartTree from "../components/echarts/echartTree";
    export default {
        name: "echarts",
        components: {
            echartOne,
            echartTwo,
            echartTree
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