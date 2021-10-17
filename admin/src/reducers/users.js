import { FETCH_ALL_USERS, UPDATE_USER, DELETE_USER } from '../constants/actionTypes'

// eslint-disable-next-line import/no-anonymous-default-export
export default (users = [], action) => {
    switch (action.type) {
      case FETCH_ALL_USERS:
        return action.payload
      case UPDATE_USER:
        return users.map((user) => (user._id === action.payload._id ? action.payload : user))
      case DELETE_USER: 
        return users.filter((user) => user._id !== action.payload)
      default:
        return users
    }
  }