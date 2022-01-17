const http = require('http')
const express = require('express')

const adminRoutes = require('./routes/admin')
const userRoutes = require('./routes/user')

const app = express()

app.use(express.urlencoded({extended: true}))

app.use('/admin', adminRoutes)
app.use('/user', userRoutes)

app.use('/',(req, res, next)=>{
    console.log('Second middleware')
    // use send 
    res.send('<h1>Bienvenue dans notre espace web</h1>')
})

app.listen(3000)