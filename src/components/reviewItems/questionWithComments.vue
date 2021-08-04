<template>
  <div>
    <v-card
      class="review-item"
      elevation="2"
    >
      <div class="title-container">
        <v-icon large color="blue darken-2">
          mdi-message-text
        </v-icon>
        <v-list-item-title class="text-h6 mb-1 icon">
            {{title}}
        </v-list-item-title>
      </div>
      <div class="text--primary">
        {{description}}
      </div>
      <v-container>
        <v-text-field
          @change="updateValue"
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
  methods: {
    updateValue(value){
      const data = {index: this.index, itemValue: value}
      this.$store.commit('changeTemplateItemValues', data)
    }
  },
  props: {
    title: String,
    description: String,
    index: Number,
  }

}

</script>

<style scoped>

</style>
