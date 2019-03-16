<template>
    <div class="aside-table01 aside-table02">
        <div id="main03" class="aside-table01-left" style="backgroundColor: #fff;">
        </div>
        <div id="main04" class="aside-table01-right" style="backgroundColor: #fff;">
        </div>
    </div>
</template>

<script>
    export default {
        name: "echartTwo",

        mounted(){
            this.etree();
            this.efour();
        },
        methods: {
            etree() {
                // 基于准备好的dom，初始化echarts实例
                let myChart3 = this.$echarts.init(document.getElementById('main03'))
                // 绘制图表
                myChart3.setOption({
                    backgroundColor: "#fff",
                    color: ['#ffe0e6', '#d6ecfb', '#fff5dd', '#dbf3f3', '#ebe0ff', '#ffecd9', '#ffce56',],
                    title: {
                        text: "BAR CHART",
                        textStyle: {
                            // 标题颜色
                            color: '#000',
                            fontWeight: 100,
                            fontSize: 14,
                        }
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                            axisTick: {
                                alignWithLabel: true
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    series: [
                        {
                            name: '直接访问',
                            type: 'bar',
                            barWidth: '60%',
                            data: [10, 52, 200, 334, 390, 330, 220],
                            barWidth: 30,
                        }
                    ]
                })
            },
            efour() {
                // 基于准备好的dom，初始化echarts实例
                let myChart4 = this.$echarts.init(document.getElementById('main04'))
                // 绘制图表
                myChart4.setOption({
                    backgroundColor:"#fff",
                    tooltip: {
                        trigger: 'DOUGHNUT CHART',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    //  饼状图的颜色
                    color:['#36a2eb', '#ff6384', '#ffce56', '#e5e5e5'],
                    legend: {
                        //  水平排列  horizontal   竖直排列 vertical
                        orient: 'horizontal',
                        x: 'center',
                        y: 'top',
                        data:['Firefox','Chrome','opera','explorer',]
                    },
                    series: [
                        {
                            name:'访问',
                            type:'pie',
                            avoidLabelOverlap: false,
                            // 饼图的中心(圆心)坐标，数组的第一项是横坐标，第二项是纵坐标。[ default: ['50%', '50%'] ]
                            center: ["50%","50%"],
                            // 饼图的半径，数组的第一项是内半径，第二项是外半径。[ default: [0, '75%'] ]
                            radius: ["70%","55%"],
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
                            data:[
                                {value:70, name:'Firefox'},
                                {value:15, name:'Chrome'},
                                {value:10, name:'opera'},
                                {value:0, name:'explorer'},
                            ]
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