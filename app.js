const express = require("express");
const app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
const cors = require("cors");
app.use(cors({optionSuccessStatus: 200}));

app.use(express.static("public"));

app.get("/", function(req, res) {
	res.sendFile(__dirname + "/views/index.html");
});

app.get("/api/hello", function(req, res) {
	res.json("Hello API!");
});

app.get("/api/whoami", function(req, res) {
  //get user-IP address (from req.headers.x-forwarded-for if it exists, req.connection.remoteAddress if not)
  let userIP = (req.headers["x-forwarded-for"]) ? req.headers["x-forwarded-for"].split(",")[0] : req.connection.remoteAddress;
  //get user-language
  let userLang = req.headers["accept-language"];
  //get user-software
  let userSoftware = req.headers["user-agent"];
  let resObject = {
    "ipaddress": userIP,
    "language": userLang,
    "software": userSoftware    
  }
  res.json(resObject);
});


app.listen(process.env.PORT, function() {
	console.log("App listening on port " + process.env.PORT + "!");
});