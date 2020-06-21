const express = require('express');

const app = express();
const path = require('path');
const ejs = require('ejs');


const homeController = require('./controllers/home')
const aboutController = require('./controllers/about')
const contactController = require('./controllers/contact')
const createController = require('./controllers/create')
const postController = require('./controllers/post')

const PORT = process.env.PORT || 7000


app.set('view engine', 'ejs');//Ejs
app.use(express.static('public'));//Static
app.listen(PORT,console.log(`Server running on port ${PORT}`))


app.get('/',homeController)
app.get('/about',aboutController)
app.get('/contact',contactController)
app.get('/create',createController)
app.get('/post',postController)

