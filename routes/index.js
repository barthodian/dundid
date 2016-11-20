const express = require('express')
const router = express.Router()
const fs = require('fs')

router.get('/', (req, res, next)=>{
  res.render('index', { 
      title: 'Dundid' 
  })
})

router.post('/', (req, res, next)=>{
    fs.readFile("./data/index.json", "utf-8", (err, data)=>{
        if (err) throw err
        console.log(data)
    })
    console.log(req.body.dunthis, req.body.important)
})

module.exports = router
