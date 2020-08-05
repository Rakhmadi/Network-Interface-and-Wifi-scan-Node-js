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
let NetInter =''
let wifiSCan= ''
 // @ts-ignore
// @ts-ignore
let frs=()=>{
  // @ts-ignore
  NetInter=Os.networkInterfaces()
  scanner.scan((err, networks) => {
    if (err) {
      console.error(err);
      return;
     }
     wifiSCan=networks
   });
}
setInterval(() => {
  frs()
}, 1000);
// @ts-ignore
// @ts-ignore
app.get('/', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(pug.renderFile('frontend/index.html'))
    res.end()
})
// @ts-ignore
// @ts-ignore
app.get('/show',(req,res)=>{
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(NetInter,null,4))
        res.end()
})
// @ts-ignore
// @ts-ignore
app.get('/show/wifi',(req,res)=>{
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(JSON.stringify(wifiSCan,null,4))
  res.end()
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})

