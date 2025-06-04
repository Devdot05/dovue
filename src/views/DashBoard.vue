<template>
  <div>
    <h3>Welcome to dashboard</h3>
    <h4>Welcome <span class="text-danger">{{ user.email }}</span></h4>
    <h4>Welcome <span class="text-danger">{{ user.name }}</span></h4>
  </div>
</template>

<script>
    export default {
        data () {
            return{
                user: JSON.parse(localStorage.getItem('loginUser'))
            }
        },
        
        mounted () {
            
        },

        methods: {

        }
    }

</script>

<style>

</style>