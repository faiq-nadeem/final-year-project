import { combineReducers } from "redux"

import categories from './categories'
import subCategories from './subCategories'
import blogs from './blogs'
import users from './users'
import auth from './auth'

export default combineReducers({ categories, subCategories, blogs, users, auth})