var supertest = require('supertest');
var should = require('should');


for (var opts in process.argv) {
  if (process.argv[opts] == 'start_server') {
    require('../bin/index');
    break;
  }
}

var server = supertest.agent('http://localhost:3000/post');

var create_id;

describe('Pages test', function () {

  it('GET /id - get post (404)', function (done) {
    server
      .get('/id')
      .expect('Content-type', /json/)
      .expect(404)
      .end(done);
  });

  it('POST / - create post', function (done) {
    server
      .post('/')
      .send({title: 'test title', text: 'test text'})
      .expect('Content-type', /json/)
      .expect(201)
      .end(function (err, res) {
        res.body.create.should.equal(true);
        should.exist(res.body.id);
        create_id = res.body.id;
        done();
      });
  });

  it('POST / - create post (Bad Request)', function (done) {
    server
      .post('/')
      .send({title: 'test title'})
      .expect('Content-type', /json/)
      .expect(400)
      .end(done);
  });

  it('GET / - list posts', function (done) {
    server
      .get('/')
      .expect('Content-type', /json/)
      .expect(200)
      .end(function (err, res) {
        res.body.posts.length.should.be.above(0);
        done();
      });
  });

  it('GET /id - get create post', function (done) {
    server
      .get('/' + create_id)
      .expect('Content-type', /json/)
      .expect(200)
      .end(function (err, res) {
        should.exist(res.body.post._id);
        should.exist(res.body.post.title);
        should.exist(res.body.post.text);
        should.exist(res.body.post.date);
        done();
      });
  });

  it('PUT /id - update post', function (done) {
    server
      .put('/' + create_id)
      .send({title: 'update title'})
      .expect('Content-type', /json/)
      .expect(200)
      .end(function (err, res) {
        res.body.update.should.equal(true);
        res.body.id.should.equal(create_id);
        done();
      });
  });

  it('GET /id - check changes', function (done) {
    server
      .get('/' + create_id)
      .expect('Content-type', /json/)
      .expect(200)
      .end(function (err, res) {
        res.body.post.title.should.equal('update title');
        res.body.post.text.should.equal('test text');
        done();
      });
  });

  it('DELETE /id - delete post', function (done) {
    server
      .delete('/' + create_id)
      .expect('Content-type', /json/)
      .expect(200)
      .end(function (err, res) {
        res.body.delete.should.equal(true);
        res.body.id.should.equal(create_id);
        done();
      });
  });

  it('GET /id - check delete post', function (done) {
    server
      .get('/' + create_id)
      .expect('Content-type', /json/)
      .expect(404)
      .end(done);
  });
});