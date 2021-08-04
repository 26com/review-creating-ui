import clientAPI from '../utils/clientAPI'

export function getReviewTemplate(){
  clientAPI.get({
    params: {
      id: 3,
    }
  })
}