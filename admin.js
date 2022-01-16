const express = require('express')
const router = express.Router()

router.get('/ajout-users',(req, res, next)=>{
    res.send('<form action="/admin/user" method="POST"><input type="text" name="nom" placeholder="Votre Nom"><button type="submit"> Ajout User</button></form>')
    next()
})


router.post('/user',(req, res, next)=>{
    console.log(req.body)
    res.redirect('/')
})

module.exports = router