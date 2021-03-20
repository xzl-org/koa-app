require('dotenv').config(); // As early as possible in your application, require and configure dotenv.
const fs = require('fs');
const Koa = require('koa');
const path = require('path');
const app = new Koa();

const main = ctx => {
  ctx.response.type = 'html';
  ctx.response.body = fs.createReadStream(path.join(__dirname, '../public/demo.html'));
};

app.use(main);
app.listen(8000, () => {
  console.log('Server is running at PORT ' + process.env.PORT)
});
