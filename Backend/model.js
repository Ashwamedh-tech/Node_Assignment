const mongoose = require ('mongoose')

const registrationSchema = new mongoose.Schema(
    {
        Username:{
            type:String,
            required:true
        },
        Password:{
            type:String,
            required:true
        },
        Hobbies:{
            type:String,
            required:true
        },
        Interests:{
            type:String,
            required:true
        }
    }
)

module.exports = mongoose.model('User',registrationSchema);