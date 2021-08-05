<template>
  <div>
    <v-card
      class="review-item"
      elevation="2"
    >
      <div class="title-container">
        <v-icon large color="orange darken-2">
          mdi-star-circle
        </v-icon>
        <v-list-item-title class="text-h6 mb-1">
            {{title}}
        </v-list-item-title>
      </div>
      <div class="text--primary">
        {{description}}
      </div>
      <v-container fluid>
        <v-rating
          v-if="ratingCount <= 5"
          v-model="rating"
          @input="updateValue"
          background-color="grey lighten-3"
          color="orange"
          :length="ratingCount"
          large
          clearable
        ></v-rating>
        <v-rating
          v-else-if="ratingCount <= 8"
          v-model="rating"
          @input="updateValue"
          background-color="grey lighten-3"
          color="orange"
          :length="ratingCount"
          clearable
        ></v-rating>
        <v-rating
          v-else
          v-model="rating"
          @input="updateValue"
          background-color="grey lighten-3"
          color="orange"
          :length="ratingCount"
          small
          clearable
        ></v-rating>
        <v-divider></v-divider>
        <div class="rating-text">
          {{ ratingToText }}
        </div>
      </v-container>   
    </v-card>
    </div>
</template>

<script>

export default {

  data(){
    return{
      rating: null
    }
  },

  props: {
    title: String,
    description: String,
    ratingCount: Number,
    ratingText: Boolean,
    index: Number,
  },
  methods: {
    updateValue(value){
      const data = {index: this.index, itemValue: value}
      this.$store.commit('changeTemplateItemValues', data)
    }
  },
  computed: {
    ratingToText(){
      const ratingStep = this.ratingCount / 4;
      if(this.rating){
        if (this.rating < ratingStep) return "плохо"
        else if (this.rating < ratingStep*2) return "удовлетварительно"
        else if (this.rating < ratingStep*4) return "хорошо"
        else if (this.rating === this.ratingCount) return "отлично"
        else return null
      }
      return null
    }
  }

}

</script>

<style scoped>

.rating-text{
  text-align: center;
}

</style>
