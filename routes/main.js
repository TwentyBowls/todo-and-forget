const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Home Page')
})

router.get('/login', (req, res) => {
    res.send('Log-in Page.')
})

router.get('/signup', (req, res) => {
    res.send('Signup Page.')
})

module.exports = router