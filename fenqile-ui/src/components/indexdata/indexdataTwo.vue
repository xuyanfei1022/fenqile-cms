<template>
    <div class="aside-table02">
        <div id="main02" class="aside-table02-left">

        </div>
        <div id="main03" class="aside-table02-cen">

        </div>
        <div id="main04" class="aside-table02-right">

        </div>
    </div>
</template>

<script>
    export default {
        name: "indexdataTwo",
        mounted(){
            this.etwo();
            this.etree();
            this.efour();
        },
        methods: {
            etwo() {
                // 基于准备好的dom，初始化echarts实例
                let myChart2 = this.$echarts.init(document.getElementById('main02'))
                // 绘制图表
                myChart2.setOption({
                    backgroundColor: "#fff",
                    title: {
                        text: 'LINE CHART',
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
                    // 颜色提示小框
                    legend: {},
//	    grid: {
//	        left: '3%',
//	        right: '4%',
//	        bottom: '3%',
//	        containLabel: true
//	    },
                    toolbox: {
                        show: true,
                        feature: {
                            dataZoom: {
                                yAxisIndex: 'none'
                            },
                            dataView: {readOnly: false},
                            magicType: {type: ['line', 'bar']},
                            restore: {},
                            saveAsImage: {}
                        }
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['2015-12', '2016-02', '2016-04', '2016-06', '2016-08']
                    },

                    yAxis: {
                        type: 'value',
                        axisLabel: {
                            formatter: '{value} °C'
                        }
                    },
                    series: [
                        {
                            name: 'example01',
                            type: 'line',
                            //折现平滑
                            smooth: true,
                            // 折现圆圈
                            data: [50, 90, 70, 110, 70, 130, 104, 120, 78],
                            itemStyle: {
                                normal: {
                                    color: '#663ab8',
                                    lineStyle: {
                                        color: '#663ab8'
                                    }
                                }
                            },
                        },
                        {
                            name: 'example02',
                            type: 'line',
                            //折现平滑
                            smooth: true,
                            // 折现圆圈
                            data: [130, 40, 40, 150, 40, 160, 69, 161, 48],
                            itemStyle: {
                                normal: {
                                    color: '#9375cd',
                                    lineStyle: {
                                        color: '#9375cd'
                                    }
                                }
                            },
                        }
                    ]
                })
            },
            etree() {
                // 基于准备好的dom，初始化echarts实例
                let myChart3 = this.$echarts.init(document.getElementById('main03'))
                // 绘制图表
                myChart3.setOption({
                    backgroundColor: "#fff",
                    tooltip: {
                        trigger: 'BROWSER SUPPORT',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    //  饼状图的颜色
                    color: ['#9375cd', '#663ab8'],
                    legend: {
                        //  水平排列  horizontal   竖直排列 vertical
                        orient: 'horizontal',
                        x: 'center',
                        y: 'top',
                        data: ['Firefox', 'Chrome',]
                    },
                    series: [
                        {
                            name: '访问',
                            type: 'pie',
                            avoidLabelOverlap: false,
//		            itemStyle : {
//						normal : {
//							color:'#663ab8',
//							lineStyle:{
//								color:'#663ab8'
//							}
//						}
//					},
                            // 饼图的中心(圆心)坐标，数组的第一项是横坐标，第二项是纵坐标。[ default: ['50%', '50%'] ]
                            center: ["50%", "50%"],
                            // 饼图的半径，数组的第一项是内半径，第二项是外半径。[ default: [0, '75%'] ]
                            radius: ["60%", "30%"],
                            borderWidth: 20,
                            label: {
                                normal: {
                                    show: false,
                                    position: 'center',
                                },
                                emphasis: {
                                    show: true,
                                    textStyle: {
                                        fontSize: '20',
                                        fontWeight: 'bold'
                                    }
                                }
                            },
                            labelLine: {
//		                normal: {
//		                    show: false
//		                }
                            },
                            data: [
                                {value: 45, name: 'Firefox'},
                                {value: 55, name: 'Chrome'},
                            ]
                        }
                    ]
                })
            },
            efour() {
                // 基于准备好的dom，初始化echarts实例
                let myChart4 = this.$echarts.init(document.getElementById('main04'))
                // 绘制图表
                myChart4.setOption({
                    backgroundColor: '#fff',
                    title: {
                        text: 'POLAR AREA CHART',
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
                    color: ["#ac99d2", "#9e82d2", "#c9b9e6"],
                    legend: {
                        orient: 'vertical',
                        top: 25,
                        // 图表lefend的排版   horizontal  vertical
                        orient: 'horizontal',
                        // 'center' | 'left' | {number},
                        x: 'center',
                        // 'center' | 'bottom' | {number}
                        y: 'top',
                        data: ['Firefox', 'Chrome', 'Safari'],
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },

                    visualMap: {
                        show: false,
                        min: 80,
                        max: 600,
                        inRange: {
                            colorLightness: [0, 1]
                        }
                    },
                    series: [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius: '65%',
                            center: ['50%', '60%'],
                            data: [
                                {value: 333, name: 'Safari'},
                                {value: 222, name: 'Chrome'},
                                {value: 266, name: 'Firefox'},
                            ].sort(function (a, b) {
                                return a.value - b.value;
                            }),
                            roseType: 'radius',
                            label: {
                                normal: {
                                    textStyle: {
//		                        color: 'rgba(255, 255, 255, 0.3)'
                                    }
                                }
                            },
                            labelLine: {
                                normal: {
                                    lineStyle: {
//		                        color: 'rgba(255, 255, 255, 0.3)'
                                    },
                                    smooth: 0.2,
                                    length: 10,
                                    length2: 10
                                }
                            },
//		            itemStyle: {
//		                normal: {
//		                    color: '#c23531',
//		                    shadowBlur: 200,
//		                    shadowColor: 'rgba(0, 0, 0, 0.5)'
//		                }
//		            },
                            animationType: 'scale',
                            animationEasing: 'elasticOut',
                            animationDelay: function (idx) {
                                return Math.random() * 200;
                            }
                        }
                    ]
                })
            }
        }

    }
</script>

<style scoped>
    .aside-table02{
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 26px;
    }
    .aside-table02-left{
        width: 50%;
        height: 312px;
        padding: 15px;
        margin:15px;
        background-color: #fff;
        border-radius: 4px;
    }
    .aside-table02-cen{
        box-sizing: border-box;
        width: 25%;
        height: 312px;
        padding: 15px;
        margin:15px;
        background-color: #fff;
        border-radius: 4px;
    }
    .aside-table02-right{
        width: 25%;
        height: 312px;
        padding: 15px;
        margin:15px;
        background-color: #fff;
        border-radius: 4px;
    }
</style>