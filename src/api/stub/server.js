/**
 *
 * Run the server to use stubs
 */

const connect = require('connect');
const serveStatic = require('serve-static');

const port = 3000;

connect()
  .use(serveStatic(__dirname, {
    setHeaders(res) {
      res.setHeader('Access-Control-Allow-Origin', '*');
    },
  }))
  .listen(port, () => {
    console.log(`Server running on ${port}...`);
  });
