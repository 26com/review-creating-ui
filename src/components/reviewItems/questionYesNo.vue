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
        <div class="text--primary">
            {{title}}
        </div>
      </div>
      <div class="text--primary">
        {{description}}
      </div>
      <v-container fluid>
        <v-radio-group
          class="radio-group"
          row
          @change="updateValue"
        >
          <v-radio
            label="Да"
            value="Да"
          ></v-radio>
          <v-radio
            label="Нет"
            value="Нет"
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
    index: Number,
  },
  methods: {
    updateValue(value){
      const data = {index: this.index, itemValue: value}
      this.$store.commit('changeTemplateItemValues', data)
    }
  },

}

</script>

<style scoped>

.radio-group{
  padding: 0;
  margin: 0;
}

</style>
