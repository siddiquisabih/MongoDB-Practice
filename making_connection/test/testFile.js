const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/making_connection/test');

mongoose.connection
    .once('open', () => {
        console.log('mongoose is connect sucess')
    })
    .on('error', (error) => {
        console.log('error', error)
    })