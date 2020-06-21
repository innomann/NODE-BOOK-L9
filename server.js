const express = require('express');
const path = require('path');
const ejs = require('ejs');
const app = express();

const homeController = require('./controllers/home')
const aboutController = require('./controllers/about')
const contactController = require('./controllers/contact')
const createController = require('./controllers/create')
const postController = require('./controllers/post')

//EJS
app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/',homeController)
app.get('/about',aboutController)
app.get('/contact',contactController)
app.get('/create',createController)
app.get('/post',postController)

const PORT = process.env.PORT || 7000
app.listen(PORT,console.log(`Server running on port ${PORT}`))