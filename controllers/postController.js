const mongoose = require("mongoose");
const Post = mongoose.model("Post");

module.exports = {

  /**
   * @async
   * @method
   * @route POST/api/sendPost
   * @desc Execute the post requets coming from community page and saves the posts into Mongo Database
   * @request {name, email, role, content}
   * @response {JSON} Success message
   * @throws {Error} When the post cannot be saved properly
   */

  sendPost: async (req, res) => {
    //Parsing the request body into variables
    var { name, email, role, content } = req.body;

    var postedBy = {
      email: email,
      name: name,
      role: role
    };

    //Creating Schema based on the postedBy variable and content coming from req.body
    const post = new Post({
      postedBy,
      content,
    });
    //Saving the created schema into DB
    await post
      .save()
      .then((post) => {
        res.json({ message: "Posted successfully" });
        // console.log(post.email);
      })
      .catch((err) => {
        res.json(err);
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

    /**
   * @async 
   * @method 
   * @route POST/api/sendPost
   * @desc Execute the post requets coming from community page and saves the posts into Mongo Database
   * @response All of the post objects comes from the Post Schema of the Database
   * @throws {Error} When the post objects cannot be retrieved
   */
  getAllPost: async (req, res) => {
    //find() method 
    Post.find()
      .then((post) => res.json(post))
      .catch((err) => res.status(400).json("Error: " + err));
  },

  commentPost: async (req, res) => {},




  /**
   * @async
   * @method
   * @route POST/api/like
   * @desc Execute the post requets coming from community page and increase the like count of the
   * object with given id and saves the user into the post database to eliminate the multiple likes
   * done by the users. To make this, findByIdAndUpdate() method of MongoDB is used and default $push
   * and $inc is implemented.
   * @request {postId, userEmail} where postId is the id of the post coming from frontend
   * and the userEmail is retrieved from the localStorage of authenticated user
   * @response {JSON} Success message - indicates the accomplishment of like operation
   * @throws {Error} When the update operation cannot be executed appropriately
   * or the post find cannot be executed appropriately
   */

  like: async (req, res) => {
    //parsing the req body into variables
    var { postId, userEmail } = req.body;
    try {
      //Updating the properties of post by $push and $inc
      //Finds the post and update it

      await Post.findByIdAndUpdate(postId, {
        $push: {
          likeUser: userEmail,
        },
        $inc: {
          likeCount: 1
        },
      });

      //Response
      res.json({ message: "Successfully liked" });
    } catch (e) {
      //Error
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
