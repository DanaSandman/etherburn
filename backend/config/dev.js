require('dotenv').config()
const { DB_PASS } = process.env;
// console.log('DB_PASS dev', DB_PASS);

module.exports = {
  // 'dbURL': 'mongodb://localhost:27017',
  'dbURL': `mongodb+srv://etherburnadmin:${DB_PASS}@cluster0.b7r16.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
}
