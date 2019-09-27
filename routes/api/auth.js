const express = require('express');
const bcrypt = require('bcryptjs');
const multer = require('multer')
const User = require('../../models/user')
const { registerValidation } = require('../../validation/authValidator')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        const nameArray = file.originalname.split('.');
        cb(null, `${file.fieldname}-${Date.now()}.${nameArray[nameArray.length - 1]}`)
    }
})

var upload = multer({ storage: storage })

const router = express.Router()

router.post('/register', upload.single('profile_picture'), async (req, res) => {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt)
    const user = {
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        profile_picture: req.file ? req.file.path : ''
    }
    const userExists = await User.findOne({ email: req.body.email })
    const { error } = registerValidation(user)
    if (!userExists) {
        if (!error) {
            const newUser = new User(user)
            try {
                const saved = await newUser.save()
                res.json(saved)
            } catch (error) {
                res.status(400).json({ status: 'error', msg: error })
            }
        }
        else res.status(400).json({ status: 'error', msg: error.details[0].message })
    }
    else {
        res.status(400).send({ status: 'error', msg: `user with ${req.body.email} exists` })
    }
})

router.post('/login', (req, res) => {
    res.send('you are logged in')
})

module.exports = router;