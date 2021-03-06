import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
    getters: {
        isLoggedIn: state => !!state.token,
        authStatus: state => state.status
    },
    state: {
        status: '',
        token: localStorage.getItem('token') || '',
        user: {}
    },
    mutations: {
        auth_request(state){
            state.status = 'loading'
        },
        auth_success(state, token, user){
            state.status = 'success'
            state.token = token
            state.user = user
        },
        auth_error(state){
            state.status = 'error'
        },
        logout(state){
            state.status = ''
            state.token = ''
        }
    },
    actions: {
        register({commit}, user){
            return new Promise((resolve, reject) => {
                commit('auth_request')
                axios({
                    url: 'http://localhost:8000/api/srm/register',
                    data: user,
                    method: 'POST'
                })
                .then(response => {
                    const token = response.data.token
                    const user = response.data.user
                    localStorage.setItem('token', token)
                    localStorage.setItem('id', user.id)
                    axios.defaults.headers.common['Authorization'] = token
                    commit('auth_success', token, user)
                    resolve(response)
                })
                .catch(error => {
                    commit('auth_error', error)
                    localStorage.removeItem('token')
                    reject(error)
                })
            })
        },
        login({commit}, user){
            return new Promise((resolve, reject) => {
                commit('auth_request')
                axios({
                    url: 'http://localhost:8000/api/srm/login',
                    data: user,
                    method: 'POST'
                })
                .then(response => {
                    const token = response.data.token
                    const user = response.data.user
                    localStorage.setItem('token', token)
                    localStorage.setItem('id', user.id)
                    axios.defaults.headers.common['Authorization'] = token
                    commit('auth_success', token, user)
                    resolve(response)
                })
                .catch(error => {
                    commit('auth_error')
                    localStorage.removeItem('token')
                    reject(error)
                })
            })
        },
        logout({commit}){
            return new Promise((resolve, reject) => {
                commit('logout')
                localStorage.removeItem('token')
                delete axios.defaults.headers.common['Authorization']
                resolve()
            })
        }
  },
  modules: {
  }
})
