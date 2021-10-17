import { ISLOADING } from '../constants/actionTypes'

// eslint-disable-next-line import/no-anonymous-default-export
export default (isLoading = [], action) => {
    switch (action.type) {
     case ISLOADING:
        return action.isLoading
      default:
        return false
    }
  }