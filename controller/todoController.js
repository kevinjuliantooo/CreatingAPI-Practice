const Todos = require('../model/todoModels')

exports.test = function(req, res){
    res.send("Ini udah bener komunikasi antara model controller dan route")
}

exports.create = function (req, res) {
    let todos = new Todos ({
        name: req.body.name,
        done: false
    });
    todos.save(function (err) {
        if(err){
            return next(err)
        }
        res.send("Sucsess Created")
    })
};

exports.todoShow = function (req, res) {
    Todos.find({}, function(err, todos) {
        if(err) return next(err)
        res.send(todos)
    })
}

exports.todoDetails = function(req, res) {
    Todos.findById(req.params.id, function(err, todos) {
        if(err) return next(err)
        res.send(todos)
    })
}

exports.todoUpdate = function(req, res) {
    Todos.findByIdAndUpdate(req.params.id, {$set: req.body}, function(
        err,
        todos
    ){
        if(err) return next(err)
        res.send("Update success")
    })
}

exports.todoDelete = function(req, res){
    Todos.findByIdAndRemove(req.params.id, function(err){
        if(err) return next(err)
        res.send("Delete success")
    })
}
