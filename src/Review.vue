<template>
  <div>
    <v-row no-gutters>
    <v-col cols="12" xs="1" sm="2" md="4" lg="4"></v-col>
    <v-col
      cols="12"
      xs="10"
      sm="8"
      md="4"
      lg="4"
    >
    <reviewSendCompletedMessage v-if="sendCompleted" />
    <reviewExpiredTokenMessage v-else-if="!tokenConfirm" />
    <div v-else-if='loading'>
      <reviewItemsLoader />
    </div>
    <div v-else>
      <questionTitle 
        :description="templateDescription"
        :name="templateName"
      />
      <div v-for="(item, index) in templateItems" :key="item.id">
        <questionYesNo 
          :index="index"
          v-if="item.itemType === 'question_yes_no'"
          :title="item.title"
          :description="item.description"
        />
        <questionWithDropMenu 
          :index="index"
          v-if="item.itemType === 'question_with_dropdownmenu'"
          :title="item.title"
          :description="item.description"
          :options="item.variants[0]"
        />
        <questionWithComments
          :index="index"
          v-if="item.itemType === 'question_with_comments'"
          :title="item.title"
          :description="item.description"
        />
        <questionWithRating 
          :index="index"
          v-if="item.itemType === 'question_with_rating'"
          :title="item.title"
          :description="item.description"
          :ratingCount="item.ratingCount"
        />
      </div>
      <questionBottom />
    </div>
    </v-col>
    <v-col cols="12" xs="1" sm="2" md="4" lg="4"></v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import questionYesNo from './components/reviewItems/questionYesNo.vue';
import questionWithDropMenu from './components/reviewItems/questionWithDropMenu.vue';
import questionWithComments from './components/reviewItems/questionWithComments.vue';
import questionWithRating from './components/reviewItems/questionWithRating.vue';
import questionTitle from './components/reviewItems/questionTitle.vue';
import questionBottom from './components/reviewItems/questionBottom.vue';
import reviewItemsLoader from './components/reviewItemsLoader.vue';
import reviewExpiredTokenMessage from './components/reviewExpiredTokenMessage.vue';
import reviewSendCompletedMessage from './components/reviewSendCompletedMessage.vue';

export default {
  data(){
    return{
      title: "Прием на ресепшене",
      description: "Довольны ли вы качеством услуг?",
      options: [{text: "option"}, {text: "option2"}, {text: "option3"}],
      ratingCount: 5,
    }
  },
  name: 'Review',
  mounted(){
    this.checkToken()
  },
  components: {
    questionYesNo, 
    questionWithDropMenu, 
    questionWithComments, 
    questionWithRating,
    reviewItemsLoader,
    questionTitle,
    questionBottom,
    reviewExpiredTokenMessage,
    reviewSendCompletedMessage,
  },
  methods:{
    async checkToken(){
      const data = {
        id: this.$route.query.id,
        token: this.$route.query.token,
        }
      await this.$store.dispatch('getTokenConfirm', data)
    },
    async getData(){
      await this.$store.dispatch('getReviewTemplate', this.$route.query.id,)
    }
  },
  computed: mapGetters([
    'templateItems', 
    'templateDescription', 
    'templateName', 
    'loading', 
    'tokenConfirm',
    'sendCompleted'
    ])
};
</script>

<style>

</style>
