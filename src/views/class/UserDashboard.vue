<template>
  <div>Welcome <span class="text-primary">{{ user.userName }}</span></div>
  <!-- <p>{{ this.$route.params.id }}</p> -->
  <!-- <p>{{ user.userName }}</p> -->
</template>

<script>
export default {
    data() {
        return{
            user: JSON.parse(localStorage.getItem('loginUser'))
        }
    },

    mounted () {
        // console.log(user);
        
    }
}
</script>

<style>

</style>