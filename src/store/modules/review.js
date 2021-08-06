import clientAPI from '../../utils/clientAPI'

export default {
  actions: {
    // getTokenConfirm({commit, dispatch}, data){
    //   clientAPI.get('check-template-token',{
    //     params: {
    //       id: data.id,
    //       token: data.token,
    //     }
    //   })
    //   .then(response => {
    //     if (response.data.valid) dispatch('getReviewTemplate', data.id)
    //     commit('changeTokenConfirm', response.data.valid)
    //   })
    // },
    getReviewTemplate({commit}, data){
      commit('changeLoading', true)
      commit('changeToken', data.token)
      clientAPI.get('get-review-template',{
        params: {
          id: data.id,
          token: data.token
        }
      })
      .then(response => response.data)
      .then(data => {
        console.log(data);
        if(data.status === "error"){
          commit('changeTokenConfirm', false)
        }
        else{
          commit('changeTemplate', data.review)
          commit('changeTemplateValues', data.review.reviewTemplateItems)
          commit('changeIdReview', data.review.reviewTemplate.id)
          commit('changeLoading', false)
          commit('changeSendCompleted', data.review.completed)
        }
      })
    },
    sendReviewValues({getters}){
      clientAPI.post('save-user-review',{
        data: {
          idReview: getters.idReview,
          values: getters.templateValues,
          token: getters.token,
        }
      })
    },
  },
  mutations: {
    changeToken(state, data){
      state.token = data
    },
    changeTokenConfirm(state, data){
      state.tokenConfirm = data
    },
    changeTemplate(state, data){
      state.template = data
    },
    changeTemplateValues(state, data){
      state.templateValues = data.map(item => {
        return {
          id: item.id,
          type: item.itemType,
          value: null,
        } 
      })
    },
    changeTemplateItemValues(state, data){
      state.templateValues[data.index].value = data.itemValue
    },
    changeLoading(state, data){
      state.loading = data
    },
    changeSendCompleted(state, data){
      state.sendCompleted = data
    },
    changeIdReview(state, data){
      state.idReview = data
    },
  },
  state: {
    idReview: null,
    token: '',
    tokenConfirm: true,
    sendCompleted: false,
    loading: true,
    template: [],
    templateValues: [],
  },
  getters: {
      token(state){
        return state.token
      },
      tokenConfirm(state){
        return state.tokenConfirm
      },
      idReview(state){
        return state.idReview
      },
      templateValues(state){
        return state.templateValues
      },
      templateItems(state){
        return state.template.reviewTemplateItems
      },
      templateName(state){
        return state.template.reviewTemplate.nameReview
      },
      templateDescription(state){
        return state.template.reviewTemplate.description
      },
      loading(state){
        return state.loading
      },
      sendCompleted(state){
        return state.sendCompleted
      }
  },
}