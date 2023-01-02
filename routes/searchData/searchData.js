const axios = require("axios");
const express = require("express");
const router = express.Router();
const cheerio = require("cheerio");
const mongoose = require("mongoose");
const Referee = mongoose.model("Referee");
const Rating = mongoose.model("Rating");
const User = mongoose.model("User");
const SearchData = mongoose.model("SearchData")




router.route('/searchData').get((req,res)=>{
    SearchData.find()
   .then(data => res.json(data))
   .catch(err => res.status(400).json('Error: ' + err));
  });


  router.route('/searchData').post((req,res)=>{
    const name = req.body.name
    // const changed = name.replace(/ /g,"")
    // const forRefereeRoute = "/teams/" + changed
    const myRoute = req.body.route
    const Counter = 0
    SearchData.findOne({ name: name }).then((foundData) => {
        if (!foundData) {
          const data = new SearchData({
            name: name,
            route: myRoute,
            counter: Counter,
          })
          data.save().then(()=>res.json({message:'New Data sent!'}))
          .catch(err => res.status(400).json('Error: '+err));
        }
      });

  })
  router.route('/searchData/count').post((req,res)=>{
    const name = req.body.name
    SearchData.findOne({ name: name }).then((foundData) => {
        if (foundData) {
            foundData.counter +=1;
            foundData.save()
        }
      });

  })
  module.exports = router;