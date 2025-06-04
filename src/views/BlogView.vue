<template>
  <div>vieaw</div>
  <!-- <p>{{ this.$route.params.id }}</p> -->
   <div class="col-10 mx-auto px-3 py-4 rounded-4 shadow">
    <div class='text-center mb-3'>
        <h4>Title: {{ blog.title }}</h4>
    </div>
    <p><b>Content:</b> <br> {{ blog.blog_content }}</p>
   </div>
</template>

<script>
export default {
    data () {
        return{
            blog:JSON.parse(localStorage.getItem('blogDetails'))
        }
    },

    
}
</script>

<style>

</style>