import {defineStore} from "pinia";

export const useCounterStore = defineStore('counter', {
    state: () =>({
        count:20,
        name: 'codithy',
        arrObj: JSON.parse(localStorage.getItem('users'))
    }),
    actions: {
        increment() {
            this.count++
        }
    }
})