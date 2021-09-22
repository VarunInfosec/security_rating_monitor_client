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
                <div class="jumbotron" data-pages="parallax">
                    <div class=" container-fluid   container-fixed-lg sm-p-l-0 sm-p-r-0">
                        <div class="inner" style="transform: translateY(0px); opacity: 1;">
                            <!-- START BREADCRUMB -->
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <router-link to="dashboard">Dashboard</router-link>
                                </li>
                                <li class="breadcrumb-item active">Score highlights</li>
                            </ol>
                            <div class="p-2 mb-4 bg-white scorecard_headertop d-flex justify-content-between  align-items-center">

                                <div class="box1 d-flex justify-content-between  align-items-center">
                                    <img src="../assets/SecGradesPng/smallA.png" alt="logo">

                                    <!-- svg -->

                                    <!-- svg -->
                                    <!-- <span><strong>Security score</strong>98</span> -->
                                </div>
                                <div class="box2">
                                    <h3>Nnacell</h3>
                                    <ul class="list-inline">
                                        <li class="list-inline-item"><a href="#">Domain.com</a></li> |
                                        <li class="list-inline-item"><a href="#">Subscribe</a></li> |
                                        <!-- <li class="list-inline-item">What is a grade element?</li>|
                                        <li class="list-inline-item">And no finding element?</li> -->
                                    </ul>
                                </div>
                                <div class="box3">
                                    <div class="d-block">
                                        <button class="btn btn-primary" data-target="#invite_teammate" data-toggle="modal" href="#invite_teammate">Invite Teammate</button>
                                        <button class="btn btn-success">Generate Report</button>
                                    </div>
                                </div>
                            </div>

                            <!-- END BREADCRUMB -->
                            <h2>Score highlights</h2>
                            <p>This shows a detailed breakdown of your average score including all the issues and findings that were detected.</p>
                        </div>
                    </div>
                </div>
                <!-- END JUMBOTRON -->
                <!-- START CONTAINER FLUID -->
                <div class=" container-fluid container-fixed-lg">
                    <div class="Scorecard_area">
                        <div class="collapse-group">
                            <div class="controls">
                                <button class="btn add btn-primary open-button mr-3" type="button">
                                    Expand all
                                </button>
                                <button class="btn add btn-primary close-button opacity" type="button">
                                    Collapse all
                                </button>
                                <button class="btn btn-primary issues" type="button" style="display: none;">
                                    Show only detected issues
                                </button>
                            </div>

                            <div class="card-group horizontal" role="tablist" aria-multiselectable="true">
                                <div class="card card-default m-b-0">
                                    <div class="card-header " role="tab" id="headingOne">
                                        <div class="card-title">
                                            <a data-toggle="collapse" class="collapsed" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                <img src="../assets/SecGradesPng/smallA.png" alt="logo">

                                                <!-- svg element -->

                                                <!-- svg end -->
                                                Network Security
                                                <small>Detecting insecure network settings</small>
                                                <strong>100</strong>

                                                <div class="findings pull-right d-flex justify-content-between align-items-center">
                                                    <p>No findings</p>
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item">
                                                            <img src="../assets/img/securityicon1.png" alt="">
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <img src="../assets/img/securityicon2.png" alt="">
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <img src="../assets/img/securityicon3.png" alt="">
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <img src="../assets/img/securityicon4.png" alt="">
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <img src="../assets/img/securityicon5.png" alt="">
                                                        </li>
                                                    </ul>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div id="collapseOne" class="collapse" role="tabcard" aria-labelledby="headingOne">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-lg-9">
                                                    <div class="row">
                                                        <div class="col-lg-4 col-md-4 col-sm-6">
                                                            <div class="card cardboox">
                                                                <div class="card-header bg-danger">
                                                                    <span>
                                                                        <img src="../assets/img/securityicon1.png" alt="">
                                                                    </span>
                                                                    Critical
                                                                </div>
                                                                <p class="allissues">No <span>high</span> risk issues detected for this factor</p>
                                                                <ul class="list-group list-group-flush moretext">
                                                                    <li class="list-group-item">MongoDB Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">SSL/TLS Service Supports Weak Protocol <span>0</span></li>
                                                                    <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">MongoDB Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">SSL/TLS Service Supports Weak Protocol <span>0</span></li>
                                                                    <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4 col-md-4 col-sm-6">
                                                            <div class="card cardboox">
                                                                <div class="card-header bg-success">
                                                                    <span><img src="../assets/img/securityicon2.png" alt=""></span>
                                                                    High
                                                                </div>
                                                                <p class="allissues">No <span>high</span> risk issues detected for this factor</p>
                                                                <ul class="list-group list-group-flush moretext">
                                                                    <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">MongoDB Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">SSL/TLS Service Supports Weak Protocol <span>0</span></li>
                                                                    <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">MongoDB Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">SSL/TLS Service Supports Weak Protocol <span>0</span></li>
                                                                    <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4 col-md-4 col-sm-6">
                                                            <div class="card cardboox">
                                                                <div class="card-header bg-info">
                                                                    <span><img src="../assets/img/securityicon3.png" alt=""></span>
                                                                    Medium
                                                                </div>
                                                                <p class="allissues">No <span>high</span> risk issues detected for this factor</p>
                                                                <ul class="list-group list-group-flush moretext">
                                                                    <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">MongoDB Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">SSL/TLS Service Supports Weak Protocol <span>0</span></li>
                                                                    <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">MongoDB Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">SSL/TLS Service Supports Weak Protocol <span>0</span></li>
                                                                    <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">MongoDB Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">SSL/TLS Service Supports Weak Protocol <span>0</span></li>
                                                                    <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-3">
                                                    <div class="Scorecard_rightbox">
                                                        <div class="card cardboox">
                                                            <div class="card-header border p-2">
                                                                <span><img src="../assets/img/securityicon4.png" alt=""></span> Positive
                                                            </div>
                                                            <p class="allissues">No <span>high</span> risk issues detected for this factor</p>
                                                            <ul class="list-group list-group-flush moretext">
                                                                <li class="list-group-item">MongoDB Service Observed <span>0</span></li>
                                                                <li class="list-group-item">SSL/TLS Service Supports Weak Protocol <span>0</span></li>
                                                                <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                <li class="list-group-item">MongoDB Service Observed <span>0</span></li>
                                                                <li class="list-group-item">SSL/TLS Service Supports Weak Protocol <span>0</span></li>
                                                                <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                            </ul>
                                                        </div>


                                                        <div class="card cardboox mt-4">
                                                            <div class="card-header border p-2">
                                                                <span><img src="../assets/img/securityicon5.png" alt=""></span> Low
                                                            </div>
                                                            <p class="allissues">No <span>high</span> risk issues detected for this factor</p>
                                                            <ul class="list-group list-group-flush moretext">
                                                                <li class="list-group-item">MongoDB Service Observed <span>0</span></li>
                                                                <li class="list-group-item">SSL/TLS Service Supports Weak Protocol <span>0</span></li>
                                                                <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                <li class="list-group-item">MongoDB Service Observed <span>0</span></li>
                                                                <li class="list-group-item">SSL/TLS Service Supports Weak Protocol <span>0</span></li>
                                                                <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                <li class="list-group-item">MongoDB Service Observed <span>0</span></li>
                                                                <li class="list-group-item">SSL/TLS Service Supports Weak Protocol <span>0</span></li>
                                                                <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                <li class="list-group-item">MongoDB Service Observed <span>0</span></li>
                                                                <li class="list-group-item">SSL/TLS Service Supports Weak Protocol <span>0</span></li>
                                                                <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="card card-default m-b-0">
                                    <div class="card-header " role="tab" id="headingTwo">
                                        <div class="card-title">
                                            <a class="collapsed" data-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                <img src="../assets/SecGradesPng/B2.png" alt="logo">
                                                DNS Health
                                                <small>Detecting DNS insecure configurations and vulnerabilities</small>
                                                <strong>90</strong>
                                                <div class="findings pull-right d-flex justify-content-between align-items-center">
                                                    <p>1 finding</p>
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item"><img src="../assets/img/securityicon1.png" alt=""></li>
                                                        <li class="list-inline-item active"><img src="../assets/img/securityicon2.png" alt=""></li>
                                                        <li class="list-inline-item"><img src="../assets/img/securityicon3.png" alt=""></li>
                                                        <li class="list-inline-item"><img src="../assets/img/securityicon4.png" alt=""></li>
                                                        <li class="list-inline-item"><img src="../assets/img/securityicon5.png" alt=""></li>
                                                    </ul>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div id="collapseTwo" class="collapse" role="tabcard" aria-labelledby="headingTwo">
                                        <div class="card-body">

                                            <div class="row">
                                                <div class="col-lg-9">
                                                    <div class="row">
                                                        <div class="col-lg-4 col-md-4 col-sm-6">
                                                            <div class="card cardboox">
                                                                <div class="card-header bg-danger">
                                                                    <span><img src="../assets/img/securityicon1.png" alt=""></span>high severity
                                                                </div>
                                                                <p class="allissues">No <span>high</span> risk issues detected for this factor</p>
                                                                <ul class="list-group list-group-flush moretext">
                                                                    <li class="list-group-item">MongoDB Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">SSL/TLS Service Supports Weak Protocol <span>0</span></li>
                                                                    <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">MongoDB Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">SSL/TLS Service Supports Weak Protocol <span>0</span></li>
                                                                    <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4 col-md-4 col-sm-6">
                                                            <div class="card cardboox">
                                                                <div class="card-header bg-success">
                                                                    <span><img src="../assets/img/securityicon2.png" alt=""></span>
                                                                    medium severity
                                                                </div>
                                                                <p class="allissues">No <span>high</span> risk issues detected for this factor</p>
                                                                <ul class="list-group list-group-flush moretext">
                                                                    <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">MongoDB Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">SSL/TLS Service Supports Weak Protocol <span>0</span></li>
                                                                    <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">MongoDB Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">SSL/TLS Service Supports Weak Protocol <span>0</span></li>
                                                                    <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4 col-md-4 col-sm-6">
                                                            <div class="card cardboox">
                                                                <div class="card-header bg-info">
                                                                    <span><img src="../assets/img/securityicon3.png" alt=""></span>
                                                                    low severity
                                                                </div>
                                                                <p class="allissues">No <span>high</span> risk issues detected for this factor</p>
                                                                <ul class="list-group list-group-flush moretext">
                                                                    <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">MongoDB Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">SSL/TLS Service Supports Weak Protocol <span>0</span></li>
                                                                    <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">MongoDB Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">SSL/TLS Service Supports Weak Protocol <span>0</span></li>
                                                                    <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">MongoDB Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">SSL/TLS Service Supports Weak Protocol <span>0</span></li>
                                                                    <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-3">
                                                    <div class="Scorecard_rightbox">
                                                        <div class="card cardboox">
                                                            <div class="card-header border p-2">
                                                                <span><img src="../assets/img/securityicon4.png" alt=""></span> positive signals
                                                            </div>
                                                            <p class="allissues">No <span>high</span> risk issues detected for this factor</p>
                                                            <ul class="list-group list-group-flush moretext">
                                                                <li class="list-group-item">MongoDB Service Observed <span>0</span></li>
                                                                <li class="list-group-item">SSL/TLS Service Supports Weak Protocol <span>0</span></li>
                                                                <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                <li class="list-group-item">MongoDB Service Observed <span>0</span></li>
                                                                <li class="list-group-item">SSL/TLS Service Supports Weak Protocol <span>0</span></li>
                                                                <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                            </ul>
                                                        </div>


                                                        <div class="card cardboox mt-4">
                                                            <div class="card-header border p-2">
                                                                <span><img src="../assets/img/securityicon5.png" alt=""></span> informational
                                                            </div>
                                                            <p class="allissues">No <span>high</span> risk issues detected for this factor</p>
                                                            <ul class="list-group list-group-flush moretext">
                                                                <li class="list-group-item">MongoDB Service Observed <span>0</span></li>
                                                                <li class="list-group-item">SSL/TLS Service Supports Weak Protocol <span>0</span></li>
                                                                <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                <li class="list-group-item">MongoDB Service Observed <span>0</span></li>
                                                                <li class="list-group-item">SSL/TLS Service Supports Weak Protocol <span>0</span></li>
                                                                <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                <li class="list-group-item">MongoDB Service Observed <span>0</span></li>
                                                                <li class="list-group-item">SSL/TLS Service Supports Weak Protocol <span>0</span></li>
                                                                <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                <li class="list-group-item">MongoDB Service Observed <span>0</span></li>
                                                                <li class="list-group-item">SSL/TLS Service Supports Weak Protocol <span>0</span></li>
                                                                <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="card card-default m-b-0">
                                    <div class="card-header " role="tab" id="headingThree">
                                        <div class="card-title">
                                            <a class="collapsed" data-toggle="collapse" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                <img src="../assets/SecGradesPng/smallC.png" alt="logo">
                                                Patching Cadence
                                                <small>Out of date company ../assets which may contain vulnerabilities or risks</small>
                                                <strong>80</strong>

                                                <div class="findings pull-right d-flex justify-content-between align-items-center">
                                                    <p>10 Findings</p>
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item"><img src="../assets/img/securityicon1.png" alt=""></li>
                                                        <li class="list-inline-item active"><img src="../assets/img/securityicon2.png" alt=""></li>
                                                        <li class="list-inline-item active"><img src="../assets/img/securityicon3.png" alt=""></li>
                                                        <li class="list-inline-item"><img src="../assets/img/securityicon4.png" alt=""></li>
                                                        <li class="list-inline-item active"><img src="../assets/img/securityicon5.png" alt=""></li>
                                                    </ul>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div id="collapseThree" class="collapse" role="tabcard" aria-labelledby="headingThree">
                                        <div class="card-body">

                                            <div class="row">
                                                <div class="col-lg-9">
                                                    <div class="row">
                                                        <div class="col-lg-4 col-md-4 col-sm-6">
                                                            <div class="card cardboox">
                                                                <div class="card-header bg-danger">
                                                                    <span><img src="../assets/img/securityicon1.png" alt=""></span>high severity
                                                                </div>
                                                                <p class="allissues">No <span>high</span> risk issues detected for this factor</p>
                                                                <ul class="list-group list-group-flush moretext">
                                                                    <li class="list-group-item">MongoDB Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">SSL/TLS Service Supports Weak Protocol <span>0</span></li>
                                                                    <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">MongoDB Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">SSL/TLS Service Supports Weak Protocol <span>0</span></li>
                                                                    <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4 col-md-4 col-sm-6">
                                                            <div class="card cardboox">
                                                                <div class="card-header bg-success">
                                                                    <span><img src="../assets/img/securityicon2.png" alt=""></span>
                                                                    medium severity
                                                                </div>
                                                                <p class="allissues">No <span>high</span> risk issues detected for this factor</p>
                                                                <ul class="list-group list-group-flush moretext">
                                                                    <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">MongoDB Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">SSL/TLS Service Supports Weak Protocol <span>0</span></li>
                                                                    <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">MongoDB Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">SSL/TLS Service Supports Weak Protocol <span>0</span></li>
                                                                    <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4 col-md-4 col-sm-6">
                                                            <div class="card cardboox">
                                                                <div class="card-header bg-info">
                                                                    <span><img src="../assets/img/securityicon3.png" alt=""></span>
                                                                    low severity
                                                                </div>
                                                                <p class="allissues">No <span>high</span> risk issues detected for this factor</p>
                                                                <ul class="list-group list-group-flush moretext">
                                                                    <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">MongoDB Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">SSL/TLS Service Supports Weak Protocol <span>0</span></li>
                                                                    <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">MongoDB Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">SSL/TLS Service Supports Weak Protocol <span>0</span></li>
                                                                    <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">MongoDB Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">SSL/TLS Service Supports Weak Protocol <span>0</span></li>
                                                                    <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-3">
                                                    <div class="Scorecard_rightbox">
                                                        <div class="card cardboox">
                                                            <div class="card-header border p-2">
                                                                <span><img src="../assets/img/securityicon4.png" alt=""></span> positive signals
                                                            </div>
                                                            <p class="allissues">No <span>high</span> risk issues detected for this factor</p>
                                                            <ul class="list-group list-group-flush moretext">
                                                                <li class="list-group-item">MongoDB Service Observed <span>0</span></li>
                                                                <li class="list-group-item">SSL/TLS Service Supports Weak Protocol <span>0</span></li>
                                                                <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                <li class="list-group-item">MongoDB Service Observed <span>0</span></li>
                                                                <li class="list-group-item">SSL/TLS Service Supports Weak Protocol <span>0</span></li>
                                                                <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                            </ul>
                                                        </div>


                                                        <div class="card cardboox mt-4">
                                                            <div class="card-header border p-2">
                                                                <span><img src="../assets/img/securityicon5.png" alt=""></span> informational
                                                            </div>
                                                            <p class="allissues">No <span>high</span> risk issues detected for this factor</p>
                                                            <ul class="list-group list-group-flush moretext">
                                                                <li class="list-group-item">MongoDB Service Observed <span>0</span></li>
                                                                <li class="list-group-item">SSL/TLS Service Supports Weak Protocol <span>0</span></li>
                                                                <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                <li class="list-group-item">MongoDB Service Observed <span>0</span></li>
                                                                <li class="list-group-item">SSL/TLS Service Supports Weak Protocol <span>0</span></li>
                                                                <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                <li class="list-group-item">MongoDB Service Observed <span>0</span></li>
                                                                <li class="list-group-item">SSL/TLS Service Supports Weak Protocol <span>0</span></li>
                                                                <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                <li class="list-group-item">MongoDB Service Observed <span>0</span></li>
                                                                <li class="list-group-item">SSL/TLS Service Supports Weak Protocol <span>0</span></li>
                                                                <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="card card-default m-b-0">
                                    <div class="card-header " role="tab" id="headingfore">
                                        <div class="card-title">
                                            <a class="collapsed" data-toggle="collapse" href="#collapsefore" aria-expanded="false" aria-controls="collapsefore">
                                                <img src="../assets/SecGradesPng/smallD.png" alt="logo">
                                                Endpoint Security
                                                <small>Detecting insecure network settings</small>
                                                <strong>100</strong>

                                                <div class="findings pull-right d-flex justify-content-between align-items-center">
                                                    <p>No finding</p>
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item"><img src="../assets/img/securityicon1.png" alt=""></li>
                                                        <li class="list-inline-item "><img src="../assets/img/securityicon2.png" alt=""></li>
                                                        <li class="list-inline-item "><img src="../assets/img/securityicon3.png" alt=""></li>
                                                        <li class="list-inline-item"><img src="../assets/img/securityicon4.png" alt=""></li>
                                                        <li class="list-inline-item "><img src="../assets/img/securityicon5.png" alt=""></li>
                                                    </ul>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div id="collapsefore" class="collapse" role="tabcard" aria-labelledby="headingfore">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-lg-9">
                                                    <div class="row">
                                                        <div class="col-lg-4 col-md-4 col-sm-6">
                                                            <div class="card cardboox">
                                                                <div class="card-header bg-danger">
                                                                    <span><img src="../assets/img/securityicon1.png" alt=""></span>high severity
                                                                </div>
                                                                <p class="allissues">No <span>high</span> risk issues detected for this factor</p>
                                                                <ul class="list-group list-group-flush moretext">
                                                                    <li class="list-group-item">MongoDB Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">SSL/TLS Service Supports Weak Protocol <span>0</span></li>
                                                                    <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">MongoDB Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">SSL/TLS Service Supports Weak Protocol <span>0</span></li>
                                                                    <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4 col-md-4 col-sm-6">
                                                            <div class="card cardboox">
                                                                <div class="card-header bg-success">
                                                                    <span><img src="../assets/img/securityicon2.png" alt=""></span>
                                                                    medium severity
                                                                </div>
                                                                <p class="allissues">No <span>high</span> risk issues detected for this factor</p>
                                                                <ul class="list-group list-group-flush moretext">
                                                                    <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">MongoDB Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">SSL/TLS Service Supports Weak Protocol <span>0</span></li>
                                                                    <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">MongoDB Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">SSL/TLS Service Supports Weak Protocol <span>0</span></li>
                                                                    <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4 col-md-4 col-sm-6">
                                                            <div class="card cardboox">
                                                                <div class="card-header bg-info">
                                                                    <span><img src="../assets/img/securityicon3.png" alt=""></span>
                                                                    low severity
                                                                </div>
                                                                <p class="allissues">No <span>high</span> risk issues detected for this factor</p>
                                                                <ul class="list-group list-group-flush moretext">
                                                                    <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">MongoDB Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">SSL/TLS Service Supports Weak Protocol <span>0</span></li>
                                                                    <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">MongoDB Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">SSL/TLS Service Supports Weak Protocol <span>0</span></li>
                                                                    <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">MongoDB Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">SSL/TLS Service Supports Weak Protocol <span>0</span></li>
                                                                    <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-3">
                                                    <div class="Scorecard_rightbox">
                                                        <div class="card cardboox">
                                                            <div class="card-header border p-2">
                                                                <span><img src="../assets/img/securityicon4.png" alt=""></span> positive signals
                                                            </div>
                                                            <p class="allissues">No <span>high</span> risk issues detected for this factor</p>
                                                            <ul class="list-group list-group-flush moretext">
                                                                <li class="list-group-item">MongoDB Service Observed <span>0</span></li>
                                                                <li class="list-group-item">SSL/TLS Service Supports Weak Protocol <span>0</span></li>
                                                                <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                <li class="list-group-item">MongoDB Service Observed <span>0</span></li>
                                                                <li class="list-group-item">SSL/TLS Service Supports Weak Protocol <span>0</span></li>
                                                                <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                            </ul>
                                                        </div>

                                                        <div class="card cardboox mt-4">
                                                            <div class="card-header border p-2">
                                                                <span><img src="../assets/img/securityicon5.png" alt=""></span> informational
                                                            </div>
                                                            <p class="allissues">No <span>high</span> risk issues detected for this factor</p>
                                                            <ul class="list-group list-group-flush moretext">
                                                                <li class="list-group-item">MongoDB Service Observed <span>0</span></li>
                                                                <li class="list-group-item">SSL/TLS Service Supports Weak Protocol <span>0</span></li>
                                                                <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                <li class="list-group-item">MongoDB Service Observed <span>0</span></li>
                                                                <li class="list-group-item">SSL/TLS Service Supports Weak Protocol <span>0</span></li>
                                                                <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                <li class="list-group-item">MongoDB Service Observed <span>0</span></li>
                                                                <li class="list-group-item">SSL/TLS Service Supports Weak Protocol <span>0</span></li>
                                                                <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                <li class="list-group-item">MongoDB Service Observed <span>0</span></li>
                                                                <li class="list-group-item">SSL/TLS Service Supports Weak Protocol <span>0</span></li>
                                                                <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="card card-default m-b-0">
                                    <div class="card-header " role="tab" id="heading5">
                                        <div class="card-title">
                                            <a class="collapsed" data-toggle="collapse" href="#collapse5" aria-expanded="false" aria-controls="collapse5">
                                                <img src="../assets/SecGradesPng/smallA+.png" alt="logo">
                                                Endpoint Security
                                                <small>Detecting insecure network settings</small>
                                                <strong>10</strong>

                                                <div class="findings pull-right d-flex justify-content-between align-items-center">
                                                    <p>No finding</p>
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item"><img src="../assets/img/securityicon1.png" alt=""></li>
                                                        <li class="list-inline-item "><img src="../assets/img/securityicon2.png" alt=""></li>
                                                        <li class="list-inline-item "><img src="../assets/img/securityicon3.png" alt=""></li>
                                                        <li class="list-inline-item"><img src="../assets/img/securityicon4.png" alt=""></li>
                                                        <li class="list-inline-item "><img src="../assets/img/securityicon5.png" alt=""></li>
                                                    </ul>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div id="collapse5" class="collapse" role="tabcard" aria-labelledby="heading5">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-lg-9">
                                                    <div class="row">
                                                        <div class="col-lg-4 col-md-4 col-sm-6">
                                                            <div class="card cardboox">
                                                                <div class="card-header bg-danger">
                                                                    <span><img src="../assets/img/securityicon1.png" alt=""></span>high severity
                                                                </div>
                                                                <p class="allissues">No <span>high</span> risk issues detected for this factor</p>
                                                                <ul class="list-group list-group-flush moretext">
                                                                    <li class="list-group-item">MongoDB Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">SSL/TLS Service Supports Weak Protocol <span>0</span></li>
                                                                    <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">MongoDB Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">SSL/TLS Service Supports Weak Protocol <span>0</span></li>
                                                                    <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4 col-md-4 col-sm-6">
                                                            <div class="card cardboox">
                                                                <div class="card-header bg-success">
                                                                    <span><img src="../assets/img/securityicon2.png" alt=""></span>
                                                                    medium severity
                                                                </div>
                                                                <p class="allissues">No <span>high</span> risk issues detected for this factor</p>
                                                                <ul class="list-group list-group-flush moretext">
                                                                    <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">MongoDB Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">SSL/TLS Service Supports Weak Protocol <span>0</span></li>
                                                                    <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">MongoDB Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">SSL/TLS Service Supports Weak Protocol <span>0</span></li>
                                                                    <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4 col-md-4 col-sm-6">
                                                            <div class="card cardboox">
                                                                <div class="card-header bg-info">
                                                                    <span><img src="../assets/img/securityicon3.png" alt=""></span>
                                                                    low severity
                                                                </div>
                                                                <p class="allissues">No <span>high</span> risk issues detected for this factor</p>
                                                                <ul class="list-group list-group-flush moretext">
                                                                    <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">MongoDB Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">SSL/TLS Service Supports Weak Protocol <span>0</span></li>
                                                                    <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">MongoDB Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">SSL/TLS Service Supports Weak Protocol <span>0</span></li>
                                                                    <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">MongoDB Service Observed <span>0</span></li>
                                                                    <li class="list-group-item">SSL/TLS Service Supports Weak Protocol <span>0</span></li>
                                                                    <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-3">
                                                    <div class="Scorecard_rightbox">
                                                        <div class="card cardboox">
                                                            <div class="card-header border p-2">
                                                                <span><img src="../assets/img/securityicon4.png" alt=""></span> positive signals
                                                            </div>
                                                            <p class="allissues">No <span>high</span> risk issues detected for this factor</p>
                                                            <ul class="list-group list-group-flush moretext">
                                                                <li class="list-group-item">MongoDB Service Observed <span>0</span></li>
                                                                <li class="list-group-item">SSL/TLS Service Supports Weak Protocol <span>0</span></li>
                                                                <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                <li class="list-group-item">MongoDB Service Observed <span>0</span></li>
                                                                <li class="list-group-item">SSL/TLS Service Supports Weak Protocol <span>0</span></li>
                                                                <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                            </ul>
                                                        </div>


                                                        <div class="card cardboox mt-4">
                                                            <div class="card-header border p-2">
                                                                <span><img src="../assets/img/securityicon5.png" alt=""></span> informational
                                                            </div>
                                                            <p class="allissues">No <span>high</span> risk issues detected for this factor</p>
                                                            <ul class="list-group list-group-flush moretext">
                                                                <li class="list-group-item">MongoDB Service Observed <span>0</span></li>
                                                                <li class="list-group-item">SSL/TLS Service Supports Weak Protocol <span>0</span></li>
                                                                <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                <li class="list-group-item">MongoDB Service Observed <span>0</span></li>
                                                                <li class="list-group-item">SSL/TLS Service Supports Weak Protocol <span>0</span></li>
                                                                <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                <li class="list-group-item">MongoDB Service Observed <span>0</span></li>
                                                                <li class="list-group-item">SSL/TLS Service Supports Weak Protocol <span>0</span></li>
                                                                <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                                <li class="list-group-item">MongoDB Service Observed <span>0</span></li>
                                                                <li class="list-group-item">SSL/TLS Service Supports Weak Protocol <span>0</span></li>
                                                                <li class="list-group-item">Elasticsearch Service Observed <span>0</span></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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

    <InviteTeammateModal />
