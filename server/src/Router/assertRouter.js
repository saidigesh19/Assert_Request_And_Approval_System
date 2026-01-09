const {empAssert, myRequest} = require('../Controller/assertController')
const express = require('express')
const { auth } = require('../middleware/authMiddleware')
const { isEmployee } = require('../middleware/roleMiddleware')
const router = express.Router()

router.post('/empAssert', auth, isEmployee, empAssert)
router.get('/myRequest', auth, isEmployee, myRequest)

module.exports = router;    