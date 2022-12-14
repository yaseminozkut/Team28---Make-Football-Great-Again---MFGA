const axios = require("axios");
const express = require("express");
const router = express.Router();
const cheerio = require("cheerio");
const mongoose = require("mongoose");
const NextMatch = mongoose.model("NextMatch");


// const matchUrl =
//   "https://www.tff.org/default.aspx?pageID=198";
// async function getMatches(url) {
//   try {
//     const response = await axios.get(url);
//     const $ = cheerio.load(response.data);
//     const match = $("table tbody tr:nth-child(8) td:nth-child(1) table tbody tr:nth-child(2) td");
//     match.each(function () {
//       const home = $(this).find("td:nth-child(1) a").text();
//       const away = $(this).find("td:nth-child(3) a").text();

//       if (home.length > 1) {
//         NextMatch.findOne({ home: home, away:away }).then((match) => {
//           if (!match) {
//             if(away.length>0){

            
//             const rf = new NextMatch({
//               home: home,
//               away: away,
//               referee: "",
//             })
//             rf.save()
//           }
//         }
//         });
//       }
//     });
//   } catch (err) {
//     console.log(err);
//   }
// }

// getMatches(matchUrl);

router.route('/board/nextMatches').get((req,res)=>{
    NextMatch.find()
   .then(match => res.json(match))
   .catch(err => res.status(400).json('Error: ' + err));
  });

  router.post("/board/nextMatches", (req,res)=>{
    var home = req.body.home;
    var away = req.body.away;
    var referee = req.body.referee;
    NextMatch.findOne({home:home, away:away})
    .then(match =>{
      match.referee = referee;
  
        match.save()
        .then(()=>res.json({message:'Referee has been asigned'}))
        .catch(err => res.status(400).json('Error: '+err));
  
  });
  });

module.exports = router;