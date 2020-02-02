const { Router } = require('express')

const HomeService = require('./HomeService')

const router = Router()
router.get('/', HomeService)

module.exports = router
