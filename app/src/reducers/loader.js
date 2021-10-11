import { STATUS } from '../constants/actionTypes'

// eslint-disable-next-line import/no-anonymous-default-export
export default (loader = [], action) => {
    switch (action.type) {
     case STATUS:
        return action.status
      default:
        return false
    }
  }