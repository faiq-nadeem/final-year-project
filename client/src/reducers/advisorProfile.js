import { FETCH_SINGLE_ADVISOR } from '../constants/actionTypes'

// eslint-disable-next-line import/no-anonymous-default-export
export default (advisorProfile = [], action) => {
    switch (action.type) {
      case FETCH_SINGLE_ADVISOR:
        return action.payload
      default:
        return advisorProfile
    }
  }