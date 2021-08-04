<template>
  <div>
    <v-card
      class="review-item"
      elevation="2"
    >
      <div class="title-container">
        <v-icon large color="yellow darken-2">
          mdi-help-circle-outline
        </v-icon>
        <v-list-item-title class="text-h6 mb-1">
            {{title}}
        </v-list-item-title>
      </div>
      <div class="text--primary">
        {{description}}
      </div>
      <v-container fluid>
        <v-radio-group
          class="radio-group"
          row
        >
          <v-radio
            label="Да"
            value="1"
          ></v-radio>
          <v-radio
            label="Нет"
            value="radio-2"
          ></v-radio>
        </v-radio-group>
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

.radio-group{
  padding: 0;
  margin: 0;
}

</style>
