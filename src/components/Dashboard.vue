<template>
    <Sidebar />
    <!-- START PAGE-CONTAINER -->
    <div class="page-container ">
        <Header />
        <!-- START PAGE CONTENT WRAPPER -->
        <div class="page-content-wrapper ">
            <!-- START PAGE CONTENT -->
            <div class="content ">
                <!-- START JUMBOTRON -->
                <div class="jumbotron m-b-0" data-pages="parallax">
                    <div class="container-fluid container-fixed-lg sm-p-l-0 sm-p-r-0">
                        <div class="inner" style="transform: translateY(0px); opacity: 1;">
                            <!-- START BREADCRUMB -->
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active">Dashboard</li>
                            </ol>
                            <!-- END BREADCRUMB -->
                            <h2>Dashboard</h2>
                            <p>Get a detailed overview of your company’s score history, key performance indicators, category-wise breakdown and much more in a single dashboard.</p>
                        </div>
                    </div>
                </div>
                <!-- END JUMBOTRON -->
                <!-- START CONTAINER FLUID -->
                <div class=" container-fluid p-t-20 border-top container-fixed-lg">
                    <div class="dashboard_area">
                        <div class="row">

                            <!-- Grade Info -->
                            <div class="col-lg-5 d-flex align-items-stretch">
                                <div class="card gradebox">
                                    <div class="card-body">
                                        <div class="media">
                                            <img class="mr-3" :src="grade_image" alt="Generic placeholder image">
                                            <div class="media-body">
                                                <h5 class="mt-0">{{ grade }}</h5>
                                                {{ grade_description }}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-footer m-t-20">
                                        <div class="card-title">{{ scan_timestamp }}</div>
                                    </div>
                                </div>
                            </div>
                            <!-- ./Grade Info -->

                            <!-- Company Info -->
                            <div class="col-lg-7 d-flex align-items-stretch">
                                <div class="card tableborless">
                                    <div class="card-header">
                                        <div class="card-title">Company Info :</div>
                                    </div>
                                    <div class="table-responsive card-body">
                                        <table class="table table-borderless">
                                            <tbody>
                                                <tr>
                                                    <th scope="row">domain name</th>
                                                    <td>{{ domain_name }}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Industry Type</th>
                                                    <td>{{ industry_type }}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Subscription</th>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td colspan="2" align="right" class="p-0"> <small>Followed by : {{ vendor_count }} Others</small></td>
                                                </tr>
                                            </tbody>
                                       </table>
                                    </div>
                                </div>
                            </div>
                            <!-- ./Company Info -->

                            <!-- Score History -->
                            <div class="col-lg-7">
                                <div class="card tableborless">
                                    <div class="card-header">
                                        <div class="card-title">Score History</div>
                                    </div>
                                    <div class="card-body">
                                        <div id="scorechart"></div>
                                    </div>
                                </div>
                            </div>
                            <!-- ./Score History -->

                            <!-- Key Highlights & Grade Impact -->
                            <div class="col-lg-5">
                                <div class="card tableborless">
                                    <div class="card-header">
                                        <div class="card-title">Key Highlights</div>
                                    </div>
                                    <div class="table-responsive card-body">
                                        <table class="table table-borderless">
                                            <tbody>
                                                <tr v-for="element in key_highlights" :key="element.id">
                                                    <td class="v-align-middle sorting_1">{{ element.count }}</td>
                                                    <td class="v-align-middle">{{ element.highlight }}</td>                                      
                                                </tr>
                                            </tbody>
                                       </table>
                                    </div>
                                </div>
                                <div class="card tableborless">
                                    <div class="card-header">
                                        <div class="card-title">Grade Impact </div>
                                        <p>Risk vectors with highest Rating impact</p>
                                    </div>
                                    <div class="table-responsive card-body">
                                        <table class="table table-borderless">
                                            <tbody>
                                                <tr>
                                                    <td class="v-align-middle sorting_1">Info Leak</td>
                                                    <td class="v-align-middle">
                                                        <img :src="infoleak_image" width="30" alt="">
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="v-align-middle sorting_1">SSL</td>
                                                    <td class="v-align-middle">
                                                        <img :src="ssl_image" width="30" alt="">
                                                    </td>
                                                </tr>
                                            </tbody>
                                       </table>
                                    </div>
                                </div>
                            </div>
                            <!-- ./Key Highlights & Grade Impact -->

                            <!-- Standard Enterprise Pointers & Score Matrix Chart -->
                            <div class="col-lg-7">
                                <div class="card tableborless">
                                    <div class="card-header">
                                        <div class="card-title">Standard Enterprise Pointers</div>
                                    </div>
                                    <div class="table-responsive card-body">
                                        <table class="table table-borderless hightbox">
                                            <tbody>
                                                <tr v-for="pointer in standard_enterprise_pointers" :key="pointer.id">
                                                    <td class="v-align-middle sorting_1">{{ pointer.pointer }}</td>
                                                    <td class="v-align-middle">{{ pointer.count }}</td>
                                                </tr>
                                            </tbody>
                                       </table>
                                    </div>
                                </div>

                                <div class="card tableborless">
                                    <div class="card-header">
                                        <div class="card-title">Score Matrix</div>
                                    </div>
                                    <div class="card-body">
                                        <figure class="highmatcharts-figure">
                                            <div id="scoreMatrixChart"></div>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <!-- ./Standard Enterprise Pointers & Score Matrix Chart -->

                            <!-- Severity Breakdown & Category Breakdown -->
                            <div class="col-lg-5">
                                <div class="card tableborless">
                                    <div class="card-header">
                                        <div class="card-title">Severity Breakdown</div>
                                    </div>
                                    <div class="card-body">
                                        <figure class="highcharts-figure">
                                            <div id="piechartone"></div>
                                        </figure>
                                    </div>
                                </div>

                                <div class="card tableborless">
                                    <div class="card-header">
                                        <div class="card-title">Category Breakdown
                                    </div>
                                </div>
                                    <div class="card-body">
                                        <figure class="highcharts-figure">
                                            <div id="piechart3d"></div>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <!-- ./Severity Breakdown & Category Breakdown -->

                        </div>
                    </div>
                    
                </div>
                <!-- END CONTAINER FLUID -->
            </div>
            <!-- END PAGE CONTENT -->
            <!-- START COPYRIGHT -->
            <!-- START CONTAINER FLUID -->
            <!-- START CONTAINER FLUID -->
            <div class=" container-fluid  container-fixed-lg footer">
                <div class="copyright sm-text-center">
                    <p class="small-text no-margin pull-left sm-pull-reset">
                        Copyright © 2021 SecurityRatings.com. All rights reserved.
                    </p>                   
                    <div class="clearfix"></div>
                </div>
            </div>
            <!-- END COPYRIGHT -->
        </div>
        <!-- END PAGE CONTENT WRAPPER -->
    </div>
    <!-- END PAGE CONTAINER -->
