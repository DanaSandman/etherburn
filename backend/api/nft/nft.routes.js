const express = require('express')
const { getNfts, getNft, updateNft } = require('./nft.controller')

const router = express.Router()
 
router.get('/', getNfts) //LIST
router.get('/:id', getNft)//DETAILS
router.put('/', updateNft)//UPDATE
// router.post('/',saveNft)//ADD
// router.delete('/:id',deleteNft)//REMOVE/DELETE

module.exports = router