const http = require('http')
const express = require('express')

const adminRoutes = require('./routes/admin')
const userRoutes = require('./routes/user')

const server  = express()

server.use(express.urlencoded({extended: true}))

server.use('/admin',adminRoutes)
server.use('/user',userRoutes)

server.use('/',(req, res, next)=>{
    console.log('second middleware')
    res.send('<h1> hello world </h1>')
})

server.listen(3000)