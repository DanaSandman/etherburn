const express = require('express')
const { getNfts , mint } = require('./nft.controller')

const router = express.Router()
 
router.get('/', getNfts) //LIST
router.put('/', mint)//UPDATE

// router.get('/', getArts)//LIST
// router.get('/:id', getArt)//DETAILS
// router.post('/',saveArt)//ADD
// router.put('/',saveArt)//UPDATE
// router.delete('/:id',deleteArt)//REMOVE/DELETE

module.exports = router