const express = require('express')
const { getNfts } = require('./nft.controller')

const router = express.Router()
 
router.get('/', getNfts) //LIST

// router.get('/', getArts)//LIST
// router.get('/:id', getArt)//DETAILS
// router.post('/',saveArt)//ADD
// router.put('/',saveArt)//UPDATE
// router.delete('/:id',deleteArt)//REMOVE/DELETE

module.exports = router