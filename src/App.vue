<template>
  <v-app class="app">
    <router-view/>
  </v-app>
</template>

<script>

export default {
  data(){
    return{}
  },
  name: 'App',
}

</script>

<style>
#app{
  background-color: rgb(244, 247, 251) !important;
}
.review-item{
  /* width: 30%;
  margin: 0.5rem auto; */
  margin-bottom: 0.5rem;
  padding: 1rem;
}
.title-container{
  display: flex; 
  padding: 0.5rem;
}
.title-container .text-h6{
  margin-left: 0.5rem;
}
.loader{
  margin: 0.5rem auto;
}
</style>
