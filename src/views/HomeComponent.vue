<template>
    <p>The Number is {{ num }}</p>
    <h1>Welcome to vue 3 {{ name }}</h1>
    <p> Student name are {{ student }}</p>
    <button v-on:click="increaseNum">Increase</button>
    <button @click="decreaseNum">decrease</button>

    <!-- -Loop rendering -->
    <ul v-for="students in student" v-bind:key="students">
        <li>{{ students }}</li>
    </ul>

    <!--conditional statement-->
    <span v-if="day === 'wednesday'">today is wednesday</span>
    <span v-else-if="day === 'Monday'">Today is actually monday</span>
    <!-- <span>{{ day === 'wednesday' ? '' : '' }}</span> -->
    <span v-else>today is {{ day }}</span>
    
    <!--one way binding-->
    <span v-show="day === 'Monday'">Yes, today is Monday</span>
    <span>{{ date }}</span>

    <div class="div d-flex justify-content-center align-items-center" :class="condition ? 'bg-success' : 'bg-danger'">
        <button @click="condition = !condition" class="btn btn-secondary ">change color</button>
    </div>

    <div>
        <input :type="show ? 'text' : 'password' " class="form-control" v-model="userInput">
        <button @click="show = !show">{{ show ? 'Hide' : 'show' }}</button>
    </div>

    <span>{{ userInput }}</span>

    <div>
        <button @click="goToAbout">go to about</button>
        <button @click="back">Back</button>
        <button @click="next">Next</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
    const name = 'abayomi';
    const num = ref(0);
    const student = ['Ibrahim', 'Ayoola', 'Moji', 'Raymond']
    const day = 'Monday'
    const date = new Date()
    const condition = ref(false)
    const show = ref(false)
    const userInput = ref('Initial Value')

    const increaseNum = () => {
        num.value++
    }
    const decreaseNum = () => {
        num.value--
    }

    const router = useRouter();

    const goToAbout = () => {
        router.push('/about')
    }

    const back = () => {
        router.go(-1)
    }

    const next = () => {
        router.go(1)
    }
</script>

<style scoped>
    .div{
        width:300px;
        height: 300px;
    }
</style>