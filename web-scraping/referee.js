const axios = require("axios");
const cheerio = require("cheerio");
const mongoose = require("mongoose");
const Referee = mongoose.model("Referee");
//const refereeUrl = "https://www.transfermarkt.com.tr/super-lig/schiedsrichter/wettbewerb/TR1/saison_id/2022"
const referee_data = [];
async function getReferees(url) {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const referee = $("tr");
    referee.each(function () {
      const rname = $(this).find("td .hauptlink a").text();
      const matchCount = $(this).find("td.zentriert.hauptlink a").text();
      const yellowCard = $(this).find("td:nth-child(4)").text();
      const yellowRedCard = $(this).find("td:nth-child(5)").text();
      const redCard = $(this).find("td:nth-child(6)").text();
      const penalty = $(this).find("td:nth-child(7)").text();

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
            const pl = new Player({
              name: rname,
              firstMatch: firstMatch,
              matchCount: matchCount,
              yellowCard: yellowCard,
              yellowRedCard: yellowRedCard,
              redCard: redCard,
              penalty: penalty,
            });
          }
        });
      }
    });
    console.log(referee_data);
  } catch (err) {
    console.log(err);
  }
}

//getReferees(refereeUrl);