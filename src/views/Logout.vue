<template>
	
</template>

<script>
export default {

  name: 'Logout',

  data () {
    return {

    }
  },

  created(){
  	this.$store.dispatch('destroyToken')
  	.then(response => {
          this.$router.push('/')
        })
  },
}
</script>

<style lang="css" scoped>
</style>