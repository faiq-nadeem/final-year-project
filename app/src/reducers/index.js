import { combineReducers } from "redux"

import blogs from './blogs'
import users from './users'
import categories from './categories'
import subCategories from './subCategories'
import auth from './auth'
import loader from './loader'

export default combineReducers({blogs, users, auth, categories, subCategories, loader})