import express from 'express'
const router = express.Router()
import auth from '../middleware/auth.js'

import { 
    signIn,
    signUp,
    getUsers,
    getSingleUser,
    getAdvisors,
    getInterviewers,
    updateUser,
    deleteUser,
    changeUserStatus,
    changeUserRole,
    changeUserCategory,
    changeUserSubCategory,
    setUserKey,
    addUserCredits
} from '../controllers/users.js'

router.post('/signIn', signIn)
router.post('/signUp', signUp)

router.get('/advisors', getAdvisors)
router.get('/interviewers', getInterviewers)
router.get('/', getUsers)
router.get('/:id', getSingleUser)
router.patch('/:id', auth, updateUser)
router.delete('/:id', auth, deleteUser)
router.patch('/:id/changeUserStatus', auth, changeUserStatus)
router.patch('/:id/changeUserRole', auth, changeUserRole)
router.patch('/:id/changeUserCategory', auth, changeUserCategory)
router.patch('/:id/changeUserSubCategory', auth, changeUserSubCategory)
router.patch('/:id/setUserKey', auth, setUserKey)
router.patch('/:id/addUserCredits', auth, addUserCredits)

export default router