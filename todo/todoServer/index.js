const express = require('express')
const Routes = require ('./src/routes/Routes')
const mongoose = require ('mongoose')
const bodyParser = require('body-parser')



mongoose.connect('mongodb://localhost/todoApp')

const app = express();

app.use(bodyParser.json())

Routes(app)

app.use((err , req , res , next)=>{
        
        console.log(err.message)
        
        res.send(err.message)

})





app.listen(1000 , ()=>{
    console.log('server is running on 1000 port')
})


module.exports = app