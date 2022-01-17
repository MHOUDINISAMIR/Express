const express = require('express')
const router = express.Router()

router.get('/add-user', (req, res, next)=>{
    console.log('First middleware')
    res.send('<form action="/admin/user" method="POST"><input type="text" name="name" placeholder="First Name"><input type="text" name="lname" placeholder="Last name"><br><button type="submit">Ajout user</button></form>')
    next()
})

router.post('/user',(req, res, next)=>{
    console.log(req.body)
    res.redirect('/')
})

module.exports = router