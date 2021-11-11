import { combineReducers } from "redux"

import blogs from './blogs'
import users from './users'
import advisors from './advisors'
import interviewers from './interviewers'
import categories from './categories'
import subCategories from './subCategories'
import auth from './auth'
import loader from './loader'

export default combineReducers({blogs, users, advisors, interviewers, auth, categories, subCategories, loader})