</template>

<script>
import axios from 'axios'
import Sidebar from '@/sub-components/Sidebar.vue'
import Header from '@/sub-components/Header.vue'

export default {
    components: {
        Sidebar,
        Header
    },
    computed: {
        isLoggedIn: function() { return this.$store.getters.isLoggedIn }
    },
    data() {
        return {
            username: '',
            domain_name: '',
            industry_type: 'Private Sector',
            vendor_count: 0,
            key_highlights: [],
            standard_enterprise_pointers: [],
            severity_breakdown: [],
            grade: '',
            grade_description: '',
            grade_image: '',
            scan_timestamp: '',
            infoleak_image: '',
            ssl_image: '',
        }
    },
    beforeMount() {
        document.title = "Dashboard"
        document.getElementById('app').setAttribute("class", "")
        document.body.classList.add("fixed-header")
    },
    mounted() {
        this.getUserData()
        this.getGradeData()
        this.getKeyHighlightsData()
        this.getSeverityBreakDownData()
        this.getCategoryBreakDownData()
        this.getStandardEnterprisePointers()
        this.createScoreHistoryChart()
        this.createScoreMatrixChart()
    },
    methods: {
        getUserData(){
            axios({
                method: 'POST',
                url: 'http://localhost:8000/api/srm/get_user_data',
                data: {
                    "id": localStorage.getItem('id')
                }
            })
            .then(response => {
                var res = response.data['data']
                this.username = res.first_name + " " + res.last_name
                this.domain_name = 'www.'+res.domain_name
                this.vendor_count = res.vendor_count
            })
            .catch(error => {
                console.log(error)
                this.logout()
            })
        },
        getGradeData() {
            axios({
                method: 'POST',
                url: 'http://localhost:8000/api/srm/grade_data',
                data: {
                    "user_id": localStorage.getItem('id')
                }
            })
            .then(response => {
                var res = response.data
                this.grade = res.grade
                this.grade_description = res.description
                this.grade_image = res.image
                this.scan_timestamp = res.timestamp
                this.infoleak_image = res.infoleak_image
                this.ssl_image = res.ssl_image
            })
            .catch(error => {
                console.log(error)
            })
        },
        getKeyHighlightsData(){
            axios({
                method: 'POST',
                url: 'http://localhost:8000/api/srm/keyhighlights_data',
                data: {
                    "user_id": localStorage.getItem('id')
                }
            })
            .then(response => {
                var res = response.data
                // console.log(res)
                this.key_highlights = res
            })
            .catch(error => {
                console.log(error)
            })
        },
        getScoreMatrixData() {
            axios({
                method: 'POST',
                url: 'http://localhost:8000/api/srm/score_matrix_data',
                data: {
                    "user_id": localStorage.getItem('id')
                }
            })
            .then(response => {
                var res = response.data
                this.grade = res.grade
                this.grade_description = res.description
                this.grade_image = res.image
                this.infoleak_image = res.infoleak_image
                this.ssl_image = res.ssl_image
            })
            .catch(error => {
                console.log(error)
            })
        },
        getSeverityBreakDownData() {
            axios({
                method: 'POST',
                url: 'http://localhost:8000/api/srm/severity_breakdown',
                data: {
                    "user_id": localStorage.getItem('id')
                }
            })
            .then(response => {
                var res = response.data
                // console.log(res)
                if(res != null){
                    this.createSeverityBreakDownChart(res)
                }
            })
            .catch(error => {
                console.log(error)
            })
        },
        getCategoryBreakDownData() {
            axios({
                method: 'POST',
                url: 'http://localhost:8000/api/srm/category_breakdown',
                data: {
                    "user_id": localStorage.getItem('id')
                }
            })
            .then(response => {
                var res = response.data
                // console.log(categoryData)
                if(res != null){
                    var categoryData = []
                    res.forEach(element => {
                        categoryData.push([
                            element.category, element.count
                        ])
                    })
                    this.createCategoryBreakDownChart(categoryData)
                }
            })
            .catch(error => {
                console.log(error)
            })
        },
        getStandardEnterprisePointers(){
            axios({
                method: 'POST',
                url: 'http://localhost:8000/api/srm/standard_enterprise_pointers',
                data: {
                    "user_id": localStorage.getItem('id')
                }
            })
            .then(response => {
                var res = response.data
                console.log(res)
                this.standard_enterprise_pointers = res
            })
            .catch(error => {
                console.log(error)
            })
        },
        createScoreHistoryChart() {
            var elevationData = [
                [0.0, 225],
                [0.1, 226],
                [0.2, 228],
                [0.3, 228],
                [0.4, 229],
                [0.5, 229],
                [0.6, 230],
                [0.7, 234],
                [0.8, 235],
                [0.9, 236],
                [1.0, 235],
                [1.1, 232],
                [1.2, 228],
                [1.3, 223],
                [1.4, 218],
                [1.5, 214],
                [1.6, 207],
                [1.7, 202],
                [1.8, 198],
                [1.9, 196],
                [2.0, 197],
                [2.1, 200],
                [2.2, 205],
                [2.3, 206],
                [2.4, 210],
                [2.5, 210],
                [2.6, 210],
                [2.7, 209],
                [2.8, 208],
                [2.9, 207],
                [3.0, 209],
                [3.1, 208],
                [3.2, 207],
                [3.3, 207],
                [3.4, 206],
                [3.5, 206],
                [3.6, 205],
                [3.7, 201],
                [3.8, 195],
                [3.9, 191],
                [4.0, 191],
                [4.1, 195],
                [4.2, 199],
                [4.3, 203],
                [4.4, 208],
                [4.5, 208],
                [4.6, 208],
                [4.7, 208],
                [4.8, 209],
                [4.9, 207],
                [5.0, 207],
                [5.1, 208],
                [5.2, 209],
                [5.3, 208],
                [5.4, 210],
                [5.5, 209],
                [5.6, 209],
                [5.7, 206],
                [5.8, 207],
                [5.9, 209],
                [6.0, 211],
                [6.1, 206],
                [6.2, 201],
                [6.3, 199],
                [6.4, 200],
                [6.5, 202],
                [6.6, 203],
                [6.7, 202],
                [6.8, 204],
                [6.9, 206],
                [7.0, 208],
                [7.1, 205],
                [7.2, 202],
                [7.3, 198],
                [7.4, 198],
                [7.5, 198],
                [7.6, 198],
                [7.7, 198],
                [7.8, 199],
                [7.9, 197],
                [8.0, 194]
            ];

            // Now create the chart
            Highcharts.chart('scorechart', {

                chart: {
                    type: 'area',
                    zoomType: 'x',
                    panning: true,
                    panKey: 'shift',
                    scrollablePlotArea: {
                        minWidth: 600
                    }
                },
                caption: {
                    text: ''
                },
                title: {
                    text: ''
                },
                accessibility: {
                    description: '',
                    landmarkVerbosity: 'one'
                },
                lang: {
                    accessibility: {
                        screenReaderSection: {
                            annotations: {
                                descriptionNoPoints: ''
                            }
                        }
                    }
                },
                credits: {
                    enabled: false
                },
                annotations: [{
                    draggable: '',
                    labelOptions: {
                        backgroundColor: 'rgba(255,255,255,0.5)',
                        verticalAlign: 'top',
                        y: 15
                    },
                    labels: [{
                        point: {
                            xAxis: 0,
                            yAxis: 0,
                            x: 27.98,
                            y: 255
                        },
                        text: 'Arbois'
                    }, {
                        point: {
                            xAxis: 0,
                            yAxis: 0,
                            x: 45.5,
                            y: 611
                        },
                        text: 'Montrond'
                    }, {
                        point: {
                            xAxis: 0,
                            yAxis: 0,
                            x: 63,
                            y: 651
                        },
                        text: 'Mont-sur-Monnet'
                    }, {
                        point: {
                            xAxis: 0,
                            yAxis: 0,
                            x: 84,
                            y: 789
                        },
                        x: -10,
                        text: 'Bonlieu'
                    }, {
                        point: {
                            xAxis: 0,
                            yAxis: 0,
                            x: 129.5,
                            y: 382
                        },
                        text: 'Chassal'
                    }, {
                        point: {
                            xAxis: 0,
                            yAxis: 0,
                            x: 159,
                            y: 443
                        },
                        text: 'Saint-Claude'
                    }]
                }, {
                    draggable: '',
                    labels: [{
                        point: {
                            xAxis: 0,
                            yAxis: 0,
                            x: 101.44,
                            y: 1026
                        },
                        x: -30,
                        text: 'Col de la Joux'
                    }, {
                        point: {
                            xAxis: 0,
                            yAxis: 0,
                            x: 138.5,
                            y: 748
                        },
                        text: 'Côte de Viry'
                    }, {
                        point: {
                            xAxis: 0,
                            yAxis: 0,
                            x: 176.4,
                            y: 1202
                        },
                        text: 'Montée de la Combe <br>de Laisia Les Molunes'
                    }]
                }, {
                    draggable: '',
                    labelOptions: {
                        shape: 'connector',
                        align: 'right',
                        justify: false,
                        crop: true,
                        style: {
                            fontSize: '0.8em',
                            textOutline: '1px white'
                        }
                    },
                    labels: [{
                        point: {
                            xAxis: 0,
                            yAxis: 0,
                            x: 96.2,
                            y: 783
                        },
                        text: '6.1 km climb <br>4.6% on avg.'
                    }, {
                        point: {
                            xAxis: 0,
                            yAxis: 0,
                            x: 134.5,
                            y: 540
                        },
                        text: '7.6 km climb <br>5.2% on avg.'
                    }, {
                        point: {
                            xAxis: 0,
                            yAxis: 0,
                            x: 172.2,
                            y: 925
                        },
                        text: '11.7 km climb <br>6.4% on avg.'
                    }]
                }],
                xAxis: {
                    labels: {
                        format: '{value} km'
                    },
                    minRange: 5,
                    title: {
                        text: 'Distance'
                    },
                    accessibility: {
                        rangeDescription: 'Range: 0 to 187.8km.'
                    }
                },
                yAxis: {
                    startOnTick: true,
                    endOnTick: false,
                    maxPadding: 0.35,
                    
                    title: {
                        text: null
                    },
                    labels: {
                        format: '{value} m'
                    },
                    accessibility: {
                        description: 'Elevation',
                        rangeDescription: 'Range: 0 to 1,553 meters'
                    }
                },
                tooltip: {
                    headerFormat: 'Distance: {point.x:.1f} km<br>',
                    pointFormat: '{point.y} m a. s. l.',
                    shared: true
                },
                legend: {
                    enabled: false
                },
                series: [{
                    data: elevationData,
                    lineColor: Highcharts.getOptions().colors[1],
                    // color: Highcharts.getOptions().colors[2],
                    fillOpacity: 0.5,
                    color:"rgb(125,191,160)",
                    name: 'Elevation',
                    marker: {
                        enabled: false
                    },
                    threshold: null
                }]
            });
        },
        createScoreMatrixChart() {
            function getPointCategoryName(point, dimension) {
                var series = point.series,
                    isY = dimension === 'y',
                    axis = series[isY ? 'yAxis' : 'xAxis'];
                return axis.categories[point[isY ? 'y' : 'x']];
            }

            Highcharts.chart('scoreMatrixChart', {
                chart: {
                    type: 'heatmap',
                    marginTop: 40,                    
                    plotBorderWidth: 1
                },
                title: {
                    text: ''
                },
                xAxis: {
                    categories: ['Network Security', 'Application security', 'DNS Health', 'Information Leak', 'IP reputation']
                },
                yAxis: {
                    categories: ['Critical', 'High', 'Medium', 'Low'],
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
                    maxColor: Highcharts.getOptions().colors[0],
                    
                },
                legend: {
                    align: 'right',
                    layout: 'vertical',
                    margin: 0,
                    verticalAlign: 'top',
                    y: 25,
                    symbolHeight: 280,
                    enabled:false,
                },
                tooltip: {
                    formatter: function () {
                        return '<b>' + getPointCategoryName(this.point, 'x') + '</b> sold <br><b>' +
                            this.point.value + '</b> items on <br><b>' + getPointCategoryName(this.point, 'y') + '</b>';
                    }
                },
                series: [{
                    name: 'Sales per employee',
                    borderWidth: 1,                    
                    data: [[0, 0, 10], [0, 1, 19], [0, 2, 8], [0, 3, 24], [1, 0, 92], [1, 1, 58], [1, 2, 78], [1, 3, 117],  [2, 0, 35], [2, 1, 15], [2, 2, 123], [2, 3, 64], [3, 0, 72], [3, 1, 132], [3, 2, 114], [3, 3, 19], [4, 0, 72], [4, 1, 132], [4, 2, 114], [4, 3, 19]],
                    dataLabels: {
                        enabled: true,
                        color: '#000000',                        
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
                }
            });
        },
        createSeverityBreakDownChart(response) {
            Highcharts.chart('piechartone', {
                chart: {
                    type: 'variablepie'
                },
                title: {
                    text: ''
                },
                tooltip: {
                    headerFormat: '',
                    pointFormat: '<b>{point.name}</b>:<b>{point.z}</b><br/>'
                },
                series: [{
                    minPointSize: 10,
                    innerSize: '20%',
                    
                    zMin: 0,
                    name: 'severity_breakdown',
                    data: [{
                        name: 'High',
                        y: response[0].High,
                        z: response[0].High,
                        color:"rgb(232,108,45)"
                    }, {
                        name: 'Medium',
                        y: response[1].Medium,
                        z: response[1].Medium,
                        color:"rgb(242,210,89)"
                    }, {
                        name: 'Critical',
                        y: response[2].Critical,
                        z: response[2].Critical,
                        color:"rgb(234,57,44)"
                    }, {
                        name: 'Low',
                        y: response[3].Low,
                        z: response[3].Low,
                        color:"rgb(125,191,160)"
                    }]
                }]
            });
        },
        createCategoryBreakDownChart(response) {
            Highcharts.setOptions({
                colors: ['rgb(242,210,89)', 'rgb(109,182,107)']
            });
            Highcharts.chart('piechart3d', {
                chart: {
                    type: 'pie',
                    options3d: {
                        enabled: true,
                        alpha: 45,
                        beta: 0,
                    },                    
                },
                title: {
                    text: ''
                },
                accessibility: {
                    point: {
                        valueSuffix: '%'
                    }
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        depth: 35,
                        dataLabels: {
                            enabled: true,
                            format: '{point.name}'
                        },
                    }
                },
                series: [{
                    type: 'pie',
                    name: 'Browser share',
                    data: response,
                }]
            });
        }
    }
}
</script>