</template>

<script>
import Sidebar from '@/sub-components/Sidebar.vue'
import Header from '@/sub-components/Header.vue'
import InviteTeammateModal from '@/sub-components/InviteTeammateModal.vue'

export default {
    components: {
        Sidebar,
        Header,
        InviteTeammateModal
    },
    beforeMount() {
        document.title = "Score Highlights"
    },
    mounted() {
        this.loadScripts()
    },
    methods: {
        loadScripts() {
            var scripts = [
                "https://varuninfosec.github.io/srm/assets/plugins/jquery-autonumeric/autoNumeric.js",
                "https://varuninfosec.github.io/srm/assets/plugins/dropzone/dropzone.min.js",
                "https://varuninfosec.github.io/srm/assets/plugins/jquery-inputmask/jquery.inputmask.min.js",
                "https://varuninfosec.github.io/srm/assets/plugins/bootstrap-form-wizard/js/jquery.bootstrap.wizard.min.js",
                "https://varuninfosec.github.io/srm/assets/plugins/jquery-validation/js/jquery.validate.min.js",
                "https://varuninfosec.github.io/srm/assets/plugins/moment/moment.min.js",
                "https://varuninfosec.github.io/srm/assets/js/form_elements.js",
            ]

            scripts.forEach((script) => {
                let tag = document.createElement('script')
                tag.setAttribute("src", script)
                document.head.appendChild(tag)
            })
        }
    }
}

