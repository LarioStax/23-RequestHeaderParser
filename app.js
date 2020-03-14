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

app.listen(process.env.PORT, function() {
	console.log("App listening on port " + process.env.PORT + "!");
});