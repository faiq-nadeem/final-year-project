import { FETCH_ALL, UPDATE } from '../constants/actionTypes'

// eslint-disable-next-line import/no-anonymous-default-export
export default (subCategories = [], action) => {
    switch (action.type) {
      case FETCH_ALL:
        return action.payload
      case UPDATE:
        return subCategories.map((subCategory) => (subCategory._id === action.payload._id ? action.payload : subCategory))
      default:
        return subCategories
    }
  }