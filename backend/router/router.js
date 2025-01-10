const express = require('express')
const router = express.Router()
const { getTest } = require('./requestHandler.js')

router.get('/test', getTest)

module.exports = router