<template>
    <div class="aside-table01 aside-table03">
        <div id="main05" class="aside-table01-left" style="backgroundColor: #fff;">
        </div>
        <div id="main06" class="aside-table01-right" style="backgroundColor: #fff;">
        </div>
    </div>
</template>

<script>
    export default {
        name: "echartTree",
        mounted(){
            this.efive();
            this.esix();
        },
        methods: {
            efive() {
                // 基于准备好的dom，初始化echarts实例
                let myChart5 = this.$echarts.init(document.getElementById('main05'))
                // 绘制图表
                myChart5.setOption({
                    backgroundColor: "#fff",
                    title: {
                        text: 'PIE CHART',
                        top: 0,
                        left: 0,
                        textStyle: {
                            // 标题颜色
                            color: '#000',
                            fontWeight: 100,
                            fontSize: 14,
                        }
                    },
                    color: ["#ff6384", "#36a2eb", "#ffce56"],
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'horizontal',
                        left: 'center',
                        top: 20,
                        data: ['Firefox', 'Chrome', 'opera']
                    },
                    series: [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius: '55%',
                            center: ['50%', '60%'],
                            data: [
                                {value: 68, name: 'Firefox'},
                                {value: 10, name: 'Chrome'},
                                {value: 22, name: 'opera'},
                            ],
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                }
                            }
                        }
                    ]
                })
            },
            esix() {
                // 基于准备好的dom，初始化echarts实例
                let myChart6 = this.$echarts.init(document.getElementById('main06'))
                // 绘制图表
                myChart6.setOption({
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
                    color: ["#ff6384", "#4bc0c0", "#ffce56", "#e7e9ed", "#36a2eb"],
                    legend: {
                        orient: 'vertical',
                        top: 25,
                        // 图表lefend的排版   horizontal  vertical
                        orient: 'horizontal',
                        // 'center' | 'left' | {number},
                        x: 'center',
                        // 'center' | 'bottom' | {number}
                        y: 'top',
                        data: ['red', 'green', 'yellow', 'gray', 'blue'],
                    },
                    tooltip: {
                        trigger: 'item',
//		        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },

                    visualMap: {
                        show: false,
                        min: 0,
                        max: 50,
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
                                {value: 20, name: 'red'},
                                {value: 30, name: 'green'},
                                {value: 15, name: 'yellow'},
                                {value: 10, name: 'gray'},
                                {value: 25, name: 'blue'},
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
    /*aside-table01部分*/
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
    }</style>