<template>
    <router-view></router-view>
</template>

<script>
import axios from 'axios'

export default {
    created: function() {
        axios.interceptors.response.use(undefined, function (error) {
            return new Promise(function(resolve, reject) {
                if(error.status === 401){
                    this.$store.dispatch(logout)
                }
                throw error;
            })
        })
    },
}
</script>