const express = require("express");
const app = express();

app.set("view engine", "ejs");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
  extended: true
}));

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/postDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "The title can not be empty!"]
  },
  body: {
    type: String,
    required: [true, "The body can not be empty!"]
  }
});

const Post = mongoose.model("Post", postSchema);

app.use(express.static("public"));

const _ = require("lodash");

const post1 = new Post({
  title: "What is Lorem Ipsum",
  body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
});

const post2 = new Post({
  title: "Where does it come from",
  body: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.\nThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
});

const post3 = new Post({
  title: "Why do we use it",
  body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
})

const contentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "The title can not be empty!"]
  },
  body: {
    type: String,
    required: [true, "The body can not be empty!"]
  }
});

const Content = mongoose.model("Content", contentSchema);

const about = new Content({
  title: "About",
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
});

const contact = new Content({
  title: "Contact",
  body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
});

app.get("/", function(req, res) {
  Post.find(function(err, posts) {
    if (!err) {
      if (posts.length === 0) {
        Post.insertMany([post1, post2, post3], function(err) {
          if (!err) {
            console.log("Default data inserted!");

            res.redirect("/");

          }
        });

      } else {
        res.render("index", {
          listPost: posts
        });

      }
    }
  })
});

app.get("/about", function(req, res) {
  Content.find({title: "About"}, function(err, foundContent) {
    if (!err) {
      if (foundContent.length === 0 || foundContent === null) {
        about.save();

        res.redirect("/about");

      } else {
        res.render("about", {
          about: foundContent
        });

      }
    }
  })
});

app.get("/contact", function(req, res) {
  Content.find({title: "Contact"}, function(err, foundContent) {
    if (!err) {
      if (foundContent.length === 0 || foundContent === null) {
        contact.save();

        res.redirect("/contact");

      } else {
        res.render("contact", {
          contact: foundContent
        });

      }
    }
  })
});

app.get("/compose", function(req, res) {
  res.render("compose");
});

app.post("/compose", function(req, res) {
  const newPostTitle = req.body.postTitle;
  const newPostBody = req.body.postBody;

  const newPost = new Post({
    title: newPostTitle,
    body: newPostBody
  });
  newPost.save();

  res.redirect("/");
});

app.get("/post/:postTitle", function(req, res) {
  const postTitle = req.params.postTitle;

  Post.findOne({title: postTitle}, function(err, foundPost) {
    if (!err) {
      if (foundPost !== null) {
        res.render("post", {
          post: foundPost
        });

      }
    }
  })
});

app.listen(3000, function() {
  console.log("Server is running on port 3000..");
});
