// @ts-ignore
// const SerialPort = require('serialport');
const scanner = require('node-wifi-scanner');
const Os = require('os');
const pug = require('pug');
// @ts-ignore
const express = require('express')
const app = express()
// Promise approach
// SerialPort.list().then((ports)=>{
//   ports.forEach((port)=>{
//     console.log(port)
    
//   })
// })
app.use(express.static('frontend'))
const port = 4000
var NetInter =Os.networkInterfaces()
let wifiSCan= ''
 // @ts-ignore
 scanner.scan((err, networks) => {
  if (err) {
    console.error(err);
    return;
   }
   wifiSCan=networks
 });
// @ts-ignore
app.get('/', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(pug.renderFile('frontend/index.html'))
    res.end()
})
// @ts-ignore
app.get('/show',(req,res)=>{
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(NetInter,null,4))
        res.end()
})
// @ts-ignore
app.get('/show/wifi',(req,res)=>{
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(JSON.stringify(wifiSCan,null,4))
  res.end()
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})

