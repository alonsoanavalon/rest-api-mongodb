const express = require('express');
const path = require('path')
const exphbs = require('express-handlebars')
const morgan = require('morgan')
const mongoose = require('mongoose')


/* Initializations */

const app = express()
mongoose.connect('mongodb://localhost/rest-api-ejemplo' , {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(console.log('La base de datos está conectada'))
.catch(err => console.log(err))


/* Settings */

app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', exphbs({
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    defaultLayout: 'main',
    extname: '.hbs'
}))

app.set('view engine', '.hbs')


/* Middlewares */

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(morgan('dev'))




/* Routes */

app.use(require('./routes/users.js'))



/* Static Files */

app.use(express.static(path.join(__dirname, 'public')))




/* Server listening */

app.listen(app.get('port'), _ => {
    console.log(`Server is listening on port ${app.get('port')}` )
})