<template>
  <div>
    <v-card
      class="review-item"
      elevation="2"
    >
    <div class="title-container">
        <v-icon large color="green darken-2">
          mdi-playlist-check
        </v-icon>
        <div class="text--primary">
            {{title}}
        </div>
    </div>
      <div class="text--primary">
        {{description}}
      </div>
      <v-container fluid>
        <v-select
          @change="updateValue"
          :items="selectOptions"
          label="Ваш вариант"
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
  methods: {
    updateValue(value){
      const data = {index: this.index, itemValue: value}
      this.$store.commit('changeTemplateItemValues', data)
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
    index: Number,
  }

}

</script>

<style scoped>

</style>
