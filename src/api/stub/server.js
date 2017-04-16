/**
 *
 * Run the server to use stubs
 */

const connect = require('connect');
const serveStatic = require('serve-static');
const port = 3000;

connect()
    .use(serveStatic(__dirname, {
        setHeaders: function(res){
            res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
        }
    }))
    .listen(port, function(){
    console.log(`Server running on ${port}...`);
});
