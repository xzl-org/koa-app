require('dotenv').config(); // As early as possible in your application, require and configure dotenv.
const port = process.env.PORT || 4399;
const fs = require('fs');
const Koa = require('koa');
const path = require('path');
const serve = require('koa-static');
const app = new Koa();

const main = serve(path.join(__dirname, './assets'));

app.use(main);

// app.use((ctx, next) => {
//   return next().then(() => {
//     const { request, response } = ctx;
//     ctx.status = ctx.response;
//     ctx.body = `Try ${request.url}`
//     console.log('then request', request);
//     console.log('###');
//     console.log('then response', response);
//   })
// })

app.listen(port, () => {
  console.log('Server is running at http://localhost:' + port)
});
