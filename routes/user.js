const router = require('express').Router()
const controller = require('../controllers/userController')
router.get('/', controller.get)

module.exports = router