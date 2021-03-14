const {Schema, model} = require('mongoose')

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type:String,
        required:true
    },
    cars: [{
        type:Schema.Types.ObjectId,
        ref:'car'
    }]

})


module.exports = model('user', UserSchema)