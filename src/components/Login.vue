<template>
    <!-- START Login Background Pic Wrapper-->
    <div class="bg-pic">
        <!-- START Background Caption-->
        <div class="bg-caption pull-bottom sm-pull-bottom text-white p-l-20 m-b-20">
            <h1 class="semi-bold text-white">
				“SecurityRatings.com - The Most Advanced Attack Surface and Third-Party Risk Management Framework “
            </h1>         
        </div>
        <!-- END Background Caption-->
    </div>
    <!-- END Login Background Pic Wrapper-->
    <!-- START Login Right Container-->
    <div class="login-container bg-white">
        <div class="p-l-50 p-r-50 p-t-50 m-t-30 sm-p-l-15 sm-p-r-15 sm-p-t-40">
            <img src="@/assets/img/logo.png" alt="logo"  width="200" >
            <h2 class="p-t-25">Get Started <br/> with SecurityRatings.com</h2>
            <p class="mw-80 m-t-5">Sign in to your account</p>
            <h6 id="message" class="hide"></h6>
            <!-- START Login Form -->
            <form id="form-login" class="p-t-15" role="form" @submit.prevent="login">
                <!-- START Form Control-->
                <div class="form-group form-group-default">
                    <label>Login</label>
                    <div class="controls">
                        <input type="text" name="username" v-model="username" placeholder="User Name" class="form-control" required>
                    </div>
                </div>
                <!-- END Form Control-->
                <!-- START Form Control-->
                <div class="form-group form-group-default">
                    <label>Password</label>
                    <div class="controls">
                        <input type="password" class="form-control" name="password" v-model="password" placeholder="Password" required>
                    </div>
                </div>
                <!-- START Form Control-->
                <div class="row">
                    <div class="col-md-6 no-padding sm-p-l-10">
                        <div class="form-check">
                            <input type="checkbox" value="1" id="checkbox1">
                            <label for="checkbox1">Remember me</label>
                        </div>
                    </div>
                    <div class="col-md-6 d-flex align-items-center justify-content-end">
                        <button aria-label="" class="btn btn-primary btn-lg m-t-10" type="submit">Sign in</button>
                    </div>
                </div>
                <div class="m-b-5 m-t-30">
                    <a href="#" class="normal">Lost your password?</a>
                </div>
                <div >
                    <!-- <a href="#" class="normal" @click="redirectTo('/register')">Not a member yet? Signup now.</a> -->
                    <router-link to="/register" :class="['normal']">Not a member yet? Signup now.</router-link>
                </div>
                <!-- END Form Control-->
            </form>
            <!--END Login Form-->
            <div class="pull-bottom sm-pull-bottom">
                <div class="m-b-30 p-r-80 sm-m-t-20 sm-p-r-15 sm-p-b-20 clearfix">
                    <div class="col-sm-9 no-padding m-t-10">
                        <p class="small-text normal hint-text">
                            Copyright © 2021 SecurityRatings.com. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- END Login Right Container-->
</template>

<script>
export default {
    name: "Login",
    data(){
        return {
            username: '',
            password: ''
        }
    },
    beforeMount() {
        document.title = "Login"
        document.getElementById('app').setAttribute("class", "")
        document.getElementById('app').classList.add('login-wrapper')
    },
    mounted() {
        if(this.$route.query.verified == 1){
            this.showMessage()
        }
    },
    methods: {
        showMessage(){
            var alertMessage = document.getElementById('message')
            alertMessage.setAttribute('class', 'text-success')
            alertMessage.innerHTML = "Email verified successfully. Please login."

            setTimeout(() => {
                alertMessage.innerHTML = ''
            }, 10000);
        },
        login() {
            let username = this.username
            let password = this.password
            this.$store.dispatch('login', { username, password })
            .then(() => this.$router.push('dashboard'))
            .catch(error => console.log(error))
        }
    }
}
$(function() {
    $('#form-login').validate()
})
</script>