<template>
  <div>welcome to computed property</div>
  <p>{{ getfullname }}</p>
  <div v-for="(item,index) in getuserArray" :key="index">
    <h4>Name: {{ item.name }}</h4>
    <h4>Age: {{ item.age }}</h4>
    <h4>Status: {{ item.status }}</h4>
  </div>
  <div v-for="item in getInactive" :key="item">
    <p>name: {{ item.name }}</p>
    <p>age {{ item.age }}</p>
    <h4>Status: {{ item.status }}</h4>

  </div>
</template>

<script>
// computed property is a function that return a value
export default {
    data () {
        return{
            first_name: 'obaloluwa',
            last_name: 'codithy',
            userArray: [
                {
                    name: 'omoola',
                    age: 50,
                    status: 'active'
                },
                {
                    name: 'smith',
                    age: 30,
                    status: 'inactive'
                },
                {
                    name: 'opeyemi',
                    age: 40,
                    status: 'active'
                },
                {
                    name: 'ini',
                    age: 40,
                    status: 'inactive'
                },
                {
                    name: 'john',
                    age: 40,
                    status: 'active'
                },
            ]
        }
    },
    computed: {
        getfullname() {
            return this.first_name + ' ' + this.last_name
        },

        getuserArray() {
            return this.userArray.filter((item)=>item.status == 'active')
        },

        getInactive(){
            return this.userArray.filter(item => item.status === 'inactive')
        }
    }
}
</script>

<style>

</style>