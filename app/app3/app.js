const Koa = require('koa');
const fs = require("fs");
const app = new Koa();
const Router = require('@koa/router');
const router = new Router();

router.get('/', async ctx => {
    ctx.set("Content-Type", "text/html");
    ctx.body = fs.readFileSync(__dirname + "/index.html");
});

router.get('/test', async ctx => {
	ctx.body = 'fjsaldjflsadjflsj';
});

app.use(router.routes())

app.listen(3000);
