const koa = require('koa');
const app = new koa();
const Router = require('e.router')();
const auth = require('koa-basic-auth');
const bodyParser = require('koa-bodyparser');
const config = require('./config');

//time
app.use(async (ctx, next)=> {
  let start = new Date();
  await next();
  console.log('%s %s %s - %sms', ctx.status, ctx.method, ctx.url, new Date() - start);
});

//errors
app.use(async (ctx, next)=> {
  try {
    await next();
  } catch (err) {
    if (401 == err.status) { // basic-auth
      ctx.status = 401;
      ctx.set('WWW-Authenticate', 'Basic');
      ctx.body = 'No access';
    } else {
      console.log(err);
      ctx.status = 500;
      ctx.body = 'Server error: ' + err.message;
    }
  }
});


app.use(bodyParser());

//static apidoc
Router.get('/docs/*', auth({ // basic-auth
  name: config.docs.name,
  pass: config.docs.pass
}), require('koa-static')(__dirname + '/../public/'));


//routing
Router.add('/post', require('../routes/index'));

app.use(Router.R({cors: {}}));
app.listen(3000);