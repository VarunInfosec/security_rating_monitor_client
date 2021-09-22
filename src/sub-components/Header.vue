<template>
    <!-- START HEADER -->
    <div class="header ">
        <!-- START MOBILE SIDEBAR TOGGLE -->
        <a href="#" class="btn-link toggle-sidebar d-lg-none pg-icon btn-icon-link" data-toggle="sidebar">menu</a>
        <!-- END MOBILE SIDEBAR TOGGLE -->
        <div class="">
            <div class="brand inline">
                <img src="https://varuninfosec.github.io/srm/assets/img/logo.png" alt="logo" data-src="https://varuninfosec.github.io/srm/assets/img/logo.png" data-src-retina="https://varuninfosec.github.io/srm/assets/img/logo_2x.png" width="120" height="">
            </div>
            <!-- START NOTIFICATION LIST -->
            <ul class="d-lg-inline-block d-none no-margin d-lg-inline-block b-grey b-l b-r no-style p-l-20 p-r-20">
                <div class="dropdown searchbtnbox">
                    <button id="dLabel" class="dropdown-select" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">menu</button>
                    <div class="dropdown-menu searchdropdown" aria-labelledby="dLabel">
                        <div class="input-group mb-3">
                            <div class="input-group-append">
                                <button class="btn btn-secondary" type="button">
                                    <i class="fa fa-search"></i>
                                </button>
                            </div>
                            <input type="text" class="form-control" placeholder="Search websites in Muditjaiswaldma@gmail.com's Account...">
                        </div>
                        <div class="table-responsive">
                            <table class="table table-sm table-borderless">
                                <thead>
                                    <tr>
                                        <th scope="col">Domain</th>
                                        <th scope="col">Status</th>                                        
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>
                                            <a href="#">dealsbykrishna.com</a>
                                        </td>
                                        <td>
                                            <span class="text-success"><i class="fas fa-check m-r-5"></i></span> Active
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a href="#">rahwaytravel.com</a>
                                        </td>
                                        <td>
                                            <span class="text-success"><i class="fas fa-check m-r-5"></i></span> Active
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="table-responsive">
                            <table class="table table-sm table-borderless">
                                <thead>
                                    <tr>
                                        <th scope="col">Products</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><a href="#">Account Analytics </a></td>
                                    </tr>
                                    <tr>
                                        <td><a href="#">Pages</a></td>
                                    </tr>
                                    <tr>
                                        <td><a href="#">Workers</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </ul>
            <!-- END NOTIFICATIONS LIST -->
            <!-- <a href="#" class="search-link d-lg-inline-block d-none" data-toggle="search"><i class="pg-icon">search</i>Type anywhere to <span class="bold">search</span></a> -->
            <form action="search-result.html" method="post" class="search-link d-lg-inline-block d-none">
                <div class="input-group mr-4">
                    <div class="input-group-append">
                        <button class="btn btn-secondary" type="button">
                            <i class="fa fa-search"></i>
                        </button>
                    </div>
                    <input type="text" class="form-control" placeholder="Type anywhere to search">
                </div>
            </form>
        </div>
        <div class="d-flex align-items-center">
                <!-- START  notifications-->
                <div class="dropdown">
                    <a href="javascript:;" id="notificationbox" class="btn btn-default border-0 m-r-20 btn-icon-link" data-toggle="dropdown">
                        <i style="font-size: 20px;" class="fas fa-bell"></i>
                    </a>
                    <div class="dropdown-menu card notificationbox dropdown-menu-right" role="menu" aria-labelledby="notificationbox">
                        <div class="card-header border-bottom d-flex justify-content-between align-items-center">
                            <h4>NOTIFICATIONS</h4>
                            <div class="d-flex justify-content-between align-items-center">
                                <a href="#">Mark All as Read</a>
                                <a href="#">Settings</a>
                            </div>
                        </div>

                        <div class="card-body">
                            <!-- Nav tabs -->
                            <ul class="nav nav-tabs nav-tabs-linetriangle" data-init-reponsive-tabs="dropdownfx">
                                <li class="nav-item">
                                    <a href="#" class="active" data-toggle="tab" data-target="#fade1"><span>Standard</span></a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" data-toggle="tab" data-target="#fade2"><span>Prioritized</span></a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" data-toggle="tab" data-target="#fade3"><span>Queued</span></a>
                                </li>
                            </ul>
                            <!-- Tab panes -->
                            <div class="tab-content">
                                <div class="tab-pane fade show active" id="fade1">
                                    <p>
                                        You have no Standard <strong>notifications</strong>See <a href="#">rule settings </a> for details
                                    </p>
                                </div>
                                <div class="tab-pane fade" id="fade2">
                                    <p>
                                        You have no Standard <strong>notifications</strong>See <a href="#">rule settings </a> for details
                                    </p>
                                </div>
                                <div class="tab-pane fade" id="fade3">
                                    <p>
                                        You have no Standard <strong>notifications</strong>See <a href="#">rule settings </a> for details
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="card-footer text-center">
                            <a href="#" class="btn btn-primary" style="color: #fff;">View all</a>
                        </div>
                    </div>
                </div>
            <!-- START User Info-->
            <div class="dropdown pull-right d-lg-block d-none">
                <button class="profile-dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-label="profile dropdown">
                    <span class="thumbnail-wrapper d32 circular inline">
                        <img src="https://varuninfosec.github.io/srm/assets/img/profiles/avatar.jpg" alt="" data-src="https://varuninfosec.github.io/srm/assets/img/profiles/avatar.jpg" data-src-retina="https://varuninfosec.github.io/srm/assets/img/profiles/avatar_small2x.jpg" width="32" height="32">
                    </span>
                </button>
                <div class="dropdown-menu dropdown-menu-right profile-dropdown" role="menu">
                    <a href="#" class="dropdown-item"><span>Signed in as <br /><b>David Aunsberg</b></span></a>
                    <div class="dropdown-divider"></div>
                    <a href="#" class="dropdown-item">Your Profile</a>
                    <a href="#" class="dropdown-item">Your Activity</a>
                    <a href="#" class="dropdown-item">Your Archive</a>
                    <div class="dropdown-divider"></div>
                    <a href="#" class="dropdown-item">Features</a>
                    <a href="#" class="dropdown-item">Help</a>
                    <a href="#" class="dropdown-item">Settings</a>
                    <a href="#" class="dropdown-item" :click="logout">Logout</a>
                    <div class="dropdown-divider"></div>
                    <span class="dropdown-item fs-12 hint-text">Last edited by David<br />on Friday at 5:27PM</span>
                </div>
            </div>
            <!-- END User Info-->
            
        </div>
    </div>
    <!-- END HEADER -->
</template>

<script>
export default {
    name: 'Header',
    methods: {
        logout(){
            this.$store.dispatch('logout')
            .then(() => {
                this.$router.push('/')
            })
        }
    }
}
</script>