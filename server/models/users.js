import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    name           : {type: String, required:true},
    email          : {type: String, required:true},
    password       : {type: String, required:true},
    message        : {type: String},
    country        : {type: String},
    city           : {type: String},
    dob            : {type: String, required:true},
    occupation     : {type: String},
    gender         : {type: String, required:true},
    birthplace     : {type: String},
    credits        : {type: Number, required:true},
    userRole       : {type: String, required:true},
    userStatus     : {type: String, required:true},
    userKey        : {type: String},
    userCategory   : {type: String},
    userSubCategory: {type: String},
    selectedFile   : {type: String, required:true},
})

export default mongoose.model("User", userSchema)