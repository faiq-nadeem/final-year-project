import { FETCH_SINGLE_ADVISOR, FETCH_ALL_ADVISORS, UPDATE_USER } from '../constants/actionTypes'

// eslint-disable-next-line import/no-anonymous-default-export
export default (advisors = [], action) => {
    switch (action.type) {
      case FETCH_SINGLE_ADVISOR:
        return action.payload
      case FETCH_ALL_ADVISORS:
        return action.payload
      case UPDATE_USER:
        return advisors.map((advisor) => (advisor._id === action.payload._id ? action.payload : advisors))
      default:
        return advisors
    }
  }