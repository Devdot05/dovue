<template>
  <div>Palindrome</div>
  <div>
    <input type="text" v-model="text" placeholder="Enter your world">
    <button @click="checkPalindrome">Check</button>
    <p>{{ this.palindrome }}</p>
  </div>
</template>

<script>
export default {
    data(){
        return{
            text: '',
            palindrome: ''
        }
    },

    computed: {
        isPalindrome(){
            return this.text.toLowerCase();

        },
        pall() {
            return this.text.split('').reverse().join('').toLowerCase()
        }
    },

    methods: {
        checkPalindrome(){
            if(this.isPalindrome === this.pall){
                this.palindrome = 'this is a palindrome';
            }else{
                this.palindrome = 'this is not a palindrome'
            }
            setTimeout(() => {
                this.palindrome = ''
            }, 3000);
            this.text = ''
        }
    
    }
}
</script>

<style>

</style>