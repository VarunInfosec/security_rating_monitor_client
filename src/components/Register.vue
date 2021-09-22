<template>
    <div class="d-flex justify-content-center flex-column full-height ">
        <img src="@/assets/img/logo.png" alt="logo"  width="150" >
        <h3>{{ title }}</h3>
        <p>
            Already a member?<router-link to="/" :class="['text-info']">Login</router-link>
        </p>
        <h6 id="message" class="hide"></h6>
        <form id="form-register" class="p-t-15" role="form" @submit.prevent="register">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group form-group-default">
                        <label>First Name</label>
                        <input type="text" name="fname" v-model="fname" placeholder="John" class="form-control" required>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group form-group-default">
                        <label>Last Name</label>
                        <input type="text" name="lname" v-model="lname" placeholder="Smith" class="form-control" required>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="form-group form-group-default">
                        <label>Username</label>
                        <input type="text" name="uname" v-model="uname" placeholder="yourname.pages.com (this can be changed later)" class="form-control" required>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="form-group form-group-default">
                        <label>Password</label>
                        <input type="password" name="pass" v-model="password" placeholder="Minimum 8 Characters" class="form-control" required>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="form-group form-group-default">
                        <label>Email</label>
                        <input type="email" name="email" v-model="email" placeholder="We will send loging details to you" class="form-control" required>
                    </div>
                </div>
            </div>
            <div class="row m-t-10">
                <div class="col-lg-6">
                    <p>I agree to the <a href="#" class="text-info">terms and conditions</a>” and add a checkbox before the text.</p>
                </div>
                <div class="col-lg-6 text-right">
                    <a href="#" class="text-info small">Contact us</a>
                </div>
            </div>
            <button aria-label="" class="btn btn-primary btn-cons m-t-10" type="submit">Create a new account</button>
        </form>
    </div>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'

export default {
    name: 'Register',
    data(){
        return {
            fname: '',
            lname: '',
            uname: '',
            password: '',
            email: '',
        }
    },
    setup() {
        document.title = "Register"
        document.getElementById('app').setAttribute("class", "")
        document.getElementById('app').classList.add('register-container', 'full-height', 'sm-p-t-30')
        
        const title = ref(0)
        title.value = "{{ __('Create a Security Rating Account') }}"

        return{
            title
        }
    },
    methods: {
        /*submit(){
            let userData = {
                "first_name": this.fname,
                "last_name": this.lname,
                "username": this.uname,
                "password": this.password,
                "email": this.email,
            }

            // console.log(userData)
            axios({
                method: 'POST',
                url: 'http://localhost:8000/api/srm/register',
                data: userData
            })
            .then(response => {
                var resp = response.data
                this.showMessage(resp.message, resp.status)
                this.resetFields()
            })
            .catch(error => {
                console.error(error)
            })
        },*/
        register(){
            let userData = {
                "first_name": this.fname,
                "last_name": this.lname,
                "username": this.uname,
                "password": this.password,
                "email": this.email,
            }
            this.$store.dispatch('register', userData)
            .then(response => {
                // console.log("Response: " + response)
                this.showMessage(response.message, response.status)
                this.resetFields()
            })
            .catch(error => {
                console.error("Errors: " + error);
                // errors.forEach(element => {
                //     console.log(element)
                // });
            })
        },
        showMessage(message, status){
            var alertMessage = document.getElementById('message')
            var alertClass = (status) ? 'text-success' : 'text-danger'
            alertMessage.setAttribute('class', alertClass)
            alertMessage.innerHTML = message
        },
        resetFields(){
            this.fname = ''
            this.lname = ''
            this.uname = ''
            this.password = ''
            this.email = ''
        }
    }
}

$(function(){
    $('#form-register').validate()
});
</script>