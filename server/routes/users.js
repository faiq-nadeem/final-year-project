import express from 'express'
const router = express.Router()
import auth from '../middleware/auth.js'

import { signIn, signUp, getUsers, getAdvisors, updateUser, deleteUser, changeUserStatus, changeUserRole } from '../controllers/users.js'

router.post('/signIn', signIn)
router.post('/signUp', signUp)
router.get('/', getUsers)
router.get('/advisors', getAdvisors)
router.patch('/:id', auth, updateUser)
router.delete('/:id', auth, deleteUser)
router.patch('/:id/changeUserStatus', auth, changeUserStatus)
router.patch('/:id/changeUserRole', auth, changeUserRole)

export default router