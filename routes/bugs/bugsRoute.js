const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Bugs = mongoose.model("Bugs");
// const Stat = mongoose.model("Stat")

router.post("/bugReport", (req,res)=>{
    var type = req.body.type;
    var comment = req.body.comment;
    var isDone = false;
    const bug = new Bugs({
        type: type,
        comment: comment,
        isDone: isDone
      })
      bug.save()
      .then(()=>res.json({message:'Bug Report sent!'}))
      .catch(err => res.status(400).json('Error: '+err));

  });

  module.exports = router;