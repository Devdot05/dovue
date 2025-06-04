<template>
    <section class="col-6 shadow mx-auto px-4 py-5 rounded-5 mt-5">
      <form  @submit.prevent="handleSubmit">
        <div class="mb-5 text-center">
          <h4>signup up page</h4>
        </div>
        <!-- <p class="text-danger">hey{{ errMsg }}</p> -->
        <div class="mb-4">
            <input type="text" placeholder="user name" v-model.trim="userName" class="form-control">
        </div>
        <div class="mb-4">
            <input type="email" placeholder="email" v-model.trim="email" class="form-control">
        </div>
        <div class="mb-4">
            <input type="password" placeholder="password" v-model.trim="password" class="form-control">
        </div>
        <div class="d-flex justify-content-end">
          <button class="btn btn-success">signup</button>
        </div>
      </form>
    </section>
  </template>

  <script setup>
  import { onMounted, ref } from 'vue';
  import { useRouter } from 'vue-router';
  import useVuelidate from '@Vuelidate/core';

    const userName = ref('');
    const email = ref('');
    const password = ref('')
    const userRoute = useRouter()
    let errMsg = ref('')
    let userArray =[]


     onMounted(()=>{
       userArray = JSON.parse(localStorage.getItem('usersDetails') || [])
        console.log(userArray);
        // const userNames = userArray.map(user => user.userName)
        // console.log(userNames);
        
        
      })

    const handleSubmit = () => {
      
      const getUserName = userArray.find(user => user.userName === userName.value)
      if(getUserName) {
        alert('user name is already exist')
        // errMsg = 'user name is already exist'
        
        console.log(errMsg);
        return
        
        
      }else{
        const users = {
          userName: userName.value,
          email: email.value,
          password: password.value
        }
        userArray.push(users)
        localStorage.setItem('usersDetails', JSON.stringify(userArray))
        console.log(userArray);

        userRoute.push('ulogin')
      }
    }
  </script>
  
  <!-- <script setup>
  import { onMounted, ref } from 'vue';
  import { useRouter } from 'vue-router';
  
    onMounted(()=> {
      AllUser = JSON.parse(localStorage.getItem('users')) || []
    })
    
  
    const userName = ref('')
    const email = ref('')
    const password = ref('')
  
    let AllUser = [];
  
    const userRouter = useRouter()
  
  
    const handleSubmit = () => {
      let user = {
      userName: userName.value,
      email: email.value,
      password: password.value
      }
  
      AllUser.push(user)
      // console.log(AllUser);
      
  
      localStorage.setItem("users", JSON.stringify(AllUser))
      const findUser = AllUser.find((user)=>user.username === userName)
      console.log(findUser);
      
      if(findUser) {
        alert('user already exist')
      }else{
        if(localStorage['users']){
        alert("signup created successfully")
        }
      }
  
      userRouter.push('ulogin')
  
      // console.log(AllUser);
       
      
    }
  </script> -->
  
  <style>
  
  </style>