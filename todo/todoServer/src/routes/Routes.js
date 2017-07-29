const app = require('../../index')
const Todo = require('../model/todoSchema')




module.exports = (app) => {

    app.get('/api', (req, res, next) => {
        Todo.find({})
            .then(responce => res.send(responce))
            .catch(next)

    })


    app.post('/api/todo', (req, res, next) => {

        const reqbody = req.body
        Todo.create(reqbody)
            .then(responce => res.send(responce))
            .catch(next)

    })

    app.delete('/api/todo/delete/:id', (req, res, next) => {
     
        const reqId = req.params.id;
        Todo.findByIdAndRemove({ _id: reqId })
            .then(todo => res.send(todo))
            .catch(next)
    })



    app.put('/api/todo/edit/:id', (req, res, next) => {
        console.log(req)
        const reqId = req.params.id;
        const updateContent = req.body

        Todo.findByIdAndUpdate({ _id: reqId }, updateContent)
            .then(() => Todo.findById({ _id: reqId }))
            .then(todo => res.send(todo))
            .catch(next)
    })



}