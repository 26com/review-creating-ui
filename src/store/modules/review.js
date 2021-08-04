import clientAPI from '../../utils/clientAPI'

export default {
  actions: {
    getReviewTemplate({commit}){
      commit('changeLoading', true)
      clientAPI.get('',{
        params: {
          id: 1,
        }
      })
      .then(data => {
        commit('changeTemplate', data)
        commit('changeLoading', false)
      })
    }
  },
  mutations: {
    changeTemplate(state, data){
      state.template = data
    },
    changeLoading(state, data){
      state.loading = data
    },
  },
  state: {
    loading: true,
    template: [],
  },
  getters: {
      templateItems(state){
        console.log(state.template.data.reviewTemplateItems);
        return state.template.data.reviewTemplateItems
      },
      templateDescription(state){
        return state.template.data.reviewTemplates.description
      },
      loading(state){
        return state.loading
      }
  },
}