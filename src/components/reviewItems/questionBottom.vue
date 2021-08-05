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
            @click="sendData"
            color="green lighten-2"
            text
            :disabled='btnStatus'
          >
            {{btnTitle}}
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
      btnTitle: 'отправить отзыв',
      btnStatus: false
    }
  },
  props: {
    name: String,
    description: String,
  },
  methods: {
    sendData(){
      this.$store.dispatch('sendReviewValues')
      this.btnTitle = 'отзыв отправлен'
      this.btnStatus = true
      this.$store.commit('changeSendCompleted', true)
    }
  }

}

</script>

<style scoped>

</style>
