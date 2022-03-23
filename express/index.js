const express = require('express')
const app = express()
app.get('/',(req,res)=>{
    res.send('hello world')
})
const server = app.listen(8000,function(){
    const address = server.address()
    const host = address.address
    const port = address.port
    console.log(`访问地址：${host,port}`)
})
