// const express = require("express");
// const router = express.Router();
// const mongoose = require("mongoose");
// const Player = mongoose.model("Player");
// const path = require('path');


// router.route('/teams').get((req,res)=>{
//     myteam = "fenerbahce";
//     Player.find()
//    .then(players => res.json(players))
//    .catch(err => res.status(400).json('Error: ' + err));
//  });

//  router.post("/teams", (req,res)=>{
//     var {name,position,birth,team} = req.body;
//     const player = new Player({
//       name,
//       position,
//       birth,
//       team,
  
//     });
//     player.save()
//     .then((player) => {
//       res.json({ message: "Saved successfully"});
//       console.log(player.name);
  
//     })
//     .catch((err) => {
//       console.log(err);
//     });
   
  
  
//   });


// module.exports = router;
