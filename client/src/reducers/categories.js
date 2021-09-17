import { FETCH_ALL, UPDATE } from '../constants/actionTypes'

// eslint-disable-next-line import/no-anonymous-default-export
export default (categories = [], action) => {
    switch (action.type) {
      case FETCH_ALL:
        return action.payload
     case UPDATE:
        return categories.map((category) => (category._id === action.payload._id ? action.payload : category))
      default:
        return categories
    }
  }