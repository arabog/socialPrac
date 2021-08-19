const router = require("express").Router()
const Post = require("../models/Post")


// cr8 post
router.post("/", async (req, res) => {

          const newPost = new Post(req.body)

          try {
                    const savedPost = await newPost.save()

                    res.status(200).json(savedPost)
          } catch (err) {
                    res.status(500).json(err)
          }
})


// update post
router.put("/:id", async (req, res) => {
          
          const post = await Post.findById(req.params.id)
          
          try {

                    if (post.userId === req.body.userId) {
                              await post.updateOne( 
                                        {
                                                  $set: req.body
                                        }
                              )

                              res.status(200).json("The Post Has Been Updated")
                    } else {
                              res.status(403).json("You Can Only Update Your Post")
                    }
          } catch (err) {
                    res.status(500).json(err)
          }
})

// del a post
router.delete("/:id", async (req, res) => {
          
          const post = await Post.findById(req.params.id)
          
          try {

                    if (post.userId === req.body.userId) {
                              await post.deleteOne()

                              res.status(200).json("The Post Has Been Deleted")
                    } else {
                              res.status(403).json("You Can Only Delete Your Post")
                    }
          } catch (err) {
                    res.status(500).json(err)
          }
})


// like a post


// get a post


// get timeline posts


module.exports = router