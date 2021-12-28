const express = require('express')
const { getNfts , updateNft } = require('./nft.controller')

const router = express.Router()
 
router.get('/', getNfts) //LIST
router.put('/', updateNft)//UPDATE

// router.get('/:id', getNft)//DETAILS
// router.post('/',saveNft)//ADD
// router.put('/',saveNft)//UPDATE
// router.delete('/:id',deleteNft)//REMOVE/DELETE

module.exports = router