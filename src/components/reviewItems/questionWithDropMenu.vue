<template>
  <div>
    <v-card
      class="review-item"
      elevation="2"
    >
      <v-list-item-title class="text-h6 mb-1">
          {{title}}
      </v-list-item-title>
      <div class="text--primary">
        {{description}}
      </div>
      <v-container fluid>
        <v-select
          :items="selectOptions"
          label="Standard"
        ></v-select> 
      </v-container>
    </v-card>
    </div>
</template>

<script>

export default {
  
  data(){
    return{
    }
  },
  computed:{
    selectOptions(){
      return this.options.map((option) => option.text)
    }
  },
  props: {
    title: String,
    description: String,
    options: Array,
  }

}

</script>

<style scoped>

</style>
