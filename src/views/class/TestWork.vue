<template>
  <h3>Test Work</h3>
  <input type="text" v-model="test" class="form-control">
  <!-- <input type="text" v-model="fname" class="form-control">
  <input type="text" v-model="email" class="form-control"> -->
  <div v-for="name in array" :key="name">
    <p>{{ name }}</p>
  </div>
  <!-- <div>
    {{ array }}
  </div> -->
  <button @click="addBtn">add</button>
</template>

<!-- <script setup>
import { ref } from 'vue';

    const test = ref('')
    // const fname = ref('')
    // const email = ref('')
    // const answer = ref('')
    const array = ref([])


    const addBtn = () => {
        
        const top =  ref(test.value,)
        array.value.push(top.value)
        // answer = top
        console.log(array);
    }
    
</script> -->
<script>
export default {
    data() {
        return{
            test: '',
            array: ['red', 'blue', 'green', 'yellow', 'black']
            
        }
    },
    mounted() {
        
    },
    
    methods: {
        addBtn(){
            // top = this.test
            this.array.push(this.test)
            console.log(this.array);
    
        }
    }
}
 </script>

<style>

</style>