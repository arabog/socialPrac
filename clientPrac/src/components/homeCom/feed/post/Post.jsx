import "./post.css"
import { MoreVert } from "@material-ui/icons"
import { Users } from "../../../../dummyApi"
import { useState } from "react"

export default function Post({ post }) {
          const [like, setLike] = useState(post.like)
          const [isLike, setIsLike] = useState(false)

          const PF = process.env.REACT_APP_PUBLIC_FOLDER 

          const likeHandle = () => {
                    setLike(isLike ? like - 1 : like + 1)
                    setIsLike(!isLike)
          }

          return (
                    <div className="post">
                              <div className="postWrapper">
                                        <div className="postTop">
                                                  <div className="postTopLeft">
                                                            <img 
                                                                      src={Users.filter(user => user.id === post?.userId)[0].profilePic } 
                                                                      alt="" 
                                                                      className="postProfileImg" 
                                                            />

                                                            <span className="postUsername">
                                                                      { 
                                                                                Users.filter(user =>user.id === post?.userId)[0].username
                                                                      }
                                                            </span>
                                                            
                                                            <span className="postDate">{post.date}</span>
                                                  </div>

                                                  <div className="postTopRight">
                                                            <MoreVert />
                                                  </div>
                                        </div>

                                        <div className="postCenter">
                                                  <span className="postText">{ post.desc}</span>
                                                  <img src={PF+post.photo} alt="" className="postImg" />
                                        </div>

                                        <div className="postBottom">
                                                  <div className="postBottomLeft">
                                                            <img 
                                                                      src={`${PF}like.png`}
                                                                      alt="" 
                                                                      className="likeIcon" 
                                                                      onClick={likeHandle}          
                                                            />
                                                            <img 
                                                                      src={`${PF}heart.png`}
                                                                      alt="" 
                                                                      className="likeIcon" 
                                                                      onClick={likeHandle}          
                                                            />
                                                            <span className="postLikeCounter">{like} likes</span>
                                                  </div>

                                                  <div className="postBottomRight">
                                                                      <span className="postCommentText">9 comments</span>
                                                  </div>

                                        </div>
                              </div>
                    </div>
          )
}