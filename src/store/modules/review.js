import clientAPI from '../../utils/clientAPI'

export default {
  actions: {
    getTokenConfirm({commit, dispatch}, data){
      clientAPI.get('check-template-token',{
        params: {
          id: data.id,
          token: data.token,
        }
      })
      .then(response => {
        if (response.data.valid) dispatch('getReviewTemplate', data.id)
        commit('changeTokenConfirm', response.data.valid)
      })
    },
    getReviewTemplate({commit}, id){
      commit('changeLoading', true)
      clientAPI.get('get-review-template',{
        params: {
          id,
        }
      })
      .then(data => {
        commit('changeTemplate', data)
        commit('changeTemplateValues', data)
        commit('changeLoading', false)
        commit('changeSendCompleted', data.completed)
      })
    },
    sendReviewValues({getters}){
      clientAPI.post('save-user-review',{
        data: getters.templateValues
      })
    },
  },
  mutations: {
    changeTokenConfirm(state, data){
      state.tokenConfirm = data
    },
    changeTemplate(state, data){
      state.template = data
    },
    changeTemplateValues(state, data){
      state.templateValues = data.data.reviewTemplateItems.map(item => {
        return {
          id: item.id,
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
  },
  state: {
    tokenConfirm: true,
    sendCompleted: false,
    loading: true,
    template: [],
    templateValues: [],
  },
  getters: {
      tokenConfirm(state){
        return state.tokenConfirm
      },
      templateValues(state){
        return state.templateValues
      },
      templateItems(state){
        return state.template.data.reviewTemplateItems
      },
      templateName(state){
        return state.template.data.reviewTemplates.nameReview
      },
      templateDescription(state){
        return state.template.data.reviewTemplates.description
      },
      loading(state){
        return state.loading
      },
      sendCompleted(state){
        return state.sendCompleted
      }
  },
}