$(".open-button").on("click", function() {
    $(this).closest('.collapse-group').find('.collapse').collapse('show');
    $(".issues").css("display", "inline-block");
});

$(".close-button").on("click", function() {
    $(this).closest('.collapse-group').find('.collapse').collapse('hide');
    $(".issues").css("display", "none");
});

$(document).ready(function() {
    $('button.add').click(function() {
        $('button.add').removeClass("opacity");
        $(this).addClass("opacity");
    });
});

$(document).ready(function() {
    $('.card').click(function() {
        $('button.add').removeClass("opacity");
        $('.issues').css("display", "inline-block");
    });
});

$(".issues").click(function() {
    $(".moretext").slideToggle();
});

$('.issues').on('click', function() {
    $('.allissues').toggleClass('active');
});

$(document).ready(function() {
    $(".issues").click(function() {
        var check = $(".issues").text().trim();
        if (check == "Show all issues") {
            $(".issues").text("Show only detected issues");
        } else {
            $(".issues").text("Show all issues");
        }
    });
});

$(function() {
    $("#chkPassport").click(function() {
        if ($(this).is(":checked")) {
            $("#dvPassport").show();
            $("#AddPassport").hide();
        } else {
            $("#dvPassport").hide();
            $("#AddPassport").show();
        }
    });
});
</script>

<style>
@import 'https://varuninfosec.github.io/srm/assets/plugins/dropzone/css/dropzone.css';
</style>