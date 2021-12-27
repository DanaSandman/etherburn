const dbService = require('../../service/db.service.js')

async function query(filterBy = {}) {
    console.log('4 service');
    console.log('filterBy service', filterBy);
    //    const criteria = _buildCriteria(filterBy)

    if (filterBy !== '{}') {
        filterBy = {
            tokenId: filterBy
        }
    }
    console.log('filterBy service', filterBy);
    try {
        const collection = await dbService.getCollection('nft')
        // console.log('23.criteria', criteria);
        // const nfts = await collection.find({}).toArray()
        const nfts = await collection.find(filterBy).toArray()
        console.log('service nft nfts', nfts);
        return nfts // for mongo data
    } catch (err) {
        // logger.error('cannot find toys', err)
        console.log('cannot find nfts', err);
        throw err
    }
}


// function _buildCriteria(filterBy) {
//     console.log('72.filterBy', filterBy);
//     const criteria = {}

//     // const _id = (filterBy._id) ? filterBy._id : ''
//     // const artistId = (filterBy.artistId) ? filterBy.artistId : ''
//     // const search = {
//     //     $regex: filterBy.search,
//     //     $options: 'i'
//     // }
//     // const category = (filterBy.category) ? filterBy.category : ''
//     // const category =  {$regex: filterBy.category, $options: 'i' }
//     // if (filterBy.artistId || filterBy._id) {
//     //     criteria.$or = [{
//     //             _id: _id
//     //         },
//     //         {
//     //             "artist._id": artistId
//     //         },
//     //     ]
//     // }
//     // if (filterBy.search) {
//     //     criteria.$or = [{
//     //             title: search
//     //         },
//     //         {
//     //             "artist.fullname": search
//     //         },
//     //     ]
//     // }
//         criteria.$or = [{
//             category: category
//         }, ]
//     }
//     console.log('criteriaaaaaa', criteria);
//     return criteria
// }

module.exports = {
    query,
}