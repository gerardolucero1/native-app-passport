<template>
	<section>
		<h1>Home</h1>
    <button @click="user">Hola</button>
		<router-link to="/logout">
			Logout
		</router-link>
	</section>
</template>

<script>
import axios from 'axios'

export default {
  	name: 'Home',

  	data () {
    	return {

    	}
  	},

  	mounted(){
  		//this.getCurrentUser()
  	},

  	methods: {
  		user(){
        this.$store.dispatch('getCurrentUser')
  		}
  	}
}
</script>

<style lang="css" scoped>
</style>