const UserModel = require('../models/user.model')
const express = require('express')
const router = express.Router()

//create a new user
router.post('/user', (req, res) => {
    //req.body
    if (!req.body) {
        return res.status(400).send('Request body is missing')
    }

    let model = new UserModel(req.body)
    model.save()
        .then(doc => {
            if (!doc || doc.length === 0) {
                return res.status(500).send(doc)
            }

            res.status(201).send(doc)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

module.exports = router