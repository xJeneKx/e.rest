const mongo = require('../mongo');
const db = mongo.db;
const Schema = mongo.Schema;

module.exports.posts = db.model('posts', new Schema({
  title: {type: String, required: true},
  text: {type: String, required: true},
  date: {type: Date, default: Date.now()}
}));