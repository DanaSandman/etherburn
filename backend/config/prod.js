require('dotenv').config()
const { DB_PASS } = process.env;

module.exports = {
  'dbURL': `mongodb+srv://etherburnadmin:${DB_PASS}@cluster0.b7r16.mongodb.net/myFirstDatabase?retryWrites=true&w=majorityz`
}
 