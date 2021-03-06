import "./post.css"
import { MoreVert } from "@material-ui/icons"
import { useEffect, useState } from "react"
import axios from "axios"
import { format } from "timeago.js"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../../../context/AuthContext"


export default function Post({ post }) {
          const [like, setLike] = useState(post.likes.length)
          const [isLike, setIsLike] = useState(false)
          const [user, setUser] = useState({})

          const PF = process.env.REACT_APP_PUBLIC_FOLDER 

          const {user: currentUser } = useContext(AuthContext)

          useEffect(() => {
                    setIsLike(post.likes.includes(currentUser._id))
          }, [currentUser._id, post.likes])

          useEffect(() => {
                    const fetchUser = async () => {
                              const res = await axios.get(`/users?userId=${post.userId}`)
                              setUser(res.data)
                    }

                    fetchUser()
          }, [post.userId])


          const likeHandle = () => {
                    try {
                              axios.put("/posts/"+post._id+"/like", {userId: currentUser._id})
                    } catch (err) {
                              
                    }
                    setLike(isLike ? like - 1 : like + 1)
                    setIsLike(!isLike)
          }


          return (
                    <div className="post">
                              <div className="postWrapper">
                                        <div className="postTop">
                                                  <div className="postTopLeft">

                                                            <Link to={`profile/${user.username}`}>
                                                                      <img 
                                                                                alt="" 
                                                                                className="postProfileImg" 
                                                                                src={
                                                                                          user.profilePicture 
                                                                                                    ? PF + user.profilePicture 
                                                                                                    : PF+"person/noAvatar.png"
                                                                                } 
                                                                      />
                                                            </Link>

                                                            <span className="postUsername">
                                                                      { user.username}
                                                            </span>
                                                            
                                                            <span className="postDate">{format(post.createdAt)}</span>
                                                  </div>

                                                  <div className="postTopRight">
                                                            <MoreVert />
                                                  </div>
                                        </div>

                                        <div className="postCenter">
                                                  <span className="postText">{ post.desc}</span>
                                                  <img src={PF+post.img} alt="" className="postImg" />
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