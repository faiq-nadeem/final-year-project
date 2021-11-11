import { FETCH_ALL_SUBCATEGORIES } from '../constants/actionTypes'

// eslint-disable-next-line import/no-anonymous-default-export
export default (subCategories = [], action) => {
    switch (action.type) {
      case FETCH_ALL_SUBCATEGORIES:
        return action.payload
      default:
        return subCategories
    }
  }