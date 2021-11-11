import express from 'express'
import mongoose from 'mongoose'

import Blog from '../models/blog.js'

const router = express.Router()

export const getBlogs = async (req, res) => { 
    try {
        const blog = await Blog.find()
                
        res.status(200).json(blog)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createBlog = async (req, res) => {
    const blog = req.body

    const newBlog = new Blog({ ...blog, creator: req.userId, createdAt: new Date().toISOString() })

    try {
        await newBlog.save()

        res.status(201).json(newBlog )
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const updateBlog = async (req, res) => {
    const { id }                                          = req.params
    const { title, message, creator, tags, selectedFile } = req.body
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No blog with id: ${id}`)

    const updatedBlog = { title, message, creator, tags, selectedFile, _id: id }

    await Blog.findByIdAndUpdate(id, updatedBlog, { new: true })

    res.json(updatedBlog)
}

export const deleteBlog = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No blog with id: ${id}`)

    await Blog.findByIdAndRemove(id)

    res.json({ message: "Blog deleted successfully." })
}

export const likeBlog = async (req, res) => {
    const { id } = req.params

    if(!req.userId) return res.JSON({message: 'Unauthenticated'})

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No blog with id: ${id}`)
    
    const blog  = await Blog.findById(id)
    const index = blog.likes.findIndex((id) => id === String(req.userId))

    if(index === -1){
        blog.likes.push(req.userId)
    } else{
        blog.likes = blog.likes.filter((id) => id !== String(req.userId))
    }

    const updatedBlog = await Blog.findByIdAndUpdate(id, blog, { new: true })
    
    res.json(updatedBlog)
}

export const changeBlogStatus = async (req, res) => {
    const { id } = req.params

    res.userId

    if(!req.userId) return res.JSON({message: 'Unauthenticated'})

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No blog with id: ${id}`)
    
    const blog = await Blog.findById(id)

    if(blog.blogStatus === 'active'){
        blog.blogStatus = 'inactive'
    } else{
        blog.blogStatus = 'active'
    }

    const updatedBlog = await Blog.findByIdAndUpdate(id, blog, { new: true })
    
    res.json(updatedBlog)
}


export default router