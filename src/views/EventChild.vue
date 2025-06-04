<!-- Event Emitter -->
<template>
    <section class="p-3">
        <h3>Child Event</h3>
        <div>
        <!-- {{ count }} -->
            <div class="text-white text">
                <input type="text" v-model="child" class="form-control mb-3 p-2">
                <button @click="submitChild" class="btn btn-info py-2 px-3 mb-3">add child</button>
            </div>
            <!-- <button class="btn btn-success" @click="increaseCount">Increment</button> -->
            <div class="content">
                <div v-for="message in msg" :key="message.id" class="bg-primary mb-3 rounded-3 px-2 text-white">
                    <!-- <small>{{ comes.id }}</small> -->
                    <p class="d-flex justify-content-end">{{ message.text }}</p>
                    <small class="time d-flex justify-content-end">{{ message.date }}</small>
                </div>
                <div v-for="child in childArray" :key="child.id" class="bg-info rounded-3 px-2">
                    <!-- <small class="d-flex justify-content-end">{{ child.id }}</small> -->
                    <p>{{ child.child }}</p>
                    <small>{{ child.date }}</small>
                </div>
            </div>
        </div>
    </section>
</template>

<!-- <script setup>
    this.props.first = ['msg']
    const count = 0

    const increaseCount = () => {
        count++
        
    }
</script> -->

<script>
import { compileScript } from 'vue/compiler-sfc'

export default {
    props: ['msg'],
    data(){
        return {
            count:0,
            child: '',
            date: new Date().toLocaleString(),
            id: Math.random(),
            childArray: []
        }
    },
    methods: {
        increaseCount() {
            this.count ++
            this.$emit('increment',this.count)
        },

        submitChild() {
            this.data = {
                child: this.child,
                date: this.date,
                id: this.id
            }
            this.childArray.push(this.data)
            console.log(this.childArray);
            this.$emit('child', this.childArray)
            
        }
    }
}
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    } 

    /* section{
        background-color: white;
        position: relative;
        height: 100vh;
        width: 100%;
        
    }
    
    .text{
        position: absolute;
        right: 0;
        bottom: 0;
    }

    .content{
        position: absolute;
        top: 0;
    }

    

    .time{
        font-size: 10px;
    } */ 
</style>