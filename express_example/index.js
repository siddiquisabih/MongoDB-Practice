const express = require('express')
const app = express()




app.get('/' , (req ,res)=>{
     res.send('get request is working')
})



app.listen(1000 , ()=>{
    console.log('server is running on port 1000')
})