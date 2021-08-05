<template>
  <div>
      <v-card
        class="review-item"
        elevation="0"
      >
        <div class="title-container">
          <v-icon large color="blue darken-2">
            mdi-account-check-outline
          </v-icon>
          <v-card-subtitle>
            <h3>{{description}}</h3>
          </v-card-subtitle>
        </div>

        <v-card-subtitle>
          Оцените работу учереждения, ответив на несколько вопросов. 
        </v-card-subtitle>

      </v-card>
    </div>
</template>

<script>

export default {
  data(){
    return {
      show: false
    }
  },
  props: {
    name: String,
    description: String,
  }

}

</script>

<style scoped>

</style>
