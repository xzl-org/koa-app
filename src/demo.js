require('dotenv').config(); // As early as possible in your application, require and configure dotenv.
const port = process.env.PORT || 8000;
const fs = require('fs');
const Koa = require('koa');
const path = require('path');
const app = new Koa();

const main = ctx => {
  ctx.response.type = 'html';
  ctx.response.body = fs.createReadStream(path.join(__dirname, '../public/demo.html'));
};

app.use(main);
app.listen(port, () => {
  console.log('Server is running at http://localhost:' + port)
});
