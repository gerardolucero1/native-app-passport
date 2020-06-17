<template>
	<section>
		<input type="email" name="" v-model="email">
		<input type="text" name="" v-model="password">
		<button @click="login">Enviar</button>
    <router-link to="/home">
      Home
    </router-link>
	</section>
</template>

<script>
export default {

  	name: 'Login',

  	data () {
    	return {
	    	email: '',
	    	password: '',
    	}
  	},

  	methods: {
  		login(){
  			this.$store.dispatch('retrieveToken', {
  				username: this.email,
  				password: this.password,
  			}).then(response => {
          this.$router.push({ name: 'home' })
        })
  		}
  	}
}
</script>

<style lang="css" scoped>

</style>