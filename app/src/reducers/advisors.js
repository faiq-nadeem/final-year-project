import { FETCH_ALL_ADVISORS } from '../constants/actionTypes'

// eslint-disable-next-line import/no-anonymous-default-export
export default (advisors = [], action) => {
    switch (action.type) {
      case FETCH_ALL_ADVISORS:
        return action.payload
      default:
        return advisors
    }
  }