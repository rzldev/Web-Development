const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
  extended: true
}));

const ejs = require("ejs");
app.set("view engine", "ejs");

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/wikiDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.static("public"));

const articleSchema = new mongoose.Schema({
  title: String,
  content: String
});

const Article = mongoose.model("Article", articleSchema);

app.get("/", function(req, res) {
  res.redirect("/articles");
});

app.route("/articles")
  .get(function(req, res) {
    Article.find(function(err, foundArticles) {
      if (!err) {
        res.send(foundArticles);
      } else {
        res.send(err);
      }
    });
  })
  .post(function(req, res) {
    const articleTitle = req.body.title;
    const articleContent = req.body.content;

    const newArticle = new Article({
      title: articleTitle,
      content: articleContent
    });

    newArticle.save(function(err) {
      if (!err) {
        res.send(newArticle);

      } else {
        res.send(err);

      }
    });
  })
  .delete(function(req, res) {
    Article.deleteMany(function(err) {
      if (!err) {
        res.send("Successfully deleted all articles.")

      } else {
        res.send(err);

      }
    })
  });

app.route("/article/:title")
  .get(function(req, res) {
    const articleTitle = req.params.title;

    Article.findOne({
      title: articleTitle
    }, function(err, foundArticle) {
      if (!err) {
        res.send(foundArticle);
      } else {
        res.send(err);
      }
    });

  })
  .put(function(req, res) {
    const articleTitle = req.params.title;
    const newTitle = req.body.title;
    const newContent = req.body.content

    Article.update({
      title: articleTitle
    }, {
      title: newTitle,
      content: newContent
    }, function(err, respond) {
      if (!err) {
        if (respond) {
          res.send(respond);
        }
      } else {
        res.send(err)
      }
    });

  })
  .patch(function(req, res) {
    const articleTitle = req.params.title;
    const newTitle = req.body.title;
    const newContent = req.body.content

    Article.update({
      title: articleTitle
    }, {
      $set: req.body
    }, function(err) {
      if (!err) {
        res.send("Successfully updated article.")
      } else {
        res.send(err);
      }
    });

  })
  .delete(function(req, res) {
    const articleTitle = req.params.title;

    Article.deleteOne({
      title: articleTitle
    }, function(err) {
      if (!err) {
        res.send("Successfully deleted article.")
      } else {
        res.send(err);
      }
    });
  });

app.listen(3000, function() {
  console.log("Server is running on port 3000..");
})
