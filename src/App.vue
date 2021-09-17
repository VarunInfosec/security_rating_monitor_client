<template>
    <Register />
</template>

<script>
import  Register from '@/components/Register.vue'
import { onMounted } from 'vue'

export default {
    components: {
        Register
    },
    setup() {
        onMounted(() => {
            var scripts = [
                "./assets/plugins/pace/pace.min.js",
                "./assets/plugins/liga.js",
                "./assets/plugins/jquery/jquery-3.2.1.min.js",
                "./assets/plugins/modernizr.custom.js",
                "./assets/plugins/jquery-ui/jquery-ui.min.js",
                "./assets/plugins/popper/umd/popper.min.js",
                "./assets/plugins/bootstrap/js/bootstrap.min.js",
                "./assets/plugins/jquery/jquery-easy.js",
                "./assets/plugins/jquery-unveil/jquery.unveil.min.js",
                "./assets/plugins/jquery-ios-list/jquery.ioslist.min.js",
                "./assets/plugins/jquery-actual/jquery.actual.min.js",
                "./assets/plugins/jquery-scrollbar/jquery.scrollbar.min.js",
                "./assets/plugins/select2/js/select2.full.min.js",
                "./assets/plugins/classie/classie.js",
                "./assets/plugins/jquery-validation/js/jquery.validate.min.js",
                "./assets/pages/js/pages.min.js",
            ]
    
            scripts.forEach(script => {
                let tag = document.createElement('script')
                tag.setAttribute('src', script)
                tag.setAttribute('type', 'text/javascript')
                document.body.appendChild(tag)
            })
        })
    },
}
</script>

<style>
@import './assets/plugins/pace/pace-theme-flash.css';
@import './assets/plugins/bootstrap/css/bootstrap.min.css';
@import 'https://fonts.googleapis.com/icon?family=Material+Icons';
@import './assets/plugins/jquery-scrollbar/jquery.scrollbar.css';
@import './assets/plugins/select2/css/select2.min.css';
@import './assets/pages/css/pages.css';
@import './assets/css/style.css';
</style>
