const express = require('express');
const serveStatic = require("serve-static")
const path = require('path');
app = express();
app.use("/", serveStatic ( path.join (__dirname, '/dist') ) )
const port = 5000
app.listen(port);
console.log('Server started on port ' + port)
