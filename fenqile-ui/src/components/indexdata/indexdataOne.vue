<template>
    <div class="aside-table01">
        <div id="main01" class="aside-table01-left" style="backgroundColor: #fff;">

        </div>
        <div class="aside-table01-right">
            <div class="aside-table01-right01">
                <h2>New Orders</h2>
                <h1>238</h1>
                <p>
                    <span class="iconfont icon-shizhongclock77"></span>before 01-10-2016
                    <span class="iconfont icon-gouwuche"></span>
                    <span class="iconfont icon-gouwuche table01-icon"></span>
                </p>
            </div>
            <div class="aside-table01-right01">
                <h2>Comments</h2>
                <h1>68</h1>
                <p>
                    <span class="iconfont icon-shizhongclock77"></span>before 01-10-2016
                    <span class="iconfont icon-gouwuche"></span>
                    <span class="iconfont icon-gouwuche table01-icon"></span>
                </p>
            </div>
            <div class="aside-table01-right01">
                <h2>New Users</h2>
                <h1>30</h1>
                <p>
                    <span class="iconfont icon-shizhongclock77"></span>before 01-10-2016
                    <span class="iconfont icon-gouwuche"></span>
                    <span class="iconfont icon-gouwuche table01-icon"></span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "indexdataOne",

        mounted(){
            this.eone();
        },
        methods: {
            eone() {
                // 基于准备好的dom，初始化echarts实例
                let myChart1 = this.$echarts.init(document.getElementById('main01'))
                // 绘制图表
                myChart1.setOption({
                    backgroundColor: "#fff",
                    title: {
                        text: 'SALE',
                        // 标题位置
                        top: 0,
                        left: 0,
                        textStyle: {
                            // 标题颜色
                            color: '#000',
                            fontWeight: 100,
                            fontSize: 14,
                        }
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: []
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            dataView: {show: true, readOnly: false},
                            magicType: {show: true, type: ['line', 'bar']},
                            restore: {show: true},
                            saveAsImage: {show: true}
                        }
                    },
                    calculable: true,
                    xAxis: [
                        {
                            type: 'category',
                            data: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    series: [
                        {
                            name: 'Sale',
                            type: 'bar',
                            data: [95, 65, 70, 55, 56, 45, 52, 59, 57, 50, 68, 82],
                            markPoint: {
                                data: []
                            },
                            markLine: {
                                data: []
                            },
                            itemStyle: {
                                //通常情况下：
                                normal: {
                                    color: function (params) {
                                        var colorList = ['rgb(102,58,184)'];
                                        return colorList[params.dataIndex];
                                    }
                                }
                            }
                        },
                        {
                            name: 'User',
                            type: 'bar',
                            data: [80, 58, 50, 43, 46, 39, 46, 50, 50, 47, 62, 73],
                            markPoint: {
                                data: []
                            },
                            markLine: {
                                data: []
                            },
                            itemStyle: {
                                //通常情况下：
                                normal: {
                                    color: function (params) {
                                        var colorList = ['rgb(132,97,198)'];
                                        return colorList[params.dataIndex];
                                    }
                                }
                            }
                        }
                    ]
                })
            }

        }
    }
</script>

<style scoped>
    .aside-table01{
        width: 100%;
        display: flex;
        justify-content: space-between;
        overflow: hidden;
    }
    .aside-table01-left{
        width: 75%;
        height: 316px;
        margin:15px;
        border-radius: 6px;
        padding:10px;
    }
    .aside-table01-right{
        width: 25%;
        height: 316px;
        margin: 15px;
        border-radius: 6px;
    }
    .aside-table01-right01{
        margin-bottom: 16px;
        background-color: #663ab8;
        border-radius: 4px;
        overflow: hidden;

    }
    .aside-table01-right01 h2{
        color: #FFFFFF;
        font-size: 14px;
        margin-top: 14px;
        margin-bottom: 6px;
        font-weight: 100;
        margin-left: 16px;
    }
    .aside-table01-right01 h1{
        font-size: 20px;
        color: #FFFFFF;
        font-weight: 100;
        margin-left: 16px;
    }
    .aside-table01-right01 p{
        box-sizing: border-box;
        width: 100%;
        background-color: #5b34a5;
        height: 30px;
        display: flex;
        align-items: center;
        font-size: 12px;
        color: #FFFFFF;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
    }
    .aside-table01-right01 p span{
        margin:0 5px;
        font-size: 10px;
        color: #FFFFFF;
    }
</style>