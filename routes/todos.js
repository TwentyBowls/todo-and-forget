const express = require('express')
const router = express.Router()

router.get('/', (req, res) => { 
    res.send('Todos Page')
}) 

router.get('/createTodo', (req, res) => {
    res.send('Add Todos Page')
}) 

router.post('addTodo', (req, res) => {
    res.send('You added a todo, woohoo.')
})

router.get('/edit', (req, res) => { res.send('Edit todos page') }) 
router.post('/add/:id', (req, res) => { res.send('You edited a todo, woohoo.')}) 

module.exports = router