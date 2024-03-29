const MongoClient = require('mongodb').MongoClient;
const dotenv = require("dotenv");

dotenv.config();
let _connection = undefined;
let _db = undefined;

module.exports = {
  dbConnection: async () => {
    if (!_connection) {
      _connection = await MongoClient.connect(process.env.DATA_URL);
      _db = await _connection.db(process.env.DATABASE_NAME);
    }
    console.log("connected")

    return _db;
  },
  closeConnection: () => {
    _connection.close();
  }
};