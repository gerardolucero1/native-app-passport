<template>
	<section>
		<h1>Register</h1>

		<form @submit.prevent="register">
			<input type="text" name="" v-model="name" placeholder="Name">
			<input type="email" name="" v-model="email" placeholder="Email">
			<input type="text" name="" v-model="password" placeholder="Password">

			<button type="submit">Registrar</button>
		</form>
	</section>
</template>

<script>
export default {

  name: 'Register',

  data () {
    return {
    	name: '',
    	email: '',
    	password: '',
    }
  },

  methods: {
  	register(){
		this.$store.dispatch('register', {
			name: this.name,
			email: this.email,
			password: this.password,
		})
		.then(response => {
      		this.$router.push({ name: 'login' })
    	})
	}
  }
}
</script>

<style lang="css" scoped>
</style>