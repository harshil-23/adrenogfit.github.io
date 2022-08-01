const mongoose = require('mongoose') 
const express = require('express')
const path = require('path')
require('./mongo_connect')

const person = require('./mongo_schema')
const app = express();
//app.use(express.json());
app.use(express.urlencoded()) 

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async (req, resp) => {
    resp.sendFile(path.join(__dirname+'/public/home.html'));
})
app.get('/about' ,async (req, resp) => {
    resp.sendFile(path.join(__dirname+'/public/about.html'))
})

app.get('/calculator' ,async (req, resp) => {
    resp.sendFile(path.join(__dirname+'/public/fitcal.html'))
})
app.get('/contact' ,async (req, resp) => {
    resp.sendFile(path.join(__dirname+'/public/contact.html'))
})
app.post('/add', async (req, resp) => {
    let data = new person(req.body);
    console.log(req.body)
    let result = await data.save();
        resp.sendFile(path.join(__dirname+'/saved.html'))
    })
   // console.log(result)




app.listen(6500)

