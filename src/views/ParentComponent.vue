<template>

    <section class="row">
            <div class="col-6 bg-primary">
                <h3>This is parent component</h3>
                
            </div>
          
            <div class="col-6 bg-secondary">
                <child-component msg = 'My name is omoola'/>
            </div>
    </section>
</template>

<script>
import ChildComponent from './ChildComponent.vue'
// import DynamicRoute from './DynamicRoute.vue';

export default {
    // data() {
    //     firstName = 'Dtoman'
    // },
  components: { ChildComponent,},

}
</script>

<style>

</style>