const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Bugs = mongoose.model("Bugs");
// const Stat = mongoose.model("Stat")

router.post("/bugReport", (req,res)=>{
    var type = req.body.type;
    var comment = req.body.comment;
    var isDone = false;
    
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    
    const bug = new Bugs({
        type: type,
        comment: comment,
        isDone: isDone,
        Time: today
      })
      bug.save()
      .then(()=>res.json({message:'Bug Report sent!'}))
      .catch(err => res.status(400).json('Error: '+err));

  });

  router.route('/bugs').get((req,res)=>{
    Bugs.find()
   .then(bugs => res.json(bugs))
   .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route("/bugs").delete((req,res)=>{
    var id = req.body.id;
    console.log(req.body.id);
   
    Bugs.findOneAndDelete({_id:id},function(err,user){
      if(err){
        console.log(err)
      }
      else{
        res.send({message: "Bug is deleted"});
        console.log("Deleted Bug: " + user);
      }
    });
  })

  module.exports = router;