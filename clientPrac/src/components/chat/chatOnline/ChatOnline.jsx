import axios from "axios"
import { useEffect, useState } from "react"
import "./chatOnline.css"

export default function ChatOnline({ onlineUsers, currentId , setCurrentChat }) {
          const [friends, setFriends] = useState([])
          const [onlineFriends, setOnlineFriends] = useState([])
          const PF = process.env.REACT_APP_PUBLIC_FOLDER


          useEffect(() => {
                    const getFriends =  async () => {
                              const res = await axios.get("/users/friends/"+currentId)

                              setFriends(res.data)
                    }

                    getFriends()
          }, [currentId])


          useEffect(() => {
                    let chat = friends.filter((f) => f !== onlineUsers.includes(f._id));

                    setOnlineFriends(chat)
          }, [friends, onlineUsers]);


          const handleClick = async (user) => {
                    try {
                              const res = await axios.get(`/conversations/find/${currentId}/${user._id}`)

                              setCurrentChat(res.data)
                    } catch (err) {
                              
                    }
          }


          return (
                    <div className="chatOnline">
                              {
                                        onlineFriends.map(o => (
                                                  <div className="chatOnlineFriend" onClick={() => {handleClick(o)}}>
                                                            <div className="chatOnlineImgContainer">
                                                                      <img 
                                                                                alt="" className="chatOnlineImg" 
                                                                                src= {
                                                                                                    o?.profilePicture 
                                                                                                    ? PF+o.profilePicture 
                                                                                                    : PF+"person/noAvatar.png"
                                                                                          }
                                                                      />
                                                                      
                                                                      <div className="chatOnlineBadge"> </div>
                                                            </div>
                    
                                                            <span className="chatOnlineName">
                                                                      {o?.username}
                                                            </span>
                                                  </div>
                                        ))
                              }
                    </div>

          )
}
