const router = require('express-promise-router')();
/* const router = Router(); */

const {
    index,
    pruebaPost,
    newUser,
    getUser,
    replaceUser,
    deleteUser,
    getUsersCars,
    newUserCar
} = require('../controllers/users') /* Acá estoy requiriendo el modulo controlador */




router.get('/users', index) /* Acá estoy diciendo que en usuarios se entregará la información a partir del controlador que estamos llamando */

/* router.post('/users', pruebaPost) */

router.post('/users', newUser)

router.get('/users/:userId', getUser)

router.put('/users/:userId', replaceUser)

router.delete('/users/:userId', deleteUser)
/* Autos */

router.get('/users/:userId/cars', getUsersCars)

router.post('/users/:userId/cars', newUserCar)


module.exports = router;