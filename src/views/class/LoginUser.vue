<template>
    <div class="col-6 mx-auto shadow p-4 mt-5">
        <h4 class="mt-y text-center">User Login</h4>
        <p class="text-danger">{{ errorMsg }}</p>
        <!-- <p>{{ userName }}</p> -->
      <input type="text" class="form-control" placeholder="User Name" v-model="userName">
      <input type="password" class="form-control my-4" placeholder="Password" v-model="password">
      <div class="d-flex justify-content-end">
        <button class="btn btn-outline-primary" @click="handleLogin">login</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    // Data is a function that returns an object that takes in variable
    data () {
      return{
        userName: '',
        password: '',
        userArray: [],
        errorMsg: '',
      }
    },
    mounted(){
      this.user = JSON.parse(localStorage.getItem('loginUser'))
      this.userArray = JSON.parse(localStorage.getItem('usersDetails')) || []
      
    },
    methods:{
      handleLogin(){
        console.log(this.userArray);
        const user = this.userArray.find(user =>user.userName === this.userName && user.password === this.password)
        if(user){
          console.log('login successfully');
          console.log(user);
          localStorage.setItem('loginUser', JSON.stringify(user))
          
          alert("login successfully")
          // this.$router.push(`/udashboard/${this.userName}`)
          this.$router.push({name: 'udash', params: {username: this.userName}})
          
        }else{
            this.errorMsg = 'user does not exist'
          console.log('user does not exist');
          
      }
      }
    }
  }
  </script>
  
  <!-- <script setup>
  import { onMounted,ref } from 'vue';
  
    const userName = ref('');
    const password = ref('');
    let userArray = []
  
     onMounted(() => {
      userArray = JSON.parse(localStorage.getItem('userDetails')) || []
     })
  
    const handleLogin = () => {
      console.log(userName.value, password.value);
      const user = allUser.find((user)=> user.userName === userName.value && user.password === password.value)
      console.log(userArray);
      
  
      if(user){
        console.log('user find');
        
      }else{
  
        console.log('user does not exist');
      }
      
      
    }
  </script> -->
  
  <style>
  
  </style>