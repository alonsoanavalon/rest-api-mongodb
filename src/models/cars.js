const {Schema, model} = require('mongoose')

const CarSchema = new Schema ({
    make: {
        type:String
    },
    model: {
        type:String
    },
    year: {
        type:Number
    },
    seller : {
        type: Schema.Types.ObjectId,
        ref:'user'
    }
})


module.exports = model('car', CarSchema)