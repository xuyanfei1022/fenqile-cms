<template>
    <div class="aside-table01">
        <div id="main01" class="aside-table01-left" style="backgroundColor: #fff;">
        </div>
        <div id="main02" class="aside-table01-right" style="backgroundColor: #fff;">
        </div>
    </div>
</template>

<script>
    export default {
        name: "echartOne",

        mounted(){
            this.eone();
            this.etwo();
        },
        methods: {
            eone(){
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
                        data: ["Users",],
                        orient: 'horizontal',
                        x: 'center',
                        y: 'top',
                        top: 10
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            dataZoom: {
                                yAxisIndex: 'none'
                            },
                            dataView: {readOnly: false},
                            magicType: {type: ['user']},
                        }
                    },
                    xAxis: {
                        type: 'category',
                        data: ['Jan', 'Feb', 'March', 'Apr', 'May', 'June', 'July']
                    },
                    yAxis: {
                        type: 'value',
                        max: 85,
                        min: 40
                    },
                    series: [{
                        name: "Users",
                        smooth: true,
                        data: [65, 65, 80, 83, 56, 55, 40],
                        type: 'line',
                        itemStyle: {
                            normal: {
                                color: '#4bc0c0',
                                lineStyle: {
                                    color: '#4bc0c0'
                                }
                            }
                        },
                    }]
                })
            },
            etwo(){
                // 基于准备好的dom，初始化echarts实例
                let myChart2 = this.$echarts.init(document.getElementById('main02'))
                // 绘制图表
                myChart2.setOption({
                    backgroundColor: '#fff',
                    title: {
                        text: 'RADAR CHART',
                        left: 'left',
                        textStyle: {
                            color: '#000',
                            fontWeight: 100,
                            fontSize: 14,
                        }
                    },
                    grid: {
                        position: 'center',
                    },
                    legend: {
                        orient: 'vertical',
                        top : 0,
                        orient: 'horizontal',
                        x: 'right',
                        y: 'top',
                        data:['gray','red'],
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
                        textStyle:{//图例的公用文本样式。
                            color:"#2f4554",
                            backgroundColor: '#999',
                        },
                        //指示器名称和指示器轴的距离
                        nameGap:5,
                        // 设置雷达图中间射线的颜色
                        axisLine: {
                            lineStyle: {
                                color: '#d1d1d1',
                            },
                        },
                        indicator: [
                            { name: 'Eating', max: 100},
                            { name: 'Running', max: 100},
                            { name: 'Cycling', max: 100},
                            { name: 'Coding', max: 100},
                            { name: 'Designing', max: 100},
                            { name: 'Sleeping', max: 100},
                            { name: 'Drinking', max: 100}
                        ],
                        splitArea : {
                            show : true,
                            areaStyle : {
                                // 设置图表背景网格的颜色  颜色填充
//	                       color: ['#d72941', '#f1c35b','#99c736', '#75813b', '#4e3829',]
                                color:['#ffffff']
                            }
                        },
                    },
                    series: [{
                        name: '预算 vs 开销（Budget vs spending）',
                        type: 'radar',
                        // areaStyle: {normal: {}},
                        data : [
                            {
//		                value : [4300, 10000, 28000, 35000, 50000, 19000],
                                value : [65, 40, 55, 56, 81, 90, 59],
                                name : 'gray',
                                //  设置网格颜色
                                itemStyle: {
                                    normal: {
                                        color: '#b3b5c6',
                                        lineStyle: {
                                            color:  '#b3b5c6',
                                        },
                                    },
                                }
                            },
                            {
                                value : [28, 100, 27, 96, 19, 40, 48],
                                name : 'red',
                                itemStyle: {
                                    normal: {
                                        color: '#ff6384',
                                        lineStyle: {
                                            color: '#ff6384',
                                        },
                                    },
                                }
                            }
                        ]
                    }]
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
        width: 50%;
        height: 316px;
        margin:15px;
        border-radius: 6px;
        padding:10px;
    }
    .aside-table01-right{
        width: 50%;
        height: 316px;
        margin: 15px;
        border-radius: 6px;
        padding:10px;
    }
</style>