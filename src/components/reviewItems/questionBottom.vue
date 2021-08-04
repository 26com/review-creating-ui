<template>
  <div>
      <v-card
        class="review-item"
        elevation="0"
      >
        <div class="title-container">
        <v-icon large color="green darken-2">
          mdi-check-outline
        </v-icon>
          <v-card-subtitle>
            Отправить отзыв о работе учереждения и специалиста. Благодаря Вам мы сможем улучшить качество обслуживания. <strong>Спасибо за уделенное время</strong>. 
          </v-card-subtitle>
        </div>


        <v-card-actions>

          <v-btn
            color="green lighten-2"
            text
          >
            Отправить отзыв
          </v-btn>

          <v-spacer></v-spacer>
        </v-card-actions>
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
