const { Router } = require('express')

const HomeService = require('./homeService')

const router = Router()
router.get('/', HomeService)

module.exports = router
