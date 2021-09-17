import { combineReducers } from "redux"

import blogs from './blogs'
import categories from './categories'
import subCategories from './subCategories'
import auth from './auth'

export default combineReducers({blogs, auth, categories, subCategories})