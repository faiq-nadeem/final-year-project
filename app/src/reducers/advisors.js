import { FETCH, FETCH_ALL, UPDATE } from '../constants/actionTypes'

// eslint-disable-next-line import/no-anonymous-default-export
export default (advisors = [], action) => {
    switch (action.type) {
      case FETCH:
        return action.payload
      case FETCH_ALL:
        return action.payload
      case UPDATE:
        return advisors.map((advisor) => (advisor._id === action.payload._id ? action.payload : advisors))
      default:
        return advisors
    }
  }