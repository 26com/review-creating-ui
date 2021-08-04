<template>
  <v-app class="app">
    <v-row no-gutters>
    <v-col cols="12" xs="1" sm="2" md="4" lg="4"></v-col>
    <v-col
      cols="12"
      xs="10"
      sm="8"
      md="4"
      lg="4"
    >
    <div v-if='loading'>
      <reviewItemsLoader />
    </div>
    <div v-else>
      <div v-for="item in templateItems" :key="item.id">
        <questionYesNo 
          v-if="item.itemType === 'question_yes_no'"
          :title="item.title"
          :description="item.description"
        />
        <questionWithDropMenu 
          v-if="item.itemType === 'question_with_dropdownmenu'"
          :title="item.title"
          :description="item.description"
          :options="item.variants[0]"
        />
        <questionWithComments
          v-if="item.itemType === 'question_with_comments'"
          :title="item.title"
          :description="item.description"
        />
        <questionWithRating 
          v-if="item.itemType === 'question_with_rating'"
          :title="item.title"
          :description="item.description"
          :ratingCount="item.ratingCount"
        />
      </div>
    </div>
    </v-col>
    <v-col cols="12" xs="1" sm="2" md="4" lg="4"></v-col>
    </v-row>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

import questionYesNo from './components/reviewItems/questionYesNo.vue';
import questionWithDropMenu from './components/reviewItems/questionWithDropMenu.vue';
import questionWithComments from './components/reviewItems/questionWithComments.vue';
import questionWithRating from './components/reviewItems/questionWithRating.vue';
import reviewItemsLoader from './components/reviewItemsLoader.vue';

export default {
  data(){
    return{
      title: "Прием на ресепшене",
      description: "Довольны ли вы качеством услуг?",
      options: [{text: "option"}, {text: "option2"}, {text: "option3"}],
      ratingCount: 5,
    }
  },
  name: 'App',
  mounted(){
    this.getData()
  },
  components: {
    questionYesNo, 
    questionWithDropMenu, 
    questionWithComments, 
    questionWithRating,
    reviewItemsLoader,
  },
  methods:{
    async getData(){
      await this.$store.dispatch('getReviewTemplate')
    }
  },
  computed: mapGetters(['templateItems', 'templateDescription', 'loading'])
};
</script>

<style>
.review-item{
  /* width: 30%;
  margin: 0.5rem auto; */
  margin-top: 0.5rem;
  padding: 1rem;
}
.loader{
  margin: 0.5rem auto;
}
</style>
