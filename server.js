const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const cookieParser = require("cookie-parser");

const { MONGOURL } = require("./config/index");
require("dotenv").config();

const PORT = process.env.PORT || 4000;

// require db connection
require("./models/user");
require("./models/player")
require("./models/stat")
require("./models/recentMatch")

//cookie handling
app.use(cookieParser())
// configure body parser for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}));

const routes = require("./routes/user/userRoute");
const statRoute = require('./routes/stat/statRoute')
const recentMatch = require('./routes/recentMatchRoute/recentMatchRoute')
//const teamRoutes = require("./routes/playersRoute");

//Web scrapping
// require("./web/scraping")
require("./web-scraping/teamPlayers")
// require('./web-scraping/newsScraper/scrapeNews')
//require('./web-scraping/newsScraper/scrapeTffNews')

app.use(express.static('client/build'));

// routes
app.use('/recentmatch', recentMatch)
app.use("/stat", statRoute)
app.use( routes);


mongoose.connect(process.env.MONGODB_URI || MONGOURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("connected to mongodb");
});

mongoose.connection.on("error", () => {
  console.log("ERROR !!!");
});

// app.get("/test", (req, res) => {
//   res.send("asdasdasdas")
// })

app.listen(PORT, () => {
  console.log("Server is listening on port " + PORT);
});
