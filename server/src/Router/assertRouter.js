const {empAssert, myRequest} = require('../Controller/assertController')
const express = require('express')
const { auth } = require('../middleware/authMiddleware')
const router = express.Router()

router.post('/empAssert',auth, empAssert)
router.get('/myRequest',auth, myRequest)

module.exports = router;