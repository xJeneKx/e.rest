const mongoose = require('mongoose');
const db = mongoose.connection;
const config = require('../bin/config');
const dbURI = `mongodb://${config.db.host}:${config.db.port}/${config.db.database}`;

mongoose.Promise = global.Promise;

db.IdValid = function (id) {
  return mongoose.Types.ObjectId.isValid(id);
};

db.on('connecting', function () {
  console.log('connecting to MongoDB...');
});

db.on('error', function (error) {
  console.error('Error in MongoDb connection: ' + error);
  mongoose.disconnect();
});
db.on('connected', function () {
  console.log('MongoDB connected!');
});
db.once('open', function () {
  console.log('MongoDB connection opened!');
});
db.on('reconnected', function () {
  console.log('MongoDB reconnected!');
});
db.on('disconnected', function () {
  console.log('MongoDB disconnected!');
  mongoose.connect(dbURI, {server: {auto_reconnect: true}});
});
mongoose.connect(dbURI, {server: {auto_reconnect: true}});

module.exports.db = db;
module.exports.Schema = mongoose.Schema;