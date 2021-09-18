import mongoose from 'mongoose'

const categorySchema = mongoose.Schema({
    title         : String,
    message       : String,
    name          : String,
    creator       : String,
    tags          : [String],
    categoryStatus: String,
    selectedFile  : String,
    createdAt     : {
        type   : Date,
        default: new Date(),
    },
})

var Category = mongoose.model('Category', categorySchema)

export default Category