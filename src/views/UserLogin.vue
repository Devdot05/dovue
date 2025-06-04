<template>
    <div class="col-6 mx-auto shadow p-4 mt-5">
        <h4 class="mt-y text-center">Login</h4>
        <p class="text-danger">{{ errorMsg }}</p>
      <input type="email" class="form-control" placeholder="Email" v-model="email">
      <input type="password" class="form-control my-4" placeholder="password" v-model="password">
      <button class="btn btn-outline-primary" @click="handleLogin">login</button>
    </div>
  </template>
  
  <script>
  export default {
    // Data is a function that returns an object that takes in variable
    data () {
      return{
        email: '',
        password: '',
        allUser: [],
        errorMsg: ''
      }
    },
    mounted(){
      this.allUser = JSON.parse(localStorage.getItem('users')) || []
      
    },
    methods:{
      handleLogin(){
        console.log(this.allUser);
        const user = this.allUser.find(user =>user.email === this.email && user.password === this.password)
        if(user){
          console.log('login successfully');
          console.log(user);
          localStorage.setItem('loginUser', JSON.stringify(user))
          
          alert("login successfully")
          this.$router.push('/dashboard')
          
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
  
    const email = ref('');
    const password = ref('');
    let allUser = []
  
     onMounted(() => {
      allUser = JSON.parse(localStorage.getItem('users')) || []
     })
  
    const handleLogin = () => {
      console.log(email.value, password.value);
      const user = allUser.find((user)=> user.email === email.value && user.password === password.value)
  
      if(user){
        console.log('user find');
        
      }else{
  
        console.log('user does not exist');
      }
      
      
    }
  </script> -->
  
  <style>
  
  </style>