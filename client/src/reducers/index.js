import { combineReducers } from "redux"

import blogs from './blogs'
import userProfile from './userProfile'
import advisors from './advisors'
import advisorProfile from './advisorProfile'
import categories from './categories'
import subCategories from './subCategories'
import auth from './auth'
import isLoading from './loader'

export default combineReducers({blogs, userProfile, advisors, advisorProfile, auth, categories, subCategories, isLoading})