const User = require('../models/users')
const Car = require('../models/cars')

module.exports = {

    index: async (req,res,next) => {
        const users = await User.find({})   
        res.status(202).json(users)

/*         const usuario = {
            nombre:'alonsso'
        }

        res.json(usuaro) */    

    },
    newUser : async (req,res,next) => {
        const newUser = new User(req.body)
        const savedUser = await newUser.save()
        res.status(200).json(savedUser)
    },
    getUser: async (req,res,next) => {
        const {userId} = req.params;
        console.log(userId)
        const user = await User.findById({"_id":userId})
        res.status(200).json(user)
    },
    replaceUser: async (req, res, next) => {
        const {userId} = req.params;
        const newUser = req.body;
        const oldUser = await User.findByIdAndUpdate(userId, newUser);
        res.status(200).json({success: true})
    },
    updateUser: async (req, res, next) => {
        const {userId} = req.params;
        const newUser = req.body;
        const oldUser = await User.findByIdAndUpdate(userId, newUser);
        res.status(200).json({success: true})
    },
    deleteUser: async (req, res, next) => {
        const { userId } = req.params;
        await User.findByIdAndDelete(userId)
        console.log('eliminando')
        res.status(200).json({success: true})
    },
    pruebaPost: async (req,res,next) => {
        const datos = req.body
        console.log(datos)
        res.status(200).json({success: true})
    },
    getUsersCars : async (req, res, next) => {
        const {userId} = req.params;
        const user = await User.findById(userId).populate('cars')
        console.log(user)
        res.status(200).json(user)   
    },
    newUserCar: async (req, res, next) => {
        const {userId} = req.params;
        const newCar = new Car(req.body)
        const user = await User.findById(userId);
        newCar.seller = user;
        await newCar.save();
        user.cars.push(newCar);
        await user.save();
        res.status(201).json(newCar)
    }

}


/* Acá estará la logica que ocuapremos dentro de las rutas, como crear usuarios */