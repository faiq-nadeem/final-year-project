import { FETCH_ALL_INTERVIEWERS } from '../constants/actionTypes'

// eslint-disable-next-line import/no-anonymous-default-export
export default (interviewers = [], action) => {
    switch (action.type) {
      case FETCH_ALL_INTERVIEWERS:
        return action.payload
      default:
        return interviewers
    }
  }