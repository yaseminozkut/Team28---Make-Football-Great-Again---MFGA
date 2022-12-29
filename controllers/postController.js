const mongoose = require("mongoose");
const Post = mongoose.model("Post");

module.exports = {
  sendPost: async (req, res) => {
    var { name, email, role, content } = req.body;

    var postedBy = {
      email: email,
      name: name,
      role: role
    };

    const post = new Post({
      postedBy,
      content,
    });
    await post
      .save()
      .then((post) => {
        res.json({ message: "Posted successfully" });
        // console.log(post.email);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  getUserPost: async (req, res) => {
    var { email } = req.body;

    await Post.find({ ["postedBy.email"]: email })
      .then((post) => {
        res.json({
          post,
        });
      })
      .catch((e) => {
        res.status(404).json({
          message: "User not found",
        });
      });
  },

  getAllPost: async (req, res) => {
    Post.find()
      .then((post) => res.json(post))
      .catch((err) => res.status(400).json("Error: " + err));
  },

  commentPost: async (req, res) => {},

  like: async (req, res) => {
    var { postId, userEmail } = req.body;
    try {
      await Post.findByIdAndUpdate(postId, {
        $push: {
          likeUser: userEmail,
        },
        $inc: {
          likeCount: 1
        },
      });

      res.json({ message: "Successfully liked" });
    } catch (e) {
      res.status(404).json({ message: e });
    }
  },

  unlike: async (req, res) => {
    var { postId, userEmail } = req.body;

    await Post.findById(postId)
      .then(async (post) => {
        if (post.likeCount > 0) {
          try {
            await Post.findByIdAndUpdate(postId, {
              $pull: {
                likeUser: userEmail,
              },
              $inc: {
                likeCount: - 1,
              },
            });

            res.json({ message: "Successfully Unliked" });
          } catch (e) {
            res.status(404).json({ message: e });
          }
        }else {
          res.json({message: "below 0"})
        }
      })
      .catch((e) => {
        res.json({ message: e });
      });
  },

  filter: async (req, res) => {
    const {likeCount, roleArray} = req.body;

    Post.find({likeCount: {$gte: likeCount} , ["postedBy.role"]: {$in: roleArray}})
    .then(async (posts) => {
      await res.json(posts)
    })
    .catch(e => {
      res.json(e)
    })
  },

  deletePost: async (req, res) => {
    const {postId} = req.body;
    console.log(postId);
    try{
      await Post.findByIdAndDelete(postId)
      res.json({ message: "Post deleted successfully" });
    }
    catch (e){
      res.json(e)
    }
  },
  updatePost: async (req, res) => {
    const {postId, newContent} = req.body;
    console.log(postId);
    try{
      await Post.findByIdAndUpdate(postId, {content: newContent})
      res.json({ message: "Post updated successfully" });
    }
    catch (e){
      res.json(e)
    }
  }
};
