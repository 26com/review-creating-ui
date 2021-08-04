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
          <v-card-title>
            {{name}}
          </v-card-title>
        </div>

        <v-card-subtitle>
          Оцените работу учереждения, ответив на несколько вопросов. 
        </v-card-subtitle>

        <v-card-actions>

          <v-spacer></v-spacer>

          <v-btn
            icon
            @click="show = !show"
          >
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>

            <v-card-text>
              {{description}}
            </v-card-text>
          </div>
        </v-expand-transition>
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
