<template>
  <div>Pinia</div>
  <p>{{ counter.count }}</p>
  <p>{{ counter.name }}</p>
  <button class="btn btn-success" @click="counter.increment">count</button>
</template>

<script>
import { useCounterStore } from '@/stores/counter';
export default {
    data() {
        return{
            allUsers: [],
            counter: useCounterStore()
        }
    }
}
</script>

<style>

</style>