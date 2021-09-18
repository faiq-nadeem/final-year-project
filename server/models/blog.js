import mongoose from 'mongoose'

const blogSchema = mongoose.Schema({
    title       : String,
    message     : String,
    name        : String,
    creator     : String,
    tags        : [String],
    blogStatus  : {type: String, required:true},
    // likeCount   : {
    //     type: Number,
    //     default: 0,
    // },
    likes   : {
        type   : [String],
        default: [],
    },
    createdAt: {
        type   : Date,
        default: new Date(),
    },
    selectedFile: String,
})

var Blog = mongoose.model('Blog', blogSchema)

export default Blog