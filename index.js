//const scanner = require('node-wifi-scanner');
const Os = require('os');
const pug = require('pug');
const express = require('express')
const app = express()
app.use(express.static('frontend'))
const port = 4000
var NetInter =Os.networkInterfaces()
app.get('/', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(pug.renderFile('frontend/index.html'))
    res.end()
})
app.get('/show',(req,res)=>{
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(NetInter,null,4))
        res.end()
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})

// scanner.scan((err, networks) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(networks);
// });