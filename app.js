const express = require('express')
const app = express()

const indexRouter = require('./routes/indexRouter')

const path = require('path')
const cookieParser = require('cookie-parser')
const methodOverride = require('method-override')
const ejs = require('ejs')

app.set('views', path.join(__dirname, 'views'))
app.engine('ejs', ejs.renderFile);
app.set('view engine', 'ejs');

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())
app.use(express.static('public'))
app.use(methodOverride('_method'))

app.use('/', indexRouter)

module.exports = app