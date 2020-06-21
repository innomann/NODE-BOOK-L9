const express = require('express');

const app = express();
const path = require('path');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const BlogPost = require('./models/BlogPost.js');//Models


const homeController = require('./controllers/home')//GET
const aboutController = require('./controllers/about')
const contactController = require('./controllers/contact')
const createController = require('./controllers/create')
const postController = require('./controllers/post')

const createUserController = require('./controllers/createUser')//POST

const PORT = process.env.PORT || 7000


app.set('view engine', 'ejs');//Ejs

app.use(bodyParser.json())//Body parser
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'));//Static

app.listen(PORT,console.log(`Server running on port ${PORT}`))


mongoose.connect('mongodb+srv://innoman123:Xstbir22@authentication-l1-ycolc.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology: true}) //Connects MongoDB
.then(()=>console.log('Mongoose connected'))
.catch(err => console.log(err))


app.get('/',homeController)//GET
app.get('/about',aboutController)
app.get('/contact',contactController)
app.get('/create',createController)
app.get('/post',postController)

app.post('/create/post',  createUserController)//POST

