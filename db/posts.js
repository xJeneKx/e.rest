const db = require('./mongo').db;
const Posts = require('./scheme/posts').posts;


module.exports.list = async () => {
  if (db._readyState != 1) throw new Error('db disconnect');
  return Posts.find({}).exec();
};

module.exports.getPost = async (id) => {
  if (db._readyState != 1) throw new Error('db disconnect');
  if (!db.IdValid(id)) return null;

  return Posts.findOne({_id: id}).exec();
};

module.exports.createPost = async (title, text) => {
  if (db._readyState != 1) throw new Error('db disconnect');
  return new Posts({title: title, text: text}).save();
};

module.exports.updatePost = async (id, title, text) => {
  if (db._readyState != 1) throw new Error('db disconnect');
  if (!db.IdValid(id)) return null;

  let post = await Posts.findOne({_id: id}).exec();
  if (post) {
    post.title = title || post.title;
    post.text = text || post.text;
    return post.save();
  } else {
    return null;
  }
};

module.exports.deletePost = async (id) => {
  if (db._readyState != 1) throw new Error('db disconnect');
  if (!db.IdValid(id)) return null;

  let post = await Posts.findOne({_id: id}).exec();
  if (post) {
    return await Posts.remove({_id: id}).exec();
  } else {
    return null;
  }
};