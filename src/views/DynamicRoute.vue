<!---First Method-->
<template>
  <!-- <div>Dynamic Page</div> -->
    <div v-for="blog in allBlogs" :key="blog.blog_id" class="col-6 shadow mx-auto text-center p-3 my-3">
        <h4>{{ blog.title }}</h4>
        <p>{{ blog.blog_content.slice(0,50) }}...</p>
        <router-link @click="storeUser(blog)" :to="{name: 'blogview', params: {title:blog.title, id:blog.blog_id} }">Read more</router-link>
    </div>
</template>

<script>
export default {
    methods:{
        storeUser(blog){
            console.log(blog);
            
            localStorage.setItem('blogDetails', JSON.stringify(blog))
        }
    },
    data(){
        return{
            allBlogs: [
                {
                    blog_id:1 ,
                    title: "Housing",
                    blog_content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit hic ipsum laudantium deleniti, quaerat dicta minus dignissimos voluptate assumenda. Blanditiis quasi tempore aliquid voluptatibus? Modi hic nesciunt dolore? Minima dolores commodi fugiat veritatis tenetur est velit, nemo aperiam quidem nulla necessitatibus a impedit, tempora qui deserunt aut sapiente placeat, aliquid suscipit voluptates reiciendis recusandae quae accusantium repellendus. Ex nesciunt culpa ipsa at aliquid beatae, delectus minus fugiat accusantium adipisci voluptas dolorum odio voluptates doloremque suscipit incidunt, nulla eos ut, ad qui. Ipsa dolorum illum provident exercitationem laudantium maiores expedita, eveniet laborum, pariatur quod fugit fugiat quisquam, repellendus repellat. Modi, aut.'
                },
                {
                    blog_id:2 ,
                    title: "Agriculture",
                    blog_content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit hic ipsum laudantium deleniti, quaerat dicta minus dignissimos voluptate assumenda. Blanditiis quasi tempore aliquid voluptatibus? Modi hic nesciunt dolore? Minima dolores commodi fugiat veritatis tenetur est velit, nemo aperiam quidem nulla necessitatibus a impedit, tempora qui deserunt aut sapiente placeat, aliquid suscipit voluptates reiciendis recusandae quae accusantium repellendus. Ex nesciunt culpa ipsa at aliquid beatae, delectus minus fugiat accusantium adipisci voluptas dolorum odio voluptates doloremque suscipit incidunt, nulla eos ut, ad qui. Ipsa dolorum illum provident exercitationem laudantium maiores expedita, eveniet laborum, pariatur quod fugit fugiat quisquam, repellendus repellat. Modi, aut.'
                },
                {
                    blog_id:3 ,
                    title: "Medial",
                    blog_content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit hic ipsum laudantium deleniti, quaerat dicta minus dignissimos voluptate assumenda. Blanditiis quasi tempore aliquid voluptatibus? Modi hic nesciunt dolore? Minima dolores commodi fugiat veritatis tenetur est velit, nemo aperiam quidem nulla necessitatibus a impedit, tempora qui deserunt aut sapiente placeat, aliquid suscipit voluptates reiciendis recusandae quae accusantium repellendus. Ex nesciunt culpa ipsa at aliquid beatae, delectus minus fugiat accusantium adipisci voluptas dolorum odio voluptates doloremque suscipit incidunt, nulla eos ut, ad qui. Ipsa dolorum illum provident exercitationem laudantium maiores expedita, eveniet laborum, pariatur quod fugit fugiat quisquam, repellendus repellat. Modi, aut.'
                },
                {
                    blog_id:4 ,
                    title: "Education",
                    blog_content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit hic ipsum laudantium deleniti, quaerat dicta minus dignissimos voluptate assumenda. Blanditiis quasi tempore aliquid voluptatibus? Modi hic nesciunt dolore? Minima dolores commodi fugiat veritatis tenetur est velit, nemo aperiam quidem nulla necessitatibus a impedit, tempora qui deserunt aut sapiente placeat, aliquid suscipit voluptates reiciendis recusandae quae accusantium repellendus. Ex nesciunt culpa ipsa at aliquid beatae, delectus minus fugiat accusantium adipisci voluptas dolorum odio voluptates doloremque suscipit incidunt, nulla eos ut, ad qui. Ipsa dolorum illum provident exercitationem laudantium maiores expedita, eveniet laborum, pariatur quod fugit fugiat quisquam, repellendus repellat. Modi, aut.'
                },
                {
                    blog_id:5 ,
                    title: "Medicin",
                    blog_content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit hic ipsum laudantium deleniti, quaerat dicta minus dignissimos voluptate assumenda. Blanditiis quasi tempore aliquid voluptatibus? Modi hic nesciunt dolore? Minima dolores commodi fugiat veritatis tenetur est velit, nemo aperiam quidem nulla necessitatibus a impedit, tempora qui deserunt aut sapiente placeat, aliquid suscipit voluptates reiciendis recusandae quae accusantium repellendus. Ex nesciunt culpa ipsa at aliquid beatae, delectus minus fugiat accusantium adipisci voluptas dolorum odio voluptates doloremque suscipit incidunt, nulla eos ut, ad qui. Ipsa dolorum illum provident exercitationem laudantium maiores expedita, eveniet laborum, pariatur quod fugit fugiat quisquam, repellendus repellat. Modi, aut.'
                },
            ]
        }
    }
}
</script>

<style>

</style>