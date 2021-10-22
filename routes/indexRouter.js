const express = require('express')
const router = express.Router()
let todos = require('../data/todo').All

router.get('/', function(req, res) {
    res.render('index', {title: 'Unit 2 Assessment', todos})
})

router.post('/', function(req, res) {
    todos.push({
        id: Math.floor(Math.random()*50),
        task: req.body.task,
        completed: false
    })
    res.redirect('/')
})

router.delete('/:id', function(req, res) {
    todos =  todos.filter(t => t.id != req.params.id)
    res.redirect('/')
})

module.exports = router