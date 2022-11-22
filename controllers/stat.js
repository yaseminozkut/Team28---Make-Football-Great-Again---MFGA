const mongoose = require("mongoose");
const Stat = mongoose.model("Stat");

module.exports = {
  stats: async (req, res) => {
    var {
      draw,
      goalagainst,
      goaldistance,
      goalfor,
      lose,
      play,
      point,
      rank,
      team,
      win,
    } = req.body;

    console.log(req.body)

    await Stat.findOne({ team: team })
      .then(async (foundStat) => {
        if (foundStat) {
          console.log(foundStat);
          foundStat.updateOne({
            $set: {
                ...req.body
              },
          }).then(
            () => {
                res.status(200).json({
                    message: "Stat Updated"
                })
            } 
          ).catch(e => {
            res.status(500).json({
                message: e
            })
          })
          //res.status(403).json({ message: "stat already exists" });
        } else {
          const stat = new Stat({
            draw,
            goalagainst,
            goaldistance,
            goalfor,
            lose,
            play,
            point,
            rank,
            team,
            win,
          });

        //   res.send("asdasadasdas")

          await stat
            .save()
            .then((stat) => {
              console.log(stat.team);
              res.status(200).json({
                message: "Team is successfully registered",
                stat: stat
              });
            })
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },

  getStat: (req, res) => {
    Stat.find()
    .then(data => res.json(data))
    .catch(error => res.json(error))
    
  }
};
