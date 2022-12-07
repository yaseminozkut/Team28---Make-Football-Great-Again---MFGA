const axios = require("axios");
const express = require("express");
const router = express.Router();
const cheerio = require("cheerio");
const mongoose = require("mongoose");
const Referee = mongoose.model("Referee");
const refereeUrl =
  "https://www.transfermarkt.com.tr/super-lig/schiedsrichter/wettbewerb/TR1/saison_id/2022";
//const referee_data = [];
async function getReferees(url) {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const referee = $("tr");
    referee.each(function () {
      const rname = $(this).find("td .hauptlink a").text();
      //const image = $(this).find("tr:nth-child(1) > td:nth-child(1) > a > img").attr('src');
      const matchCount = $(this).find("td.zentriert.hauptlink a").text();
      const yellowCard = $(this).find("td:nth-child(4)").text();
      const yellowRedCard = $(this).find("td:nth-child(5)").text();
      const redCard = $(this).find("td:nth-child(6)").text();
      const penalty = $(this).find("td:nth-child(7)").text();
      //console.log(image);

      if (rname.length > 1) {
        /*
        referee_data.push({ 
            name: rname,
            matchCount: matchCount,
            yellowCard: yellowCard,
            yellowRedCard: yellowRedCard,
            redCard: redCard,
            penalty: penalty
        });
        */
        Referee.findOne({ name: rname }).then((foundReferee) => {
          if (!foundReferee) {
            const rf = new Referee({
              name: rname,
              matchCount: matchCount,
              yellowCard: yellowCard,
              yellowRedCard: yellowRedCard,
              redCard: redCard,
              penalty: penalty,
              image: ""
            })
            rf.save()
          }
        });
      }
    });
  } catch (err) {
    console.log(err);
  }
}

getReferees(refereeUrl);


// const refereeImgUrl = "https://tr.wikipedia.org/w/index.php?limit=20&offset=20&profile=default&search=s%C3%BCper+lig+hakemler&title=%C3%96zel:Ara&ns0=1";
// //const referee_data = [];
// async function getRefereeImages(url) {
//   try {
//     const response = await axios.get(url);
//     const $ = cheerio.load(response.data);
//     const referee = $("tr");
//     referee.each(function () {
//       var rname = $(this).find("td.searchResultImage-text > div.mw-search-result-heading > a").text();
//       const image = $(this).find("td.searchResultImage-thumbnail > a > img").attr('src');
      
//       rname = rname.replace("ı", "i")
//       rname = rname.replace("ı", "i")
      

//       if (rname.length > 1) {

//          Referee.findOne({ name: rname }).then((foundReferee) => {
//           if(foundReferee){
//             foundReferee.image = image;

//             foundReferee.save()

//           }
          
        
//         });
//       }
//     });
//   } catch (err) {
//     console.log(err);
//   }
// }

// getRefereeImages(refereeImgUrl);

router.route('/referees').get((req,res)=>{
  Referee.find()
 .then(referees => res.json(referees))
 .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/referees/:name').get((req,res)=>{
  Referee.find()
 .then(referees => res.json(referees))
 .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;
