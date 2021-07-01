const { response } = require('express');
const express = require('express');
const signUpTemplateCopy = require('../models/signupmodel')

const router = express.Router();

router.post('/signup', (request, response) => {
    const signedUpUser =  new signUpTemplateCopy({
        fullName: request.body.fullName,
        username: request.body.username,
        email: request.body.email,
        password: request.body.password
    })
    signedUpUser.save()
    .then(data => {
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })
})

module.exports = router