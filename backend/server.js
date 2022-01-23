const express = require('express')
const cors = require('cors')
const path = require('path');
const expressSession = require('express-session')
const app = express()
const http = require('http').createServer(app)

const session = expressSession({
    secret: 'secret string',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
})

//Express App Config
app.use(express.json())
app.use(session)


if (process.env.NODE_ENV === 'production') {
    //Route production- public to server
        app.use(express.static('public'))
    } else {
    //Route Development- domain 8080 to server    
        const corsOptions = {
            origin: ['http://127.0.0.1:8080', 'http://localhost:8080', 'http://127.0.0.1:3000', 'http://localhost:3000', 'http://localhost:3030', 'http://localhost:3001'],
            credentials: true
        }
        app.use(cors(corsOptions))
}

//ROUTES
const nftRoutes = require('./api/nft/nft.routes')
app.use('/api/nft', nftRoutes)

//If no routes get the HTML from public
app.get('/**', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

const port = process.env.PORT || 3030;
http.listen(port, () => {
    console.log('Server is running on port: ' + port);
})
console.log(`I am Here! in ${port}`)