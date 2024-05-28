const express = require('express')
const { startPayment, createPayment, getPayment } = require('../controller/payment')
const router = express.Router()

router.post('/start', startPayment)
router.get('/createPayment', createPayment)
router.get('/paymentDetails', getPayment)

module.exports = router