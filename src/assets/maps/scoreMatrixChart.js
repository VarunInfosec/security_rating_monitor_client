const scoreMatrixChartOptions = computed(() => {
    return {
        series: [{
            name: 'Sales per employee',
            borderWidth: 1,
            data: [[0, 0, 10], [0, 1, 19], [0, 2, 8], [0, 3, 24], [1, 0, 92], [1, 1, 58], [1, 2, 78], [1, 3, 117],  [2, 0, 35], [2, 1, 15], [2, 2, 123], [2, 3, 64], [3, 0, 72], [3, 1, 132], [3, 2, 114], [3, 3, 19], [4, 0, 72], [4, 1, 132], [4, 2, 114], [4, 3, 19]],
            dataLabels: {
                enabled: true,
                color: '#000000'
            }
        }],
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    yAxis: {
                        labels: {
                            formatter: function () {
                                return this.value.charAt(0);
                            }
                        }
                    }
                }
            }]
        },
        chart: {
            type: 'heatmap',
            marginTop: 40,
            marginBottom: 80,
            
            plotBorderWidth: 1
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: ['Network Security', 'Application security', 'DNS Health', 'Information Leak', 'IP reputation']
        },
        yAxis: {
            categories: ['Critical', 'high', 'medium', 'low'],
            title: null,
            reversed: true
        },
        accessibility: {
            point: {
                descriptionFormatter: function (point) {
                    var ix = point.index + 1,
                        xName = getPointCategoryName(point, 'x'),
                        yName = getPointCategoryName(point, 'y'),
                        val = point.value;
                    return ix + '. ' + xName + ' sales ' + yName + ', ' + val + '.';
                }
            }
        },
        colorAxis: {
            min: 0,
            minColor: '#FFFFFF',
            maxColor: Highcharts.getOptions().colors[0]
        },
        legend: {
            align: 'right',
            layout: 'vertical',
            margin: 0,
            verticalAlign: 'top',
            y: 25,
            symbolHeight: 280
        },
        tooltip: {
            formatter: function () {
                return '<b>' + getPointCategoryName(this.point, 'x') + '</b> sold <br><b>' +
                    this.point.value + '</b> items on <br><b>' + getPointCategoryName(this.point, 'y') + '</b>';
            }
        },
    }
});

function getPointCategoryName(point, dimension) {
    var series = point.series,
        isY = dimension === 'y',
        axis = series[isY ? 'yAxis' : 'xAxis'];
    return axis.categories[point[isY ? 'y' : 'x']];
}