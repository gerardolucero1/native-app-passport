import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  	state: {
      token: localStorage.getItem('access_token') || null,
  	},
    getters: {
      loggedIn(state){
        return state.token !== null
      }
    },
  	mutations: {
  	   retrieveToken(state, payload){
        state.token = payload
       },

       destroyToken(state, payload){
        state.token = null
       }
  	},
  	actions: {
      register(context, payload){
        return new Promise((resolve, reject) =>{
          axios.post('http://127.0.0.1:8000/api/register', {
            name: payload.name,
            email: payload.email,
            password: payload.password,
          })
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
        })
      },

      destroyToken(context){
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token

        if(context.getters.loggedIn){
          return new Promise((resolve, reject) =>{
            axios.post('http://127.0.0.1:8000/api/logout')
            .then(response => {
              localStorage.removeItem('access_token')
              context.commit('destroyToken')
              resolve(response)
            })
            .catch(error => {
              localStorage.removeItem('access_token')
              context.commit('destroyToken')
              reject(error)
            })
          })
        }
      },

  		retrieveToken(context, payload){
        return new Promise((resolve, reject) =>{
          axios.post('http://127.0.0.1:8000/api/login', {
            username: payload.username,
            password: payload.password
          })
          .then(response => {
            const token = response.data.access_token

            localStorage.setItem('access_token', token)
            context.commit('retrieveToken', token)
            resolve(response)
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
        })

  		},

      getCurrentUser(context, payload){
        return new Promise((resolve, reject) =>{
          axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token

          axios.get('http://127.0.0.1:8000/api/user')
          .then(response => {
              console.log(response.data);
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
        })
        
      }

  	},
  	modules: {
  	
  	}
})
