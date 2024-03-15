const Koa = require('koa');
const fs = require("fs");
const app = new Koa();

app.use(async ctx => {
    ctx.set("Content-Type", "text/html");
    ctx.body = fs.readFileSync(__dirname + "/index.html");
});

app.listen(3000);
