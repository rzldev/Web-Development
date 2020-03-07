const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
  entended: true
}));

app.use(express.static("public"));

const mailchimp = require("request");

const https = require("https");

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res) {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;

  const data = {
    members: [{
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName
      }
    }]
  };

  const jsonData = JSON.stringify(data);
  const url = "https://us19.api.mailchimp.com/3.0/lists/6c3c26d5c8";
  const options = {
    method: "POST",
    auth: "amrizalrf:c0ffc710e8bac17d3c997653492cfb5aa-us19"
  };

  const request = https.request(url, options, function(response) {

    if(response.statusCode === 200) {
      res.sendFile(__dirname + "/success.html");
    } else {
      res.sendFile(__dirname + "/failure.html");
    }

    response.on("data", function(data) {
      console.log(JSON.parse(data));
    });
  });

  request.write(jsonData);
  request.end();
});

app.post("/failure", function(req, res) {
  res.redirect("/");
})

app.listen(process.env.PORT || 3000, function() {
  console.log("Server is running on port 3000");
});

// api
// c0ffc710e8bac17d3c997653492cfb5a-us19
// id
// 6c3c26d5c8
