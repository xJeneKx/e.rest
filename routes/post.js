const Router = require('e.router')();
const _posts = require('../db/posts');


/**
 * @api {get} /post/ List posts
 * @apiName List
 * @apiGroup Posts
 *
 * @apiSampleRequest http://localhost:3000/post/
 *
 * @apiSuccess {Object[]} posts
 * @apiSuccess {String} posts._id  ID post
 * @apiSuccess {String} posts.title  title post
 * @apiSuccess {String} posts.text  text post
 * @apiSuccess {Date} posts.date  date post
 *
 * @apiSuccessExample Success-Response:
 HTTP/1.1 200 OK
 {
    "posts":[
       {
          "_id":"5823739d6602c6128816ff8f",
          "name":"test name",
          "text":"test text",
          "__v":0,
          "date":"2016-11-09T19:04:47.360Z"
       },
       {
          "_id":"582443466372940db07add95",
          "name":"test name",
          "text":"test text",
          "__v":0,
          "date":"2016-11-10T09:49:59.294Z"
       }
    ]
 }
 *
 */

Router.get('/', async ctx => {
  ctx.body = {posts: await _posts.list()};
});


/**
 * @api {get} /post/:id Get post
 * @apiName Get post
 * @apiGroup Posts
 *
 * @apiParam {String} id  ID post
 *
 * @apiSampleRequest http://localhost:3000/post/:id
 *
 * @apiSuccess {Object} posts
 * @apiSuccess {String} posts._id  ID post
 * @apiSuccess {String} posts.title  title post
 * @apiSuccess {String} posts.text  text post
 * @apiSuccess {Date} posts.date  date post
 *
 * @apiSuccessExample Success-Response:
 HTTP/1.1 200 OK
 {
    "post":{
       "_id":"5823739d6602c6128816ff8f",
       "name":"test name",
       "text":"test text",
       "__v":0,
       "date":"2016-11-09T19:04:47.360Z"
    }
 }
 *
 */

Router.get('/:id', async ctx => {
  let post = await _posts.getPost(ctx.params.id);
  if (post) {
    ctx.body = {post: post};
  } else {
    ctx.status = 404;
    ctx.body = {post: null};
  }
});


/**
 * @api {post} /post/ Create post
 * @apiName Create post
 * @apiGroup Posts
 *
 * @apiParam {String} title  Title
 * @apiParam {String} text  Text
 *
 * @apiSampleRequest http://localhost:3000/post/
 *
 * @apiSuccess {bool} create Create status
 * @apiSuccess {String} id  ID post
 *
 * @apiSuccessExample Success-Response:
 HTTP/1.1 200 OK
 {
    "create": true,
    "id": "5823739d6602c6128816ff8f"
 }
 *
 */

Router.post('/', async ctx => {
  let body = ctx.request.body;
  if (!body.title || !body.text) return ctx.status = 400;

  let post = await _posts.createPost(body.title, body.text);
  if (post) {
    ctx.status = 201;
    ctx.body = {create: true, id: post._id};
  } else {
    ctx.body = {create: false};
  }
});


/**
 * @api {put} /post/:id Update post
 * @apiName Update post
 * @apiGroup Posts
 *
 * @apiParam {String} id  ID post
 * @apiParam {String} [title]  Title
 * @apiParam {String} [text]  Text
 *
 * @apiSampleRequest http://localhost:3000/post/:id
 *
 * @apiSuccess {bool} update Update status
 * @apiSuccess {String} id  ID post
 *
 * @apiSuccessExample Success-Response:
 HTTP/1.1 200 OK
 {
    "update": true,
    "id": "5823739d6602c6128816ff8f"
 }
 *
 */

Router.put('/:id', async ctx => {
  let body = ctx.request.body;

  if (!body.title && !body.text) return ctx.status = 400;

  if (await _posts.updatePost(ctx.params.id, body.title, body.text)) {
    ctx.body = {update: true, id: ctx.params.id};
  } else {
    ctx.body = {update: false, id: ctx.params.id};
  }
});


/**
 * @api {delete} /post/:id Delete post
 * @apiName Delete post
 * @apiGroup Posts
 *
 * @apiParam {String} id  ID post
 *
 * @apiSampleRequest http://localhost:3000/post/:id
 *
 * @apiSuccess {bool} delete Delete status
 * @apiSuccess {String} id  ID post
 *
 * @apiSuccessExample Success-Response:
 HTTP/1.1 200 OK
 {
    "delete": true,
    "id": "5823739d6602c6128816ff8f"
 }
 *
 */


Router.delete('/:id', async ctx => {
  if (await _posts.deletePost(ctx.params.id)) {
    ctx.body = {delete: true, id: ctx.params.id};
  } else {
    ctx.body = {delete: false, id: ctx.params.id};
  }
});


module.exports = Router;

