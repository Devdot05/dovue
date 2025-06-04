<template>
    <section class="col-6 shadow mx-auto p-4 rounded mt-5">
      <form  @submit.prevent="handleSubmit">
        <div class="mb-3 text-center">
          <h4>signup up page</h4>
        </div>
        <div class="mb-3">
            <input type="text" placeholder="name" v-model.trim="name" class="form-control">
        </div>
        <div class="mb-3">
            <input type="email" placeholder="email" v-model.trim="email" class="form-control">
        </div>
        <div class="mb-3">
            <input type="password" placeholder="password" v-model.trim="password" class="form-control">
        </div>
        <button class="btn btn-dark">signup</button>
      </form>
    </section>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue';
  import { useRouter } from 'vue-router';
  
    onMounted(()=> {
      allUser = JSON.parse(localStorage.getItem('users')) || []
    })
    
  
    const name = ref('')
    const email = ref('')
    const password = ref('')
  
    let allUser = [];
  
    const userRouter = useRouter()
  
  
    const handleSubmit = () => {
      let user = {
      name: name.value,
      email: email.value,
      password: password.value
      }
  
      allUser.push(user)
  
      localStorage.setItem("users", JSON.stringify(allUser))
      if(localStorage['users']){
      alert("signup created successfully")
      }
  
      userRouter.push('login')
  
      console.log(allUser);
       
    }
  </script>
  
  <style>
  
  </style>