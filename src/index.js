const express = require('express')
const signsRoute = require('./routes/signs')
const userRoute = require('./routes/user')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use((req, res, next) => {
    console.log(`${new Date().toString()} => ${req.originalUrl}`, req.body)
    next()
})
app.use(signsRoute)
app.use(userRoute)
app.use(express.static('public'))

//handler for 404 - Resource not found
app.use((req, res, next) => {
    res.status(404).send('We think you are lost!')
})
//handler for 500
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.sendFile(path.join(__dirname, '../public/500.html'))
})
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server has started on port ${PORT}`))