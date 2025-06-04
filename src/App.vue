<script setup>
 import { RouterView } from 'vue-router';
import HomeComponent from './views/HomeComponent.vue';
</script>

<template>
   <!-- <HomeComponent/> -->
   <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <div class="navbar-nav">
         <router-link to="/home" class="nav-link">Home</router-link>
         <router-link to="/signup" class="nav-link">Signup</router-link>
         <router-link to="/login" class="nav-link">Login</router-link>
         <router-link to="/computed" class="nav-link">Computed</router-link>
         <router-link to="/blog" class="nav-link">Blog</router-link>
         <router-link to="/parent" class="nav-link">Parent</router-link>
         <router-link to="/child" class="nav-link">Child</router-link>
         <router-link to="/palin" class="nav-link">Palindrome</router-link>
         <router-link to="/event" class="nav-link">Event</router-link>
         <router-link to="/pinia" class="nav-link">Pinia</router-link>
         <router-link to="/test" class="nav-link">Test</router-link>
         <router-link :to="{name: 'about'}" class="nav-link">About</router-link>
      </div>
    </div>
  </div>
</nav>
   <RouterView/>
</template>

<style scoped>

</style>
