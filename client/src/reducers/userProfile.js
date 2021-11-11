import { FETCH_SINGLE_USER, UPDATE_USER } from '../constants/actionTypes'

// eslint-disable-next-line import/no-anonymous-default-export
export default (userProfile = [], action) => {
    switch (action.type) {
      case FETCH_SINGLE_USER:
        return action.payload
      case UPDATE_USER:
        return userProfile.map((user) => (user._id === action.payload._id ? action.payload : user))
      default:
        return userProfile
    }
  }