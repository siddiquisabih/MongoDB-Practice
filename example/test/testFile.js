const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost/example')

mongoose.connection.once('open',()=>{
    console.log('mongoose is connected with mongodb')
})
.on('error' , ()=>{
    console.log(error  , 'error')
})