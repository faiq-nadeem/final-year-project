import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import express from 'express'
import mongoose from 'mongoose'

import User from '../models/users.js'

const router = express.Router()

export const signIn = async (req, res) => {
    const {email, password} = req.body

    try {
        const existingUser = await User.findOne({email})
        if(!existingUser) return res.status(200).json({message:"user doesn't exist"})

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password)
        if(!isPasswordCorrect) return res.status(200).json({message:"invalid credentials / Password"})

        const token = jwt.sign({
            email: existingUser.email,
            id   : existingUser._id
        }, 'test', {expiresIn: "1h"})

        res.status(200).json({
            result: existingUser,
            token
        })
    } catch (error) {
        res.status(200).json({message: 'Something Went Wrong'})
        // console.log(error)
    }
}

export const signUp = async (req, res) => {
    const {firstName, lastName, email, password, confirmPassword, dob, gender, userRole, userStatus, credits, userKey, selectedFile} = req.body
    
    try {
        const existingUser = await User.findOne({email})
        if(existingUser) {
            return res.status(200).json({message:"user Already exist"})
        }
        
        if(password !== confirmPassword) return res.status(200).json({message:"Password didn't match"})

        const hashedPassword = await bcrypt.hash(password, 12)
        const result         = await User.create({
                                                    email, 
                                                    password: hashedPassword,
                                                    name    : `${firstName} ${lastName}`,
                                                    dob,
                                                    gender,
                                                    userRole,
                                                    userStatus,
                                                    credits,
                                                    userKey: null,
                                                    selectedFile
                                                })
        
        const token = jwt.sign({
            email: result.email,
            id   : result._id
        }, 'test', {expiresIn: "1h"})

        res.status(200).json({
            result,
            token
        })

    } catch (error) {
        res.status(200).error
    }

}

export const getUsers = async (req, res) => { 
    try {
        const user = await User.find({ userRole: 'user' })
                
        res.status(200).json(user)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const getSingleUser = async (req, res) => { 
    const { id } = req.params

    try {
        const singleUser = await User.findById(id)
        
        res.status(200).json(singleUser)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const getAdvisors = async (req, res) => { 
    try {
        const user = await User.find({ userRole: 'advisor' })
                
        res.status(200).json(user)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const getInterviewers = async (req, res) => { 
    try {
        const user = await User.find({ userRole: 'interviewer' })
                
        res.status(200).json(user)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const updateUser = async (req, res) => {
    const { id } = req.params

    const { name, email, password, message, country, city, dob, occupation, gender, birthplace, selectedFile } = req.body
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No user with id: ${id}`)

    const updatedUser = { name, email, password, message, country, city, dob, occupation, gender, birthplace, selectedFile, _id: id }

    await User.findByIdAndUpdate(id, updatedUser, { new: true })

    res.json(updatedUser)
}

export const deleteUser = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No user with id: ${id}`)

    await User.findByIdAndRemove(id)

    res.json({ message: "User deleted successfully." })
}

export const changeUserStatus = async (req, res) => {
    const { id } = req.params

    res.userId

    if(!req.userId) return res.JSON({message: 'Unauthenticated'})

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No user with id: ${id}`)
    
    const user = await User.findById(id)

    if(user.userStatus === 'active'){
        user.userStatus = 'inactive'
    } else{
        user.userStatus = 'active'
    }

    const updatedUser = await User.findByIdAndUpdate(id, user, { new: true })
    
    res.json(updatedUser)
}

export const changeUserRole = async (req, res) => {
    const { id }     = req.params
    const {userRole} = req.body

    res.userId

    if(!req.userId) return res.JSON({message: 'Unauthenticated'})

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No user with id: ${id}`)
    
    const user = await User.findById(id)

    user.userRole = userRole

    const updatedUser = await User.findByIdAndUpdate(id, user, { new: true })
    
    res.json(updatedUser)
}

export const changeUserCategory = async (req, res) => {
    const { id }         = req.params
    const {userCategory} = req.body

    res.userId

    if(!req.userId) return res.JSON({message: 'Unauthenticated'})

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No user with id: ${id}`)
    
    const user = await User.findById(id)

    user.userCategory = userCategory

    const updatedUser = await User.findByIdAndUpdate(id, user, { new: true })
    
    res.json(updatedUser)
}

export const changeUserSubCategory = async (req, res) => {
    const { id }            = req.params
    const {userSubCategory} = req.body

    res.userId

    if(!req.userId) return res.JSON({message: 'Unauthenticated'})

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No user with id: ${id}`)
    
    const user = await User.findById(id)

    user.userSubCategory = userSubCategory

    const updatedUser = await User.findByIdAndUpdate(id, user, { new: true })
    
    res.json(updatedUser)
}

export const setUserKey = async (req, res) => {
    const { id }    = req.params
    const {userKey} = req.body

    res.userId

    if(!req.userId) return res.JSON({message: 'Unauthenticated'})

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No user with id: ${id}`)
    
    const user = await User.findById(id)

    user.userKey = userKey

    const updatedUser = await User.findByIdAndUpdate(id, user, { new: true })

    res.json(updatedUser)
}

export const addUserCredits = async (req, res) => {
    const { id }    = req.params
    const {credits} = req.body

    res.userId

    if(!req.userId) return res.JSON({message: 'Unauthenticated'})

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No user with id: ${id}`)
    
    // const user = await User.findById(id)

    // user.credits = user.credits

    const updatedUser = await User.findOneAndUpdate(
                                                        { '_id': id },
                                                        { '$inc': {
                                                        credits: credits }
                                                        }
                                                    )

    res.json(updatedUser)
}