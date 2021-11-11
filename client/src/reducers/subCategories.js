import { FETCH_ALL_SUBCATEGORIES, UPDATE_SUBCATEGORY } from '../constants/actionTypes'

// eslint-disable-next-line import/no-anonymous-default-export
export default (subCategories = [], action) => {
    switch (action.type) {
      case FETCH_ALL_SUBCATEGORIES:
        return action.payload
      case UPDATE_SUBCATEGORY:
        return subCategories.map((subCategory) => (subCategory._id === action.payload._id ? action.payload : subCategory))
      default:
        return subCategories
    }
  }