<template>
  <div>
    <h4>
        this is child component
    </h4>
</div>
  <p>{{ msg }}</p>
  <p>{{ firstName }}</p>
</template>

<script>
export default {
    props:['msg', 'firstName']
}
</script>

<style>

</style>