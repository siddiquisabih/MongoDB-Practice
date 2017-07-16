const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/using_schema')

mongoose.connection.once('open', () => {
    console.log('Mongoose is connected with mongodb')
}).on('error', (error) => {
    console.log('error', error)
})

