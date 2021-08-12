import "./post.css"
import { MoreVert } from "@material-ui/icons"
import { Users } from "../../../../dummyApi"

export default function Post({ post }) {

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
                                                  <img src={post.photo} alt="" className="postImg" />
                                        </div>

                                        <div className="postBottom">
                                                  <div className="postBottomLeft">
                                                            <img src="/assets/like.png" alt="" className="likeIcon" />
                                                            <img src="/assets/heart.png" alt="" className="likeIcon" />
                                                            <span className="postLikeCounter">32 likes</span>
                                                  </div>

                                                  <div className="postBottomRight">
                                                                      <span className="postCommentText">9 comments</span>
                                                  </div>

                                        </div>
                              </div>
                    </div>
          )
}