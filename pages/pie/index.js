import * as echarts from '../../ec-canvas/echarts';

const app = getApp();

function initChart(canvas, width, height) {
    const chart = echarts.init(canvas, null, {
        width: width,
        height: height
    });
    canvas.setChart(chart);

    var option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            right: 40,
            bottom: 70
        },
        color: ["#D8D8D8", "#404B81"],
        series: [{
            name: '开关统计',
            type: 'pie',
            center: ["22%", "60%"],
            radius: ["35%", '50%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                    value: 335,
                    name: '已开灯数   ' + 100 + '个'
                },
                {
                    value: 310,
                    name: '未开灯数   ' + 100 + '个'
                },
            ]
        }]
    };

    chart.setOption(option);
    return chart;
}

function InitChart(canvas, width, height) {
    const chart = echarts.init(canvas, null, {
        width: width,
        height: height
    });
    canvas.setChart(chart);

    var option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            right: 40,
            bottom: 40
        },
        color: ["#47D0AF", "#FFDB5C", "#FBA087","#404B81"],
        series: [{
            name: '区域统计',
            type: 'pie',
            center: ["22%", "60%"],
            radius: ["35%", '50%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                    value: 335,
                    name: '阅览室      ' + 100 + '个'
                },
                {
                    value: 256,
                    name: '公共区域  ' + 100 + '个'
                },
                {
                    value: 280,
                    name: '图书室      ' + 100 + '个'
                },
                {
                    value: 134,
                    name: '厕所        ' + 100 + '个'
                }
            ]
        }]
    };

    chart.setOption(option);
    return chart;
}
Page({
    data: {
        ec: {

        },
        open_number: 2490,
        region_number: 690,
    },

    onReady() {},

    echartInit(e) {
        initChart(e.detail.canvas, e.detail.width, e.detail.height);
    },
    /**
     * 当前开灯区域统计图
     */
    EchartInit(e) {
        InitChart(e.detail.canvas, e.detail.width, e.detail.height);
    }
});