const express = require('express')
const { getNfts } = require('./nft.controller')

const router = express.Router()
 
router.get('/', getNfts)

module.exports = router