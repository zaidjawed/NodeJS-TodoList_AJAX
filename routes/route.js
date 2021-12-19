var express = require("express");
var router =  express.Router();
var db = require("../models");


router.get('/' , function(req,res){
  db.Todo.find()
  .then(function(todos){
    res.json(todos);
  })
  .catch(function(err){
    console.log(err);
  })
});

router.post("/" , function(req,res){
  db.Todo.create(req.body)
  .then(function(newTodo){
    res.status(201).json(newTodo);
  })
  .catch(function(err){
    console.log(err);
  })
});

router.get("/:todoId" , function(req,res){
  db.Todo.findById(req.params.todoId)
  .then(function(todo){
    res.json(todo)
  })
})

router.put("/:todoId" , function(req,res){
  db.Todo.findOneAndUpdate({_id : req.params.todoId} , req.body , {new : true})
  .then(function(todo){
    res.json(todo)
  })
  .catch(function(err){
    console.log(err);
  })
})

router.delete("/:todoId" , function(req,res){
  db.Todo.remove({_id : req.params.todoId})
  .then(function(){
    res.json("Deleted")
  })
  .catch(function(err){
    console.log(err);
  })
})



module.exports = router;
