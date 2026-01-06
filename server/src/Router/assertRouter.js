const {empAssert, myRequest} = require('../Controller/assertController')
const express = require('express')
const router = express.Router()

router.post('/empAssert', empAssert)
router.post('/myRequest', myRequest)

module.exports = router;