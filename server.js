const express = require('express');
const path = require('path');
const ejs = require('ejs');
const app = express();

//EJS
app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/', (req,res) => {
    res.render('index')
})

app.get('/about', (req,res) => {
    res.render('about')
})

app.get('/contact', (req,res) => {
    res.render('contact')
})

app.get('/post', (req,res) => {
    res.render('post')
})


const PORT = process.env.PORT || 7000
app.listen(PORT,console.log(`Server running on port ${PORT}`))