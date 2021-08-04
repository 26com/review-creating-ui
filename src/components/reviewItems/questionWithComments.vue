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
      <v-container>
        <v-text-field
          label="Введите сообщение"
          outlined
          clearable
        ></v-text-field>
      </v-container>   
    </v-card>
    </div>
</template>

<script>

export default {

  props: {
    title: String,
    description: String,
  }

}

</script>

<style scoped>

</style>
