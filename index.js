const server = require('./server');
const router = require('./router');
const routerHandler = require('./routerHandler');

server.start(router.router,routerHandler.handle);