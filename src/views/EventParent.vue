<template>
  <section class="container-fluid p-4 shadow">
    <div class="row">
        <div class="col-6 mx-auto shadow p-4 section">
            <h4>Parent Event</h4>
             <div class="bg-white">
                <input type="text" v-model="text" class="form-control mb-3 p-2">
                <button @click="submitParent" class="btn btn-primary py-2 px-3 mb-3">Submit</button>
            </div>
            <div v-for="event in child" :key="event.id" class="content bg-info rounded-3 px-2 mb-3">
                <p class="d-flex justify-content-end">{{ event.child }}</p>
                <small class="d-flex justify-content-end time">{{ event.date }}</small>
            </div>
            <div v-for="parent in parentArray" :key="parent.id" class="bg-primary rounded-3 px-2">
                <p class="">{{ parent.text }}</p>
                <small class="time">{{ parent.date }}</small>
            </div>
            <!-- <span>parent component {{ count }}</span> -->
        </div>
        <div class="col-6 mx-auto shadow">
            <EventChild @increment="increase" :msg = "parentArray" @child="childEvent"/>                                                                                               
        </div>
      </div>
    </section>
</template>

<!-- <script setup>
import EventChild from './EventChild.vue';
// component
const count = 0

const increase = (msg) => {
    count = msg
}

    
</script> -->
<script>
import EventChild from './EventChild.vue';

export default {
    components: {
        EventChild
    }, 

    data(){
        return{
            count:0,
            text: '',
            date: new Date().toLocaleString(),
            id: Math.random(),
            parentArray:[],
            child:[]
        }
    },
    methods: {
        increase(msg) {
            this.count = msg
        },

        submitParent() {
            // comin = text.value
            this.data = {
                text: this.text,
                date: this.date,
                id: this.id
            }
            this.parentArray.push(this.data) 
            console.log(this.parentArray);
            console.log(this.data);
            
            
        },

        childEvent(event) {
            this.child = event
            console.log(this.child);
            
        }
    }
}
</script>

<style scoped>
    /* .time{
        background-color: aqua;
        font-size: 10px;
    } */
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    /* section{
        background-color: black;
        height: 100vh;
    }

    .text{
        position: absolute;
        bottom: 0;
    }
    .section{
        background-color: black;
        color: white; 
        position:absolute;
         height: 100vh;
        right: 0;
        bottom: 0;
    }
    
    .row{
        position: relative;
        background-color: black;
        height: 80vh;
    }

    .content{
        position: absolute;
        top: 0;
    } */

</style>