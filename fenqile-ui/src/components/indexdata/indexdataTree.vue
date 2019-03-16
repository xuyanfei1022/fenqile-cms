<template>
    <div class="aside-table01">
        <div id="main05" class="aside-table01-left">
            <div class="table04-left-top">
                <h2>TO DO LIST</h2>
            </div>
            <div class="table04-left-cen">
                <input type="checkbox" value="" /><span>Send mail to Frank.</span><br />
            </div>
            <div class="table04-left-cen">
                <input type="checkbox" value="" /><span>Send mail to Frank.</span><br />
            </div>
            <div class="table04-left-cen">
                <input type="checkbox" value="" /><span>Send mail to Frank.</span><br />
            </div>
            <div class="table04-left-cen">
                <input type="checkbox" value="" /><span>Send mail to Frank.</span><br />
            </div>
            <div class="table04-left-cen">
                <input type="checkbox" value="" /><span>Send mail to Frank.</span><br />
            </div>
            <div class="table04-left-bom">
                <p>
                    <input type="text" placeholder="New"/><span>ADD</span>
                </p>
            </div>
        </div>
        <div id="main06" class="aside-table01-right">

        </div>
        <div id="main07" class="aside-table01-left">

        </div>
    </div>
</template>

<script>
    export default {
        name: "indexdataTree",
        mounted() {
            this.esix();
            this.eseven();
            // this.randomData();
            // this.sss();
            // this.lza();
        },
        methods: {
            esix() {
                // 基于准备好的dom，初始化echarts实例
                let myChart5 = this.$echarts.init(document.getElementById('main06'))
                // 绘制图表
                myChart5.setOption({
                    backgroundColor: '#fff',
                    title: {
                        text: 'RADAR CHART',
                        left: 'left',
                        textStyle: {
//			        color: '#000',
                            fontWeight: 100,
                            fontSize: 14,
                        }
                    },
                    grid: {
                        position: 'center',
                    },
                    radar: {
                        // shape: 'circle',
                        name: {
                            textStyle: {
                                color: '#fff',
                                backgroundColor: '#999',
                                borderRadius: 3,
                                padding: [3, 5]
                            }
                        },
                        textStyle: {//图例的公用文本样式。
                            color: "#2f4554",
                            backgroundColor: '#999',
                        },
                        //指示器名称和指示器轴的距离
                        nameGap: 5,
                        // 设置雷达图中间射线的颜色
                        axisLine: {
                            lineStyle: {
                                color: '#d1d1d1',
                            },
                        },
                        indicator: [
                            {name: 'Eating', max: 100},
                            {name: 'Running', max: 100},
                            {name: 'Cycling', max: 100},
                            {name: 'Coding', max: 100},
                            {name: 'Designing', max: 100},
                            {name: 'Sleeping', max: 100},
                            {name: 'Drinking', max: 100}
                        ]
                    },
                    series: [{
                        name: '预算 vs 开销（Budget vs spending）',
                        type: 'radar',
                        // areaStyle: {normal: {}},
                        data: [
                            {
//		                value : [4300, 10000, 28000, 35000, 50000, 19000],
                                value: [65, 40, 55, 56, 81, 90, 59],
                                name: '预算分配（Allocated Budget）',
                                //  设置网格颜色
                                itemStyle: {
                                    normal: {
                                        color: 'rgba(147,117,205,.3)',
                                        lineStyle: {
                                            color: 'rgba(147,117,205,.3)',
                                        },
                                    },
                                }
                            },
                            {
                                value: [28, 100, 27, 96, 19, 40, 48],
                                name: '实际开销（Actual Spending）',
                                itemStyle: {
                                    normal: {
                                        color: '#663ab8',
                                        lineStyle: {
                                            color: '#663ab8',
                                        },
                                    },
                                }
                            }
                        ]
                    }]
                })
            },
            eseven() {
                // 基于准备好的dom，初始化echarts实例
                let myChart7 = this.$echarts.init(document.getElementById('main07'))
                // 绘制图表
                myChart7.setOption({
                    backgroundColor: "#fff",
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            name: '邮件营销',
                            type: 'line',
                            stack: '总量',
                            data: [120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                            name: '联盟广告',
                            type: 'line',
                            stack: '总量',
                            data: [220, 182, 191, 234, 290, 330, 310]
                        },
                        {
                            name: '视频广告',
                            type: 'line',
                            stack: '总量',
                            data: [150, 232, 201, 154, 190, 330, 410]
                        },
                        {
                            name: '直接访问',
                            type: 'line',
                            stack: '总量',
                            data: [320, 332, 301, 334, 390, 330, 320]
                        },
                        {
                            name: '搜索引擎',
                            type: 'line',
                            stack: '总量',
                            data: [820, 932, 901, 934, 1290, 1330, 1320]
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
    #main05,#main06,#main07{
        width: 33%;
        height: 312px;
        padding: 15px;
        margin:15px;
        background-color: #fff;
        border-radius: 4px;
    }
    .table04-left-top{
        /*width: 100%;*/
        height: 30px;
        border-bottom: 1px solid #dedede;
    }
    .table04-left-top h2{
        line-height: 30px;
        margin-left: 15px;
        font-size:14px;
        font-weight: 100;
    }
    .table04-left-cen{
        /*width:100%;*/
        height: 50px;
        border-bottom: 1px solid #dedede;
        line-height: 50px;
    }
    .table04-left-cen input{
        margin-left: 15px;
        margin-right: 10px;
        vertical-align: middle;
    }
    .table04-left-bom span{
        display: inline-block;
        margin: 7px 0 0 10px;
    }
</style>
