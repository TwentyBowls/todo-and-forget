// "dependencies": {
//     "bcrypt": "^5.0.1",
//     "connect-mongo": "^3.2.0",
//     "dotenv": "^8.2.0",
//     "ejs": "^3.1.6",
//     "express": "^4.17.1",
//     "express-flash": "^0.0.2",
//     "express-session": "^1.17.1",
//     "mongodb": "^3.6.5",
//     "mongoose": "^5.12.3",
//     "morgan": "^1.10.0",
//     "nodemon": "^2.0.7",
//     "passport": "^0.6.0",
//     "passport-local": "^1.0.0",
//     "validator": "^13.6.0"
//   }

const express = require('express')
const app = express()
const PORT = process.env.PORT || 2000
const morgan = require('morgan')
const router = express.Router

// middleware
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(router)

// routes
// router.get('/', (req, res) => {
//     console.log('router working')
//     res.end()
// })

app.get('/', (req, res) => {
    console.log('We got got.')
    res.send('Main Page')
})

app.listen(PORT, console.log(`Server running on port ${PORT}.`))